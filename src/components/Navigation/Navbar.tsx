import { Link, NavLink } from 'react-router';
import { useEffect, useRef, useState } from 'react';
import SearchBar from './SearchComponent/SearchBar';
import { IoMenu, IoClose } from "react-icons/io5";
import { useCart } from '../../context/CartContext';
import { FaShoppingCart } from "react-icons/fa";
import CartSidebar from "../CartSidebar"

function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const cartButtonRef = useRef<HTMLButtonElement>(null);
  const cartSidebarRef = useRef<HTMLDivElement>(null);

  const { toggleCart, cart, isCartOpen } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const toggleMenu = () => setMenuOpen(prev => !prev);

  // 🔥 Handle clicks outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      if (menuRef.current && !menuRef.current.contains(target)) {
        setMenuOpen(false);
      }

      if (
        cartSidebarRef.current &&
        !cartSidebarRef.current.contains(target) &&
        cartButtonRef.current &&
        !cartButtonRef.current.contains(target)
      ) {
        if (isCartOpen) toggleCart(); // Only close if cart is open
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isCartOpen, toggleCart]);

  return (
    <nav className="bg-slate-800 text-white p-4 pl-10 pr-5 relative">
      <div className="container mx-auto flex justify-between items-center">

        <Link to="/" className="text-3xl font-bold">Oxyn</Link>

        {/* Desktop Menu */}
        <div className="category hidden md:flex space-x-6 gap-8 capitalize">
          <NavLink to="/menswear" className={({ isActive }) => isActive ? "text-yellow-300" : "hover:text-yellow-300"}>
            Menswear
          </NavLink>
          <NavLink to="/womenswear" className={({ isActive }) => isActive ? "text-yellow-300" : "hover:text-yellow-300"}>
            Womenswear
          </NavLink>
          <NavLink to="/kids" className={({ isActive }) => isActive ? "text-yellow-300" : "hover:text-yellow-300"}>
            Kids
          </NavLink>
        </div>

        {/* Right Side Buttons */}
        <div className="flex items-center gap-5">
          <SearchBar />

          <button
            ref={cartButtonRef}
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

          {isCartOpen && (
            <CartSidebar ref={cartSidebarRef} />
          )}


          <button onClick={toggleMenu} className="md:hidden">
            {isMenuOpen ? <IoClose className="ham-menu text-3xl" /> : <IoMenu className="ham-menu text-3xl" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`md:hidden absolute top-17 right-0 w-50 bg-slate-800 text-white flex flex-col items-start gap-4 p-4 z-50
        transition-all duration-300 ease-in-out
        ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}
      >
        <NavLink to="/menswear" onClick={toggleMenu} className={({ isActive }) => isActive ? "text-yellow-300" : "hover:text-yellow-300"}>
          Menswear
        </NavLink>
        <NavLink to="/womenswear" onClick={toggleMenu} className={({ isActive }) => isActive ? "text-yellow-300" : "hover:text-yellow-300"}>
          Womenswear
        </NavLink>
        <NavLink to="/kids" onClick={toggleMenu} className={({ isActive }) => isActive ? "text-yellow-300" : "hover:text-yellow-300"}>
          Kids
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
