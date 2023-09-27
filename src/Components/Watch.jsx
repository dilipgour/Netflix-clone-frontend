import React from 'react';
import {
useParams
} from "react-router-dom";
import useMovie from "../hooks/useMovie"
import FavorateButton from './FavoriteButton';
import MovieList from './MovieList';
import {
  AiOutlineArrowLeft
  
} from "react-icons/ai";

import { useNavigate } from "react-router-dom";

  

function Watch() {
const navigate = useNavigate();
  let { id } = useParams();
  const{data:movie,isLoading}=useMovie(id)
  
  if(isLoading){
      return null
    }
  
  return ( 
    <>
    <div className= "w-full h-[56.25vw] ">
    <div className="absolute top-2 left-4 z-50 text-lg md:text-4xl" onClick={()=>{navigate('/')}}>
    <AiOutlineArrowLeft className="text-white"/>
    </div>
  <video poster={!isLoading?movie.thumbnailUrl:""} className="w-full h-[56.25vw] brightness-[100%] object-cover transition duration-500"  controls muted  src= {!isLoading?movie.videoUrl:""}></video>
  </div>
  
  <p className= "text-white text-lg mt-4 mx-4 md:mx-8 ">{movie?.title.charAt(0).toUpperCase()+movie?.title.slice(1)}</p>
   <p className= "text-zinc-400 text-sm my-2  mx-4 md:mx-8">{movie?.duration}</p>
    <p className= "text-zinc-400 text-sm my-2  mx-4 md:mx-8">{movie?.genre}</p>
   <p className= "text-zinc-300 text-sm my-2  mx-4 md:mx-8"> {movie.description}</p>
   
    <div className="cursor-pointer group/item  my-4  mx-4 md:mx-8 h-6 w-6 md:h-10 md:w-10 border-white border-2 rounded-full flex justify-center items-center transition hover:bg-neutral-300">
            
          <FavorateButton movieId={movie._id}/>
            </div>
            
            <div className= "pb-40">
     <MovieList title= "More like this"/>
     </div>
  
   
  </>
    
  )
}

export default Watch;