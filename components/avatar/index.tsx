import Image from "next/legacy/image";
import React from "react";
import { GoChevronDown } from "react-icons/go";

export const Avatar = () => {
  return (
    <div className="flex items-center cursor-pointer hover:bg-main-2 duration-200 p-2 rounded-full">
      <Image
        src="/images/avatar.jpg"
        width={35}
        height={35}
        className="rounded-full"
      />
      <h3 className="mx-2">Alexim</h3>
      <GoChevronDown />
    </div>
  );
};
