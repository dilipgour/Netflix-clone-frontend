import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from './Navbar';
import Billboard from './Billboard';
import MovieList from './MovieList';

 function Home() {
   const navigate = useNavigate();
   
   useEffect(() => {
     if(!localStorage.getItem('token')){
       navigate("/auth");
     }
   }, []);
  
  
 
  
  return (
    <>
     <Navbar/>
     <Billboard/>
     <div className= "pb-40">
     <MovieList title= "Tranding Now"/>
     </div>
     

    </>
  )
}

export default Home;