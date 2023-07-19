"use client";

import { Sidebar } from "@/components/sidebar";
import React from "react";

interface IProviders {
  children: JSX.Element;
}

export const Providers: React.FC<IProviders> = ({ children }) => {
  return (
    <main className="flex">
      <Sidebar />
      {children}
    </main>
  );
};
