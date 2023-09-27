import React from 'react';

function Mobilemenu(props) {
  if(!props.visible){
    return null
  }
  
  return (
    
  <div className= "bg-black w-56 absolute top-5 left-0 py-5 flex-col border-2 border-gray-800 flex transition">
  <div className= " flex flex-col gap-2">
  <p className= "text-white cursor-pointer text-center hover:underline"> Home </p>
  <p className= "text-white cursor-pointer text-center hover:underline">  Movies </p>
   <p className= "text-white cursor-pointer text-center hover:underline">  Shows </p>
 <p className= "text-white cursor-pointer text-center hover:underline">  My List </p>
  </div>
  
  </div>
  )
}

export default Mobilemenu;