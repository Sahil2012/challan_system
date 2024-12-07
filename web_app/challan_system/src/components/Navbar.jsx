import { Tab, Tabs } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import ReceiptIcon from '@mui/icons-material/Receipt';
import { useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedTab, setSelectedTab] = useState("dashboard");

  useEffect(() => {
    if (location.pathname.startsWith("/dashboard")) {
      setSelectedTab("dashboard");
    } else if (location.pathname.startsWith("/create")) {
      setSelectedTab("create");
    }
  }, [location.pathname]);

  const handleTabChange = (key) => {
    setSelectedTab(key);
    if (key === "dashboard") {
      navigate("/dashboard");
    } else if (key === "create") {
      navigate("/create");
    }
  };

  return (
    <div className="w-screen bg-white shadow-md py-4 px-6 sticky top-0 z-50 flex justify-between items-center">
      <div className="text-lg font-extrabold text-custom-blue flex-1 flex justify-start items-center">
        <ReceiptIcon />
        <div className="text-black">Challan System</div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <Tabs
          size="sm"
          variant="underlined"
          color="primary"
          aria-label="Navigation Tabs"
          selectedKey={selectedTab}
          onSelectionChange={handleTabChange}
        >
          <Tab key="dashboard" title="Dashboard" />
          <Tab key="create" title="Create Challan" />
        </Tabs>
      </div>
      <div className="flex-1 flex justify-end text-danger items-center cursor-pointer">
        <LogoutIcon />
      </div>
    </div>
  );
}
