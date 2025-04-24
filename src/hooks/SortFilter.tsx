import { useEffect, useState } from "react";
import ProductData from "../assets/data/ProductData.json";

type Product = {
  id: number;
  name: string;
  price: string;
  type: string;
  category: string;
  imgUrl?: string;
};

type Props = {
  onFilterChange: (sortedProducts: Product[]) => void;
};

export const CategoryFilterSort: React.FC<Props> = ({ onFilterChange }) => {
  const [selectedProduct, setSelectedProduct] = useState("all");
  const [sortBy, setSortBy] = useState<string>("latest");

  const filters = ["all", "cap", "shirt", "jacket", "pant"];
  const products: Product[] = ProductData.filter(
    (product) => product.category.toLowerCase() === "male"
  );

  // Handle sorting and filtering logic and notify parent
  useEffect(() => {
    const filteredProducts = products.filter((product) =>
      selectedProduct === "all"
        ? true
        : product.type.toLowerCase() === selectedProduct.toLowerCase()
    );

    const sorted = [...filteredProducts].sort((a, b) => {
      const priceA = parseFloat(a.price.replace("$", ""));
      const priceB = parseFloat(b.price.replace("$", ""));

      if (sortBy === "low") return priceA - priceB;
      if (sortBy === "high") return priceB - priceA;
      if (sortBy === "latest") return b.id - a.id;
      return 0;
    });

    onFilterChange(sorted);
  }, [selectedProduct, sortBy]);

  return (
    <>
          <div className="md:flex flex-row justify-between flex-wrap">
      <div className="flex flex-wrap gap-2 mx-5 my-8">
        {filters.map((filter, index) => (
          <button
            key={index}
            onClick={() => setSelectedProduct(filter)}
            className={`px-6 py-2 text-m font-semibold border-2 rounded-full hover:bg-black hover:text-white transition ${
              selectedProduct === filter
                ? "bg-black text-white"
                : "bg-white text-black border-black"
            }`}
          >
            {filter.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="mx-5 flex justify-center my-8">
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
      </div>
    </>
  );
};
