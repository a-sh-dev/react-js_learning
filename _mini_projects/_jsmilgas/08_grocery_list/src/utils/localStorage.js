export const getLocalStorage = () => {
  let list = localStorage.getItem("groceryList");
  // check if the local storage key exists, add items to the list
  if (list) {
    return JSON.parse(localStorage.getItem("groceryList"));
  } else {
    // else create an empty array
    return [];
  }
};
