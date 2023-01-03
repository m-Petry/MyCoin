import debounce from "lodash.debounce";
import React, { useContext, useState } from "react";
import searchIcon from "../assets/search-icon.svg";
import { CryptoContext } from "./../context/CryptoContext";

const SearchInput = ({ handleSearch }) => {
  const [searchText, setSearchText] = useState("");
  let { searchData, setCoinSearch, setSearchData } = useContext(CryptoContext);

  let handleInput = (e) => {
    e.preventDefault();
    let query = e.target.value;
    setSearchText(query);
    handleSearch(query);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(searchText);
  };

  const selectCoin = (coin) => {
    setCoinSearch(coin);
    setSearchText("");
    setSearchData();
  };

  return (
    <>
      <form
        className="relative flex items-center mx-2 font-nunito md:mr-3"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="search"
          onChange={handleInput}
          value={searchText}
          className="border-transparent required w-28 rounded border bg-gray-200 pl-2 outline-0 placeholder:text-gray-100 focus:border-cyan md:w-full md:min-w-[160px] md:pl-4"
          placeholder="Crypto"
        />
        <button type="submit" className="absolute cursor-pointer right-1">
          <img src={searchIcon} className="w-full h-auto" alt="search" />
        </button>
      </form>
      {searchText.length > 0 ? (
        <ul className="absolute right-0 z-50 py-2 overflow-x-hidden translate-x-48 bg-gray-200 rounded top-11 h-96 w-80 bg-opacity-60 backdrop-blur-md scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-100">
          {searchData ? (
            searchData.map((coin) => {
              return (
                <li
                  className="flex items-center my-2 ml-4 cursor-pointer"
                  key={coin.id}
                  onClick={() => selectCoin(coin.id)}
                >
                  <img
                    className="mx-1.5 h-[1rem] w-[1rem]"
                    src={coin.thumb}
                    alt={coin.name}
                  />

                  <span>{coin.name}</span>
                </li>
              );
            })
          ) : (
            <div className="flex items-center justify-center w-full h-full ">
              <div
                className="w-8 h-8 border-4 rounded-full animate-spin border-cyan border-b-gray-200 "
                role="status"
              />
              <span className="ml-2">Searching...</span>
            </div>
          )}
        </ul>
      ) : null}
    </>
  );
};

const Search = () => {
  let { getSearchResult } = useContext(CryptoContext);

  const debounceFunc = debounce(function (val) {
    getSearchResult(val);
  }, 2000);

  return (
    <div className="relative">
      <SearchInput handleSearch={debounceFunc} />
    </div>
  );
};

export default Search;
