import React from "react";
import { DateInput, Input, Select, SelectItem } from "@nextui-org/react";
import { parseDate } from "@internationalized/date";
import { Divider } from "@mui/material";

export default function ClientInfoStep({ register }) {

  const challan_categories = [
    { key: "Titan Eye", label: "Titan Eye" },
    { key: "Electrical", label: "Electrical" },
    { key: "Watches", label: "Watches" },
  ];

  return (
    <div className="flex-col gap-12">
      <span className="text-default-400 text-sm font-extrabold">
        Challan Details:
      </span>
      <div className="flex justify-between my-2 flex-wrap gap-4">
        <Input
          {...register("challan_id")}
          type="text"
          label={"Challan No"}
          className="max-w-xs"
          size="sm"
          variant="bordered"
        />

<Select
label="Challan Category"
size="sm"
className="max-w-xs"
{...register("challan_category")}
>
{challan_categories.map((option) => (
  <SelectItem key={option.key}>{option.label}</SelectItem>
))}
</Select>
        

        <DateInput
          label={"Date"}
          className="max-w-xs"
          size="sm"
          defaultValue={parseDate(new Date().toISOString().split("T")[0])}
        />
      </div>
      <span className="text-default-400 text-sm font-extrabold">
        Parties Details:
      </span>
      <div className="flex justify-between mt-2 flex-wrap gap-4">
        <Input
          type="text"
          {...register("company_name")}
          label={"Company Name"}
          className="max-w-xs"
          size="sm"
          variant="bordered"
        />
        <Input
          type="text"
          {...register("client_name")}
          label={"Client Name"}
          className="max-w-xs"
          size="sm"
          variant="bordered"
        />
      </div>
    </div>
  );
}
