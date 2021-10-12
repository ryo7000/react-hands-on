import { useState } from "react";
import colorData from "./color-data.json";
import ColorList from "./ColorList";
import { ColorData } from "./types";

export default function App() {
  const [colors, setColors] = useState<ColorData[]>(colorData);
  return (
    <ColorList
      colors={colors}
      onRemoveColor={(id) => {
        const newColors = colors.filter((color) => color.id !== id);
        setColors(newColors);
      }}
    />
  );
}
