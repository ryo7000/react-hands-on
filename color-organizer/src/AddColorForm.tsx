import React, { useRef } from "react";

interface Prop {
  onNewColor?: (title: string, color: string) => void;
}

export default function AddColorForm({ onNewColor = (f) => f }: Prop) {
  const txtTitle = useRef<HTMLInputElement>(null);
  const hexColor = useRef<HTMLInputElement>(null);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (txtTitle.current && hexColor.current) {
      const title = txtTitle.current.value;
      const color = hexColor.current.value;
      onNewColor(title, color);
      txtTitle.current.value = "";
      hexColor.current.value = "";
    }
  };

  return (
    <form onSubmit={submit}>
      <input ref={txtTitle} type="text" placeholder="color title..." required />
      <input ref={hexColor} type="color" required />
    </form>
  );
}
