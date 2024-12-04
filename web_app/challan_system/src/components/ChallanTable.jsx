import {
  Chip,
  Pagination,
  Spinner,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tooltip,
  useDisclosure,
  User,
} from "@nextui-org/react";
import React, { useState } from "react";
import { EyeIcon } from "../assets/EyeIcon";
import { EditIcon } from "../assets/EditIcon";
import { DeleteIcon } from "../assets/DeleteIcon";
import { columns } from "../assets/data";
import { format } from "date-fns";
import FilterSection from "./FilterSection";
import ViewChallanModal from "./ViewChallanModal";

const statusColorMap = {
  Done: "success",
  Pending: "warning",
};

export default function ChallanTable({
  challanList,
  isLoading,
  startDate,
  endDate,
  setStartDate,
  setEndDate,
  setChallanSearch,
}) {
  const [page, setPage] = React.useState(1);
  const rowsPerPage = 5;

  const {
    isOpen: isOpen,
    onOpen: onOpen,
    onOpenChange: onOpenChange,
  } = useDisclosure();

  const [currentChallan,setCurrentChallan] = useState(null);

  const renderCell = React.useCallback((challan, columnKey) => {
    const cellValue = challan[columnKey];

    switch (columnKey) {
      case "client_name":
        return (
          <User
            avatarProps={{ radius: "lg" }}
            description={challan.company_name}
            name={cellValue}
          >
            {challan.client_name}
          </User>
        );
      case "date":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">
              {cellValue.toDate().toISOString().split("T")[0]}
            </p>
            <p className="text-bold text-sm capitalize text-default-400">
              {format(cellValue.toDate(), "HH:mm:ss")}
            </p>
          </div>
        );
      case "total_amount":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">₹ {cellValue}</p>
          </div>
        );
      case "payment_status":
        return (
          <Chip
            className="capitalize"
            color={statusColorMap[challan.payment_status]}
            size="sm"
            variant="flat"
          >
            {cellValue}
          </Chip>
        );
      case "delivery_status":
        return (
          <Chip
            className="capitalize"
            color={statusColorMap[challan.delivery_status]}
            size="sm"
            variant="flat"
          >
            {cellValue}
          </Chip>
        );
      case "actions":
        return (
          <div className="relative flex items-center justify-center gap-2">
            <Tooltip content="Details">
              <span
                className="text-lg text-default-400 cursor-pointer active:opacity-50"
                onClick={() => {
                  setCurrentChallan(challan);
                  onOpen();
                }}
              >
                <EyeIcon />
              </span>
            </Tooltip>
            <Tooltip content="Edit challan">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EditIcon />
              </span>
            </Tooltip>
            <Tooltip color="custom-blue" content="Delete challan">
              <span className="text-lg text-custom-blue cursor-pointer active:opacity-50">
                <DeleteIcon />
              </span>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  const pages = Math.ceil(challanList.length / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return challanList.slice(start, end);
  }, [page, challanList]);

  return (
    <>
      <div className="py-8 px-8">
        <Table
          isHeaderSticky
          aria-label="Challan Table"
          topContent={
            <FilterSection
              startDate={startDate}
              endDate={endDate}
              setStartDate={setStartDate}
              setEndDate={setEndDate}
              setChallanSearch={setChallanSearch}
            />
          }
          bottomContent={
            pages > 1 ? (
              <div className="flex w-full justify-center">
                <Pagination
                  isCompact
                  showControls
                  showShadow
                  color="primary"
                  page={page}
                  total={pages}
                  onChange={(page) => setPage(page)}
                />
              </div>
            ) : null
          }
        >
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn
                key={column.uid}
                align={column.uid === "actions" ? "center" : "start"}
              >
                <div className="font-extrabold">{column.name}</div>
              </TableColumn>
            )}
          </TableHeader>
          <TableBody
            emptyContent={"No records to display."}
            items={items}
            loadingContent={<Spinner />}
            loadingState={isLoading ? "loading" : "idle"}
          >
            {(item) => (
              <TableRow key={item.id}>
                {(columnKey) => (
                  <TableCell>{renderCell(item, columnKey)}</TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <ViewChallanModal onOpenChange={onOpenChange} isOpen={isOpen} challan={currentChallan}/>
    </>
  );
}
