import  { useState, useRef } from 'react';
import './SearchBar.css';
import { LuSearch } from "react-icons/lu";
import { IoMdCloseCircle } from "react-icons/io";

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);

  const handleClear = () => {
    setQuery('');
    inputRef.current.focus();
  };

  return(
    <div className="search-container">
      <input
        ref={inputRef}
        type="text"
        value={query}
        placeholder="Search"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={(e) => setQuery(e.target.value)}
        className='bg-white text-black w-40'
      />
      <span
        className="icon"
        onMouseDown={(e) => e.preventDefault()} // Prevent blur
        onClick={query ? handleClear : null}
      >
        {isFocused && query ? <IoMdCloseCircle className="text-2xl"/> :<LuSearch className="text-2xl"/>}
      </span>
    </div>
  );
};

export default SearchBar;
