import React from "react";
import { Input } from "../@/components/ui/input";
import { Label } from "../@/components/ui/label";

interface Props {
  placeholder: string;
  input: string;
}

const InputWithLabel: React.FC<Props> = ({ placeholder, input }) => {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor={input}>{input}</Label>
      <Input type={input} id={input} placeholder={placeholder} />
    </div>
  );
};

export default InputWithLabel;
