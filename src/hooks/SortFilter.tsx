// import React from "react";

type SortDropdownProps = {
  sortBy: string;
  setSortBy: (value: string) => void;
};

export const SortDropdown: React.FC<SortDropdownProps> = ({ sortBy, setSortBy }) => {
  return (
    <div className="mx-5 flex justify-center my-8  ">
      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="border-2 p-2 rounded-md shadow-sm"
      >
        <option value="latest">Latest</option>
        <option value="low">Price: Low to High</option>
        <option value="high">Price: High to Low</option>
      </select>
    </div>
  );
};


// CategoryFilter.ts

type CategoryFilterProps = {
  selected: string;
  setSelected: (value: string) => void;
  filters: string[];
};

export const CategoryFilter: React.FC<CategoryFilterProps> = ({ selected, setSelected, filters }) => {
  return (
    <div className="flex flex-wrap gap-2 mx-5 my-8 ">
      {filters.map((filter, index) => (
        <button
          key={index}
          onClick={() => setSelected(filter)}
          className={`px-6 py-2 text-m font-semibold border-2 rounded-full hover:bg-black hover:text-white transition ${
            selected === filter ? "bg-black text-white" : "bg-white text-black border-black"
          }`}
        >
          {filter.toUpperCase()}
        </button>
      ))}
    </div>
  );
};
