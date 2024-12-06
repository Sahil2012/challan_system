import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Divider,
  Spacer,
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import { columnsItems } from "../assets/data";

export default function ViewChallanModal({ isOpen, onOpenChange, challan }) {
  return (
    <div>
      <Modal
        backdrop="blur"
        size="3xl"
        isOpen={isOpen}
        radius="lg"
        scrollBehavior="inside"
        onOpenChange={onOpenChange}
        className={{
          base: "border-[#292f46] bg-[#19172c] dark:bg-[#19172c] text-[#a8b0d3]",
          header: "border-b-[1px] border-[#292f46]",
          footer: "border-t-[1px] border-[#292f46]",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <div className="flex justify-between items-center">
                  <div className="text-xl">
                    <p>
                      Challan{" "}
                      <span className="text-primary font-extrabold">
                        #{challan.challan_id}
                      </span>
                    </p>
                  </div>
                  <div>
                    <p className="text-xs capitalize text-default-400">
                      Issued On:
                    </p>
                    <p className="capitalize">
                      {challan.date.toDate().toISOString().split("T")[0]}
                    </p>
                  </div>
                </div>
              </ModalHeader>
              <Divider />
              <ModalBody className="overflow-auto scrollbar-hide">
                <div className="flex justify-between items-center">
                  <div className="flex-1">
                    <p className="text-xs capitalize text-default-400">
                      Bill From:
                    </p>
                    <p className="capitalize">{challan.company_name}</p>
                  </div>
                  <div className="flex-1">
                    <p className="text-xs capitalize text-default-400">
                      Bill To:
                    </p>
                    <p className="capitalize">{challan.client_name}</p>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex-1">
                    <p className="text-xs capitalize text-default-400">
                      Payment Status:
                    </p>
                    <p
                      className={`capitalize ${
                        challan.payment_status == "Done"
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
                      <p className="text-xs capitalize text-default-400">
                        Payment Mode:
                      </p>
                      <p className="capitalize">{challan.payment_mode}</p>
                    </div>
                    <div className="flex-1">
                      <p className="text-xs capitalize text-default-400">
                        Payment Reference:
                      </p>
                      <p className="capitalize">{challan.payment_reference}</p>
                    </div>
                    <div className="flex-1">
                      <p className="text-xs capitalize text-default-400">
                        Payment Date:
                      </p>
                      <p className="capitalize">
                        {
                          challan.payment_date
                            .toDate()
                            .toISOString()
                            .split("T")[0]
                        }
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <Spacer y={2} />
                  <p className="capitalize text-default-400 text-sm font-bold">
                    Challan Details:
                  </p>
                  <Divider />
                  <Table className="mt-2">
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
                          {(columnKey) => (
                            <TableCell>{item[columnKey]}</TableCell>
                          )}
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </div>
                <div>
                  <Divider />
                  <div className="flex justify-between px-6 py-4">
                    <div className="flex-1 capitalize text-default-400 text-sm font-bold">Total:</div>
                    <div className="flex-1 text-center"></div>

                      <div className="flex-1 text-center capitalize text-sm font-bold">₹ {challan.total_mrp}</div>
                      <div className="flex-1 text-end capitalize text-sm font-bold">₹ {challan.total_amount}</div>
                  </div>
                  <Divider />
                </div>
                <div>
                  <div className="flex justify-between px-6 pb-4">
                    <div className="capitalize text-default-400 text-sm font-bold">Discount Percentage:</div>

                      <div className="capitalize text-sm font-bold">{challan.discount_percentage} %</div>
                  </div>
                  <Divider />
                </div>

                <div>
                  <div className="flex justify-between px-6 pb-4">
                    <div className="capitalize text-default-400 text-sm font-bold">Final Amount:</div>

                      <div className="capitalize text-sm font-bold">₹ {challan.discounted_amount}</div>
                  </div>
                  <Divider />
                </div>
              </ModalBody>
              <Divider />
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
