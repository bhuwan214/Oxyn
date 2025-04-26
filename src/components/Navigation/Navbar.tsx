import { Link } from 'react-router';
import { useEffect, useRef, useState } from 'react';
import SearchBar from './SearchComponent/SearchBar';
import { IoMenu, IoClose } from "react-icons/io5";
import { NavLink } from 'react-router';
import { useCart } from '../../context/CartContext';
import { FaShoppingCart } from "react-icons/fa";

function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
const menuRef =useRef<HTMLDivElement>(null);

const {toggleCart,cart} = useCart();
const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);


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



  return (
    <nav className="bg-slate-800 text-white p-4 pl-10 pr-5 relative">
      <div className="container mx-auto flex justify-between items-center">

        <Link to="/" className="text-3xl font-bold">Oxyn</Link>
    
        {/* Desktop Menu */}
        <div className="category hidden md:flex space-x-6 gap-8 capitalize">
        <NavLink to="/menswear"   style={({ isActive }) => ({ color: isActive ? "yellow" : "white",})}  className="hover:text-yellow-300 transition-colors" >Menswear</NavLink>
        <NavLink to="/womenswear" style={({ isActive }) => ({ color: isActive ? "yellow" : "white",})}  className="hover:text-yellow-300 transition-colors" >Womenswear</NavLink>
        <NavLink to="/kids" style={({ isActive }) => ({ color: isActive ? "yellow" : "white",})}  className="hover:text-yellow-300 transition-colors" >Kids</NavLink>

        </div>

        {/* Right Side Buttons */}
        <div className="flex items-center gap-5">
          <SearchBar/>

          <button 
            onClick={toggleCart}
            className="flex items-center bg-yellow-500 hover:bg-yellow-400 text-slate-900 px-4 py-2 rounded-full font-medium transition-colors relative"
          >
              <FaShoppingCart />
        {totalItems > 0 && (
          <span className="absolute -top-2 -right-2 text-xs bg-red-600 text-white w-5 h-5 rounded-full flex items-center justify-center">
            {totalItems}
          </span>
        )}
      </button>

          <button onClick={toggleMenu} className="md:hidden">
          {(!isMenuOpen)?<IoMenu className="ham-menu text-3xl" />:<IoClose className="ham-menu text-3xl" />}  
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div ref={menuRef}
        className={`md:hidden absolute top-17 right-0 w-50 bg-slate-800 text-white flex flex-col items-start gap-4 p-4  z-50
        transition-all duration-300 ease-in-out 
        ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}
      >
        <NavLink to="/menswear"   style={({ isActive }) => ({ color: isActive ? "yellow" : "white",})}  className="hover:text-yellow-300" onClick={toggleMenu}>Menswear</NavLink>
        <NavLink to="/womenswear" style={({ isActive }) => ({ color: isActive ? "yellow" : "white",})}  className="hover:text-yellow-300" onClick={toggleMenu}>Womenswear</NavLink>
        <NavLink to="/kids" style={({ isActive }) => ({ color: isActive ? "yellow" : "white",})}  className="hover:text-yellow-300" onClick={toggleMenu}>Kids</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
