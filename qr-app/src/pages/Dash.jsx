import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../components/admin/SideBar";
import { Dashboard } from "../components/style/Dash.styled";

const Dash = () => {
  return (
    <Dashboard>
      <div className="container">
        <SideBar />
        <div className="main_content">
          <Outlet />
        </div>
      </div>
    </Dashboard>
  );
};

export default Dash;
