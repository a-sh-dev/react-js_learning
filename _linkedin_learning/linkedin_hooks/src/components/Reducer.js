import React, { useReducer } from "react";

// <Clicker /> Component
function Clicker() {
  // useReducer takes in two arguments, a callback and an initial state
  const [number, setNumber] = useReducer(
    (number, newNumber) => number + newNumber,
    0
  );

  return (
    <div>
      <p>Clicker</p>
      <h2>{number}</h2>
      <button onClick={() => setNumber(1)}>+</button>
    </div>
  );
}

// <Message /> Component
const initialState = {
  message: "Yo!️"
};

function reducer(state, action) {
  switch (action.type) {
    case "shout":
      return {
        message: `HELLO WORLD!!!!!! (${state.message})`
      };
    case "whisper":
      return {
        message: `hello wooorld..... shhh... (${state.message})`
      };
    default:
      return initialState;
  }
}

function Message() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>The Messager</p>
      <h3>Uhmm listen to the message...</h3>
      <p>{state.message}</p>
      <button onClick={() => dispatch({ type: "shout" })}>SHOUT</button>
      <button onClick={() => dispatch({ type: "whisper" })}>whisper</button>
    </div>
  );
}

export const Reducer = () => {
  return (
    <>
      <h2>
        <span>🔥</span> useReducer Hooks Samples
      </h2>
      <Message />
      <Clicker />
    </>
  );
};
