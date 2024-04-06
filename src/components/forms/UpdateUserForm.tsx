"use client";
import { useFormContext } from "react-hook-form";

import { useUserData } from "@/src/hooks/useUserData";
import { InputGeneric } from "../inputs/InputGeneric";
import { UserFormUpdate } from "../../types/userDataState";

export const UpdateUserForm = () => {
  const { createOrUpdateUser, loading } = useUserData();
  const { control, handleSubmit: onSubmit } = useFormContext<UserFormUpdate>();
  return (
    <form onSubmit={onSubmit(createOrUpdateUser)}>
      <div className="flex w-full mb-4">
        <InputGeneric
          borderColor="border-gray-600"
          placeholder="Titulo"
          placeholderTextColor="placeholder-gray-500"
          typeInput="text"
          inputColor="gray-900"
          name="title"
          control={control}
        />
      </div>
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
          placeholder="Genero"
          placeholderTextColor="placeholder-gray-500"
          typeInput="text"
          inputColor="gray-900"
          name="gender"
          control={control}
        />
      </div>
      <div className="flex w-full mb-4">
        <InputGeneric
          borderColor="border-gray-600"
          placeholder="Teléfono"
          placeholderTextColor="placeholder-gray-500"
          typeInput="text"
          inputColor="gray-900"
          name="phone"
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
          "Actualizar usuario"
        )}
      </button>
    </form>
  );
};
