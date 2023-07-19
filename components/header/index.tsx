import Image from "next/legacy/image";
import React from "react";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { Avatar } from "../avatar";

interface IHeader {
  name: string;
}

export const Header: React.FC<IHeader> = ({ name }) => {
  return (
    <header className="px-7 py-4 hidden lg:flex h-24 items-center justify-between w-full">
      <div className="flex flex-col">
        <h1 className="text-[32px] leading-[40px] text-white">{name}</h1>
        <p className="italic text-sub-1 text-[12px]">Updated on 23 may 2013</p>
      </div>

      <div className="flex items-center">
        <div className="relative mr-5">
          <input
            type="text"
            placeholder="Search your coins..."
            className="p-3 text-sub-1 italic text-[12px] rounded-full bg-sidebar pl-14"
          />
          <div className="absolute top-0 bottom-0 left-0 m-[3px] flex justify-center bg-main-2 p-2 rounded-full leading-none">
            <Image
              src="/icons/search-icon.svg"
              width={22}
              height={20}
              className="leading-none"
            />
          </div>
        </div>

        <button className="rounded-full bg-main-2 p-2 leading-none m-0 mr-2">
          <MdOutlineNotificationsActive size={22} />
        </button>

        <Avatar />
      </div>
    </header>
  );
};
