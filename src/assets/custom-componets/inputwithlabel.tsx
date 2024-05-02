import React from "react";

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
    <div className="flex w-full max-w-sm  gap-5  ">
      <label className="w-[30%]" htmlFor={label}>
        {label}
      </label>
      <div className="  relative w-full border border-black ">
        <input
          className="  h-full  px-4 rounded-lg w-full placeholder:text-xl placeholder:font-semibold hover:outline-black hover:outline-2 focus:outline-black focus:outline-4  bg-background border-2  border-slate-600    [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          type={type}
          placeholder={placeholder}
        />
        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-xl font-semibold text-gray-500">
          {" "}
          {unit}{" "}
        </span>
      </div>
    </div>
  );
};

export default InputWithLabel;
