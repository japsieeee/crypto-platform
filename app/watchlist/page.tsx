"use client";

import { Header } from "@/components/header";
import React from "react";
import { CiEdit } from "react-icons/ci";
import { AiOutlinePlus } from "react-icons/ai";
import { GoChevronDown } from "react-icons/go";
import { Table } from "@/components/table";

const Watchlist = () => {
  const columns = [
    "#",
    "name",
    "price",
    "24H",
    "7D",
    "Market cap",
    "volume",
    "last 7 days",
    "actions",
  ];

  const data = [
    {
      number: 2,
      icon: "/icons/tether-icon.svg",
      name: "Tether",
      currency: "USDT",
      price: "$1.00",
      "24h": "+0.22%",
      "7d": "-3.22%",
      marketCap: "$218,533,780",
      volume: "$5,763,203,118",
      last7Days: "/images/wave3n.png",
    },
    {
      number: 1,
      icon: "/icons/bitcoin-icon.svg",
      name: "Bitcoin",
      currency: "BTC",
      price: "$26,735.59",
      "24h": "-5.12%",
      "7d": "+1.12%",
      marketCap: "$23,621,421,545",
      volume: "$2,487,902,497",
      last7Days: "/images/wave4p.png",
    },
    {
      number: 8,
      icon: "/icons/sushiswap-icon.svg",
      name: "SushiSwap",
      currency: "SUSHI",
      price: "$0.8802",
      "24h": "+0.6%",
      "7d": "+3.60%",
      marketCap: "$8,050,630,845",
      volume: "$236,620,186",
      last7Days: "/images/wave1p.png",
    },
    {
      number: 9,
      icon: "/icons/bitstamp-icon.svg",
      name: "Bitstamp",
      currency: "BIT",
      price: "$0.1802",
      "24h": "+0.8%",
      "7d": "-1.90%",
      marketCap: "$1,050,630,844",
      volume: "$236,620,186",
      last7Days: "/images/wave2n.png",
    },
    {
      number: 11,
      icon: "/icons/gemini-icon.svg",
      name: "Gemini",
      currency: "GUSD",
      price: "$0.909802",
      "24h": "+2.60%",
      "7d": "+3.80%",
      marketCap: "$4,150,560,455",
      volume: "$236,620,186",
      last7Days: "/images/wave3p.png",
    },
    {
      number: 12,
      icon: "/icons/medibloc-icon.svg",
      name: "Medibloc",
      currency: "MED",
      price: "$2.44502",
      "24h": "-0.08%",
      "7d": "+10.40%",
      marketCap: "$8,10,610,480",
      volume: "$236,620,186",
      last7Days: "/images/wave1p.png",
    },
    {
      number: 3,
      icon: "/icons/kucoin-icon.svg",
      name: "Kucoin",
      currency: "KU",
      price: "$0.0090102",
      "24h": "+1.30%",
      "7d": "-6.90%",
      marketCap: "$5,30,845",
      volume: "$60,620,186",
      last7Days: "/images/wave1n.png",
    },
    {
      number: 4,
      icon: "/icons/hexcoin-icon.svg",
      name: "Hexcoin",
      currency: "HEX",
      price: "$0.8802000",
      "24h": "+0.6%",
      "7d": "+3.60%",
      marketCap: "$1,50,630,785",
      volume: "$36,620,345",
      last7Days: "/images/wave2p.png",
    },
    {
      number: 10,
      icon: "/icons/decentraland-icon.svg",
      name: "Decentraland",
      currency: "MANA",
      price: "$2.8802",
      "24h": "+0.2%",
      "7d": "+1.60%",
      marketCap: "$501,630,845",
      volume: "$136,120,186",
      last7Days: "/images/wave1p.png",
    },
    {
      number: 9,
      icon: "/icons/bitstamp-icon.svg",
      name: "Bitstamp",
      currency: "BIT",
      price: "$0.1802",
      "24h": "+0.8%",
      "7d": "-1.90%",
      marketCap: "$1,050,630,844",
      volume: "$236,620,186",
      last7Days: "/images/wave2n.png",
    },
    {
      number: 11,
      icon: "/icons/gemini-icon.svg",
      name: "Gemini",
      currency: "GUSD",
      price: "$0.909802",
      "24h": "+2.60%",
      "7d": "+3.80%",
      marketCap: "$4,150,560,455",
      volume: "$236,620,186",
      last7Days: "/images/wave3p.png",
    },
  ];

  return (
    <div id="watchlist" className="flex flex-col bg-main-1 text-white w-full">
      <Header name="Watchlist" />

      <div className="px-7 mt-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-5">
          <div>
            <span className="text-[12px] bg-green-2 py-1 px-4 text-black rounded-full">
              Primary
            </span>

            <div className="mt-2 flex text-[26px] items-center cursor-pointer">
              <h3 className="mx-2 ">My coins list</h3>
              <GoChevronDown />
            </div>
          </div>
          <div className="flex mb-5 md:mb-0">
            <button className="flex items-center justify-center bg-sub-3 p-2 rounded-full min-w-[100px]">
              <CiEdit size={20} />
              <span className="ml-1">Edit</span>
            </button>
            <span className="mr-3" />
            <button className="flex items-center justify-center bg-green-2 text-black p-2 rounded-full min-w-[196px]">
              <AiOutlinePlus size={20} />
              <span className="ml-1">New watchlist</span>
            </button>
          </div>
        </div>

        <div className="mb-10">
          <Table columns={columns} data={data} type={2} />
        </div>
      </div>
    </div>
  );
};

export default Watchlist;
