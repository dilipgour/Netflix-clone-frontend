import React from "react";
import FavorateButton from './FavoriteButton';
import {
  AiFillPlayCircle,
  AiOutlineHeart,
  
} from "react-icons/ai";
import { useNavigate } from "react-router-dom";
function MovieCard(props) {
  const navigate = useNavigate();
  
  return (
    <div className="group bg-zinc-900 col-span relative h-[12vh]">
      <img
        src={props.data.thumbnailUrl}
        className="h-[12vh] rounded-md object-cover cursor-pointer shadow-xl transition duration group-hover:opacity-90 sm:group-hover:opacity-0 w-full delay-300"
      />

      <div className="absolute top-0 z-10 transition duration-200 invisible sm:visible w-full scale-0 group-hover:scale-110 group-hover:-translate-y-[6vw] group-hover:translate-x-[2vw] group-hover:opacity-100">
        <img
          src={props.data.thumbnailUrl}
          className="h-[12vh] w-full transition object-cover cursor-pointer duration shadow-xl rounded-t-md"
        />
        
        <div className="z-10 absolute transition p-2 bg-zinc-800 md:p-4 shadow-md rounded-b-md w-full">
          <div className=" flex flex-row items-center gap-3 ">
            <div className=" cursor-pointer w-6 h-6 md:w-10 md:h-10 bg-white rounded-full flex justify-center items-center transition hover:bg-neutral-300 ">
              <AiFillPlayCircle onClick={()=>{navigate(`/watch/${props.data._id}`)}} className="text-2xl" />
            </div>

            <div className="cursor-pointer ml-auto group/item h-6 w-6 md:h-10 md:w-10 border-white border-2 rounded-full flex justify-center items-center transition hover:bg-neutral-300">
            
          <FavorateButton movieId={ props.data._id}/>
            </div>
          </div>
          <p className="text-green-400 font-semibold mt-4">
            
            New <span className="text-white mx-2 ">2023 </span>
          </p>
          
           <div className="flex flex-row mt-4 gap-2 items-center"> 
            <p className="text-white text-[10px] lg:text-sm">{props.data.duration}</p>
          </div>
                    <div className="flex flex-row items-center gap-2 mt-4 text-[8px] text-white lg:text-sm">
            <p>{props.data.genre}</p>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
