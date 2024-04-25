import React from "react";
import { uid } from "../config/variable";
import Login from "./Login.js";
import Home from "../component/Home.js";

const AuthWrapper = () => {
  return uid === "" ? <Login /> : <Home />;
};

export default AuthWrapper;
