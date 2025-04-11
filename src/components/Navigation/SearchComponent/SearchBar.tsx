import { useState, useRef } from 'react';
import { LuSearch } from "react-icons/lu";
import { IoMdCloseCircle } from "react-icons/io";

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClear = () => {
    setQuery('');
    inputRef.current?.focus();
  };

  return (
    <div
      className={`
        flex items-center bg-white text-black px-2 py-1 rounded-full transition-all duration-300 ease-in-out h-9
        ${isFocused ? 'w-60' : 'w-35'} 
        md:w-auto
      `}
    >
      <input
        ref={inputRef}
        type="text"
        value={query}
        placeholder="Search"
        onFocus={() => setIsFocused(true)}
        onBlur={() => !query && setIsFocused(false)}
        onChange={(e) => setQuery(e.target.value)}
        className="bg-transparent outline-none w-25 flex-grow px-2 text-sm md:text-base"
      />

      <span
        className="cursor-pointer text-gray-600 hover:text-black"
        onMouseDown={(e) => e.preventDefault()}
        onClick={query ? handleClear : undefined}
      >
        {isFocused && query ? (
          <IoMdCloseCircle className="text-xl md:text-2xl" />
        ) : (
          <LuSearch className="text-xl md:text-2xl" />
        )}
      </span>
    </div>
  );
};

export default SearchBar;
