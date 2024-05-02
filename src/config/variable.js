import { createContext } from "react";

export const AuthContext = createContext();

export let name = "";
export const setname = (value) => {
  name = value;
};

export let profileUrl = "";
export const setprofileUrl = (value) => {
  profileUrl = value;
};
