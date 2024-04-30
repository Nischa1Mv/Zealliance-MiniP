import React from "react";
import { Label } from "../../../@/components/ui/label";

interface Props {
  placeholder: string;
  label: string;
  type: string;
  unit: string;
}

const InputWithLabel: React.FC<Props> = ({
  placeholder,
  label,
  type,
  unit,
}) => {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor={label}>{label}</Label>
      <div className=" relative w-[70%] min-w-[123px]">
        <input
          className=" min-w-[150px]  pl-4 pb-2 pt-1 h-8 rounded-lg w-full hover:outline-white hover:outline-2 focus:outline-white focus:outline-2  bg-background border  border-slate-600    [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          type={type}
          placeholder={placeholder}
        />
        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500">
          {" "}
          {unit}{" "}
        </span>
      </div>
    </div>
  );
};

export default InputWithLabel;
