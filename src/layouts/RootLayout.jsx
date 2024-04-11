import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../pages/Navbar";

const RootLayout = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
