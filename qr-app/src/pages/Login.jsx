import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import {
  BoxSection,
  IndexContainer,
  LoginSection,
} from "../components/login/Login.styled";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  Axios.get("http://localhost:3001/api/get").then((response) => {
    if (response.data.message) {
      alert(response.data.message);
    }
    setUsers(response.data);
  });

  const submitBtn = async () => {
    const user = await users.find(
      (user) => user.username === username && user.password === password
    );
    if (user) {
      navigate("/dashboard");
    } else {
      alert("Wrong username or password");
    }
  };
  return (
    <IndexContainer>
      <LoginSection>
        <div className="login-avatar">
          <img src="leftphone.svg" alt="avatar" />
        </div>
        <div className="container">
          <h2>Welcome</h2>
          <form>
            <div className="username">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="password">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" onClick={submitBtn} className="submit">
              Submit
            </button>
          </form>
        </div>
      </LoginSection>
      <BoxSection>
        <div className="box1"></div>
        <div className="box2"></div>
        <div className="box3"></div>
      </BoxSection>
    </IndexContainer>
  );
};

export default Login;
