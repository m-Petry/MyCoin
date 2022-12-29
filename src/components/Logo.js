import React from "react";
import { Link } from "react-router-dom";
import logoSvg from "../assets/logo.svg";

const Logo = () => {
  return (
    <Link
      to="/"
      className="absolute top-[1.5rem] left-[1.5rem] flex items-center text-lg text-cyan [text-decoration:none]"
    >
      <img src={logoSvg} alt="logo" />
      <span>MyCoin</span>
    </Link>
  );
};

export default Logo;
