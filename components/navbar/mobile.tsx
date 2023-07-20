"use client";

import React, { useState } from "react";
import { Turn as Hamburger } from "hamburger-react";
import Image from "next/legacy/image";
import { links } from "../sidebar/links.data";
import { MyLink } from "../sidebar";

export const MobileNav = () => {
  const [isOpen, setOpen] = useState<boolean>(false);

  const toggle = () => setOpen((prev) => !prev);

  return (
    <div className="flex md:hidden justify-between items-center p-4 z-30 sticky top-0 bg-sidebar h-[4em] text-white">
      <div
        className={`fixed p-5 w-full min-h-[200px] bg-sidebar duration-200 left-0 ${
          isOpen ? "top-[4em]" : "top-[-1000px]"
        }`}
      >
        {links.map((link, index: number) => (
          <div onClick={toggle} key={index}>
            <MyLink {...link} />
          </div>
        ))}
      </div>
      <Image width={40} height={40} src="/logo.svg" />
      <Hamburger toggled={isOpen} onToggle={toggle} />
    </div>
  );
};
