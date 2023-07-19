"use client";

import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { Slider } from "@mantine/core";

type TTrade = "buy" | "sell";

export const QuickTrade = () => {
  const [trade, setTrade] = useState<TTrade>("buy");

  return (
    <div className="w-full max-h-[508px] rounded-[34px] text-white bg-sidebar">
      <div className="p-5">
        <div className="flex items-center justify-center lg:justify-between">
          <h1 className="hidden lg:block text-[26px]">Quick trade</h1>
          <div className="min-w-[224px] p-2 bg-main-2 flex items-center relative rounded-full min-h-[46px]">
            <div
              className={`w-[50%] font-medium text-center cursor-pointer z-20 ${
                trade === "buy" ? "text-black" : "text-white"
              }`}
              onClick={() => setTrade("buy")}
            >
              Buy
            </div>
            <div
              className={`w-[50%] font-medium text-center cursor-pointer z-20 ${
                trade === "buy" ? "text-white" : "text-black"
              }`}
              onClick={() => setTrade("sell")}
            >
              Sell
            </div>

            <div
              id="pointer"
              className={`min-w-[50%] h-full p-1 absolute top-0 duration-200 rounded-full ${
                trade === "buy" ? "left-0" : "left-28"
              }`}
            >
              <div className="h-full bg-white rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="my-5 flex items-center">
          <button className="bg-white text-black p-2 font-medium text-[14px] rounded-full min-w-[66px] border">
            Limit
          </button>
          <span className="mr-2" />
          <button className="bg-main-1 text-white p-2 font-medium text-[14px] rounded-full min-w-[66px] border px-4 border-white">
            Market
          </button>
          <span className="mr-2" />
          <button className="bg-main-1 text-white p-2 font-medium text-[14px] rounded-full min-w-[66px] border px-4 border-white">
            Stop limit
          </button>
        </div>

        <div className="bg-main-2 mb-2 rounded-full px-4 p-3 flex items-center justify-between text-[16px]">
          <span>Limit price</span>
          <span className="text-sub-2">$23,126.71</span>
        </div>
        <div className="bg-main-2 mb-4 rounded-full px-4 p-3 flex items-center justify-between text-[16px]">
          <span>Amount</span>
          <span className="text-white">234 BTC</span>
        </div>

        <Slider
          color="green"
          thumbChildren={<GiHamburgerMenu />}
          defaultValue={20}
          max={100}
        />
      </div>

      <hr className="border border-[#272B2D]" />

      <div className="p-5">
        <div className="bg-main-2 rounded-full px-4 p-3 flex items-center justify-between text-[16px]">
          <div className="flex items-center">
            <span className="mr-2">Total</span>
            <AiOutlineInfoCircle color="#A1A1A1" />
          </div>
          <span className="text-white">$12,34,245</span>
        </div>

        <div className="w-full flex justify-center items-center mt-6">
          <button className="min-w-[260px] p-2 text-center mx-auto text-black text-[16px bg-green-2 rounded-full">
            Buy now
          </button>
        </div>
      </div>
    </div>
  );
};
