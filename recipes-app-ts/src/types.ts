export interface Ingredient {
  name: string;
  amount: number;
  measurement: string;
}

export interface Recipe {
  name: string;
  ingredients: Ingredient[];
  steps: string[];
}
