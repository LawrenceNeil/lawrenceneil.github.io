import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { DashboardSection } from "../components/dashboard/Dashboard.styled";
import {
  BiCalendarCheck,
  BiCog,
  BiHomeAlt,
  BiLogOut,
  BiPieChartAlt,
  BiSearchAlt,
  BiUser,
} from "react-icons/bi";
const Dashboard = () => {
  return (
    <DashboardSection>
      <div className="dashboard container">
        <div className="sidebar">
          <div className="head">
            <div className="image">
              <img src="avatar.svg" alt="profile" />
            </div>
            <div className="text">
              <span className="name">Admin</span>
              <span className="profession">Developer</span>
            </div>
          </div>

          <div className="menu">
            <div className="search-bar">
              <BiSearchAlt className="icon" />
              <input type="text" placeholder="Search..." />
            </div>

            <div className="links">
              <div className="link">
                <NavLink
                  end
                  to="/dashboard"
                  className={({ isActive }) =>
                    isActive ? "active" : "inactive"
                  }
                >
                  <BiHomeAlt className="icon" />
                  <span>Dashboard</span>
                </NavLink>
              </div>
              <div className="link">
                <NavLink
                  end
                  to="/dashboard/students"
                  className={({ isActive }) =>
                    isActive ? "active" : "inactive"
                  }
                >
                  <BiUser className="icon" />
                  <span>Students</span>
                </NavLink>
              </div>
              <div className="link">
                <NavLink
                  end
                  to="/dashboard/attendance"
                  className={({ isActive }) =>
                    isActive ? "active" : "inactive"
                  }
                >
                  <BiCalendarCheck className="icon" />
                  <span>Attendance</span>
                </NavLink>
              </div>
              <div className="link">
                <NavLink
                  end
                  to="/dashboard/reports"
                  className={({ isActive }) =>
                    isActive ? "active" : "inactive"
                  }
                >
                  <BiPieChartAlt className="icon" />
                  <span>Reports</span>
                </NavLink>
              </div>
              <div className="link">
                <NavLink
                  end
                  to="/dashboard/settings"
                  className={({ isActive }) =>
                    isActive ? "active" : "inactive"
                  }
                >
                  <BiCog className="icon" />
                  <span>Settings</span>
                </NavLink>
              </div>
            </div>
          </div>

          <div className="bottom-content">
            <div className="link">
              <NavLink
                end
                to="/"
                className={({ isActive }) => (isActive ? "active" : "inactive")}
              >
                <BiLogOut className="icon" />
                <span>Logout</span>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="main_content">
          <Outlet />
        </div>
      </div>
    </DashboardSection>
  );
};

export default Dashboard;
