import Image from "next/legacy/image";
import React from "react";

export interface IList {
  name: string;
  currency: string;
  rate: string;
  icon: string;
}

export interface IListCard {
  title: string;
  icon: string;
  list: IList[];
  type?: "rate" | "currency";
}

export const ListCard: React.FC<IListCard> = ({
  title,
  icon,
  list,
  type = "rate",
}) => {
  return (
    <div className="p-3 rounded-[34px] bg-sidebar w-full">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center">
          <Image src={icon} width={40} height={40} />
          <h1>{title}</h1>
        </div>
        <button className="text-[14px] text-green-2">See all</button>
      </div>
      {list.map((li, index: number) => (
        <div
          key={index + 1}
          className="bg-main-2 mb-2 rounded-full px-4 p-3 flex items-center justify-between"
        >
          <div className="flex items-center text-[16px]">
            <span className="mr-3">{index + 1} </span>
            <Image src={li.icon} width={20} height={20} />
            <span className="ml-3"> {li.name}</span>
            <span className="ml-1 text-[12px] text-sub-2"> {li.currency}</span>
          </div>
          {type === "rate" ? (
            <div
              className={`${
                li.rate.includes("+") ? "text-green-1" : "text-red-1"
              }`}
            >
              {li.rate}
            </div>
          ) : (
            <div className="text-white">{li.rate}</div>
          )}
        </div>
      ))}
    </div>
  );
};
