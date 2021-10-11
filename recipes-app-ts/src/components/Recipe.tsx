import IngredientsList from "./IngredientsList";
import Instructions from "./Instructions";
import { Recipe as RecipeType } from "../types";

type Prop = RecipeType;

export default function Recipe({ name, ingredients, steps }: Prop) {
  return (
    <section id={name.toLowerCase().replace(/ /g, "-")}>
      <h1>{name}</h1>
      <IngredientsList list={ingredients} />
      <Instructions title="Cooking Instructions" steps={steps} />
    </section>
  );
}
