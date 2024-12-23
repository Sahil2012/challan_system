import {
  DateInput,
  Input,
  Radio,
  RadioGroup,
  Select,
  SelectItem,
  Spacer,
} from "@nextui-org/react";
import React from "react";
import { Controller } from "react-hook-form";

const payment_options = [
  { key: "online", label: "Online" },
  { key: "cash", label: "Cash" },
  { key: "cheque", label: "Cheque" },
];

export default function PaymentDetailsStep({ register, control, watch }) {
  const paymentStatus = watch("payment_status");

  return (
    <div>
      <span className="text-default-400 text-sm font-extrabold">
        Delivery Details:
      </span>
      <Controller
        name="delivery_status"
        control={control}
        render={({ field }) => (
          <RadioGroup
            orientation="horizontal"
            value={field.value}
            onChange={(e) => field.onChange(e.target.value)}
          >
            <Radio value="delivered">Delivered</Radio>
            <Spacer x={8} />
            <Radio value="not_delivered">Not Delivered</Radio>
          </RadioGroup>
        )}
      />
      <span className="text-default-400 text-sm font-extrabold">
        Payment Details:
      </span>
      <Controller
        name="payment_status"
        control={control}
        render={({ field }) => (
          <RadioGroup
            orientation="horizontal"
            value={field.value}
            onChange={(e) => {
              field.onChange(e.target.value);
            }}
          >
            <Radio value="completed">Completed</Radio>
            <Spacer x={4} />
            <Radio value="pending">Pending</Radio>
          </RadioGroup>
        )}
      />
      {paymentStatus == "completed" && (
        <>
          <div className="py-4 flex gap-4">
            <Controller
              name="payment_date"
              control={control}
              render={({ field }) => (
                <DateInput
                  label="Payment Date"
                  type="text"
                  size="sm"
                  className="max-w-xs"
                  value={field.value}
                  onChange={(newValue) => {
                    field.onChange(newValue);                    
                  }}
                  onBlur={field.onBlur}
                />
              )}
            />

            <Select
              label="Payment Mode"
              size="sm"
              className="max-w-xs"
              {...register("payment_mode")}
            >
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
            {...register("payment_reference")}
          />
        </>
      )}
    </div>
  );
}
