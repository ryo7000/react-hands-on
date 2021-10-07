import React from 'react';
import Recipe from "./components/Recipe";
import { Recipe as RecipeType } from "./types";

interface Prop {
  recipes: RecipeType[],
}

function App({ recipes }: Prop) {
  return (
    <article>
      <header>
        <h1>Delicious Recipes</h1>
      </header>
      <div className="recipes">
        {recipes.map((recipe, i) => (
          <Recipe key={i} {...recipe} />
        ))}
      </div>
    </article>
  );
}

export default App;
