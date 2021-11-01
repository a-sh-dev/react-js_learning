import { createStore } from "redux";

// Action Creators
function increment() {
  return { type: "increment" };
}

function decrement() {
  return { type: "decrement" };
}

// Reducer / Store
const initialState = 0;
const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      // if (state === 0) return 0
      return state - 1;
    default:
      return state;
  }
};

const store = createStore(countReducer);

// HTML Elements
const counterElement = document.getElementById("counter");
const incrementer = document.getElementById("incrementer");
const decrementer = document.getElementById("decrementer");

// Store State Change Listener
const render = () => {
  counterElement.innerHTML = store.getState();
};

// Call the render & subscribe to the state changes through the listener
render();
store.subscribe(render);

// DOM Event Handlers
const incrementerClicked = () => {
  store.dispatch(increment());
};
incrementer.addEventListener("click", incrementerClicked);

const decrementerClicked = () => {
  store.dispatch(decrement());
};
decrementer.addEventListener("click", decrementerClicked);
