import Navbar from "../../components/Navigation/Navbar";
import PuremodFooter from "../../components/Navigation/Footer";
import ProductData from "../../assets/data/ProductData.json"
import { ProductCard } from "../../components/Product/Product";
import { useState } from "react";
import { CategoryFilter, SortDropdown } from "../../hooks/SortFilter";


function Child() {
  const [selectedProduct, setSelectedProduct] = useState("all");
  const [sortBy, setSortBy] = useState<string>("latest");

  const filters = ["all", "cap", "shirt", "jacket", "pant"];
  const products = ProductData.filter(
    (product) => product.category.toLowerCase() === "kids"
  );
  const filteredProducts = products.filter((product) =>
    selectedProduct === "all"
      ? true
      : product.type.toLowerCase() === selectedProduct.toLowerCase()
  );

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    const priceA = parseFloat(a.price.replace("$", ""));
    const priceB = parseFloat(b.price.replace("$", ""));

    if (sortBy === "low") return priceA - priceB;
    if (sortBy === "high") return priceB - priceA;
    if (sortBy === "latest") return b.id - a.id; // Assuming higher ID is newer
    return 0;
  });

  return (
    <>
      <Navbar />

      <div className="md:flex flex-row justify-between flex-wrap">
        <CategoryFilter
          selected={selectedProduct}
          setSelected={setSelectedProduct}
          filters={filters}
        />
        <SortDropdown sortBy={sortBy} setSortBy={setSortBy} />
      </div>
      <div className="product-section m-5">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {sortedProducts.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </div>
      <PuremodFooter />
    </>

  )
}

export default Child
