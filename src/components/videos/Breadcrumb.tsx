"use client";
import { cloneElement } from "react";
import { usePathname } from "next/navigation";

export const Breadcrumb = ({
  arrNavigation,
}: {
  arrNavigation: {
    id: number;
    title: string;
    path: string;
    pathForNavigate: string;
    icons: JSX.Element;
  }[];
}) => {
  const pathname = usePathname();

  return (
    <div className="flex gap-4">
      {arrNavigation.map((option) => (
        <div
          key={option.id}
          className={`hover:cursor-pointer pb-1 flex gap-2 ${
            option.path === pathname && "border-b-2 border-custom-purple"
          }`}
        >
          {cloneElement(option.icons, {
            color: option.path === pathname ? "#4a00ff" : "#0c0909",
          })}

          <p
            className={`text-sm font-normal ${
              option.path === pathname
                ? "text-custom-purple"
                : "text-custom-dark"
            } `}
          >
            {option.title}
          </p>
        </div>
      ))}
    </div>
  );
};
