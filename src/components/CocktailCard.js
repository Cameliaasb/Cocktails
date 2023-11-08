import React from 'react';

const transformItems = (item) => {
  return item.charAt(0).toUpperCase() + item.slice(1);
};

// ALGOLIA HITS = Results
const CocktailCard = ({ hit }) => {
  return (
    <div className="cocktail-card">
      <div className="title-block yellow-bg">{hit.name.toUpperCase()}</div>
      <div className="cocktail-description">
        <div>
          {hit.ingredients
            .filter((ingredient) => ingredient.amount || ingredient.unit || ingredient.ingredient)
            .map((ingredient, index) => (
              <div key={index}>
                <strong> ∙ {ingredient.amount} {ingredient.unit} {ingredient.ingredient} </strong>
              </div>
            ))}
        </div>
        <p>{hit.preparation}</p>
        <p><strong> Glass:</strong> {transformItems(hit.glass)}</p>
      </div>
    </div>
  );
}

export default CocktailCard;
