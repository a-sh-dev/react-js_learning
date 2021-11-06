import React, { useState, useEffect, useCallback, useMemo } from "react";
import { useFetch } from "../../09-custom-hooks/final/2-useFetch";

const url = "https://course-api.com/javascript-store-products";

// every time props or state changes, component re-renders

// * useMemo demo -> refer to mostExpensive() below for correspondence
const calculateMostExpensive = (data) => {
  console.log("calculating...");
  return (
    data.reduce((total, item) => {
      const price = item.fields.price;
      if (price >= total) {
        total = price;
      }
      return total;
    }, 0) / 100 // divided by 100 for cents
  );
};

const Index = () => {
  const { products } = useFetch(url);
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState(0);

  const addToCart = useCallback(() => {
    setCart(cart + 1);
  }, [cart]);

  // ! with useMemo(), it re-renders only when the 'products' changed
  const mostExpensive = useMemo(
    () => calculateMostExpensive(products),
    [products]
  );

  return (
    <>
      <h1>Count : {count}</h1>
      <button className="btn" onClick={() => setCount(count + 1)}>
        click me
      </button>
      <hr style={{ marginTop: "3em", marginBottom: "3em" }} />
      <h3>
        <span role="img" aria-label="cart" style={{ marginRight: "1em" }}>
          🛒
        </span>
        {cart}
      </h3>
      <h4 style={{ marginTop: "2em" }}>
        Most expensive item : ${mostExpensive}
      </h4>
      <hr style={{ marginTop: "3em" }} />
      <BigList products={products} addToCart={addToCart} />
    </>
  );
};

// ! Prevent re-rendering everytime counter is clicked with React.memo()
const BigList = React.memo(({ products, addToCart }) => {
  useEffect(() => {
    console.log("----- BIG LIST");
  });

  return (
    <section className="products">
      {products.map((product) => {
        return (
          <SingleProduct
            key={product.id}
            {...product}
            addToCart={addToCart}
          ></SingleProduct>
        );
      })}
    </section>
  );
});

const SingleProduct = ({ fields, addToCart }) => {
  useEffect(() => {
    console.log("> SingleProduct");
  });

  let { name, price } = fields;
  price = price / 100;
  const image = fields.image[0].url;

  return (
    <article className="product">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>${price}</p>
      <button onClick={addToCart}>add to cart</button>
    </article>
  );
};
export default Index;
