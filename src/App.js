import { useReducer, useState, useEffect } from "react";
import "./App.css";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import { AuthContext } from "./config/variable";
import Home from "./component/Home";
import ForgetPassword from "./auth/ForgetPassword";

function App() {
  const [uid, setuid] = useState("");
  const [isLogin, setisLogin] = useState(true);

  const reducer = (state, action) => {
    switch (action) {
      case "login":
        return { component: <Login /> };
      case "signup":
        return { component: <Signup /> };
      case "forget-password":
        return { component: <ForgetPassword /> };
      default:
        return { component: <Home /> };
    }
  };

  const [state, dispatch] = useReducer(reducer, { component: <Login /> });

  const checkForUid = async () => {
    const storeduid = await sessionStorage.getItem("uid");
    alert("UID : " + storeduid);
    if (storeduid != null) {
      setuid(storeduid);
    }
  };

  useEffect(() => {
    checkForUid();
  }, []);

  return (
    <AuthContext.Provider
      value={{ uid, setuid, isLogin, setisLogin, dispatch }}
    >
      {uid === "" ? state.component : <Home />}
    </AuthContext.Provider>
  );
}

export default App;
