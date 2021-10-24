import React from "react";
import { useInput } from "./useInput";

export function ControlledForm() {
  const [titleProps, resetTitle] = useInput("");
  const [colorProps, resetColor] = useInput("#000000");

  function handleSubmit(e) {
    e.preventDefault();
    alert(`${titleProps.value} sounds like ${colorProps.value}`);
    // reset values
    resetTitle();
    resetColor();
  }

  return (
    <div>
      <h2>Controlled Form</h2>
      <form onSubmit={handleSubmit}>
        <input {...titleProps} type='text' placeholder='Type something...' />
        <input {...colorProps} type='color' />
        <br />
        <button>Add</button>
      </form>
    </div>
  );
}
