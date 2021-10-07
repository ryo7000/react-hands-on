import React from "react";
import { Ingredient as IngredientType } from "../types";

type Prop = IngredientType;

export default function Ingredient({ amount, measurement, name }: Prop) {
  return (
    <li>
      {amount} {measurement} {name}
    </li>
  );
}
