import React from 'react';
import useBillboard from "../hooks/useBillboard";
import {AiOutlineInfoCircle,AiFillPlayCircle} from 'react-icons/ai';
import { useNavigate } from "react-router-dom";

function Billboard() {
  const navigate = useNavigate();
  const{data,isLoading}=useBillboard()
  return (
    
  <div className= "w-full h-[56.25vw] relative">
  <video poster={!isLoading?data.thumbnailUrl:""} className="w-full h-[56.25vw] brightness-[60%] object-cover transition duration-500"  muted loop src= {!isLoading?data.videoUrl:""}></video>
  <div className= "absolute top-[30%] md:top-[40%] ml-4 md:ml-16">
  <p className= "text-white text-xl md:text-6xl w-[50%] h-full font-bold drop-shadow-xl">
   {!isLoading?data.title:""}
  </p>
  <p className= "text-white mt-3 md:text-xl text-[8px] w-[90%] md:w-[80%] drop-shadow-xl md:mt-8 ">
  {!isLoading?data.description:""}
  </p>
  
  <div className="flex flex-row items-center mt-3 md:mt-4 gap-3">
  
   <button className= "text-white bg-white bg-opacity-30 rounded-md py-1 px-2 md:py-2 md:px-4 w-auto flex flex-row text-xs md:text-md hover:bg-opacity-20 font-semibold transition items-center"  onClick={()=>{navigate(`/watch/${data?._id}`)}}>
  <AiFillPlayCircle className= "mr-1 text-sm"/>
 Play now
  </button>
  
  
  <button className= "text-white bg-white bg-opacity-30 rounded-md py-1 px-2 md:py-2 md:px-4 w-auto flex flex-row text-xs md:text-md hover:bg-opacity-20 font-semibold transition items-center">
  <AiOutlineInfoCircle className= "mr-1 text-sm "/>
 more info
  </button>
      </div>
  
    </div>
  </div>
  )
}

export default Billboard;