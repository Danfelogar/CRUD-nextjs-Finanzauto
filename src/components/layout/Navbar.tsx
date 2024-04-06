"use client";
import { cloneElement } from "react";
import { usePathname, useRouter } from "next/navigation";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { FaRegUserCircle } from "react-icons/fa";
import { IoLogOutOutline } from "react-icons/io5";

import { checkPath, optionsNavigate } from "@/src/utils";
import { TableOfStatistics } from ".";
import { RootState } from "@/src/redux/store";
import { setLogout } from "@/src/redux/slices/auth";

export const Navbar = () => {
  const dispatch = useDispatch();
  const pathname = usePathname();
  const router = useRouter();
  const { credentials } = useSelector((state: RootState) => state.auth);
  return (
    <div className="flex rounded-xl flex-col p-2.5 pb-10 w-60 h-full bg-white items-center">
      <div className="flex w-full justify-between items-center">
        {credentials.name && credentials.photo ? (
          <img
            className="ml-1 rounded-full w-8 h-8 mr-2"
            src={credentials.photo}
            alt={credentials.name}
          />
        ) : (
          <FaRegUserCircle color="#3333" size={30} />
        )}
        <h3 className={`text-custom-dark font-normal text-[0.92rem] truncate`}>
          {credentials.email}
        </h3>
        <IoLogOutOutline
          onClick={() => {
            dispatch(setLogout());
          }}
          className="cursor-pointer"
          color="#00000033"
          size={30}
        />
      </div>
      <div className="flex justify-center items-center rounded-lg bg-custom-purple p-1 my-10">
        <AiOutlinePlayCircle size={55} color="#FFFF" />
      </div>
      <div className="flex flex-col gap-4 w-full">
        {optionsNavigate.map((option) => (
          <div
            onClick={() => router.push(option.pathForNavigate)}
            key={option.id}
            className={`flex items-center gap-2 ${
              checkPath(pathname, option.path)
                ? "text-white bg-custom-purple"
                : "text-custom-dark"
            } rounded-lg  p-3 cursor-pointer`}
          >
            {cloneElement(option.icons, {
              color: checkPath(pathname, option.path) ? "#FFFF" : "#0c0909",
            })}
            <h3
              className={`${
                checkPath(pathname, option.path)
                  ? "text-white"
                  : "text-custom-dark"
              } font-normal text-[0.92rem]`}
            >
              {option.title}
            </h3>
          </div>
        ))}
      </div>
      <div className="h-full" />
      <TableOfStatistics />
    </div>
  );
};
