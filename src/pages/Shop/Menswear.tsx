import PuremodFooter from "../../components/Navigation/footer";
import Navbar from "../../components/Navigation/Navbar";
import ProductData from "../../assets/data/ProductData.json"
import { ProductCard } from "../../components/Product/Product";

export const Menswear = () => {

  const products =ProductData.filter((product) => product.sex.toLowerCase() === "male");
  return (
    <>
      <Navbar />

<div className="product-section m-5">
       <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {products.map((product) => (
                <ProductCard product={product} key={product.id} />
              ))}
            </div>
            </div>
      <PuremodFooter />
    </>
  );
};

