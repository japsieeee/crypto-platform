"use client";

import { MobileNav } from "@/components/navbar/mobile";
import { Sidebar } from "@/components/sidebar";
import React from "react";

interface IProviders {
  children: JSX.Element;
}

export const Providers: React.FC<IProviders> = ({ children }) => {
  return (
    <main className="flex flex-col md:flex-row">
      <Sidebar />
      <MobileNav />
      {children}
    </main>
  );
};
