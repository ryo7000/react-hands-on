import Color from "./Color";
import { ColorData } from "./types";

interface Prop {
  colors: ColorData[];
  onRemoveColor?: (id: string) => void;
  onRateColor?: (id: string, rate: number) => void;
}

export default function ColorList({
  colors = [],
  onRemoveColor = (e) => e,
  onRateColor = (e) => e,
}: Prop) {
  if (!colors.length) return <div>No Colors Listed.</div>;
  return (
    <div>
      {colors.map((color) => (
        <Color
          key={color.id}
          {...color}
          onRemove={onRemoveColor}
          onRate={onRateColor}
        />
      ))}
    </div>
  );
}
