import { useState,useCallback ,useEffect} from "react";
import logo from "./logo.png";
import userpng from "../images/default-blue.png";
import NavbarItem from "./NavbarItem"
import AccountMenu from "./AccountMenu"
import Mobilemenu from "./Mobilemenu"
import {BsChevronDown,BsSearch,BsBell} from 'react-icons/bs';
const TOP_OFFSET= 66
function Navbar() {
  const [showmenu, setShowmenu] = useState(false);
  const [showAcmenu, setShowmAcmenu] = useState(false);
  const [navbg, setNavbg] = useState(false);
  
  
  
  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY)
      if (window.scrollY >= TOP_OFFSET) {
        setNavbg(true)
      } else {
        setNavbg(false)
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);



    
   const togglemenu=useCallback(() => {
    showmenu? setShowmenu(false):setShowmenu(true)
  }, [showmenu]);
  const toggleAcmenu=useCallback(() => {
    showAcmenu? setShowmAcmenu(false):setShowmAcmenu(true)
  }, [showAcmenu]);
  return (
  <nav className= "w-full fixed z-50 font-light">
  <div className= {`py-2 px-2 md:px-8 md:py-8 flex flex-row items-center transition duration-500 justify-between ${navbg?'bg-zinc-900':''}`}>
  
  <img  className= "h-4 md:h-5"  src={logo} />
  <div className= "flex-row ml-8 gap-7 hidden md:flex ">
  <NavbarItem label= "Home"/>
  <NavbarItem label= "Movies"/>
<NavbarItem label= "Shows"/>
<NavbarItem label= "My List "/>
  </div>
  <div className= "md:hidden flex flex-row ml-8 cursor-pointer relative items-center gap-2 ">
  <p className= "text-white text-sm"> Browse </p>
  <BsChevronDown className= { `text-white ${showmenu?"rotate-180":"rotate-0"}`} onClick= {togglemenu}/>
  <Mobilemenu visible={showmenu}/>
  </div>
  <div className= "flex flex-row gap-4 md:gap-8 ml-auto items-center text-lg ">
  <div className= "text-gray-200 hover:text-gray-300 cursor-pointer">
  <BsSearch className= "text-white"/>
  </div>
  <div className= "text-gray-200 hover:text-gray-300 cursor-pointer">
  <BsBell className= "text-white"/>
  </div>
  <div className= "text-gray-200 hover:text-gray-300 cursor-pointer">
  <img src= {userpng} className= "h-5 rounded-md" onClick={toggleAcmenu}/>
  
  <AccountMenu visible= {showAcmenu}/>
  </div>
  
  </div>
  </div>
  
  
  
  </nav>
  )
}

export default Navbar;