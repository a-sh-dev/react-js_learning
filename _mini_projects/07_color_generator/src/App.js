import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  const [color, setColor] = useState(`#${""}`);
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#2caeba").all(10));

  // #2caeba

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  return (
    <>
      <section className="container">
        <h3>
          <span
            style={{ marginRight: "0.85rem" }}
            role="img"
            aria-label="paint"
          >
            🎨
          </span>
          color generator
        </h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="#2caeba"
            className={`${error ? "error" : null}`}
          />
          <button className="btn" type="submit">
            generate
          </button>
        </form>
      </section>
      {/* ---- LIST OF GENERATED COLORS ---- */}
      <section className="colors">
        {list.map((color, index) => {
          return (
            <SingleColor
              key={index}
              {...color}
              index={index}
              hexColor={color.hex}
            />
          );
        })}
      </section>
    </>
  );
}

export default App;
