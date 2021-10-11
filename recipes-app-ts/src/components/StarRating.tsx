import { useState } from "react";
import Star from "./Star";

export default function StarRating({ totalStars = 5 }: { totalStars: number }) {
  const [selectedStars, setSelectedStars] = useState(3);
  return (
    <>
      {[...Array(totalStars)].map((_, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          onSelect={() => setSelectedStars(i + 1)}
        />
      ))}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </>
  );
}
