import React, { useContext, useRef } from "react";
import paginationArrow from "../assets/pagination-arrow.svg";
import { CryptoContext } from "./../context/CryptoContext";
import submitIcon from "../assets/submit-icon.svg";

const PerPage = () => {
  const { setPerPage } = useContext(CryptoContext);
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    let val = inputRef.current.value;
    if (val !== 0) {
      setPerPage(val);
      inputRef.current.value = val;
    }
  };

  return (
    <form
      className="relative flex items-center mr-1 font-nunito md:mr-6 lg:mr-12 "
      onSubmit={handleSubmit}
    >
      <label
        htmlFor="perpage"
        className="relative flex items-center justify-center font-bold "
      >
        per page:{" "}
      </label>
      <input
        type="number"
        name="perpage"
        min={1}
        max={250}
        ref={inputRef}
        placeholder="01-250"
        className="w-20 pl-2 ml-2 bg-gray-200 border border-transparent rounded required outline-0 placeholder:text-gray-100 focus:border-cyan md:ml-2 "
      />
      <button type="submit" className="ml-1 cursor-pointer">
        <img
          src={submitIcon}
          alt="submit"
          className="h-auto min-h-[24px] w-full min-w-[24px]"
        />
      </button>
    </form>
  );
};

const Pagination = () => {
  let { page, setPage, totalPages, perPage, cryptoData } =
    useContext(CryptoContext);

  const TotalNumber = Math.ceil(totalPages / perPage);

  const next = () => {
    if (page === TotalNumber) {
      return null;
    } else {
      setPage(page + 1);
    }
  };

  const prev = () => {
    if (page === 1) {
      return null;
    } else {
      setPage(page - 1);
    }
  };

  const multiStepNext = () => {
    if (page + 3 >= TotalNumber) {
      setPage(TotalNumber - 1);
    } else {
      setPage(page + 3);
    }
  };

  const multiStepPrev = () => {
    if (page - 3 <= 1) {
      setPage(TotalNumber + 1);
    } else {
      setPage(page - 2);
    }
  };

  if (cryptoData && cryptoData.length >= perPage) {
    return (
      <div className="flex flex-col-reverse items-center md:flex-row">
        <div className="pt-2 md:pt-0">
          <PerPage />
        </div>
        <ul className="flex items-center text-sm md:justify-end">
          <li className="flex items-center px-2">
            <button className="w-8 outline-0 hover:text-cyan" onClick={prev}>
              <img
                className="w-full h-auto rotate-180"
                src={paginationArrow}
                alt="left"
              />
            </button>
          </li>

          {page + 1 === TotalNumber || page === TotalNumber ? (
            <li>
              {" "}
              <button
                onClick={multiStepPrev}
                className="flex items-center justify-center w-10 h-10 text-lg rounded-full outline-0 hover:text-cyan "
              >
                ...
              </button>
            </li>
          ) : null}

          {page - 1 !== 0 ? (
            <li>
              <button
                onClick={prev}
                className="mx-1.5 flex  h-10 w-10 items-center justify-center rounded-full bg-gray-200 outline-0 hover:text-cyan"
              >
                {" "}
                {page - 1}{" "}
              </button>
            </li>
          ) : null}
          <li>
            <button
              disabled
              className="mx-1.5  flex h-10 w-10 items-center justify-center rounded-full bg-cyan text-gray-300 outline-0"
            >
              {page}
            </button>
          </li>

          {page + 1 !== TotalNumber && page !== TotalNumber ? (
            <li>
              <button
                onClick={next}
                className="mx-1.5 flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 outline-0 hover:text-cyan"
              >
                {page + 1}
              </button>
            </li>
          ) : null}

          {page + 1 !== TotalNumber && page !== TotalNumber ? (
            <li>
              {" "}
              <button
                onClick={multiStepNext}
                className="flex items-center justify-center w-8 h-8 text-lg rounded-full outline-0 hover:text-cyan "
              >
                ...
              </button>
            </li>
          ) : null}

          {page !== TotalNumber ? (
            <li>
              <button
                onClick={() => setPage(TotalNumber)}
                className="mx-1.5 flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 outline-0 hover:text-cyan"
              >
                {TotalNumber}
              </button>
            </li>
          ) : null}
          <li className="px-2">
            <button className="w-8 outline-0 hover:text-cyan" onClick={next}>
              <img
                className="w-full h-auto"
                src={paginationArrow}
                alt="right"
              />
            </button>
          </li>
        </ul>
      </div>
    );
  } else {
    return null;
  }
};

export default Pagination;
