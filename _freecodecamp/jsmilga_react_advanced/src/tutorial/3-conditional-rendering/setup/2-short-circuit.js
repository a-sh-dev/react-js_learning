import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  // const [text, setText] = useState("");
  const [isError, setIsError] = useState(false);
  // const firstValue = text || "hello world";
  // const secondValue = text && "hello world";

  return (
    <>
      <h4>short circuit</h4>
      {/* <div>
        <h2>FirstValue: {firstValue}</h2>
        <h2>SecondValue : {secondValue}</h2>
      </div> */}
      <button className="btn" onClick={() => setIsError(!isError)}>
        {isError ? "fix error" : "toggle error"}
      </button>
      <hr style={{ margin: "3em 0" }} />
      <div>
        {/* {isError && <h1>Error...</h1>} */}
        {isError ? <h2>Ooops, There is an Error...</h2> : <h2>All Good!</h2>}
      </div>
    </>
  );
};

export default ShortCircuit;
