import Ingredient from "./Ingredient";
import { Ingredient as IngredientType } from "../types";

type Prop = {
  list: IngredientType[],
}

export default function IngredientsList({ list }: Prop) {
  return (
    <ul className="ingredients">
      {list.map((ingredient, i) => (
        <Ingredient key={i} {...ingredient} />
      ))}
    </ul>
  );
}
