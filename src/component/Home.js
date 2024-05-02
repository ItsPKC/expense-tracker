import React from "react";
import Header from "./Header";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import Profile from "./Profile";
import HomePage from "./HomePage";

const Home = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Home;
