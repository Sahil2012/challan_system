import React, { useEffect, useState } from "react";
import ChallanTable from "../components/ChallanTable";
import { addDays, startOfMonth } from "date-fns";
import {
  collection,
  getDocs,
  getFirestore,
  onSnapshot,
  orderBy,
  query,
  Timestamp,
  where,
} from "firebase/firestore";
import "../firebaseConfig";
import AnalyticsCard from "../components/AnalyticsCard";
import FilterSection from "../components/FilterSection";
import useDebounce from "../hooks/useDebounce";

export default function Dashboard() {
  const db = getFirestore();
  const [challanSearch, setChallanSearch] = useState("");
  const debounceChallanSearch = useDebounce(challanSearch, 500);

  const [isLoading, setIsLoading] = useState(true);
  const currentDate = new Date();
  const isFirstOfMonth = currentDate.getDate() === 1;
  const localDate = new Date(
    currentDate.getTime() - currentDate.getTimezoneOffset() * 60000
  );

  const [endDate, setEndDate] = useState(localDate);
  const [startDate, setStartDate] = useState(
    addDays(startOfMonth(new Date()), 1)
  );

  const [challanList, setChallanList] = useState([]);
  const [totalChallan, setTotalChallan] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalAmountCollected, setTotalAmountCollected] = useState(0);
  const [successfulPayments, setSuccessfulPayments] = useState(0);
  const [successfulDelivery, setSuccessfulDelivery] = useState(0);

  useEffect(() => {
    let q = null;

    setIsLoading(true);    

    if (challanSearch !== "") {
      q = query(
        collection(db, "challan_table"),
        where("client_name", "==", challanSearch)
      );
    } else {
      q = query(
        collection(db, "challan_table"),
        where("date", ">=", Timestamp.fromDate(addDays(startDate, -1))), // Use Firestore Timestamp
        where("date", "<=", Timestamp.fromDate(addDays(endDate, 1))), // Use Firestore Timestamp
        orderBy("date", "desc")
      );
    }

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const challanData = [];
      let totalAmountLocal = 0;
      let totalAmountCollectedLocal = 0;
      let successfulPaymentLocal = 0;
      let successfulDeliveryLocal = 0;
      snapshot.forEach((doc) => {
        challanData.push({ id: doc.id, ...doc.data() });

        totalAmountLocal += doc.data().total_amount;

        if (doc.data().payment_status == "Done") {
          successfulPaymentLocal++;
          totalAmountCollectedLocal += doc.data().total_amount;
        }

        if (doc.data().delivery_status == "Done") successfulDeliveryLocal++;
      });

      setTotalChallan(challanData.length);
      setTotalAmount(totalAmountLocal);
      setTotalAmountCollected(totalAmountCollectedLocal);
      setSuccessfulDelivery(successfulDeliveryLocal);
      setSuccessfulPayments(successfulPaymentLocal);

      setChallanList(challanData);

      setIsLoading(false);
    });
    return () => unsubscribe();
  }, [startDate, endDate, debounceChallanSearch]);
  return (
    <div>
      <AnalyticsCard
        totalChallan={totalChallan}
        totalAmount={totalAmount}
        totalAmountCollected={totalAmountCollected}
        successfulPayments={successfulPayments}
        successfulDelivery={successfulDelivery}
      />
      <FilterSection
        startDate={startDate}
        endDate={endDate}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        setChallanSearch={setChallanSearch}
      />
      <ChallanTable challanList={challanList} isLoading={isLoading} />
    </div>
  );
}
