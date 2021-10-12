import React from "react";
import Star from "./Star";

interface Prop extends React.ComponentPropsWithoutRef<"div"> {
  totalStars?: number;
  selectedStars?: number;
}

export default function StarRating({
  style = {},
  totalStars = 5,
  selectedStars = 5,
  ...others
}: Prop) {
  return (
    <div style={{ padding: "5px", ...style }} {...others}>
      {[...Array(totalStars)].map((_, i) => (
        <Star key={i} selected={selectedStars > i} />
      ))}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </div>
  );
}
