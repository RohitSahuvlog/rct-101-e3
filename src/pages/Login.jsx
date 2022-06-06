import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios"
import { Navigate } from "react-router-dom";


const Login = () => {
  const [email,setemail]=useState("")
  const [password,setpassword]=useState("")
  const [state,dispatch]=useContext(AuthContext)


const onSubmit=(e)=>{
  e.preventDefault();
  axios({
    url: "https://reqres.in/api/login",
    method: "POST",
    data: {
      email,
      password
    }
  })
    .then((res) => {
      alert("success");
      dispatch({
        type: "LOGIN_SUCCESS",
        token: res.data.token
      });
    })
    .catch((err) => {
      console.log(err.message);
      alert("error");
    });

}
if(state.Auth){
  return <Navigate to={"/products"}/>
}

  return (
    <div>
    <form onSubmit={onSubmit}>
      <input data-cy="login-email"  value={email} onChange={(e)=>setemail(e.target.value)}/>
      <input data-cy="login-password" value={password} onChange={(e)=>setpassword(e.target.value)}/>
      <button data-cy="login-submit">login</button>
      </form>
    </div>
  );
};

export default Login;
