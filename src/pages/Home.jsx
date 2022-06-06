import React from "react";
import { Navigate } from "react-router-dom";

const Home = () => {
  return <div>
 <Navigate to={"/products"}/>
  </div>;
};

export default Home;
