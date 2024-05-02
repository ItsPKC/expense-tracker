import { createContext } from "react";

export const AuthContext = createContext();

export let email = "";
export let emailVerified = false;
export let user = null;
export const setemail = (value) => {
  email = value.email;
  emailVerified = value.emailVerified;
  user = value;
};

export let name = "";
export const setname = (value) => {
  name = value;
};

export let profileUrl = "";
export const setprofileUrl = (value) => {
  profileUrl = value;
};
