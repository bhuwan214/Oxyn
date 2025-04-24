import PuremodFooter from "../../components/Navigation/Footer";
import Navbar from "../../components/Navigation/Navbar";
// import ProductData from "../../assets/data/ProductData.json"
import { ProductCard } from "../../components/Product/Product";
import { CategoryFilterSort} from "../../hooks/SortFilter";
import { useState } from "react";
// import { CategoryFilter, SortDropdown } from "../../hooks/SortFilter";

type Product = {
  id: number;
  name: string;
  price: string;
  type: string;
  category: string;
  imgUrl?: string;
};

function Child(){
 const [visibleProducts,setVisibleProducts]=useState<Product[]>([])

  return (
  
    <>
      <Navbar />
      <div className="md:flex flex-row justify-between flex-wrap">
        {/* <CategoryFilter selected={selectedProduct} setSelected={setSelectedProduct} filters={filters} />
        <SortDropdown sortBy={sortBy} setSortBy={setSortBy} /> */}
        <CategoryFilterSort onFilterChange={setVisibleProducts} />

      </div>



      <div className="product-section m-5">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {visibleProducts.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </div>
      <PuremodFooter />
    </>
  );
};

export default Child;