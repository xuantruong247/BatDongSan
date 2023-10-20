import React from "react";
import AdminSidebar from "../../components/AdminSidebar/AdminSidebar";
import { Outlet } from "react-router-dom";

const QuanLyAdmin = () => {
  return (
    <div className="flex">
      <div className="w-[300px] flex-none">
        <AdminSidebar />
      </div>
      <div className="flex-auto min-h-screen bg-green-200">
        <Outlet />
      </div>
    </div>
  );
};

export default QuanLyAdmin;
