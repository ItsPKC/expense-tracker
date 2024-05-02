import React, { useContext, useRef, useEffect } from "react";
import "./Profile.css";
import github from "../assets/images/github.svg";
import profile from "../assets/images/profile-url.svg";
import {
  AuthContext,
  name,
  setname,
  profileUrl as pUrl,
  setprofileUrl,
} from "../config/variable";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../config/firebaseConfig";

const Profile = () => {
  const fullName = useRef("");
  const profileUrl = useRef("");
  const { uid } = useContext(AuthContext);

  const updateprofile = async () => {
    const fn = fullName.current.value.trim();
    const pu = profileUrl.current.value.trim();
    await setDoc(
      doc(db, "users", uid),
      { name: fn, profileUrl: pu },
      { merge: true }
    ).then(() => {
      setname(fn);
      setprofileUrl(pu);
      alert("Data updated successfully !!!");
    });
  };

  useEffect(() => {
    fullName.current.value = name;
    profileUrl.current.value = pUrl;
  }, []);

  return (
    <div className="profile-container">
      <div className="profile-heading">
        <div>Contact Details</div>
        <div>Cancel</div>
      </div>
      <div className="profile-form">
        <div>
          <img alt="github" src={github} />
          Full Name: <input ref={fullName} />
        </div>
        <div>
          <img alt="profile" src={profile} />
          Profile Photo URL: <input ref={profileUrl} />
        </div>
      </div>
      <div className="profile-update-button" onClick={updateprofile}>
        Update
      </div>
    </div>
  );
};

export default Profile;
