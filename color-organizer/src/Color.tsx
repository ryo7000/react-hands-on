import { ColorData } from "./types";
import StarRating from "./StarRating";

type Prop = Omit<ColorData, "id">;

export default function Color({ title, color, rating }: Prop) {
  return (
    <section>
      <h1>{title}</h1>
      <div style={{ height: 50, backgroundColor: color }} />
      <StarRating selectedStars={rating} />
    </section>
  );
}
