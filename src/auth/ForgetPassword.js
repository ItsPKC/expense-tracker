import React, { useRef } from "react";
import "./ForgetPassword.css";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../config/firebaseConfig";

const ForgetPassword = () => {
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
      </div>
    </div>
  );
};

export default ForgetPassword;
