import React from "react";
import "./Signin.css";

const Signin = () => {
  return (
    <div className="signin-container">
      <div>
        <div className="signin">
          <div className="signin-title">signin</div>
          <input placeholder="Email" />
          <input placeholder="Password" />
          <input placeholder="Confirm Password" />
          <div className="signin-button">signin</div>
        </div>
        <div className="go-to-signup">Have an account? Login</div>
      </div>
    </div>
  );
};

export default Signin;
