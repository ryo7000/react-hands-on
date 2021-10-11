import IngredientsList from "./IngredientsList";
import Instructions from "./Instructions";
import StarRating from "./StarRating";
import { Recipe as RecipeType } from "../types";

type Prop = RecipeType;

export default function Recipe({ name, ingredients, steps }: Prop) {
  return (
    <section id={name.toLowerCase().replace(/ /g, "-")}>
      <StarRating style={{ backgroundColor: "lightBlue" }} totalStars={5} />
      <h1>{name}</h1>
      <IngredientsList list={ingredients} />
      <Instructions title="Cooking Instructions" steps={steps} />
    </section>
  );
}
