const initialWagonState = {
  supplies: 100,
  distance: 0,
  days: 0
};

const stateReducer = (state = initialWagonState, action) => {
  switch (action.type) {
    case "gather": {
      return {
        ...state,
        supplies: state.supplies + 15,
        days: state.days + 1
      };
    }

    case "travel": {
      if (state.supplies - 20 * action.payload < 0) {
        return {
          ...state
        };
      } else {
        return {
          ...state,
          supplies: state.supplies - 20 * action.payload,
          distance: state.distance + 10 * action.payload,
          days: state.days + action.payload
        };
      }
    }

    case "tippedWagon": {
      return {
        ...state,
        supplies: state.supplies - 30,
        days: state.days + 1
      };
    }

    default: {
      return state;
    }
  }
};

// ! PLAY
let wagon = stateReducer(undefined, {});
console.log("Start game -> wagon:", wagon);

// DAY 1
// Our first day will be dedicated to travel.
wagon = stateReducer(wagon, { type: "travel", payload: 1 });
console.log("Day 1 -> wagon:", wagon);

// DAY 2
// We stop to gather supplies
wagon = stateReducer(wagon, { type: "gather" });
console.log("Day 2 -> wagon:", wagon);

// DAY 3
// We try to ford a rushing river... and our wagon tips over,
// spilling some supplies
wagon = stateReducer(wagon, { type: "tippedWagon" });
console.log("Day 3 -> wagon:", wagon);

// DAY 4
// We set out for a long 3 days travel
wagon = stateReducer(wagon, { type: "travel", payload: 3 });
console.log("Day 4 to Day 7 -> wagon:", wagon);

// DAY 8
// Running out of supplies!
wagon = stateReducer(wagon, { type: "travel", payload: 1 });
console.log("Day 8 -> wagon:", wagon);

// DAY 8
// Gather instead!
wagon = stateReducer(wagon, { type: "gather" });
console.log("Day 8 -> wagon:", wagon);
