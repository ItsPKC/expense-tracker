import { useState } from "react";
import "./App.css";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import { AuthContext } from "./config/variable";
import Home from "./component/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ForgetPassword from "./auth/ForgetPassword";

function App() {
  const [uid, setuid] = useState("");
  const [isLogin, setisLogin] = useState(true);

  return (
    <AuthContext.Provider value={{ uid, setuid, isLogin, setisLogin }}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              uid === "" ? isLogin === true ? <Login /> : <Signup /> : <Home />
            }
          ></Route>
          <Route path="/forget-password" element={<ForgetPassword />}></Route>
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
