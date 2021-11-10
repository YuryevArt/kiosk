import React from "react";
import { CounterBody, CountButton, CountValue } from "./CartItemCounter.style";

function CartItemCounter({count, index, setCart}) {
    // 
  const minusCount = () => {
    setCart((prevstate) => {
      if (prevstate[index].quantity === 1) {
        return [...prevstate];
      } else {
        prevstate[index].quantity--;
        console.log("prevstate",{...prevstate})
        return [...prevstate];
      }
    });
  };
    // 

    // 
  const plusCount = () => {
    setCart((prevstate) => {
      prevstate[index].quantity++;
      return [...prevstate];
    });
  };
    //   
  return (
    <CounterBody>
      <CountButton onClick={minusCount}>-</CountButton>
      <CountValue>{count}</CountValue>
      <CountButton onClick={plusCount}>+</CountButton>
    </CounterBody>
  );
}

export default CartItemCounter;
