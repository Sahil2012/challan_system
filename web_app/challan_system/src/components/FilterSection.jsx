import React from "react";
import { DateRangePicker, Input } from "@nextui-org/react";
import { parseDate } from "@internationalized/date";
import { SearchIcon } from "../assets/SearchIcon";
import { addDays } from "date-fns";

export default function FilterSection({
  startDate,
  endDate,
  setStartDate,
  setEndDate,
  setChallanSearch,
}) {
  return (
    <div className="flex justify-between">
      <Input
        type="text"
        label="Client Name"
        color="primary"
        radius="full"
        size="sm"
        variant="bordered"
        placeholder="Serach by client name"
        startContent={
          <SearchIcon
            className="text-black/50 mb-0.5 text-slate-400 pointer-events-none flex-shrink-0"
          />
        }
        onChange={(e) => setChallanSearch(e.target.value)}
        className="max-w-xs drop-shadow-lg"
      />
      <DateRangePicker
        size="sm"
        variant="bordered"
        radius="full"
        defaultValue={{
          start: parseDate(startDate.toISOString().split("T")[0]),
          end: parseDate(endDate.toISOString().split("T")[0]),
        }}
        label="Select duration"
        color="primary"
        className="max-w-xs drop-shadow-lg"
        onChange={(e) => {
          setEndDate(new Date(e.end.year, e.end.month - 1, e.end.day));
          setStartDate(
            addDays(new Date(e.start.year, e.start.month - 1, e.start.day), 1)
          );
        }}
      />
    </div>
  );
}
