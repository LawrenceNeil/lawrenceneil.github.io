import React, { useState } from "react";
import {
  BiCalendarCheck,
  BiCog,
  BiHomeAlt,
  BiLogOut,
  BiMoon,
  BiPieChart,
  BiSearchAlt2,
  BiSun,
  BiUserCircle,
} from "react-icons/bi";
import { Link } from "react-router-dom";
import { NavContainer } from "../style/SideBar.styled";
const SideBar = () => {
  return (
    <>
      <NavContainer>
        <nav className="sidebar">
          <header>
            <div className="image-text">
              <div className="image">
                <img src="avatar.svg" alt="" />
              </div>
              <div className="text logo-text">
                <span className="name">Admin</span>
                <br />
                <span className="profession">App Facilitator</span>
              </div>
            </div>
          </header>
          <div className="menu-bar">
            <div className="menu">
              <li className="search-box">
                <BiSearchAlt2 className="icon" />
                <input type="text" placeholder="Search..." />
              </li>
              <ul className="menu-links">
                <li className="nav-link">
                  <Link to="#">
                    <BiHomeAlt className="icon" />
                    <span className="text nav-text">Dashboard</span>
                  </Link>
                </li>
                <li className="nav-link">
                  <Link to="#">
                    <BiUserCircle className="icon" />
                    <span className="text nav-text">Students</span>
                  </Link>
                </li>
                <li className="nav-link">
                  <Link to="#">
                    <BiCalendarCheck className="icon" />
                    <span className="text nav-text">Attendance</span>
                  </Link>
                </li>
                <li className="nav-link">
                  <Link to="#">
                    <BiPieChart className="icon" />
                    <span className="text nav-text">Analytics</span>
                  </Link>
                </li>
                <li className="nav-link">
                  <Link to="#">
                    <BiCog className="icon" />
                    <span className="text nav-text">Settings</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="bottom-content">
              <li className="logout">
                <Link to="#">
                  <BiLogOut className="icon" />
                  <span className="text nav-text">Logout</span>
                </Link>
              </li>
              <li className="mode">
                <div className="sun-moon">
                  <BiMoon className="icon moon" />
                  <BiSun className="icon sun" />
                </div>
                <span className="mode-text text">Dark Mode</span>
                <div className="toggle-switch">
                  <span className="switch"></span>
                </div>
              </li>
            </div>
          </div>
        </nav>
      </NavContainer>
    </>
  );
};

export default SideBar;
