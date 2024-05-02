import { useState } from "react";
import "./App.css";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import { AuthContext } from "./config/variable";
import Home from "./component/Home";

function App() {
  const [uid, setuid] = useState("");
  const [isLogin, setisLogin] = useState(true);

  return (
    <AuthContext.Provider value={{ uid, setuid, isLogin, setisLogin }}>
      {uid === "" ? isLogin === true ? <Login /> : <Signup /> : <Home />}
    </AuthContext.Provider>
  );
}

export default App;
