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
      className="relative flex items-center mr-12 font-nunito "
      onSubmit={handleSubmit}
    >
      <label
        htmlFor="perpage"
        className="relative flex items-center justify-center mr-2 font-bold "
      >
        per page:{" "}
      </label>
      <input
        type="number"
        name="perpage"
        min={1}
        max={250}
        ref={inputRef}
        placeholder="10"
        className="w-16 pl-2 leading-4 bg-gray-200 border border-transparent rounded required outline-0 placeholder:text-gray-100 focus:border-cyan "
      />
      <button type="submit" className="ml-1 cursor-pointer">
        <img src={submitIcon} alt="submit" className="w-full h-auto" />
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
      <div className="flex items-center">
        <PerPage />
        <ul className="flex items-center justify-end text-sm">
          <li className="flex items-center">
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
                className="flex items-center justify-center w-8 h-8 text-lg rounded-full ouline-0 hover:text-cyan "
              >
                ...
              </button>
            </li>
          ) : null}

          {page - 1 !== 0 ? (
            <li>
              <button
                onClick={prev}
                className="ouline-0 mx-1.5  flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 hover:text-cyan"
              >
                {" "}
                {page - 1}{" "}
              </button>
            </li>
          ) : null}
          <li>
            <button
              disabled
              className="ouline-0  mx-1.5 flex h-8 w-8 items-center justify-center rounded-full bg-cyan text-gray-300"
            >
              {page}
            </button>
          </li>

          {page + 1 !== TotalNumber && page !== TotalNumber ? (
            <li>
              <button
                onClick={next}
                className="ouline-0 mx-1.5  flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 hover:text-cyan"
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
                className="flex items-center justify-center w-8 h-8 text-lg rounded-full ouline-0 hover:text-cyan "
              >
                ...
              </button>
            </li>
          ) : null}

          {page !== TotalNumber ? (
            <li>
              <button
                onClick={() => setPage(TotalNumber)}
                className="ouline-0 mx-1.5  flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 hover:text-cyan"
              >
                {TotalNumber}
              </button>
            </li>
          ) : null}
          <li>
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
