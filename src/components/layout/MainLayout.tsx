"use client";
import { ReactNode } from "react";

import { Navbar } from ".";
import { usePathname } from "next/navigation";
import { RoutesString } from "@/src/utils/strings";

export const MainLayout = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  return (
    <div className="flex w-full h-screen p-2.5 gap-4 bg-custom-gray-50">
      {pathname === RoutesString.Login ? (
        <>{children}</>
      ) : (
        <>
          <Navbar />
          <div className="flex rounded-xl flex-grow p-4 bg-white">
            {children}
          </div>
        </>
      )}
    </div>
  );
};
