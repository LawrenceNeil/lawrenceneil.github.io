import React from "react";
import { NavLink, Link, Outlet } from "react-router-dom";
import { BiHomeHeart } from "react-icons/bi";
import {
  ContentArea,
  HomeHeader,
} from "../components/homepage/HomePage.styled";

const HomePage = () => {
  return (
    <>
      <HomeHeader>
        <div className="logo">
          <BiHomeHeart />
          <Link to="/">
            <span className="logoname">Logo</span>
          </Link>
        </div>
        <ul className="navbar">
          <li>
            <NavLink
              end
              to="/"
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              end
              to="/about"
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              end
              to="/contact"
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              end
              to="/team"
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              Our Team
            </NavLink>
          </li>
        </ul>
        <div className="loginbtn">
          <NavLink
            end
            to="/login"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            Login
          </NavLink>
        </div>
      </HomeHeader>
      <ContentArea>
        <Outlet />
      </ContentArea>
    </>
  );
};

export default HomePage;
