import React, { useState } from "react";

interface Prop {
  onNewColor?: (title: string, color: string) => void;
}

export default function AddColorForm({ onNewColor = (f) => f }: Prop) {
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("#000000");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    onNewColor(title, color);
    setTitle("");
    setColor("");
  };

  return (
    <form onSubmit={submit}>
      <input
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        type="text"
        placeholder="color title..."
        required
      />
      <input
        value={color}
        onChange={(event) => setColor(event.target.value)}
        type="color"
        required
      />
    </form>
  );
}
