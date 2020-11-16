import React, { useState, useContext } from "react";
//use the custom Hook that was created in the customHook.js file by importing it
import useOrderHook from "./customHook.js";
import { CartContext } from "./CartContext";

const Product = (props) => {
  const [cart, setCart] = useContext(CartContext);

  const addToCart = (product) => {
    console.log("clicked... Add to Cart Button");
    setCart((curr) => [...curr, product]);
  };
  const product = { name: props.name, price: props.price };
  console.log(cart);
  // const product = {...props}
  return (
    <div>
      <h4>Product Name :{props.name}</h4>
      <br />
      <h4>Product Price: {props.price}</h4>
      <br />
      <h4>Product Description :</h4>
      <p> {props.description} </p>
      <br />
      <img
        src={props.image}
        width="100px"
        height="200px"
        style={{ objectFit: "cover" }}
      />

      <button onClick={() => addToCart(product)}>Add to Cart</button>

      <hr />
    </div>
  );
};

export default Product;

//resources :custom hooks
//https://medium.com/@svsh227/create-and-use-the-custom-hook-in-react-app-from-scratch-74801aafb89d
//https://dev.to/spukas/react-hooks-creating-custom-state-hook-300c
//https://egghead.io/lessons/react-handle-multiple-state-values-when-using-usestate-react-hook
