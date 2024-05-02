/* eslint-disable no-unused-vars */
import React, { useContext, useRef } from "react";
import "./Signup.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../config/firebaseConfig";
import { AuthContext } from "../config/variable";
import { setDoc, doc, addDoc, collection } from "firebase/firestore";

const Signup = () => {
  const email = useRef("");
  const password = useRef("");
  const { uid, setuid, setisLogin } = useContext(AuthContext);

  const createuser = async (currentuid) => {
    try {
      // In case of auto generate id
      // await addDoc(collection, "users")
      await setDoc(doc(db, "users", currentuid), { name: "", profileUrl: "" });
    } catch (e) {
      console.log(e.errorCode);
      alert(e.errorCode);
    }
  };

  const signup = async () => {
    console.log("------------------");
    const e = email.current.value.trim();
    const p = password.current.value.trim();
    console.log(e + "---" + p);
    await createUserWithEmailAndPassword(auth, e, p)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user);
        setuid(user.uid);
        createuser(user.uid);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        alert(errorCode);
        console.log(errorMessage);
        // ..
      });
  };

  return (
    <div className="signup-container">
      <div>
        <div className="signup">
          <div className="signup-title">Signup</div>
          <input placeholder="Email" ref={email} />
          <input placeholder="Password" ref={password} />
          <input placeholder="Confirm Password" />
          <div className="signup-button" onClick={signup}>
            Signup
          </div>
        </div>
        <div
          className="go-to-signup"
          onClick={() => {
            setisLogin(true);
          }}
        >
          Have an account? Login
        </div>
      </div>
    </div>
  );
};

export default Signup;
