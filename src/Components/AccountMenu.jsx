import React from 'react';
import userpng from "../images/default-blue.png";
import useCurrentUser from "../hooks/useCurrentUser";
import { useNavigate } from "react-router-dom";

function AccountMenu(props) {
  const navigate = useNavigate();
  let {data,isLoading}=useCurrentUser()
  
  
  const logout= ()=>{
    localStorage.removeItem("token")
    navigate("/auth");
  }
  if(!props.visible){
    return null
  }
  return (
  <div className="absolute top-8 right-1 md:top-16 bg-black w-48 border-gray-800 border-2  flex flex-col items-center text-sm md:text-lg ">
  <div className= "flex gap-2 my-2 w-full items-center justify-center">
  <img src= {userpng} className= "h-5 rounded-md" />
  <p> {isLoading?"Username":data.name} </p>
  </div>
  <div className= "py-2 bg-red-600 w-full text-center" 
  onClick={logout}>
  Logout
  </div>
  </div>
  )
}

export default AccountMenu;