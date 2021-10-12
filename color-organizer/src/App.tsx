import { useState } from "react";
import colorData from "./color-data.json";
import ColorList from "./ColorList";
import { ColorData } from "./types";

export default function App() {
  const [colors] = useState<ColorData[]>(colorData);
  return <ColorList colors={colors} />;
}
