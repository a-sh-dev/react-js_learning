import React, { useState } from "react";

// ! useState Hooks

export function Checked() {
  const [checked, setChecked] = useState(false);

  return (
    <div>
      <input
        type='checkbox'
        value={checked}
        onChange={() => {
          setChecked(!checked);
        }}
      />
      <p>{checked ? "checked" : "not checked"}</p>
    </div>
  );
}
