import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Header = () => {
  const headerStyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    textAlign: "center",
    padding: "10px  0",
    fontWeight: 700,
  };
  const [state, setState] = useState([]);

  return (
    <div style={{ height: "12%" }}>
      <header style={headerStyle}> Welcome to Your own FBI Product Shop</header>

      <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item">
          <Link
            class="nav-link "
            id="home-tab"
            data-toggle="tab"
            to="/"
            role="tab"
            aria-controls="home"
            aria-selected="true"
          >
            Home
          </Link>
        </li>
        <li class="nav-item">
          <Link
            class="nav-link"
            id="profile-tab"
            data-toggle="tab"
            to="/Product"
            role="tab"
            aria-controls="profile"
            aria-selected="false"
          >
            Products
          </Link>
        </li>
        <li class="nav-item">
          <Link
            class="nav-link"
            id="contact-tab"
            data-toggle="tab"
            to="/cart"
            role="tab"
            aria-controls="contact"
            aria-selected="false"
          >
            Cart
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;

// https://www.w3schools.com/react/react_css.asp
// https://stackoverflow.com/questions/37571418/reactnative-how-to-center-text
