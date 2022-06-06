import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // const {count ,setcount}=useState(1)
  // const handleincre=(value)=>{
  //   setcartcount(value+cartcount)
  //     }
  return <CartContext.Provider  >{children}</CartContext.Provider>;
};
