import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login">
        <div className="login-title">Login</div>
        <input placeholder="Email" />
        <input placeholder="Password" />
        <div className="login-button">Login</div>
      </div>
    </div>
  );
};

export default Login;
