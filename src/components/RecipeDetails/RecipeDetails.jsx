import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchRecipeDetails } from '../../api';

const RecipeDetails = () => {
  const { recipeId } = useParams();
  const [recipeDetails, setRecipeDetails] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchRecipeDetails(recipeId)
      .then(data => setRecipeDetails(data))
      .catch(error => {
        console.error(error);
        setError(error.message);
      });
  }, [recipeId]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!recipeDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{recipeDetails.title}</h1>
      <img src={recipeDetails.image} alt={recipeDetails.title} />
      <h2>Ingredients</h2>
      <ul>
        {recipeDetails.extendedIngredients.map(ingredient => (
          <li key={ingredient.id}>{ingredient.original}</li>
        ))}
      </ul>
      <h2>Instructions</h2>
      <p>{recipeDetails.instructions}</p>
    </div>
  );
};

export default RecipeDetails;
