// ! CUSTOM HOOK
// used for controlled form - if there is any input, we can use this custom hook

import { useState } from "react";

export function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  // this hook returns an pair in an array
  return [
    {
      value,
      onChange: (e) => setValue(e.target.value)
    },
    // cleanup function
    () => setValue(initialValue)
  ];
}
