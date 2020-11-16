import React, { useContext } from "react";
import { CartContext } from "./CartContext";

const Cart = () => {
  //using the context hook to get context value
  const [cart] = useContext(CartContext);

  //calculating the total price
  let totalPrice = cart.reduce((tot, curr) => tot + curr.price, 0);
  let len = cart.length;
  console.log({ cart });

  const styleDiv = {
    //height: "500px",
    height: "84%",
    margin: "auto",
    border: "solid 2px blue",
    textAlign: "center",
    backgroundColor: "rgba(200,200,200,0.8)",
    padding: "100px",
    //backgroundColor: "white",
  };

  function displayCartProducts() {
    let buffer = [];
    if (cart.length != 0) {
      for (var i = 0; i < cart.length; i++) {
        buffer.push(
          <ol>
            <p>
              Product's Name is : <strong> {cart[i].name} </strong> <br />
              Product's Price is : <strong> {cart[i].price} </strong>
            </p>
          </ol>
        );
      } //end of for
    } //end of the if
    else {
      return <h2>please select the products from Products page</h2>;
    }
    return buffer;
  } //end of the display function

  function checkoutProducts() {
    //reset the count and price by refreshing the page
    if (cart.length > 0) {
      alert(
        `Thank you for Buying with FBI : you bought ${len} 
        products and paid ${totalPrice} dollars visit us back soon!`
      );
      window.location.reload();
      //location.reload();

      len = 0;
      totalPrice = 0;
    } else {
      alert("We apologize, you cannot checkout with no products on the cart");
    }
  }

  return (
    <div style={styleDiv}>
      <span>
        Total products on cart are: {cart.length} <br />
        <br />
        <strong>The Following are the products :</strong> <br />
        <br />
        <ol>{displayCartProducts()}</ol>
      </span>
      <br />
      <span>
        Total price for all the products is :{" "}
        <strong> {totalPrice} dollars </strong>
      </span>
      <br />
      <br />

      <button onClick={checkoutProducts}> Checkout Products </button>
      <br />
      <br />
    </div>
  );
};

export default Cart;

//https://stackoverflow.com/questions/40476075/how-to-concatenate-jsx-elements-into-an-array
