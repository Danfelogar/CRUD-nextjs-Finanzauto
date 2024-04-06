"use client";
import { BsFillClipboardDataFill } from "react-icons/bs";

import { LoginForm } from "@/src/components/forms/LoginForm";
import { RegisterForm } from "@/src/components/forms/RegisterForm";
import { useLogin } from "@/src/hooks/useLogin";
import { FormProvider } from "react-hook-form";

export const LoginScreen = () => {
  const {
    //state
    isRegister,
    pageIsCharged,
    //methods
    formMethodsLogin,
    formMethodsRegister,
    //functions
    handleOnChangeIsLogin,
  } = useLogin();
  return (
    <div className=" flex flex-col items-center sm:mx-auto max-w-sm space-y-6 mx-5">
      {pageIsCharged && (
        <>
          <div className="space-y-2 text-center">
            <div className="flex mx-auto justify-center items-center rounded-lg bg-custom-purple p-2.5 m-2.5 w-36">
              <BsFillClipboardDataFill size={120} color="#FFFF" />
            </div>
            <p className="text-gray-500 dark:text-gray-400">
              Enter your email below to login to your account
            </p>
          </div>
          <>
            {isRegister ? (
              <FormProvider {...formMethodsRegister}>
                <RegisterForm handleOnChangeIsLogin={handleOnChangeIsLogin} />
              </FormProvider>
            ) : (
              <FormProvider {...formMethodsLogin}>
                <LoginForm handleOnChangeIsLogin={handleOnChangeIsLogin} />
              </FormProvider>
            )}
          </>
        </>
      )}
    </div>
  );
};
