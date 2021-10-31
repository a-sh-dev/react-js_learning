import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  // Each review is navigated through the index
  const [index, setIndex] = useState(0);
  // Desctrucute 'people' properties from data
  // Since the reviews are only displayed once per time
  // We only access it through the index
  const { name, image, text, job } = people[index];

  // Access index only within the length of data
  const checkNumber = (number) => {
    // if number is greater than the length, go back to 0
    if (number > people.length - 1) {
      return 0;
      // if number is 0, go to the last index
    } else if (number < 0) {
      return people.length - 1;
    } else {
      return number;
    }
  };

  // button functions
  const handleNext = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const handlePrev = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  const randomPerson = () => {
    let randomIndex = Math.floor(Math.random() * people.length);
    // Preventing duplicates of random number
    if (randomIndex === index) {
      randomIndex = index + 1;
    }
    console.log(randomIndex);
    setIndex(checkNumber(randomIndex));
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={handlePrev}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={handleNext}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomPerson}>
        surprise me
      </button>
    </article>
  );
};

export default Review;
