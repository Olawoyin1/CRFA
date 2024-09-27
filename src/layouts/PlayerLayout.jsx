import React from "react";
import Navbar from "../pages/Navbar";
import { Outlet } from "react-router-dom";
import Players from "../pages/Players";

const PlayerLayout = () => {
  return <div>
    {/* <Players /> */}
    

    <div>
        <Outlet />
    </div>
  </div>;
};

export default PlayerLayout;
