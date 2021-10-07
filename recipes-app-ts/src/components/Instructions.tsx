import React from "react";

interface Prop {
  title: string;
  steps: string[];
}

export default function Instructions({ title, steps }: Prop) {
  return (
    <section className="instructions">
      <h2>{title}</h2>
      {steps.map((step, i) => (
        <p key={i}>{step}</p>
      ))}
    </section>
  );
}
