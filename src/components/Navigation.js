import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav
      className="mt-20 flex justify-around rounded-lg border
  border-cyan align-middle md:w-[70%]
  "
    >
      <NavLink
        to="/"
        end
        className={({ isActive }) => {
          return `m-2.5 ml-4 transform rounded-md px-2 py-1 text-white shadow-lg outline-none transition-transform focus:ring-2 focus:ring-gray-200 active:scale-75 md:px-10 lg:px-20
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
          return `m-2.5 transform rounded-md px-2 py-1 text-white shadow-lg outline-none transition-transform focus:ring-1 focus:ring-gray-200 active:scale-75 md:px-10 lg:px-20
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
          return `m-2.5 mr-4 transform rounded-md px-2 py-1 text-white shadow-lg outline-none transition-transform focus:ring-1 focus:ring-gray-200 active:scale-75 md:px-10 lg:px-20
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
