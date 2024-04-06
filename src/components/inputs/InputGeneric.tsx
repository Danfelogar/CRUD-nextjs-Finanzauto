import { FC } from "react";
import { Controller } from "react-hook-form";

import { PropsInputGeneric } from "../../types/input";

export const InputGeneric: FC<PropsInputGeneric> = ({
  borderColor,
  firstIcon,
  placeholder,
  placeholderTextColor,
  typeInput,
  inputColor,
  lastIcon,
  multilineStyle,
  name,
  control,
}) => {
  return (
    <Controller
      shouldUnregister
      control={control}
      name={name}
      render={({ field: { onChange, value = "" }, formState: { errors } }) => {
        return (
          <div className="flex w-full flex-col">
            <div
              className={`flex items-center gap-1 border rounded-lg p-2 ${
                multilineStyle ? multilineStyle : ""
              } ${borderColor ? `${borderColor}` : "border-orange-500"} `}
            >
              {firstIcon && firstIcon}
              <input
                className={`flex-grow text-base font-normal ${
                  inputColor ? `text-${inputColor}` : ""
                }
                bg-transparent
                ${
                  firstIcon && lastIcon
                    ? "w-85"
                    : firstIcon || lastIcon
                    ? "w-92"
                    : "w-100"
                } ${
                  placeholderTextColor
                    ? `${placeholderTextColor}`
                    : `placeholder-gray-500`
                } focus:outline-none focus:ring-0`}
                placeholder={placeholder}
                type={typeInput}
                onChange={(e) => onChange(e.target.value)}
                value={value}
              />
              {lastIcon && lastIcon}
            </div>
            {errors[name] && (
              <p className="text-red-500">{errors[name]?.message as string}</p>
            )}
          </div>
        );
      }}
    />
  );
};
