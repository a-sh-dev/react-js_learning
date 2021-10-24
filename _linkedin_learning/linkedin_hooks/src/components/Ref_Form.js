import React, { useRef } from "react";

export function FormRef() {
  const sound = useRef();
  const color = useRef();

  function handleSubmit(event) {
    event.preventDefault();
    const soundVal = sound.current.value;
    const colorVal = color.current.value;
    alert(`${soundVal} sounds like ${colorVal}`);
    // reset form after submit
    sound.current.value = "";
    color.current.value = "";
  }

  return (
    <div>
      <h2>useRef Hook</h2>
      <form onSubmit={handleSubmit}>
        <input ref={sound} type='text' placeholder='Sound...' />
        <input ref={color} type='color' />
        <br />
        <button>ADD</button>
      </form>
    </div>
  );
}
