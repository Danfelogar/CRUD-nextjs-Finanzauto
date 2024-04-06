"use client";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

import { RootState } from "../redux/store";
import { RoutesString } from "../utils/strings";

export const usePrivate = () => {
  const router = useRouter();
  const { isLogin } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    if (!isLogin) {
      router.push(RoutesString.Login);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLogin]);

  return isLogin;
};
