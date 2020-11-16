import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css"
//getting access the ./components/App file 
//import App from './components/App';
//getting Access tp App.js that is outside of the component folder 
import App from './App';
import Home from './components_product/Home';


ReactDOM.render(
    <App/>,
   document.getElementById("root")
);


/*
//Test the shopping cart example 
import React, { Component } from 'react';
import { render } from 'react-dom';
//import './style.css';
import { TshirtList } from './shoppingcartexample/TshirtList';
import { Cart } from './shoppingcartexample/Cart';
import { CartProvider } from './shoppingcartexample/CartContext';

const App = () => {
  return (
    <CartProvider>
      <div>
        <Cart />
        <TshirtList />
      </div>
    </CartProvider>
  )
}

render(<App />, document.getElementById('root'));
*/

