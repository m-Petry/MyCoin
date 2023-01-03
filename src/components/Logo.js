import React from "react";
import { Link } from "react-router-dom";
import logoSvg from "../assets/logo.svg";

const Logo = () => {
  return (
    <Link
      to="/"
      className="absolute top-[1.5rem] left-[1.5rem] flex items-center text-lg text-[#f7931a] [text-decoration:none]"
    >
      <img src={logoSvg} alt="logo" />
      <span className="ml-2">MyCoin</span>
    </Link>
  );
};

export default Logo;
