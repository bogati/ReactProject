import {useState} from 'react';

function useOrderHook (props) {
    //https://dev.to/spukas/react-hooks-creating-custom-state-hook-300c
    //with this approach the price and the count will not be updated at the same time
    //const [state, setState] = useState({count:0, price:0});

    const [count, setCount] = useState(0);
    const [price, setPrice] = useState(0);
    /*
    const [totOrderPrice, setTotPrice] = useState({totPrice:0});

    const changetotOrderPrice = () =>{
        setTotPrice({totPrice:totOrderPrice.totPrice+1});
    }
    */


    const changeCount = () => {
        //updating the state of the count with this function
        setCount(count+1);
           
    }
    const changePrice = () => {
        //updating the state of the price with this function
        setPrice(price+props.price);
        
    }

    const changeBoth = () =>{
        setCount(count+1);
        setPrice(price+props.price);

    }



    
    
    console.log("count is "+count);
    console.log("price is "+price);

    
    

    return {count,changeCount,price,changePrice,changeBoth};


}

export default useOrderHook;