import React from "react";
import { uid } from "../config/variable";
// import Login from "./Login.js";
import Home from "../component/Home.js";
import Signin from "./Signin.js";

const AuthWrapper = () => {
  return uid === "" ? <Signin /> : <Home />;
};

export default AuthWrapper;
