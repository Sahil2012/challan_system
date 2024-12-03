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

export default function Dashboard() {
  const db = getFirestore();
  const [challanSearch,setChallanSearch] = useState("");
  const [isLoading,setIsLoading] = useState(true);
  const currentDate = new Date();
  const isFirstOfMonth = currentDate.getDate() === 1;
  const localDate = new Date(
    currentDate.getTime() - currentDate.getTimezoneOffset() * 60000
  );

  const [endDate, setEndDate] = useState(localDate);
  const [startDate, setStartDate] = useState(
    isFirstOfMonth ? localDate : addDays(startOfMonth(localDate), 1)
  );

  const [challanList, setChallanList] = useState([]);

  useEffect(() => {
    let q = null;

    setIsLoading(true);

    if (challanSearch !== "") {
      //   q = query(
      //     collection(db, "order_table"),
      //     where("company_name", "==", orderSearch)
      //   );
    } else {
      q = query(
        collection(db, "challan_table"),
        where("date", ">=", Timestamp.fromDate(addDays(startDate, -1))), // Use Firestore Timestamp
        where("date", "<=", Timestamp.fromDate(endDate)), // Use Firestore Timestamp
        orderBy("date", "desc")
      );
    }

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const challanData = [];

      snapshot.forEach((doc) => {
        challanData.push({ id: doc.id, ...doc.data() });
      });

      
      setChallanList(challanData);
      setIsLoading(false);
    });
    return () => unsubscribe();
  }, [startDate, endDate]);
  return (
    <div>
      <ChallanTable challanList={challanList} isLoading={isLoading} />
    </div>
  );
}
