import React from 'react';
import {
  Routes,
  BrowserRouter,
  Route,
} from "react-router-dom";
import Auth from './Components/Auth';
import Watch from './Components/Watch';
import Home from './Components/Home';
import './index.css';

function App() {

 return (  <BrowserRouter> 

 
  <Routes>
  <Route path = "/" element = { <Home/>
  }/> 
  <Route path = "/auth" element = { <Auth/>
  }/> 
  <Route path = "/watch/:id" element = { <Watch/>} />
  </Routes> 
  </BrowserRouter> 
  );
  
}

export default App;






//Dynamic Routing 


// import React from "react";
//   
// import {
//   Routes,
//   BrowserRouter,
//   Route,
//   useParams
// } from "react-router-dom";
//   
// function BlogPost() {
//   let { id } = useParams();
//   return <div style={{ fontSize: "50px" }}>
//            Now showing post {id}
//          </div>;
// }
//   
// function Home() {
//   return <h3>home page </h3>;
// }
//   
// function App() {
//   return (
//    <BrowserRouter>
//    <Routes > 
//    <Route path = "/" element = { <Home/>}/>
//   <Route path = "/page/:id" element = { <BlogPost/>} />
// 
//   </Routes > </BrowserRouter>
//   );
// }
//   
// export default App
// 


