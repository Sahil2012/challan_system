import React from "react";
import { DateInput, Input } from "@nextui-org/react";
import { parseDate } from "@internationalized/date";
import { Divider } from "@mui/material";

export default function ClientInfoStep({ register }) {
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
