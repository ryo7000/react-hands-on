import React from "react";
import { FaStar } from "react-icons/fa";

interface Prop {
  selected?: boolean;
  onSelect?: (e: React.MouseEvent) => void;
}

export default function Star({ selected = false, onSelect = (e) => e }: Prop) {
  return <FaStar color={selected ? "red" : "grey"} onClick={onSelect} />;
}
