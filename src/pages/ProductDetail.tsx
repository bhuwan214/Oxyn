import { useParams } from "react-router";
import ProductData from "../assets/data/ProductData.json"

const Products = ProductData


const ProductDetail = () => {
  const { id } = useParams();
  const product = Products.find((p) => p.id.toString() === id);

  if (!product) return <p>Product not found</p>;

  return (
    <div className="p-10 max-w-3xl mx-auto md:flex gap-6 md:flex-end ">
      <img src={product.imgUrl} className="w-full h-[500px] object-cover object-center  rounded-lg mb-6" />
     <div className="description md:flex flex-col md:justify-end justify-center  w-100% sm:w-[50%] mb-3 ">
      <h1 className="text-3xl font-bold">{product.name}</h1>
      <p className="text-xl mt-2 w-100% sm:w-[300px] md:w-[400px] lg:w-[550px] ">{product.description}</p>
      <div className="text-2xl mt-3 text-gray-700  ">{product.price}</div>
      <button className="bg-black text-white px-6 py-2 mt-4 mb-4">Add to Cart</button>
    </div>
    </div>
  );
};

export default ProductDetail;
