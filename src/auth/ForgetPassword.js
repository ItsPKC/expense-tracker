import React, { useContext, useRef } from "react";
import "./ForgetPassword.css";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../config/firebaseConfig";
import { AuthContext } from "../config/variable";

const ForgetPassword = () => {
  const { dispatch } = useContext(AuthContext);
  const email = useRef("");
  const reset = () => {
    try {
      sendPasswordResetEmail(auth, email.current.value.trim()).then(() => {
        alert("Send successfully !!");
      });
    } catch (e) {
      console.log(e.errorCode);
    }
  };
  return (
    <div className="fp-container">
      <div>
        <h3>Forget Password</h3>
        Email : <input placeholder="Enter email" ref={email} />
        <button onClick={reset}>Send Reset Link</button>
        <br></br>
        <br></br>
        <button onClick={() => dispatch("login")}> Go back</button>
      </div>
    </div>
  );
};

export default ForgetPassword;
