import React from "react";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <main className="first-letter: relative flex h-full w-full flex-col content-center items-center bg-red font-nunito text-white ">
      Home
      <div className="h-screen w-screen bg-gray-100" />
      <Outlet />
    </main>
  );
};

export default Home;
