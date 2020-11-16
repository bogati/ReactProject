
import React, { useEffect, useState } from 'react';

import Header from './components_product/Header';
import Footer from './components_product/Footer';
import Home from './components_product/Home';






const App = () => {

 
      const [shoppingList, setShoppingList] = useState([]);
    
      const addProduct = (item) => {
        setShoppingList([
          ...shoppingList,
          {
            name: item,
            id: shoppingList.length + 1,
            checked: false,
          },
        ]);
      };
    
      const removeProduct = (id) => {
        const filtered = shoppingList.filter((entry) => entry.id !== id);
        setShoppingList(filtered);
      };
    
      return (
        
        // <div>
        //   <ShoppingList shoppingList={shoppingList} removeProduct={removeProduct} />
        //   <AddToCart addProduct={addProduct}/>
        // </div>
       <> 
        <Home/>
        </>
        
       
      );
  
    
    


  
   
};

export default App;

/*

CODE FOR LATER :
<ShoppingList shoppingList={shoppingList} removeProduct={removeProduct} />
<AddToCart addProduct={addProduct}/>

import React, { useState } from 'react';
import AddToList from './components/AddToList';
import ShoppingList from './components/ShoppingList';

const App = () => {

    const [shoppingList, setShoppingList] = useState([]);

    const addItems = item => {
        setShoppingList([...shoppingList, 
            {
                name: item, 
                id:(shoppingList.length + 1), 
                checked:false 
            }]);
    }

    const removeItem = id => {
        const filtered = shoppingList.filter(entry=> entry.id !== id);
        setShoppingList(filtered);
    }

    return (
        <div>
            <ShoppingList shoppingList={shoppingList} removeItem={removeItem} />
            <AddToList addItems={addItems}/>
        </div>
    );
};

export default App;
*/

