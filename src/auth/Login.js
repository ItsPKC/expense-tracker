import React, { useContext, useRef } from "react";
import "./Login.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../config/firebaseConfig";
import {
  AuthContext,
  setname,
  setprofileUrl,
  setemail,
} from "../config/variable";
import { doc, getDoc } from "firebase/firestore";

const Login = () => {
  const email = useRef("");
  const password = useRef("");
  const { setuid, dispatch } = useContext(AuthContext);

  const getData = async (uid) => {
    console.log(uid);
    try {
      await getDoc(doc(db, "users", uid)).then((doc) => {
        console.log(doc.data());
        setname(doc.data().name);
        setprofileUrl(doc.data().profileUrl);
      });
    } catch (e) {
      console.log(e);
      alert("Error in getting data :", e.errorCode);
    }
  };

  const login = async () => {
    const e = email.current.value.toString().trim();
    const p = password.current.value.toString().trim();
    console.log(e + " --- " + p);
    signInWithEmailAndPassword(auth, e, p)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user);
        setuid(user.uid);
        setemail(user);
        getData(user.uid);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        alert(errorCode);
        console.log(errorMessage);
      });
  };

  return (
    <div className="login-container">
      <div>
        <div className="login">
          <div className="login-title">Login</div>
          <input placeholder="Email" ref={email} />
          <input placeholder="Password" ref={password} />
          <div className="login-button" onClick={login}>
            Login
          </div>
          <div
            onClick={() => {
              dispatch("forget-password");
            }}
          >
            <center>Forget Password</center>
          </div>
        </div>
        <div className="go-to-signup" onClick={() => dispatch("signup")}>
          Didn't have an account? Signup
        </div>
      </div>
    </div>
  );
};

export default Login;
