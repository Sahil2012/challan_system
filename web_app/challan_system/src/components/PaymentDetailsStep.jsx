import { Radio, RadioGroup, Spacer } from "@nextui-org/react";
import React from "react";

export default function PaymentDetailsStep({ register }) {
  return (
    <div>
      <span className="text-default-400 text-sm font-extrabold">
        Delivery Details:
      </span>
      <div>
        <RadioGroup orientation="horizontal" defaultValue={'not_delivered'}>
          <Radio value="delivered">Delivered</Radio>
          <Spacer x={8} />
          <Radio value="not_delivered">Not Delivered</Radio>
        </RadioGroup>
      </div>
      <span className="text-default-400 text-sm font-extrabold">
        Payment Details:
      </span>
      <RadioGroup orientation="horizontal" defaultValue={'pending'}>
        <Radio value="completed">Completed</Radio>
        <Spacer x={4} />
        <Radio value="pending">Pending</Radio>
      </RadioGroup>
    </div>
  );
}
