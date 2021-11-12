// ! PRESENTATIONAL COMPONENT CLASS (JSX ONLY - FOR DISPLAY)
// ! FUNCTION COMPONENTS VERSION

import React from "react";
import { styles } from "../styles";
import PropTypes from "prop-types";

const images = {
  copycat:
    "https://content.codecademy.com/courses/React/react_photo_copycat.png",
  quietcat:
    "https://content.codecademy.com/courses/React/react_photo_quietcat.png"
};

export const CopyCat = ({
  name,
  value,
  handleChange,
  isCopying,
  toggleTape
}) => {
  return (
    <div style={styles.divStyles}>
      <h1>Copy Cat {name || "Tom"}</h1>
      <input type="text" value={value} onChange={handleChange} />
      <img
        src={isCopying ? images.copycat : images.quietcat}
        alt={isCopying ? "copycat" : "quietcat"}
        style={styles.imgStyles}
        onClick={toggleTape}
        data-testid="cat-image"
      />
      <p data-testid="copied-text">{isCopying && value}</p>
    </div>
  );
};

CopyCat.propTypes = {
  copying: PropTypes.bool.isRequired,
  toggleTape: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string
};
