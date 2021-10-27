import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log("useEffect called");
    if (value >= 1) {
      document.title = `VALUE: ${value}`;
    }
  }, [value]);

  console.log("component rendered");

  return (
    <>
      <h3>useEffect Basics</h3>
      <div style={{ marginTop: "3em" }}>
        <h1>{value}</h1>
        <button className="btn" onClick={() => setValue(value + 1)}>
          Click Me
        </button>
      </div>
    </>
  );
};

export default UseEffectBasics;
