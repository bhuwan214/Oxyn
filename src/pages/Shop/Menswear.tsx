import { useState } from "react";
import { ProductCard } from "../../components/Product/Product";
import{ CategoryFilterSort }from "../../hooks/SortFilter";

type Product = {
  id: number;
  name: string;
  price: string;
  type: string;
  category: string;
  imgUrl?: string;
};

function Menswear (){
  const [visibleProducts, setVisibleProducts] = useState<Product[]>([]);

  return (
    <>
      {/* <Navbar /> */}

   <CategoryFilterSort category="male"  onFilterChange={setVisibleProducts}/>

      <div className="product-section m-5">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {visibleProducts.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Menswear;