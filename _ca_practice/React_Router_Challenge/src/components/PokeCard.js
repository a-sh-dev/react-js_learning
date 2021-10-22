import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PokeCard = () => {
  const [pokeData, setPokeData] = useState("");
  var { pokemonName } = useParams();
  console.log(pokemonName);

  const getPokeData = async () => {
    let rawPokeData = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );
    console.log("-- Raw Pokemon Data -- \n" + JSON.stringify(rawPokeData));
    let processedPokeData = await rawPokeData.json();
    console.log(
      "-- Processed Pokemon Data -- \n" + JSON.stringify(processedPokeData)
    );
    setPokeData(processedPokeData);
  };

  useEffect(() => {
    if (!pokeData) {
      getPokeData();
    }
  });

  return (
    <div className='pokecard'>
      {pokeData ? (
        <div>
          <h1>{pokeData.name.toUpperCase()}</h1>
          <h3>{pokeData.type}</h3>
          <img
            src={pokeData.sprites.front_default}
            alt='Pokemon Character Unlocked!'
            style={{ width: "30%" }}
          />
        </div>
      ) : (
        <div>
          <h2>Loading...</h2>
        </div>
      )}
    </div>
  );
};

export default PokeCard;
