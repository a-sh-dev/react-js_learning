import React from "react";
import "./App.css";
import BusinessList from "../BusinessList/BusinessList";
import SearcBar from "../SearchBar/SearchBar";

const business = {
  imageSrc: "https://content.codecademy.com/programs/react/ravenous/pizza.jpg",
  name: "MarginOtto Pizzeria",
  address: "1010 Paddington Way",
  city: "Flavortown",
  state: "NY",
  zipCode: "10101",
  category: "Italian",
  rating: 4.5,
  reviewCount: 90,
};

const businesses = [business, business, business, business, business, business];

function App() {
  const searchYelp = (term, location, sortBy) => {
    console.log(
      `Searching Yelp for ${term}, ${location}, based on the ${sortBy}`
    );
  };

  return (
    <div className="App">
      <h1>ravenous</h1>
      <SearcBar searchYelp={searchYelp} />
      <BusinessList businesses={businesses} />
    </div>
  );
}

export default App;
