import {
  DateInput,
  Input,
  Radio,
  RadioGroup,
  Select,
  SelectItem,
  Spacer,
} from "@nextui-org/react";
import React, { useState } from "react";

const payment_options = [
  { key: "online", label: "Online" },
  { key: "cash", label: "Cash" },
  { key: "cheque", label: "Cheque" },
];

export default function PaymentDetailsStep({ register }) {
  const [paymentStatus,setPaymentStatus] = useState('pending');

  return (
    <div>
      <span className="text-default-400 text-sm font-extrabold">
        Delivery Details:
      </span>
      <div>
        <RadioGroup orientation="horizontal" defaultValue={"not_delivered"}>
          <Radio value="delivered">Delivered</Radio>
          <Spacer x={8} />
          <Radio value="not_delivered">Not Delivered</Radio>
        </RadioGroup>
      </div>
      <span className="text-default-400 text-sm font-extrabold">
        Payment Details:
      </span>
      <RadioGroup orientation="horizontal" value={paymentStatus} onChange={(e) => setPaymentStatus(e.target.value)}>
        <Radio value="completed">Completed</Radio>
        <Spacer x={4} />
        <Radio value="pending">Pending</Radio>
      </RadioGroup>
      {paymentStatus == "completed" && <>
        <div className="py-4 flex gap-4">
          <DateInput
            label="Payment Date"
            type="text"
            size="sm"
            className="max-w-xs"
          />
          <Select label="Payment Mode" size="sm" className="max-w-xs">
            {payment_options.map((option) => (
              <SelectItem key={option.key}>{option.label}</SelectItem>
            ))}
          </Select>
        </div>
        <Input
          label="Payment Reference"
          type="text"
          size="sm"
          className="max-w-xs"
        />
      </>}
    </div>
  );
}
