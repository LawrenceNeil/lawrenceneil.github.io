import React from "react";
import { MainContainer } from "./style/Maindash.styled";
import { BiCalendar } from "react-icons/bi";

const MainDash = () => {
  return (
    <MainContainer>
      <div className="main">
        <div className="header">
          <div className="title">
            <h2>Dashboard</h2>
          </div>
        </div>
        <div className="banner">
          <div className="text">
            <div className="small-text">
              <span>Good Day Admin</span>
            </div>
            <div className="big-text">
              <span>Check your students attendance</span>
            </div>
          </div>
          <div className="image">
            <img src="banner1.svg" alt="banner" />
          </div>
        </div>
        <div className="activities">
          <div className="activity">Activity</div>
        </div>
        <div className="card-title">
          <h2>Recent Attendance</h2>
        </div>
        <div className="cards">
          <div className="card">card 1</div>
        </div>
        <div className="cards">
          <div className="card">card 1</div>
        </div>
        <div className="cards">
          <div className="card">card 1</div>
        </div>
      </div>
      <div className="right">
        <div className="date">
          <BiCalendar />
          <span>November 9,2022</span>
        </div>
        <div className="calendar">{/* add calendar here */}</div>
        <div className="announcements">
          <h2>Announcements</h2>
        </div>
        <div className="announcements">
          <h2>Announcements</h2>
        </div>
        <div className="announcements">
          <h2>Announcements</h2>
        </div>
      </div>
    </MainContainer>
  );
};

export default MainDash;
