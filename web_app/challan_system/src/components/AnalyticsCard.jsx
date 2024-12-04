import { Card, CardBody } from "@nextui-org/react";
import React from "react";

export default function AnalyticsCard({totalChallan,totalAmount,totalAmountCollected,successfulPayments,successfulDelivery}) {
  return (
    <div className="px-8 pt-4">
      <Card>
        <CardBody>
          <div className="flex justify-between items-center px-4 py-4">
            <div>
                <p className="text-xs capitalize text-default-400 font-bold">Total Challan</p>
                <p className="capitalize font-bold text-custom-blue text-2xl">{totalChallan}</p>
            </div>
            <div>
                <p className="text-xs capitalize text-default-400 font-bold">Total Amount</p>
                <p className="capitalize font-bold text-2xl">₹ {totalAmount}</p>
            </div>
            <div className="hidden sm:block">
                <p className="text-xs capitalize text-default-400 font-bold">Total Amount Collected</p>
                <p className="capitalize font-bold text-2xl">₹ {totalAmountCollected}</p>
            </div>
            <div className="hidden md:block">
                <p className="text-xs capitalize text-default-400 font-bold">Successful Payments</p>
                <p className="capitalize font-bold text-2xl">{successfulPayments}</p>
            </div>
            <div className="hidden md:block">
                <p className="text-xs capitalize text-default-400 font-bold">Successful Delivery</p>
                <p className="capitalize font-bold text-2xl">{successfulDelivery}</p>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
