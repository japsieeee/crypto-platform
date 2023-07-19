import Image from "next/legacy/image";
import React from "react";

interface IHistoryList {
  name: string;
  details: string;
  rate: string;
  icon: string;
  date: string;
}

const listHistory: IHistoryList[] = [
  {
    name: "SushiSwap",
    details:
      "Bitcoins Evolution™. 234000 Satisfied Customers From 107 Countries.",
    rate: "+$345.90",
    icon: "/icons/sushiswap-icon.svg",
    date: "11 Mar 23",
  },
  {
    name: "Akash",
    details:
      "Akash is a decentralized, blockchain with smart contract functionality",
    rate: "-$29.80",
    icon: "/icons/akash-icon.svg",
    date: "13 Mar 23",
  },
  {
    name: "Quorom",
    details: "Quorum is a peer-to-peer cryptocurrency and open-source software",
    rate: "+$2,567.80",
    icon: "/icons/quorom-icon.svg",
    date: "13 Mar 23",
  },
  {
    name: "Cream",
    details: "Cream Evolution™. 234000 Satisfied Customers From 107 Countries.",
    rate: "+$7.80",
    icon: "/icons/cream-icon.svg",
    date: "15 Mar 23",
  },
  {
    name: "SushiSwap",
    details:
      "Bitcoins Evolution™. 234000 Satisfied Customers From 107 Countries.",
    rate: "+$345.90",
    icon: "/icons/sushiswap-icon.svg",
    date: "11 Mar 23",
  },
  {
    name: "Akash",
    details:
      "Akash is a decentralized, blockchain with smart contract functionality",
    rate: "-$29.80",
    icon: "/icons/akash-icon.svg",
    date: "13 Mar 23",
  },
];

export const History = () => {
  return (
    <div className="w-full max-h-[508px] rounded-[34px] text-white bg-sidebar overflow-y-auto scrollbar-thin">
      <div className="flex items-center justify-center lg:justify-between p-5 sticky top-0 bg-sidebar z-10">
        <h1 className="hidden lg:block text-[26px]">History</h1>
        <button className="text-[14px] text-green-2">See all</button>
      </div>

      <div className="px-5">
        {listHistory.map((li, index) => (
          <HistoryList {...li} key={index} />
        ))}
      </div>
    </div>
  );
};

const HistoryList: React.FC<IHistoryList> = ({
  name,
  details,
  icon,
  date,
  rate,
}) => {
  return (
    <div className="flex items-start my-2">
      <Image src={icon} width={52} height={52} alt="history-icon" />
      <div className="w-full flex items-start justify-between px-2">
        <div className="flex flex-col">
          <h2 className="text-[22px]">
            {name} <span className="text-[12px]">{rate}</span>
          </h2>
          <p className="text-[14px] text-sub-2">{details}</p>
        </div>
        <span className="text-[12px] text-sub-2 min-w-[100px] text-end">
          {date}
        </span>
      </div>
    </div>
  );
};
