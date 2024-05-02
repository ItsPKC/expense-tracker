import React, { useContext } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebaseConfig";
import { AuthContext } from "../config/variable";
import { setname, setprofileUrl } from "../config/variable";

const Header = () => {
  const { setuid } = useContext(AuthContext);
  const logout = async () => {
    await signOut(auth).then(() => {
      setuid("");
      setname("");
      setprofileUrl("");
    });
  };
  return (
    <div className="header-container">
      <div className="header-welcome">Welcome to Expense Tracker!!!</div>
      <div className="header-profile">
        Your profile is Incomplete.
        <Link to="/profile" className="header-profile-link">
          {" "}
          Complete now
        </Link>
      </div>
      <div className="header-logout-button" onClick={logout}>
        Logout
      </div>
    </div>
  );
};

export default Header;
