import React from "react";
import { Navigation } from "../../components";
import { Outlet } from "react-router-dom";

const Publics = () => {
  return (
    <div>
      <div
        style={{
          height: "60px",
          position: "sticky",
          top: 0,
          zIndex: 30,
          backgroundColor: "white",
        }}
      >
        <Navigation />
      </div>
      <div className="flex flex-col items-center">
        <Outlet />
      </div>
    </div>
  );
};

export default Publics;
