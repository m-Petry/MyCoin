import React from "react";
import { Outlet } from "react-router-dom";
// import Filters from "../components/Filters";
import TableComponent from "../components/TableComponent";

const Crypto = () => {
  return (
    <section className="relative mt-16 mb-24 flex h-full w-[80%] flex-col">
      {/* <Filters /> */}
      <TableComponent />
      <Outlet />
    </section>
  );
};

export default Crypto;
