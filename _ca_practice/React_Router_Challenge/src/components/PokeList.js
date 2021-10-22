import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const PokeList = () => {
  const [pokeData, setPokeData] = useState([]);

  const getPokeData = async () => {
    let rawPokeData = await fetch(`https://pokeapi.co/api/v2/pokemon`);
    console.log("-- Raw Pokemon Data -- \n" + JSON.stringify(rawPokeData));
    let processedPokeData = await rawPokeData.json();
    setPokeData(processedPokeData.results);
  };

  useEffect(() => {
    console.log(pokeData);
    if (!(pokeData.length > 0)) {
      getPokeData();
    }
  });

  return (
    <div>
      <h1>Pokemon Characters</h1>
      {pokeData.length > 0 ? (
        <div>
          {pokeData.map((pokeName, index) => {
            return (
              <li>
                <Link id={index} to={`/pokemon/${pokeName.name}`}>
                  {pokeName.name}
                </Link>
              </li>
            );
          })}
        </div>
      ) : (
        <div>
          <p>Loading...</p>
        </div>
      )}
    </div>
  );
};

export default PokeList;
