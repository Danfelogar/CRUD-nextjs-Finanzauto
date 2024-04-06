"use client";
import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  setIsRegister,
  signIn,
  signUp,
  signWithGoogle,
} from "../redux/slices/auth";
import { AppDispatch, RootState } from "../redux/store";
import { RoutesString } from "../utils/strings";
import { LoginCredentials, RegisterCredentials } from "../types/auth";
import { validateLogin } from "../utils/validationsYup/validateLogin";
import { validateRegister } from "../utils/validationsYup/validateRegister";
import { useRouter } from "next/navigation";

export const useLogin = () => {
  const router = useRouter();
  const [pageIsCharged, setPageIsCharged] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

  const dispatch = useDispatch<AppDispatch>();
  const { loading, isLogin, isRegister } = useSelector(
    (state: RootState) => state.auth
  );

  const handleOnChangeShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleOnChangeShowPasswordConfirm = () => {
    setShowPasswordConfirm(!showPasswordConfirm);
  };

  const handleOnChangeIsLogin = () => {
    dispatch(setIsRegister(!isRegister));
  };

  const formMethodsLogin = useForm<LoginCredentials>({
    resolver: yupResolver(validateLogin),
  });

  const formMethodsRegister = useForm<RegisterCredentials>({
    resolver: yupResolver(validateRegister),
  });

  useEffect(() => {
    formMethodsLogin.reset();
    formMethodsRegister.reset();

    return () => {
      formMethodsLogin.reset();
      formMethodsRegister.reset();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isRegister]);

  useEffect(() => {
    if (isLogin) {
      router.push(RoutesString.Home);
    } else {
      setPageIsCharged(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLogin]);

  const loginOrCreateUser = (data: LoginCredentials | RegisterCredentials) => {
    if (isRegister) {
      dispatch(signUp(data as RegisterCredentials));
    } else {
      dispatch(signIn(data as LoginCredentials));
    }
  };

  const handleGoogleLogin = () => {
    dispatch(signWithGoogle());
  };

  return {
    //state
    loading,
    pageIsCharged,
    isRegister,
    showPassword,
    showPasswordConfirm,
    //methods
    formMethodsLogin,
    formMethodsRegister,
    //functions
    loginOrCreateUser,
    handleGoogleLogin,
    handleOnChangeIsLogin,
    handleOnChangeShowPassword,
    handleOnChangeShowPasswordConfirm,
  };
};
