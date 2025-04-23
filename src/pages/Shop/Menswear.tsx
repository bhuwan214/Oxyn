import PuremodFooter from "../../components/Navigation/Footer";
import Navbar from "../../components/Navigation/Navbar";
import ProductData from "../../assets/data/ProductData.json"
import { ProductCard } from "../../components/Product/Product";
import { useState } from "react";


const filters= ["all","cap","shirt","jacket","pant",];

export const Menswear = () => {

  const products =ProductData.filter((product) => product.category.toLowerCase() === "male");
  const [selectedProduct, setSelectedProduct] = useState("all");

const filteredProducts = products.filter((product)=>
selectedProduct === "all"
? true
:product.type.toLowerCase() === selectedProduct.toLowerCase()
);


  return (
    <>
      <Navbar />
    
      <div className="flex flex-wrap gap-2 mx-5 my-8">
        {filters.map((filter, index) => (
          <button key={index}  onClick={()=>setSelectedProduct(filter)}
         className="px-6 py-2 text-m font-semibold border-2 rounded-full hover:bg-black hover:text-white transition"
         >
            {filter.toUpperCase()}
          </button>

        ))}
      </div>

<div className="product-section m-5">
       <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {filteredProducts.map((product) => (
                <ProductCard product={product} key={product.id} />
              ))}
            </div>
            </div>
      <PuremodFooter />
    </>
  );
};

