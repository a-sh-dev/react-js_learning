import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import sdata from "./../db/slider_data";

function Slider() {
  const [people, setPeople] = useState(sdata);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    } else if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  // automatic sliding
  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <>
      <section className="slider-section">
        <div className="slider-title">
          <h2 style={{ marginTop: "3rem" }}>
            <span>/</span>reviews
          </h2>
        </div>
      </section>
      <section className="section-center">
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person;

          // * Controlling the slider
          let position = "nextSlide";
          if (personIndex === index) {
            position = "activeSlide";
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = "lastSlide";
          }

          return (
            <article className={position} key={id}>
              <img src={image} alt={name} className="slider-person-img" />
              <h4>{name}</h4>
              <p className="slider-title">{title}</p>
              <p className="slider-text">{quote}</p>
              <FaQuoteRight className="slider-icon" />
            </article>
          );
        })}
        <button className="slider-prev" onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className="slider-next" onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
      </section>
    </>
  );
}

export default Slider;
