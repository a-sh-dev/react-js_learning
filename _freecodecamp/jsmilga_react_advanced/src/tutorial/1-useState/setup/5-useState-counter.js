import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);

  const reset = () => {
    setValue(0);
  };

  // * Complex Counter
  const [compValue, setCompValue] = useState(0);

  const complexIncrease = () => {
    setTimeout(() => {
      // setCompValue(compValue + 1);
      // * the below's solution is better as it gets the current value of compValue
      setCompValue((prevState) => {
        return prevState + 1;
      });
    }, 1000);
  };

  return (
    <>
      <h2>useState counter example</h2>
      <section style={{ margin: "4rem 0" }}>
        <h3>regular counter</h3>
        <div style={{ padding: "30px" }}>
          <h1>{value}</h1>
          <button className="btn" onClick={() => setValue(value + 1)}>
            +
          </button>
          {/* only display reset and decrease button when value is larger than 0 */}
          {value > 0 && (
            <>
              <button className="btn" onClick={reset}>
                reset
              </button>
              <button className="btn" onClick={() => setValue(value - 1)}>
                -
              </button>
            </>
          )}
        </div>
      </section>
      <hr />
      <section style={{ margin: "4rem 0" }}>
        <h3>more complex counter</h3>
        <div style={{ padding: "30px" }}>
          <h1>{compValue}</h1>
          <button className="btn" onClick={complexIncrease}>
            increase later
          </button>
        </div>
      </section>
    </>
  );
};

export default UseStateCounter;
