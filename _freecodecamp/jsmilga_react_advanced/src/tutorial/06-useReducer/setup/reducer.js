export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_PERSON":
      const newPeople = [...state.people, action.payload];
      return {
        ...state,
        people: newPeople,
        isModalOpen: true,
        modalContent: "new person added"
      };

    case "NO_VALUE":
      return {
        ...state,
        isModalOpen: true,
        modalContent: "Value must not be empty"
      };

    case "CLOSE_MODAL":
      return {
        ...state,
        isModalOpen: false
      };

    case "REMOVE_PERSON":
      const removePerson = state.people.filter(
        (person) => person.id !== action.payload
      );
      return {
        ...state,
        people: removePerson,
        isModalOpen: true,
        modalContent: "a person is removed"
      };

    default:
      throw new Error("No matching action type");
  }
};
