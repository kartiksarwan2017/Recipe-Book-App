import { API_KEY } from "./config";

const SPOONACULAR_API_KEY = API_KEY;

export const fetchRecipes = async () => {
  try {
    const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${SPOONACULAR_API_KEY}`);
    const data = await response.json();
    return data.results;
  } catch (error) {
    throw new Error('Error fetching recipes');
  }
};

export const fetchRecipeDetails = async (recipeId) => {
  try {
    const response = await fetch(`https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${SPOONACULAR_API_KEY}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Error fetching recipe details');
  }
};
