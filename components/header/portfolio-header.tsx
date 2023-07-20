"use client";

import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible, AiOutlinePlus } from "react-icons/ai";
import { CiEdit } from "react-icons/ci";
import { BiSolidUpArrow, BiSolidDownArrow } from "react-icons/bi";
import Image from "next/legacy/image";
import { Table } from "../table";

export const PortfolioHeader = () => {
  const columns = [
    "assets",
    "price",
    "24H",
    "balance",
    "average buy",
    "profit/loss",
    "actions",
  ];

  const data = [
    {
      icon: "/icons/tether-icon.svg",
      name: "Tether",
      currency: "USDT",
      price: "$1.00",
      "24h": "+0.22%",
      balance: "3,56,000",
      averageBuy: "$0.98",
      profitLoss: "+$234",
    },
    {
      icon: "/icons/bitcoin-icon.svg",
      name: "Bitcoin",
      currency: "USDT",
      price: "$26,735.59",
      "24h": "-5.12%",
      balance: "233",
      averageBuy: "$22,456",
      profitLoss: "-$234.80",
    },
    {
      icon: "/icons/sushiswap-icon.svg",
      name: "SushiSwap",
      currency: "SUSHI",
      price: "$0.8802",
      "24h": "+0.6%",
      balance: "10,45,688",
      averageBuy: "$22.456",
      profitLoss: "-$234.80",
    },
    {
      icon: "/icons/sushiswap-icon.svg",
      name: "SushiSwap",
      currency: "SUSHI",
      price: "$0.8802",
      "24h": "+0.6%",
      balance: "10,45,688",
      averageBuy: "$22.456",
      profitLoss: "-$234.80",
    },
    {
      icon: "/icons/sushiswap-icon.svg",
      name: "SushiSwap",
      currency: "SUSHI",
      price: "$0.8802",
      "24h": "+0.6%",
      balance: "10,45,688",
      averageBuy: "$22.456",
      profitLoss: "-$234.80",
    },
    {
      icon: "/icons/sushiswap-icon.svg",
      name: "SushiSwap",
      currency: "SUSHI",
      price: "$0.8802",
      "24h": "+0.6%",
      balance: "10,45,688",
      averageBuy: "$22.456",
      profitLoss: "-$234.80",
    },
    {
      icon: "/icons/sushiswap-icon.svg",
      name: "SushiSwap",
      currency: "SUSHI",
      price: "$0.8802",
      "24h": "+0.6%",
      balance: "10,45,688",
      averageBuy: "$22.456",
      profitLoss: "-$234.80",
    },
  ];

  const [eye, setEye] = useState(true);

  const toggle = () => setEye((eye) => !eye);

  return (
    <div>
      <label htmlFor="Current Balance" className="sr-only">
        CURRENT BALANCE
      </label>
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
        <div className="flex flex-col">
          <h3 className="text-sub-2 text-[12px] italic flex items-center">
            Current balance{" "}
            <span className="ml-2 cursor-pointer" onClick={toggle}>
              {eye ? <AiFillEye size={20} /> : <AiFillEyeInvisible size={20} />}
            </span>
          </h3>
          <h1 className="text-[28px] text-white">
            {eye ? `$ 2,977,308.00` : `$ *** *** ***`}
          </h1>
          <p className="flex items-center">
            <span className="text-red-1 mr-1">{`-$1200.78 (-1.89%)`}</span>
            <span className="bg-sub-3 rounded-full px-2 text-[12px]">24H</span>
          </p>
        </div>

        <div className="flex mt-5 md:mt-0">
          <button className="flex items-center justify-center bg-sub-3 p-2 rounded-full min-w-[100px]">
            <CiEdit size={20} />
            <span className="ml-1">Edit</span>
          </button>
          <span className="mr-3" />
          <button className="flex items-center justify-center bg-green-2 text-black p-2 rounded-full min-w-[196px]">
            <AiOutlinePlus size={20} />
            <span className="ml-1">Add transaction</span>
          </button>
        </div>
      </div>

      <label htmlFor="All Time Profit" className="sr-only">
        ALL TIME PROFIT
      </label>
      <div className="flex items-center my-6 gap-6 overflow-x-auto">
        <div className="flex flex-col min-w-[150px] md:min-w-0">
          <h4 className="text-sub-2 italic text-[12px]">All time profit</h4>
          <p className="flex items-center">
            <BiSolidUpArrow size={16} className="text-green-1 mr-1" />
            <span className="text-green-1 text-[16px]">{`2.52% (+$324.82)`}</span>
          </p>
        </div>

        <div className="flex items-center min-w-[200px] md:min-w-0">
          <Image
            src="/icons/tether-icon.svg"
            width={24}
            height={24}
            alt="tether-icon"
          />
          <div className="flex flex-col ml-1">
            <h4 className="text-sub-2 italic text-[12px]">Best performer</h4>
            <p className="flex items-center">
              <BiSolidUpArrow size={16} className="text-green-1 mr-1" />
              <span className="text-green-1 text-[16px]">{`10.52% (+$627.82)`}</span>
            </p>
          </div>
        </div>

        <div className="flex items-center min-w-[200px] md:min-w-0">
          <Image
            src="/icons/sushiswap-icon.svg"
            width={24}
            height={24}
            alt="sushiswap-icon"
          />
          <div className="flex flex-col ml-1">
            <h4 className="text-sub-2 italic text-[12px]">Worst performer</h4>
            <p className="flex items-center">
              <BiSolidDownArrow size={16} className="text-red-1 mr-1" />
              <span className="text-red-1 text-[16px]">{`1.23% (-$87.32)`}</span>
            </p>
          </div>
        </div>
      </div>

      <label htmlFor="CHART ALLOCATION STATISTICS" className="sr-only">
        CHART ALLOCATION STATISTICS
      </label>
      <div className="my-5 flex items-center">
        <button className="bg-main-1 text-white p-2 font-medium text-[14px] rounded-full min-w-[66px] border px-4 border-white">
          Chart
        </button>
        <span className="mr-2" />
        <button className="bg-white text-black p-2 font-medium text-[14px] rounded-full min-w-[66px] border px-4">
          Allocation
        </button>
        <span className="mr-2" />
        <button className="bg-main-1 text-white p-2 font-medium text-[14px] rounded-full min-w-[66px] border px-4 border-white">
          Statistics
        </button>
      </div>
      <div className="w-full flex relative overflow-x-auto h-[37px] gap-x-2 overflow-y-hidden">
        <div className="w-[35.02%] h-full bg-[#45E3B8] min-w-[200px] relative">
          <div className="absolute bottom-0 right-0 w-[99.50%] h-[60%] bg-main-1">
            <div className="w-full h-full relative flex items-baseline">
              <span className="rounded-full h-[10px] w-[10px] mx-2 bg-[#45E3B8]" />
              <h2 className="text-[14px] text-white flex items-center leading-loose">
                Tether{" "}
                <span className="text-[12px] text-sub-2 ml-1">{`35.02%`}</span>
              </h2>
            </div>
          </div>
        </div>

        <div className="w-[20%] h-full grid grid-cols-6 gap-x-1 min-w-[150px] relative">
          {[0, 0, 0, 0, 0, 0].map((d, index: number) => (
            <div
              className="bg-[#C277ED] h-full w-full col-span-1"
              key={index}
            ></div>
          ))}
          <div className="absolute bottom-0 left-0 w-[99.50%] h-[60%] bg-main-1">
            <div className="w-full h-full relative flex items-baseline">
              <span className="rounded-full h-[10px] w-[10px] mx-2 bg-[#C277ED]" />
              <h2 className="text-[14px] text-white flex items-center leading-loose">
                Sushi Swap{" "}
                <span className="text-[12px] text-sub-2 ml-1">{`20%`}</span>
              </h2>
            </div>
          </div>
        </div>

        <div className="w-[45.02%] h-full grid grid-cols-4 gap-x-1 min-w-[450px] relative">
          {[0, 0, 0, 0].map((d, index: number) => (
            <div
              className="grid grid-cols-6 h-full w-full gap-x-1 col-span-1"
              key={index}
            >
              {[0, 0, 0, 0, 0, 0].map((d, index: number) => (
                <div
                  className="bg-[#EDD777] h-full w-full col-span-1"
                  key={index}
                ></div>
              ))}
            </div>
          ))}
          <div className="absolute bottom-0 left-0 w-[99.50%] h-[60%] bg-main-1">
            <div className="w-full h-full relative flex items-baseline">
              <span className="rounded-full h-[10px] w-[10px] mx-2 bg-[#EDD777]" />
              <h2 className="text-[14px] text-white flex items-center leading-loose">
                Bitcoin{" "}
                <span className="text-[12px] text-sub-2 ml-1">{`20%`}</span>
              </h2>
            </div>
          </div>
        </div>
      </div>

      <label htmlFor="Your Holdings" className="sr-only">
        YOUR HOLDINGS
      </label>
      <div className="my-10 w-full">
        <h1 className="text-[26px] text-white mb-4">Your holdings</h1>

        <Table columns={columns} data={data} />
      </div>
    </div>
  );
};
