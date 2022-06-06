import React from "react";
import { useState } from "react";
import { Link, Navigate, useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import Product from "./Product/Product";

const Products = () => {
const [data, setData] = useState([]);


  useEffect(() => {
   
    axios({
      url: "http://localhost:8080/products",
      method: "GET",
    
    })
      .then((res) => {
        console.log(res.data)
        setData(res.data);
      })
      .catch((err) => {});
  }, []);


  return <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gridGap:"10px"}}>
    {data.map((item)=>{
      {/* console.log(item) */}
 
       return  <Product key={item.id} {...item}/>
 
  
    })}
  </div>;
};

export default Products;
