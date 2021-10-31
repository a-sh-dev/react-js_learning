import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

// Define the categories array for the initialState categories
// * Set() returns unique values
// First sort string (without mutating original items)
const sortedItems = [...items].sort((a, b) => {
  return a.category < b.category ? -1 : 1;
});
console.log(sortedItems);
console.log(items);

const allCategories = [
  "all",
  ...new Set(sortedItems.map((item) => item.category))
];
console.log(allCategories);

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  // Filtering function based on category
  const filterItems = (category) => {
    // set the 'all' category
    if (category === "all") {
      setMenuItems(items);
      return;
    }

    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu section"></section>
      <div className="title">
        <h2>our menu</h2>
        <div className="underline"></div>
      </div>
      <Categories categories={categories} filterItems={filterItems} />
      <Menu items={menuItems} />
    </main>
  );
}

export default App;
