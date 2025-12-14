import React from "react";
import { Outlet } from "react-router-dom";
import NavBer from "../Components/NavBer/NavBer";

const Root = () => {
  return (
    <div>
      <NavBer />
      <Outlet />
    </div>
  );
};

export default Root;
