import { useParams } from "react-router";
import ProductData from "../assets/data/ProductData.json"

const Products = ProductData;
const productSize = ["S","M","L","XL","XXL"]


const ProductDetail = () => {
  const { id } = useParams();
  const product = Products.find((p) => p.id.toString() === id);

  if (!product) return <p>Product not found</p>;

  return (
    <div className="p-4 sm:p-8 md:p-10 max-w-6xl mx-auto md:flex gap-8 md:flex-end ">
      <img src={product.imgUrl} className="w-full h-[500px] object-cover object-center  rounded-lg mb-6" />
     <div className="description md:flex flex-col md:justify-end justify-center gap-1   sm:w-[50%] mb-4  ">
      <h1 className="text-3xl font-bold md:w-[70%] w-full">{product.name}</h1>
      <div className="text-2xl   text-gray-700 mb-4 ">{product.price}</div>
      <h2 className="text-xl  font-semibold ">Description and fits</h2>
      <p className="text-xl p-2  w-full sm:w-[300px] md:w-[400px] lg:w-[500px]  text-gray-600 ">{product.description}</p>
     <SizeButton/>
     <div className="btn md:w-full  flex justify-center ">
     <button className="bg-black w-[80%]   text-white px-6 py-2 mt-4 mb-4">Add to Cart</button>

     </div>
    </div>
    </div>
  );
};

function SizeButton (){
  return(
    <>
    <div className="size-section  flex justify-center">
    {

      productSize.map((size,index)=>
      <button
      key={index}
      className={`px-5 md:px-6 py-2 text-m font-semibold border-2 rounded-full hover:bg-black hover:text-white transition m-2`}
      >{size}
      </button>

      )
    }
    </div> 
    </>
  )
}

function suggestion(){

  return(
  <>

  </>
  )
}


export default ProductDetail;
