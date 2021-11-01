import React from "react";
import Review from "./components/Review";
import Slider from "./components/Slider";
// import { FaGithubSquare } from "react-icons/fa";

function App() {
  return (
    <main>
      <section className="container">
        <div className="title">
          <h2 style={{ marginTop: "5rem" }}>What they say</h2>
          <div className="underline"></div>
        </div>
        <Review />
      </section>
      <section className="slider-cont">
        <Slider />
      </section>
    </main>
  );
}

export default App;
