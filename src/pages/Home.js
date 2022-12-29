import React from "react";
import { Outlet } from "react-router-dom";
import Logo from "../components/Logo";

const Home = () => {
  return (
    <main className="relative flex flex-col items-center content-center w-full h-full text-white first-letter: font-nunito ">
      <div className="fixed w-screen h-screen bg-gray-300 -z-10" />
      <Logo />
      <Outlet />
    </main>
  );
};

export default Home;
