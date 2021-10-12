import React, { useState } from "react";
import Star from "./Star";

interface Prop extends React.ComponentPropsWithoutRef<"div"> {
  totalStars: number;
}

export default function StarRating({
  style = {},
  totalStars = 5,
  ...others
}: Prop) {
  const [selectedStars, setSelectedStars] = useState(3);
  return (
    <div style={{ padding: "5px", ...style }} {...others}>
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
    </div>
  );
}
