import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav
      className="mt-16 flex w-[40%] justify-around rounded-lg
  border border-cyan align-middle
  "
    >
      <NavLink
        to="/"
        end
        className={({ isActive }) => {
          return `m-2.5 w-full text-center font-nunito text-base
${
  isActive
    ? "bg-cyan text-gray-300"
    : "text-gray-100hover:text-cyan bg-gray-200 active:bg-cyan active:text-gray-300"
}
  cursor-pointer rounded border-0 font-semibold capitalize`;
        }}
      >
        Crypto
      </NavLink>

      <NavLink
        to="/trending"
        className={({ isActive }) => {
          return `m-2.5 w-full text-center font-nunito text-base
${
  isActive
    ? "bg-cyan text-gray-300"
    : "text-gray-100hover:text-cyan bg-gray-200 active:bg-cyan active:text-gray-300"
}
  cursor-pointer rounded border-0 font-semibold capitalize`;
        }}
      >
        trending
      </NavLink>

      <NavLink
        to="/saved"
        className={({ isActive }) => {
          return `m-2.5 w-full text-center font-nunito text-base
${
  isActive
    ? "bg-cyan text-gray-300"
    : "text-gray-100hover:text-cyan bg-gray-200 active:bg-cyan active:text-gray-300"
}
  cursor-pointer rounded border-0 font-semibold capitalize`;
        }}
      >
        saved
      </NavLink>
    </nav>
  );
};

export default Navigation;
