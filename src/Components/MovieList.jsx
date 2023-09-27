import React from "react";
import useMovieList from "../hooks/useMovieList";
import useFavorate from "../hooks/useFavorate";
import MovieCard from "./MovieCard";

function MovieList(props) {
  const { data, isLoading } = useMovieList();
  const { data:favorate } = useFavorate();
  if(isLoading){
    return null
  }

  return (
    <>
  
    <div className="px-4 md:px-12 space-y-8 mt-8">
      <div>
        <p className="text-white text-md md:text-2xl font-semibold mb-4">
          {props.title}
        </p>
        <div className="grid grid-cols-2  md:grid-cols-4 gap-2">
          {data.map((movie) => (
            <MovieCard data={movie}/>
         ))}
        </div>
        
        
      </div>
    </div>
    
    
    
    <div className="px-4 md:px-12 space-y-8 mt-8">
      <div>
        <p className="text-white text-md md:text-2xl font-semibold mb-4">
          My List
        </p>
        <div className="grid grid-cols-2 gap-2">
          {favorate?.map((movie) => (
            <MovieCard data={movie}/>
         ))}
        </div>
        
        
      </div>
    </div>
    </>
  );
}

export default MovieList;
