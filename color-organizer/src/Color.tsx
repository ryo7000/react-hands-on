import { ColorData } from "./types";
import StarRating from "./StarRating";
import { FaTrash } from "react-icons/fa";

type Prop = ColorData & {
  onRemove?: (id: string) => void;
};

export default function Color({
  id,
  title,
  color,
  rating,
  onRemove = (e) => e,
}: Prop) {
  return (
    <section>
      <h1>{title}</h1>
      <button onClick={() => onRemove(id)}>
        <FaTrash />
      </button>
      <div style={{ height: 50, backgroundColor: color }} />
      <StarRating selectedStars={rating} />
    </section>
  );
}
