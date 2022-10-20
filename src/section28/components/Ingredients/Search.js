import React, { useEffect, useState } from "react";

import Card from "../UI/Card";
import "./Search.css";

const Search = React.memo((props) => {
  const [enteredFilter, setEnteredFilter] = useState("");

  const { onLoadIngredients } = props;

  useEffect(() => {
    const query =
      enteredFilter.length === 0
        ? ""
        : `?orderBy="title"&equalTo="${enteredFilter}"`;
    fetch(
      "https://react-http-cc93a-default-rtdb.firebaseio.com/ingredients.json" +
        query
    )
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        const loadedData = [];
        for (const key in responseData) {
          loadedData.push({
            id: key,
            title: responseData[key].title,
            amount: responseData[key].amount,
          });
        }
        onLoadIngredients(loadedData);
      });
  }, [enteredFilter, onLoadIngredients]);

  const ChangeHandler = (event) => {
    event.preventDefault();
    setEnteredFilter(event.target.value);
  };

  return (
    <section className="search">
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          <input type="text" value={enteredFilter} onChange={ChangeHandler} />
        </div>
      </Card>
    </section>
  );
});

export default Search;
