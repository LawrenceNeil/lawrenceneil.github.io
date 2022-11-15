import React from "react";
import {
  FaCog,
  FaRegCalendarCheck,
  FaRegFileAlt,
  FaSignOutAlt,
  FaThLarge,
  FaUserCheck,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="Sidebar">
      <div className="bars">iconbar</div>

      <div className="Logo">
        <h2 className="LogoName">Logo</h2>
      </div>

      <div className="Menu">
        <div className="MenuItem">
          <NavLink to="/dashboard/">
            <div className="icon">
              <FaThLarge />
            </div>
            <h3>Dashboard</h3>
          </NavLink>
        </div>

        <div className="MenuItem">
          <NavLink to="/dashboard/attendance">
            <div className="icon">
              <FaRegCalendarCheck />
            </div>
            <h3>Attendance</h3>
          </NavLink>
        </div>
        <div className="MenuItem">
          <NavLink to="/dashboard/student">
            <div className="icon">
              <FaUserCheck />
            </div>
            <h3>Student</h3>
          </NavLink>
        </div>
        <div className="MenuItem">
          <NavLink to="/dashboard/record">
            <div className="icon">
              <FaRegFileAlt />
            </div>
            <h3>Record</h3>
          </NavLink>
        </div>
        <div className="MenuItem">
          <NavLink to="/dashboard/settings">
            <div className="icon">
              <FaCog />
            </div>
            <h3>Settings</h3>
          </NavLink>
        </div>
        <div className="MenuItem">
          <NavLink to="/">
            <div className="icon">
              <FaSignOutAlt />
            </div>
            <h3>Logout</h3>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
