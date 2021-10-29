import React, { useState, useReducer } from "react";
import Modal from "./Modal";
// import { data } from "../../../data";

// * Refractored index.js
// reducer function
import { reducer } from "./reducer";

// default state object
const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: ""
};

const Index = () => {
  const [name, setName] = useState("");
  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      const newPerson = { id: new Date().getTime().toString(), name };
      dispatch({ type: "ADD_PERSON", payload: newPerson });
      // clear input field
      setName("");
      console.log(state);
      console.log(dispatch);
    } else {
      dispatch({ type: "NO_VALUE" });
    }
  };

  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  return (
    <>
      <h3 style={{ marginBottom: "3rem" }}>useReducer</h3>
      {state.isModalOpen && (
        <Modal closeModal={closeModal} modalContent={state.modalContent} />
      )}
      <form onSubmit={handleSubmit} className="form">
        <div style={{ padding: "1rem" }}>
          <h2 style={{ marginBottom: "2rem", marginTop: "1rem" }}>
            add a person
          </h2>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit">add</button>
      </form>
      {state.people.map((person) => {
        return (
          <div key={person.id} className="item">
            <h4>{person.name}</h4>
            <button
              onClick={() => {
                dispatch({
                  type: "REMOVE_PERSON",
                  payload: person.id
                });
              }}
            >
              remove
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Index;
