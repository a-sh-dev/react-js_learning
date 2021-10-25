import React, { useState } from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  // * remove item individually
  const removeItem = (id) => {
    let itemToRemove = people.filter((person) => person.id !== id);
    setPeople(itemToRemove);
  };

  return (
    <>
      <h2>useState array example</h2>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>
              <span role="img" aria-label="remove">
                ❌
              </span>
            </button>
          </div>
        );
      })}
      {people.length !== 0 && (
        <button type="button" className="btn" onClick={() => setPeople([])}>
          clear all
        </button>
      )}
    </>
  );
};

export default UseStateArray;
