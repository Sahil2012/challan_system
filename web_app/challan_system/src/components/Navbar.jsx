import { Tab, Tabs } from "@nextui-org/react";
import React from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import ReceiptIcon from '@mui/icons-material/Receipt';
export default function Navbar() {
  return (
    <div className="w-screen bg-white shadow-md py-4 px-6 sticky top-0 z-50 flex justify-between items-center">
      <div className="text-lg font-extrabold text-custom-blue flex-1 flex justify-start items-center">
        <ReceiptIcon />
        <div className="text-black">
          Challan System
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <Tabs size="sm" variant="underlined" color="primary" aria-label="Tabs variants" placement="top">
          <Tab key="dashboard" title={<div className="text-md font-bold">Dashboard</div>} />
          <Tab key="add_challan" title={<div className="text-md font-bold">Create Challan</div>} />
        </Tabs>
      </div>
      <div className="flex-1 flex justify-end text-danger items-center cursor-pointer">
        <LogoutIcon />
      </div>
    </div>
  );
}
