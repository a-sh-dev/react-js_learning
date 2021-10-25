import React, { useState } from "react";

const UseStateObject = () => {
  const [pet, setPet] = useState({
    name: "nyomi",
    breed: "🐈",
    bio: "gentle and friendly"
  });

  const handleChangeBio = () => {
    setPet({
      ...pet,
      bio: "very gentle and friendly to other cats and people"
    });
  };

  // console.log(pet);
  return (
    <>
      <h2>useState object example</h2>
      <h1>
        {pet.name}
        <span> {pet.breed}</span>
      </h1>
      <p>{pet.bio}</p>
      <button className="btn" onClick={handleChangeBio}>
        change bio
      </button>
    </>
  );
};

export default UseStateObject;
