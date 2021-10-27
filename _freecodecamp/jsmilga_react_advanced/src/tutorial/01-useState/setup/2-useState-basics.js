import React, { useState } from "react";

const UseStateBasics = () => {
  const initialTitle = "Hmmm...";
  const [title, setTitle] = useState(initialTitle);

  const handleClick = () => {
    if (title === initialTitle) {
      setTitle("Clicked! 😆");
    } else {
      setTitle(initialTitle);
    }
  };

  return (
    <>
      <h2>useState basic example</h2>
      <h1>{title}</h1>
      <button type="button" className="btn" onClick={handleClick}>
        Change Title
      </button>
    </>
  );
};

export default UseStateBasics;
