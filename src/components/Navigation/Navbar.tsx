import { Link } from 'react-router';
import { useEffect, useRef, useState } from 'react';
import SearchBar from './SearchComponent/SearchBar';
import { IoMenu, IoClose } from "react-icons/io5";


function Navbar() {
  // const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
const menuRef =useRef<HTMLDivElement>(null);

const toggleMenu =()=> setMenuOpen(prev=>!prev);

//Handle click outside 
useEffect(()=>{
const handleClickOutside =(event:MouseEvent)=>{
  if (menuRef.current && !menuRef.current.contains(event.target as Node)){
    setMenuOpen(false);
  }
}

if (isMenuOpen) {
  document.addEventListener('mousedown', handleClickOutside);
}

return () => {
  document.removeEventListener('mousedown', handleClickOutside);
};

},[isMenuOpen])
  // const toggleCart = () => {
  //   setIsCartOpen(!isCartOpen);
  // };



  return (
    <nav className="bg-slate-800 text-white p-4 pl-10 pr-5 relative">
      <div className="container mx-auto flex justify-between items-center">

        <Link to="/" className="text-3xl font-bold">Oxyn</Link>
    
        {/* Desktop Menu */}
        <div className="category hidden md:flex space-x-6 gap-8 capitalize">
          <Link to="/menswear" className="hover:text-yellow-300 transition-colors">Menswear</Link>
          <Link to="/womenswear" className="hover:text-yellow-300 transition-colors">Womenswear</Link>
          <Link to="/kids" className="hover:text-yellow-300 transition-colors">Kids</Link>
          <Link to="/sale" className="hover:text-yellow-300 transition-colors">Sale</Link> 
        </div>

        {/* Right Side Buttons */}
        <div className="flex items-center gap-5">
          <SearchBar/>

          <button 
            // onClick={toggleCart}
            className="flex items-center bg-yellow-500 hover:bg-yellow-400 text-slate-900 px-4 py-2 rounded-full font-medium transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </button>

          <button onClick={toggleMenu} className="md:hidden">
          {(!isMenuOpen)?<IoMenu className="ham-menu text-3xl" />:<IoClose className="ham-menu text-3xl" />}  
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div ref={menuRef}
        className={`md:hidden absolute top-15 left-103.5 w-50 bg-slate-800 text-white flex flex-col items-start gap-4 p-4 z-10 
        transition-all duration-300 ease-in-out 
        ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}
      >
        <Link to="/menswear" className="hover:text-yellow-300" onClick={toggleMenu}>Menswear</Link>
        <Link to="/womenswear" className="hover:text-yellow-300" onClick={toggleMenu}>Womenswear</Link>
        <Link to="/kids" className="hover:text-yellow-300" onClick={toggleMenu}>Kids</Link>
        <Link to="/sale" className="hover:text-yellow-300" onClick={toggleMenu}>Sale</Link>
      </div>
    </nav>
  );
}

export default Navbar;
