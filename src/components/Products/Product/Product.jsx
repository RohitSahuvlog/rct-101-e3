import React, { useContext } from "react";
import { useState } from "react";
import { CartContext } from "../../../context/CartContext";
const Product = (props) => {
  // Note: this id should come from api
  // const product = { id: 1 };
  const {id,name,description}=props
  console.log(props)
  const [data, setData] = useState([]);
  const [add,setadd]=useState(true)
  // const  {count ,setcount}=useContext(CartContext)

  const AddClick=()=>{
    setadd(!add)
  }

 
  return (
    <div data-cy={`product-${id}`}>
      <h3 data-cy="product-name">{name}</h3>
      <h6 data-cy="product-description"> {description}</h6>
      {add ?   (<button data-cy="product-add-item-to-cart-button" onClick={AddClick}>Add to card</button>): 
    
      (<div>
        <button data-cy="product-increment-cart-item-count-button" 
       >+</button>
        <span data-cy="product-count">
       8
      </span>
        <button data-cy="product-decrement-cart-item-count-button" 
       >-</button>
        <button data-cy="product-remove-cart-item-button" >x</button>
        </div>)
      }
     
    </div>
  );
};

export default Product;
