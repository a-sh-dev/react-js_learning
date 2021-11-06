import React from "react";
import PropTypes from "prop-types";
import defaultImage from "../../../assets/default-image.jpeg";

const Product = ({ image, name, price }) => {
  // if image property exist, use image.url
  const imgUrl = image && image.url;

  return (
    <article className="product">
      <img src={imgUrl || defaultImage} alt={name || "default image"} />
      <h4>{name}</h4>
      <p>${price || 99.99}</p>
    </article>
  );
};

// name of the component + propTypes
Product.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
};

// default property values to handle error
// if not using short circuit operators
// Product.defaultProps = {
//   name: "product name",
//   price: 99.99,
//   image: defaultImage
// };

export default Product;
