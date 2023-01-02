import React from "react";
import { useNavigate } from "react-router-dom";

const TrendingCoin = ({ data }) => {
  let navigate = useNavigate();

  const getCoinDetails = (id) => {
    navigate(`${id}`);
  };

  return (
    <div
      className="flex flex-col p-4 mx-8 mb-12 bg-gray-200 rounded-lg cursor-pointer flex-grow:0 last:mb-0 hover:bg-gray-100 hover:bg-opacity-40"
      onClick={() => getCoinDetails(data.id)}
    >
      {data ? (
        <>
          <h3 className="txt-base my-0.5 flex items-center">
            <span className="text-gray-100 capitalize">name:&nbsp;</span>
            <span className="text-cyan">{data.name}</span>
            <img
              src={data.small}
              alt={data.name}
              className="mx-1.5 h-[1.5rem] w-[1.5rem] rounded-full"
            />
          </h3>

          <h3 className="txt-base my-0.5 flex items-center">
            <span className="text-gray-100 capitalize">
              market cap rank:&nbsp;
            </span>
            <span className="text-cyan">{data.market_cap_rank}</span>
          </h3>
          <h3 className="txt-base my-0.5 flex items-center">
            <span className="text-gray-100 capitalize">
              price (in btc):&nbsp;
            </span>
            <span className="text-cyan">
              {new Intl.NumberFormat("en-IN", {
                style: "currency",
                currency: "btc",
                maximumSignificantDigits: 5
              }).format(data.price_btc)}
            </span>
          </h3>

          <h3 className="txt-base my-0.5 flex items-center">
            <span className="text-gray-100 capitalize">score:&nbsp;</span>
            <span className="text-cyan">{data.score}</span>
          </h3>

          {/* <img
            src={data.large}
            alt={data.name}
            className="absolute top-2/4 -right-12 hidden max-h-[180px] w-[25%] max-w-[180px] -translate-y-2/4 rounded-full lg:block"
          /> */}
        </>
      ) : (
        <div className="flex items-center justify-center w-full h-full ">
          <div
            className="w-8 h-8 border-4 rounded-full animate-spin border-cyan border-b-gray-200 "
            role="status"
          />
          <span className="ml-2">please wait...</span>
        </div>
      )}
    </div>
  );
};

export default TrendingCoin;
