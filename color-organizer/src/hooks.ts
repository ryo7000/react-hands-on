import React, { useState } from "react";

export const useInput = (
  initalValue: string
): [
  {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  },
  () => void
] => {
  const [value, setValue] = useState(initalValue);
  return [
    {
      value,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setValue(e.target.value),
    },
    () => setValue(initalValue),
  ];
};
