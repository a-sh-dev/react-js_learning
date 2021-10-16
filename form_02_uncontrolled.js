//! Uncontrolled form using React.createRef() => for <input type="file" />

import ReactDOM from "react-dom";
import React, { useState } from "react";

function PhoneNumberForm() {
  const fileRef = React.createRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const size = fileRef.current.files[0].size;
    alert(
      `This file is ${size} bytes`
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input type="file" ref={fileRef} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

const app = document.getElementById('app');

ReactDOM.render(
  <PhoneNumberForm />,
  app
);