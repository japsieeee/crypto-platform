"use client";

import Image from "next/legacy/image";
import React from "react";
import { CiPlay1 } from "react-icons/ci";

export interface IRelease {
  difficulty: "Beginner" | "Advance";
  title: string;
  date: string;
  createdAt: string;
  bg: string;
}

export const Release: React.FC<IRelease> = ({
  title,
  date,
  difficulty,
  bg,
  createdAt,
}) => {
  return (
    <div className="relative snap-center rounded-[18px] overflow-hidden min-w-[265px] lg:min-w-[265px] min-h-[278px]">
      <span
        className={`absolute top-2 right-2 z-10 backdrop-blur-[16px] text-[12px] rounded-full py-1 px-3 ${
          difficulty === "Beginner" ? "text-green-2" : "text-[#FFE773]"
        }`}
      >
        {difficulty}
      </span>

      <div
        className="absolute flex justify-center items-center w-full z-10"
        style={{ height: "calc(100% - 95px)" }}
      >
        <button className="bg-green-2 text-black rounded-full p-4">
          <CiPlay1 size={16} />
        </button>
      </div>

      <div className="absolute top-0 left-0 w-full h-full z-10">
        <div className="w-full h-full relative">
          <div className="absolute flex flex-col justify-center h-[95px] w-full backdrop-blur-xl p-5 bottom-0">
            <h1 className="text-[14px] mb-2">{title}</h1>
            <p className="text-sub-2 text-[12px] flex justify-between items-center">
              {date} <span>{createdAt}</span>
            </p>
          </div>
        </div>
      </div>
      <Image src={bg} layout="fill" alt="background" />
    </div>
  );
};
