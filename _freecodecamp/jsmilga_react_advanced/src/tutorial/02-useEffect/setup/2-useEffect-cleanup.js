import React, { useState, useEffect } from "react";

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    console.log("useEffect");
    window.addEventListener("resize", checkSize);
    return () => {
      console.log("useEffect cleanup");
      window.removeEventListener("resize", checkSize);
    };
  }, []);

  console.log("RENDER");

  return (
    <>
      <h3>useEffect cleanup</h3>
      <div>
        <h1>Window</h1>
        <h2>{size} PX</h2>
      </div>
    </>
  );
};

export default UseEffectCleanup;
