"use client";

import Image from "next/legacy/image";
import React from "react";

import { BiSolidUpArrow, BiSolidDownArrow } from "react-icons/bi";
import { PiDotsThreeOutlineVerticalLight } from "react-icons/pi";
import { AiOutlinePlus } from "react-icons/ai";

interface ITable {
  columns: string[];
  data: any[];
  type?: 1 | 2;
}

export const Table: React.FC<ITable> = ({ columns, data, type = 1 }) => {
  return type === 1 ? (
    <div className="overflow-x-auto w-full">
      <table className="text-right table-auto w-full">
        <thead className="bg-[#1A1D1E] border-t-2 border-b-2 border-b-[#212325] border-t-[#212325]">
          <tr>
            {columns.map((column, index: number) => (
              <th
                key={index}
                className={`capitalize text-[12px] min-w-[100px] text-white font-medium p-2 ${
                  index === 0 ? "text-left" : "text-right"
                }`}
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((d, index: number) => (
            <tr key={index} className="text-[16px]">
              <td className="p-2 text-left flex items-center">
                <Image
                  src={d["icon"]}
                  width={20}
                  height={20}
                  alt="product-icon"
                />
                <span className="ml-2 mr-1">{d["name"]}</span>
                <span className="text-[12px] text-sub-2">{d["currency"]}</span>
              </td>
              <td className="p-2">{d["price"]}</td>
              <td className="p-2">
                {d["24h"].includes("+") ? (
                  <span className="text-green-1 flex items-center justify-end">
                    <BiSolidUpArrow size={16} />
                    <span className="ml-1">{d["24h"].slice(1)}</span>
                  </span>
                ) : (
                  <span className="text-red-1 flex items-center justify-end">
                    <BiSolidDownArrow size={16} />
                    <span className="ml-1">{d["24h"].slice(1)}</span>
                  </span>
                )}
              </td>
              <td className="p-2">{d["balance"]}</td>
              <td className="p-2">{d["averageBuy"]}</td>
              <td className="p-2">{d["profitLoss"]}</td>
              <td className="p-2 flex items-center justify-end">
                <span className="rounded-full border border-[#212325] p-1 cursor-pointer">
                  <PiDotsThreeOutlineVerticalLight size={22} />
                </span>
                <span className="mr-2" />
                <span className="rounded-full border border-[#212325] p-1 cursor-pointer">
                  <AiOutlinePlus size={22} />
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ) : (
    <div className="overflow-x-auto w-full">
      <table className="text-right table-auto w-full">
        <thead className="bg-[#1A1D1E] border-t-2 border-b-2 border-b-[#212325] border-t-[#212325]">
          <tr>
            {columns.map((column, index: number) => (
              <th
                key={index}
                className={`capitalize text-[12px] min-w-[100px] text-white font-medium p-2 ${
                  index === 0 ? "text-left" : "text-right"
                }`}
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
};
