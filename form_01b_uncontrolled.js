//! Uncontrolled form using React.createRef() 

import ReactDOM from "react-dom";
import React from "react";

function PhoneNumberForm() {
  const numberRef = React.createRef();

  const handleSubmit = (e) => {
    e.preventDefault(); 
    
    const number = numberRef.current.value;

    if (!Number.isNaN(Number(number))) {
      alert('Error: Only numbers allowed.')
    }
    else if (number.length <= 10) {
      alert('Error: Number length exceeded 10 digits.')
    }
    else {
      alert(`Sending confirmation code to ${number}.`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Phone Number:
        <input type="tel" ref={numberRef} />
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