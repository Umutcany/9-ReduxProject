import React from "react";

interface Props {
  placeHolder: string;
  type: string;
  id: string;
  name: string;
  onChange: any;
  value: any;
}

const Input: React.FC<Props> = ({
  placeHolder,
  type,
  id,
  name,
  onChange,
  value,
}) => {
  return (
    <input
      className="h-10 w-full border rounded-md p-2 outline-none mt-3"
      placeholder={placeHolder}
      type={type}
      value={value}
      id={id}
      name={name}
      onChange={onChange}
    />
  );
};

export default Input;
