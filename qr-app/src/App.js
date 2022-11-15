import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin from "./components/admin/Admin";
import Students from "./components/admin/Students";
import Attendance from "./components/dashboard/Attendance";
import Record from "./components/dashboard/Record";
import Settings from "./components/dashboard/Settings";
import Student from "./components/dashboard/Student";
import MainDash from "./components/MainDash";
import { GlobalStyle } from "./components/style/Global.styled";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Dash from "./pages/Dash";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import Team from "./pages/Team";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="" element={<MainDash />} />
            <Route path="attendance" element={<Attendance />} />
            <Route path="reports" element={<Record />} />
            <Route path="students" element={<Student />} />
            <Route path="settings" element={<Settings />} />
          </Route>

          <Route path="/" element={<HomePage />}>
            <Route path="team" element={<Team />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="login" element={<Login />} />
            <Route path="" element={<Home />} />
          </Route>
          <Route path="dash" element={<Dash />}>
            <Route path="" element={<Admin />} />
            <Route path="students" element={<Students />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
