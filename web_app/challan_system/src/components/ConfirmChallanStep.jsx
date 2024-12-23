import {
  Divider,
  Spacer,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import React from "react";
import { columnsItems } from "../assets/data";

export default function ConfirmChallanStep({ challan }) {
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="flex-1">
          <p className="text-xs capitalize text-default-400">Bill From:</p>
          <p className="capitalize">{challan.company_name}</p>
        </div>
        <div className="flex-1">
          <p className="text-xs capitalize text-default-400">Bill To:</p>
          <p className="capitalize">{challan.client_name}</p>
        </div>
      </div>
      <div className="flex justify-between items-center mt-2">
        <div className="flex-1">
          <p className="text-xs capitalize text-default-400">Payment Status:</p>
          <p
            className={`capitalize ${
              challan.payment_status == "completed"
                ? "text-success"
                : "text-warning"
            }`}
          >
            {challan.payment_status}
          </p>
        </div>
        <div className="flex-1">
          <p className="text-xs capitalize text-default-400">
            Delivery Status:
          </p>
          <p
            className={`capitalize ${
              challan.delivery_status == "Done"
                ? "text-success"
                : "text-warning"
            }`}
          >
            {challan.delivery_status}
          </p>
        </div>
      </div>
      <div>
        <Spacer y={2} />
        <p className="capitalize text-default-400 text-sm font-bold">
          Payment Details:
        </p>
        <Divider />
        <div className="flex justify-between items-center mt-2">
          <div className="flex-1">
            <p className="text-xs capitalize text-default-400">Payment Mode:</p>
            <p className="capitalize">{challan.payment_mode}</p>
          </div>
          <div className="flex-1">
            <p className="text-xs capitalize text-default-400">
              Payment Reference:
            </p>
            <p className="capitalize">{challan.payment_reference}</p>
          </div>
          <div className="flex-1">
            <p className="text-xs capitalize text-default-400">Payment Date:</p>
            <p className="capitalize">{`${challan.payment_date.year}-${challan.payment_date.month}-${challan.payment_date.day}`}</p>
          </div>
        </div>
      </div>
      <div>
        <Spacer y={2} />
        <p className="capitalize text-default-400 text-sm font-bold">
          Challan Details:
        </p>
        <Divider />
        <Table className="my-2 mr-2">
          <TableHeader columns={columnsItems}>
            {(column) => (
              <TableColumn
                key={column.uid}
                align={
                  column.uid === "selling_price"
                    ? "end"
                    : column.uid === "item_name"
                    ? "start"
                    : "center"
                }
              >
                <div className="font-extrabold">{column.name}</div>
              </TableColumn>
            )}
          </TableHeader>
          <TableBody
            emptyContent={"No records to display."}
            items={challan.items}
          >
            {(item) => (
              <TableRow key={item.item_name}>
                {(columnKey) => <TableCell>{item[columnKey]}</TableCell>}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div>
        <Divider />
        <div className="flex justify-between px-6 py-4">
          <div className="flex-1 capitalize text-default-400 text-sm font-bold">
            Total:
          </div>
          <div className="flex-1 text-center"></div>

          <div className="flex-1 text-center capitalize text-sm font-bold">
            ₹ {challan.totalMRP}
          </div>
          <div className="flex-1 text-end capitalize text-sm font-bold">
            ₹ {challan.totalSellingPrice}
          </div>
        </div>
        <Divider />
      </div>
      <div>
        <div className="flex justify-between px-6 pb-4">
          <div className="capitalize text-default-400 text-sm font-bold">
            Discount Percentage:
          </div>

          <div className="capitalize text-sm font-bold">
            {challan.discount_percentage} %
          </div>
        </div>
        <Divider />
      </div>

      <div>
        <div className="flex justify-between px-6 pb-4">
          <div className="capitalize text-default-400 text-sm font-bold">
            Final Amount:
          </div>

          <div className="capitalize text-sm font-bold">
            ₹ {challan.finalAmount}
          </div>
        </div>
        <Divider />
      </div>
    </div>
  );
}
