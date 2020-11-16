import React, { useState } from "react";
//This component takes care of the form
//it will receive the arguments , also can say arguments passed from
//Parent to child component
const AddToCart = (props) => {
  const [product, setProduct] = useState("");

  const handleChange = (event) => {
    setProduct(event.target.value);
  };

  //when the user hits the submit button , what other chnages needs to be
  //made will be handled by handle submit
  //for example addin
  const handleSubmit = (event) => {
    event.preventDefault();
    //This function is passed as an argument from App.jsx
    props.addProduct(product);
    //setting the product back to empty to let reenter the value
    setProduct("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="item">Enter Product: </label>
      <input
        type="text"
        id="product"
        name="name"
        onChange={handleChange}
        value={product}
      />
      <input type="submit" value="Add Product" />
    </form>
  );
};

/*
notes regarding the event handlers 
1. handleChange : handles the event that detects the change in the input form 
2. handleSubmit : handles the event that detects the submit in th form 

*/

export default AddToCart;
