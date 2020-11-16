import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
} from "react-router-dom";

import ProductsList from "./ProductsList";

import axios from "axios";

//use the custom Hook that was created in the customHook.js file by importing it
import useOrderHook from "./customHook.js";
import Cart from "./Cart";
import { CartContext, CartProvider } from "./CartContext";

const Home = () => {
  const styleBody = {
    minHeight: "84%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
  const styleDiv = {
    //height: "500px",
    width: "75%",
    margin: "auto",
    border: "solid 2px blue",
    textAlign: "center",
    backgroundColor: "rgba(200,200,200,0.8)",
    //backgroundColor: "white",
  };

  const [state, setState] = useState([]);
  const [statePic, setStatePic] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (window.location.pathname === "/") getApiAxiosImage();
  }, []);

  const getApiAxios = (resource, id) => {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/${resource}${id ? `/${id}` : ""}`
      )
      .then((response) => {
        // console.log(response);
        // console.log(response.data);
        setState(response.data);
      });
  };

  const clearState = () => {
    setState([]);
  };

  const getApiAxiosImage = (resource) => {
    setLoading(true);
    axios
      .get(`https://picsum.photos/v2/list?page=2&limit=1`)
      .then((response) => {
        //check to see if the response data has any array values
        if (response.data.length) {
          setStatePic(response.data[0].download_url);
          //console.log(response.data[0]);
          //console.log(response.data[0].download_url);
        }

        setLoading(false);
      });
  };

  const clearStatePic = () => {
    setStatePic([]);
  };
  //<div style={{ ...styleBody, backgroundImage: `url(${statePic})` }}>
  //using the spread operator for preserving previous style properties
  const contentsHome = () => {
    return (
      <div style={{ ...styleBody, backgroundImage: `url(${statePic})` }}>
        <div style={styleDiv}>
          <h5>
            {" "}
            Hello Ladies/Gentlemen, Thank you for visiting our products site!
          </h5>
          We are 24 hour open to those destined to save this nation <br />
          Products available are: <br />
          <ul style={{ listStyle: "none" }}>
            <strong> Study materials </strong>
            <li>cyber-crime articles, exclusive terrorism documentary </li>
            <li> Mind Hunter DVD </li>
            <strong>Books to help FBI understand criminal mindset</strong>{" "}
            <br />
            <li>How to lie with Statistics </li>
            <li>How to pass a lie detector test </li>
            <li>
              The art of Lie How the Manipulation of Language affects our minds
            </li>
            <li>The power of positive No </li>
          </ul>
          <strong>
            We will soon be having database of collections for your convenience
          </strong>
          <br />
          <p>
            If you want more resources please feel free to reach out to us at
            <br></br> 888-456-8900
          </p>
        </div>
      </div>
    );
  };

  if (loading)
    return (
      <div>
        <p>Loading..</p>
      </div>
    );
  return (
    <CartProvider>
      <Router>
        <Header />
        <Switch>
          <Route path="/Product">
            <ProductsList />
          </Route>
          <Route exact path="/">
            {/* function call to add contents to the container  */}
            {contentsHome()}
          </Route>

          <Route path="/Cart">
            <Cart />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </CartProvider>
  );
};

export default Home;

/*

TEST CODE :

              <li>The total count is {count}</li>
              <li>The total price is {price}</li>

              <button onClick={changeCount}> Increase Product </button>
              <button onClick={changePrice}>Increase Price</button>

              //taking care of using the count and price state globally
              //order hook returns the state and functions that will change the state
              const c = 20;
              const p = 30;
              const { count, changeCount, price, changePrice } = useOrderHook({
                count: c,
                price: p,
              });
              //const temp = orderHook.changeCount1();

              */
