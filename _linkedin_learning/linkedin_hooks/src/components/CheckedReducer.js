import React, { useReducer } from "react";

export function Checked() {
  const [checked, toggleCheck] = useReducer((checked) => !checked, false);

  return (
    <>
      <input type='checkbox' value={checked} onChange={toggleCheck} />
      <span>{checked ? " checked" : " not checked"}</span>
    </>
  );
}
