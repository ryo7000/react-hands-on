import React from "react";
import { useInput } from "./hooks";

interface Prop {
  onNewColor?: (title: string, color: string) => void;
}

export default function AddColorForm({ onNewColor = (f) => f }: Prop) {
  const [titleProps, resetTitle] = useInput("");
  const [colorProps, resetColor] = useInput("#000000");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    onNewColor(titleProps.value, colorProps.value);
    resetTitle();
    resetColor();
  };

  return (
    <form onSubmit={submit}>
      <input
        {...titleProps}
        type="text"
        placeholder="color title..."
        required
      />
      <input {...colorProps} type="color" required />
    </form>
  );
}
