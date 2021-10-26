import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(firstName, email);
    //* Control submit only accepts non-empty value
    if (firstName && email) {
      // console.log("submit form");
      // const person = { firstName: firstName, email: email };
      const person = {
        id: new Date().getTime().toString(),
        firstName,
        email
      };
      console.log(person);
      setPeople((people) => {
        return [...people, person];
      });
      // clear input fields after submit
      setFirstName("");
      setEmail("");
    } else {
      console.log("empty input values");
    }
  };

  return (
    <>
      <h3 style={{ marginBottom: "3rem" }}>controlled inputs</h3>
      <article>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="firstName">Name : </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email : </label>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit">add person</button>
        </form>
        {people.map((person) => {
          const { id, firstName, email } = person;
          return (
            <div className="item" key={id}>
              <h4>{firstName}</h4>
              <p>{email}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
