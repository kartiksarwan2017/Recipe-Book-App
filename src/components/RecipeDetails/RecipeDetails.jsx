import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchRecipeDetails } from '../../api';
import './RecipeDetails.css'; // Import your CSS file

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
    <div className="recipe-details-container">
      <h1 className="recipe-title">{recipeDetails.title}</h1>
      <img src={recipeDetails.image} alt={recipeDetails.title} className="recipe-image" />
      <div className="ingredients-container">
        <h2>Ingredients</h2>
        <ul className="ingredients-list">
          {recipeDetails.extendedIngredients.map(ingredient => (
            <li key={ingredient.id}>{ingredient.original}</li>
          ))}
        </ul>
      </div>
      <div className="instructions-container">
        <h2>Instructions</h2>
        <p className="instructions-text">{recipeDetails.instructions}</p>
      </div>
    </div>
  );
};

export default RecipeDetails;
