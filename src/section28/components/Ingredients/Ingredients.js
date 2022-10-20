import React, { useEffect, useState } from "react";

import IngredientForm from "./IngredientForm";
import IngredientList from "./IngredientList";
import Search from "./Search";

const Ingredients = () => {
  const [userIngredients, setUserIngredients] = useState([]);

  useEffect(() => {
    fetch(
      "https://react-http-cc93a-default-rtdb.firebaseio.com/ingredients.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        const loadedIngredients = [];
        for (const key in responseData) {
          loadedIngredients.push({
            id: key,
            title: responseData[key].title,
            amount: responseData[key].amount,
          });
        }
        setUserIngredients(loadedIngredients);
      });
  }, []);

  const filteredIngerientsHandler = (filteredIngredients) => {
    setUserIngredients(filteredIngredients);
  };

  const addIngredientHandler = (ingredient) => {
    fetch(
      "https://react-http-cc93a-default-rtdb.firebaseio.com/ingredients.json",
      {
        method: "POST",
        body: JSON.stringify(ingredient),
        headers: {
          "Content-Type": "applcation/json",
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        setUserIngredients((prevIngredient) => [
          ...prevIngredient,
          { id: responseData.name, ...ingredient },
        ]);
      });
  };

  return (
    <div className="App">
      <IngredientForm onAddIngredient={addIngredientHandler} />
      <section>
        <Search onLoadIngredients={filteredIngerientsHandler} />
        <IngredientList ingredients={userIngredients} onRemoveItem={() => {}} />
      </section>
    </div>
  );
};

export default Ingredients;
