"use client";
import { useFormContext } from "react-hook-form";
import { IoMdMail } from "react-icons/io";
import { FaKey } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

import { RegisterCredentials } from "../../types/auth";
import { useLogin } from "@/src/hooks/useLogin";
import { InputGeneric } from "../inputs/InputGeneric";

export const RegisterForm = ({
  handleOnChangeIsLogin,
}: {
  handleOnChangeIsLogin: () => void;
}) => {
  const {
    //state
    loading,
    showPassword,
    showPasswordConfirm,
    //functions
    handleGoogleLogin,
    loginOrCreateUser,
    handleOnChangeShowPassword,
    handleOnChangeShowPasswordConfirm,
  } = useLogin();
  const { control, handleSubmit: onSubmit } =
    useFormContext<RegisterCredentials>();
  return (
    <form onSubmit={onSubmit(loginOrCreateUser)} className="w-full">
      <div className="flex w-full mb-4">
        <InputGeneric
          borderColor="border-gray-600"
          firstIcon={<IoMdMail color="#4b5563" size={20} />}
          placeholder="Email"
          placeholderTextColor="placeholder-gray-500"
          typeInput="email"
          inputColor="gray-900"
          name="email"
          control={control}
        />
      </div>
      <div className="flex w-full mb-4">
        <InputGeneric
          borderColor="border-gray-600"
          firstIcon={<IoMdMail color="#4b5563" size={20} />}
          placeholder="Repeat your email"
          placeholderTextColor="placeholder-gray-500"
          typeInput="email"
          inputColor="gray-900"
          name="emailConfirm"
          control={control}
        />
      </div>
      <div className="flex w-full mb-4">
        <InputGeneric
          borderColor="border-gray-600"
          firstIcon={<FaKey color="#4b5563" size={20} />}
          placeholder="Password"
          placeholderTextColor="placeholder-gray-500"
          typeInput={showPasswordConfirm ? "text" : "password"}
          inputColor="gray-900"
          name="password"
          lastIcon={
            showPasswordConfirm ? (
              <FaEye
                color="#4b5563"
                size={20}
                onClick={handleOnChangeShowPasswordConfirm}
              />
            ) : (
              <FaEyeSlash
                color="#4b5563"
                size={20}
                onClick={handleOnChangeShowPasswordConfirm}
              />
            )
          }
          control={control}
        />
      </div>
      <div className="flex w-full mb-4">
        <InputGeneric
          borderColor="border-gray-600"
          firstIcon={<FaKey color="#4b5563" size={20} />}
          placeholder="Repeat your password"
          placeholderTextColor="placeholder-gray-500"
          typeInput={showPassword ? "text" : "password"}
          inputColor="gray-900"
          name="passwordConfirm"
          lastIcon={
            showPassword ? (
              <FaEye
                color="#4b5563"
                size={20}
                onClick={handleOnChangeShowPassword}
              />
            ) : (
              <FaEyeSlash
                color="#4b5563"
                size={20}
                onClick={handleOnChangeShowPassword}
              />
            )
          }
          control={control}
        />
      </div>
      <button
        type="submit"
        className="flex w-full justify-center bg-gray-950 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black-500 p-5"
        disabled={loading}
        onClick={onSubmit(loginOrCreateUser)}
      >
        Register
      </button>
      <hr className="border-t border-gray-400 my-4" />
      <button
        onClick={handleGoogleLogin}
        className="flex w-full gap-2 items-center justify-center bg-google-button-blue hover:bg-google-button-blue-hover text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-google-button-blue"
        disabled={loading}
      >
        {loading ? (
          <div className="flex justify-center items-center p-0.5">
            <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-white"></div>
          </div>
        ) : (
          <>
            <span className="text-white text-2xl">G</span>
            Continue with Google
          </>
        )}
      </button>
      <div className="text-center mt-4">
        <label className="cursor-pointer" onClick={handleOnChangeIsLogin}>
          Already have an account ?{" "}
          <span className="underline text-blue-500">Enter here</span>
        </label>
      </div>
    </form>
  );
};
