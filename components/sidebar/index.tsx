"use client";

import Image from "next/legacy/image";
import Link from "next/link";
import { ILink, links } from "./links.data";
import { usePathname } from "next/navigation";

export const Sidebar = () => {
  return (
    <aside className="min-w-[256px] sticky top-0 h-screen text-white bg-sidebar px-5 py-6 hidden md:flex flex-col justify-between overflow-y-auto scrollbar-thin scrollbar-thumb-gray-100">
      <div id="upper">
        <div id="logo-group" className="flex items-center mb-20">
          <Image src="/logo.svg" width={34} height={34} alt="logo" />
          <span className="mr-2" />
          <Image
            src="/logo-name.svg"
            layout="fixed"
            width={102}
            height={20}
            alt="logo-name"
          />
        </div>

        {links.map((link, index: number) => (
          <MyLink key={index} {...link} />
        ))}
      </div>

      <div id="lower">
        <button className="capitalize flex items-center my-1 relative p-1 rounded-full">
          <div className="rounded-full mr-2 leading-none p-2">
            <Image
              src="/icons/logout-icon.svg"
              width={24}
              height={20}
              alt="logout-icon"
            />
          </div>
          <span className="text-[16px]">Logout</span>
        </button>
      </div>
    </aside>
  );
};

export const MyLink: React.FC<ILink> = ({ icon, name, path, disabled }) => {
  const currentPath = usePathname();

  const isActive = currentPath === path;

  return disabled ? (
    <span
      className={`capitalize flex items-center opacity-50 cursor-default my-1 relative p-1 rounded-full`}
    >
      <div className={`rounded-full mr-2 leading-none p-2`}>
        <Image src={icon} width={24} height={20} alt="link-icon" />
      </div>
      <span className="text-[16px]">{name}</span>
    </span>
  ) : (
    <Link
      href={path}
      className={`capitalize flex items-center my-1 relative p-1 rounded-full ${
        isActive ? "bg-white text-main-1" : "bg-transparent text-white"
      }`}
    >
      <div
        className={`rounded-full mr-2 leading-none p-2 ${
          isActive ? "bg-main-1" : "bg-transparent"
        }`}
      >
        <Image src={icon} width={24} height={20} alt="link-icon" />
      </div>
      <span className="text-[16px]">{name}</span>
    </Link>
  );
};
