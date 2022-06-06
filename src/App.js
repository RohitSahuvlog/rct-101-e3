import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Products from "./components/Products/Products"
import Product from "./components/Products/Product/Product";
import RequiredAuth from "./hoc/RequiredAuth";
function App() {
  return (
    <div className="App">
      <Navbar/>
            
      {/* <Login/> */}
        // Code here
        <Routes>
        <Route path="/" element={
        // <RequiredAuth>

        <Home/>
        //  </RequiredAuth> 
        }/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/products" element={
        // <RequiredAuth>

        <Products/>
        // </RequiredAuth>
        }/>
     
        </Routes>
  
      
    </div>
  );
}

export default App;
