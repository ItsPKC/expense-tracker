import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-container">
      <div>
        <div className="login">
          <div className="login-title">Login</div>
          <input placeholder="Email" />
          <input placeholder="Password" />
          <div className="login-button">Login</div>
          <a href="/login">
            <center>Forget Password</center>
          </a>
        </div>
        <div className="go-to-signup">Didn't have an account? Signup</div>
      </div>
    </div>
  );
};

export default Login;
