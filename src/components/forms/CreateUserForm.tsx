"use client";
import { useFormContext } from "react-hook-form";

import { UserFormCreate } from "@/src/types/userDataState";
import { useUserData } from "@/src/hooks/useUserData";
import { InputGeneric } from "../inputs/InputGeneric";

export const CreateUserForm = () => {
  const { createOrUpdateUser, loading } = useUserData();
  const { control, handleSubmit: onSubmit } = useFormContext<UserFormCreate>();
  return (
    <form onSubmit={onSubmit(createOrUpdateUser)}>
      <div className="flex w-full mb-4">
        <InputGeneric
          borderColor="border-gray-600"
          placeholder="Nombre"
          placeholderTextColor="placeholder-gray-500"
          typeInput="text"
          inputColor="gray-900"
          name="firstName"
          control={control}
        />
      </div>
      <div className="flex w-full mb-4">
        <InputGeneric
          borderColor="border-gray-600"
          placeholder="Apellido"
          placeholderTextColor="placeholder-gray-500"
          typeInput="text"
          inputColor="gray-900"
          name="lastName"
          control={control}
        />
      </div>
      <div className="flex w-full mb-4">
        <InputGeneric
          borderColor="border-gray-600"
          placeholder="Email"
          placeholderTextColor="placeholder-gray-500"
          typeInput="email"
          inputColor="gray-900"
          name="email"
          control={control}
        />
      </div>
      <button
        type="submit"
        className="flex w-full justify-center bg-custom-purple hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black-500 p-5"
        disabled={loading}
        onClick={onSubmit(createOrUpdateUser)}
      >
        {loading ? (
          <div className="flex justify-center items-center p-0.5">
            <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-white"></div>
          </div>
        ) : (
          "Crear usuario"
        )}
      </button>
    </form>
  );
};
