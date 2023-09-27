import React from 'react';

function Input(props) {
  const {id,label,type,value,onchange}=props
  
  return (<div  className="relative">
   <input className="black rounded-md pt-6 pb-1 px-6 w-full text-md text-white bg-neutral-700 peer focus:outline-none focus:ring-0 apearance-none  " id= {id} value={value} onChange={onchange} type={type}
   placeholder=" "/>
   
   <label htmlFor= {id}
   className= "absolute text-md text-zinc-400 duration-150 transform -translate-3 scale-75 top-4 z-10 origin-[0] left-6 peer-placeholder-shown:scale-100  peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3">
   {label}
   </label>
   
   </div>
  )
}

export default Input;