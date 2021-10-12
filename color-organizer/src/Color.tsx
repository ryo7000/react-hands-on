import { ColorData } from "./types";
import StarRating from "./StarRating";
import { FaTrash } from "react-icons/fa";

type Prop = ColorData & {
  onRemove?: (id: string) => void;
  onRate?: (id: string, rate: number) => void;
};

export default function Color({
  id,
  title,
  color,
  rating,
  onRemove = (e) => e,
  onRate = (e) => e,
}: Prop) {
  return (
    <section>
      <h1>{title}</h1>
      <button onClick={() => onRemove(id)}>
        <FaTrash />
      </button>
      <div style={{ height: 50, backgroundColor: color }} />
      <StarRating
        selectedStars={rating}
        onRate={(rating) => onRate(id, rating)}
      />
    </section>
  );
}
