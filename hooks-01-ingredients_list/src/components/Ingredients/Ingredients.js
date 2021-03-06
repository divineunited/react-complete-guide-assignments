import React, { useState } from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import Search from './Search';

function Ingredients() {
  const [ ingredients, setIngredients ] = useState([]);

  const addIngredientHandler = ingredient => {
    setIngredients(prevIngredients => [
      ...prevIngredients, 
      { id: Math.random().toString(), ...ingredient}
    ]);
  };

  const removeIngredientHandler = removeId => {
    setIngredients(ingredients.filter(ing => ing.id !== removeId))
  }

  return (
    <div className="App">
      <IngredientForm 
        addIngredientHandler = {addIngredientHandler}
      />

      <section>
        <Search />
        <IngredientList 
          ingredients = {ingredients}
          onRemoveItem = {removeIngredientHandler}
        />
      </section>
    </div>
  );
}

export default Ingredients;
