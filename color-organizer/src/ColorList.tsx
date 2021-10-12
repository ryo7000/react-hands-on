import Color from "./Color";
import { ColorData } from "./types";

interface Prop {
  colors: ColorData[];
}

export default function ColorList({ colors = {} }: Prop) {
  if (!colors.length) return <div>No Colors Listed.</div>;
  return (
    <div>
      {colors.map((color) => (
        <Color key={color.id} {...color} />
      ))}
    </div>
  );
}
