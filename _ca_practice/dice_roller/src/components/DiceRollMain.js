import React, { useState, useReducer } from "react";
import { rollDice } from "../utils/rollDice";

// set-up initial state
const initialState = {
  diceSize: 6,
  diceRollResult: 0
};

function diceRollReducer(state, action) {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        diceSize: state.diceSize + 1
      };

    case "decrement":
      let newDiceSize = state.diceSize - 1;
      // prevent minus value
      if (newDiceSize <= 0) {
        newDiceSize = 1;
      }
      return {
        ...state,
        diceSize: newDiceSize
      };

    case "reset":
      return initialState;

    case "displayResult":
      return {
        ...state,
        diceRollResult: rollDice(state.diceSize)
      };

    default:
      // throw new Error("Incorrect action type was used");
      return state;
  }
}

function DiceRollMain() {
  // const [diceRollResult, setDiceRollResult] = useState(0);
  const [state, dispatch] = useReducer(diceRollReducer, initialState);

  return (
    <div>
      <header style={{ marginBottom: "5rem" }}>
        <h1>Dice Rolling</h1>
        <div className="underline"></div>
      </header>
      <main>
        <h3>Dice Size</h3>
        <p className="caps">Modify Dice Size That Suits</p>
        <h2 style={{ marginTop: "2rem" }}>{state.diceSize} - sided dice</h2>
        <div className="btn-container">
          <button
            className="btn"
            onClick={() => dispatch({ type: "decrement" })}
          >
            -
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: "displayResult" })}
          >
            roll dice
          </button>
          <button className="btn" onClick={() => dispatch({ type: "reset" })}>
            reset dice size
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: "increment" })}
          >
            +
          </button>
        </div>
        {state.diceRollResult > 0 && (
          <div>
            <h3>Dice Result</h3>
            <h1 className="dice-result">{state.diceRollResult}</h1>
          </div>
        )}
      </main>
    </div>
  );
}

export default DiceRollMain;
