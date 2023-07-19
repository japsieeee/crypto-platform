"use client";

import Image from "next/legacy/image";
import React from "react";
import { IoIosResize } from "react-icons/io";

export interface ICoins {
  name: string;
  value: string;
  rate: string;
  icon: string;
  index?: number;
}

export const Coins: React.FC<ICoins> = ({ name, value, rate, icon, index }) => {
  return (
    <div className="relative snap-center rounded-[36px] p-5 min-w-[300px] lg:min-w-[366px] min-h-[298px]">
      <Image
        src={
          index === 0 ? "/images/compound-bg.png" : "/images/shibalnu-bg.png"
        }
        layout="fill"
        alt="background"
      />
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="w-full h-full p-5 flex flex-col justify-between">
          <div>
            <div className="flex items-start justify-between">
              <Image src={icon} width={40} height={40} alt="coin-icon" />
              <button className="cursor-pointer">
                <IoIosResize color={index === 0 ? "black" : "white"} />
              </button>
            </div>
            <h3
              className={`${
                index === 0 ? "text-black" : "text-white"
              } mt-2 text-[22px]`}
            >
              {name}
            </h3>

            <h1
              className={`${
                index === 0 ? "text-black" : "text-white"
              } text-[28px]`}
            >
              {value}
            </h1>
          </div>

          <div>
            <h2
              className={`${
                index === 0
                  ? "text-black"
                  : rate.includes("+")
                  ? "text-green-1"
                  : "text-red-1"
              } text-[26px]`}
            >
              {rate}{" "}
              <span
                className={`${
                  index === 0 ? "text-black" : "text-sub-2"
                } text-[12px]`}
              >
                All time
              </span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};
