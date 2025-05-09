import { useParams } from "react-router";
import ProductData from "../assets/data/ProductData.json"
import { ProductCard } from "../components/Product/Product";
import { useEffect,useState } from "react";
import {useCart} from "../context/CartContext"
import { toast } from "react-hot-toast";


const Products = ProductData;
const productSize = ["S", "M", "L", "XL", "XXL"]

type Product = {
  id: number;
  name: string;
  price: string;
  type: string;
  category: string;
  imgUrl?: string;
};

type SizeButtonProps = {
  selectedSize: string;
  setSelectedSize: (size: string) => void;
};





const ProductDetail = () => {
  const { addToCart } = useCart();
  const { id } = useParams();
  const product = Products.find((p) => p.id.toString() === id);
  const [selectedSize, setSelectedSize] = useState<string>("");

  const [isAnimating, setIsAnimating] = useState(false);

  const handleAddToCart = () => {

    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 300);
    
    if (!selectedSize) {
      toast.error("Please select a size before adding to cart.");
      return;
    }
    if (!product) return; // Safe check

  const productToAdd = {
    ...product,
    size: selectedSize,
    quantity: 1, 
  };

  addToCart(productToAdd);

    toast.success('Item added to cart!', {
      style: {
        borderRadius: '10px',
        background: 'white',
        color: 'black',
      },
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) return <p>Product not found</p>;


  return (

    <>
    
      <div className="px-4 md:px-16 py-8 flex items-center  flex-col   w-[100vw]  ">

        <div className=" sm:p-8 md:p-10 w-[80vw] flex flex-col  lg:flex-row md:flex-col gap-8 md:flex-end  ">
          <img src={product.imgUrl} className="w-full h-[500px] object-cover object-center  rounded-lg mb-2" />
          <div className="description md:flex flex-col md:justify-end sm:justify-center gap-1  sm:w-[90%] mb-4 ">
            <h1 className="text-3xl font-bold md:w-[90%] w-full ">{product.name}</h1>
            <div className="text-2xl   text-gray-700 mb-4 ">{product.price}</div>
            <h2 className="text-xl  font-semibold  ">Description and fits</h2>
            <p className="text-xl p-2  w-full sm:w-[500px] md:w-[600px] lg:w-[500px]  text-gray-600 ">{product.description}</p>
            <SizeButton selectedSize={selectedSize} setSelectedSize={setSelectedSize} />
            <div className="btn md:w-full  flex justify-center ">
              <button
               className={`bg-black w-[80%] text-white px-6 py-2 mt-4 mb-4 transition-transform duration-300 hover:cursor-pointer ${
                isAnimating ? "scale-90" : ""
              }`}
               onClick={handleAddToCart}
               >
                Add to Cart
               </button>
            </div>
          </div>
        </div>

        <Suggestion currentProduct={product} />
      </div>
    
    </>
  );
};

function SizeButton ({ selectedSize, setSelectedSize }: SizeButtonProps) {
  return (
    <>
      <div className="size-section  flex justify-center ">
        {

          productSize.map((size, index) =>
            <button
              onClick={() => setSelectedSize(size)}
              key={index}
              className={`px-5 md:px-6 py-2 text-m font-semibold border-2 rounded-full m-1 md:m-3 transition ${
                selectedSize === size
                  ? "bg-black text-white"
                  : "border-2 hover:bg-black hover:text-white"
              }`}   
               >{size}
            </button>

          )
        }
      </div>
    </>
  )
}

type Props ={
  currentProduct:Product
}


function Suggestion({currentProduct}:Props) {
 
  const similarProducts = Products.filter(
    (p) => p.type === currentProduct.type && p.id !== currentProduct.id
  );

  const limitedSuggestions = similarProducts.slice(0, 5);

  return (
    <div className="mt-12">
      <h2 className="text-3xl font-light mb-4 text-center ">You might also like</h2>
      {limitedSuggestions.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6 justify-center">
          {limitedSuggestions.map((product) => (
            <ProductCard product={product} key={product.id}  />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No similar products found.</p>
      )}
    </div>
  

  
  )
}


export default ProductDetail;
