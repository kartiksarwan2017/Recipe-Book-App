// src/api.js
const API_KEY = '1796b0ab3c2443a6943f4b89a0a6f708';

export const fetchRecipes = async () => {
  try {
    const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}`);
    const data = await response.json();
    return data.results;
  } catch (error) {
    throw new Error('Error fetching recipes');
  }
};

export const fetchRecipeDetails = async (recipeId) => {
  try {
    const response = await fetch(`https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${API_KEY}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Error fetching recipe details');
  }
};
