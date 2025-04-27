import { FaLeaf, FaBullseye } from 'react-icons/fa';
import {Link} from 'react-router'
import ProductData from "../../assets/data/ProductData.json"

export type Product = {
  id: number;
  name: string;
  price: string;
  imgUrl?: string;
  type:string;
  category:string;
  label?: string;
  badge?: string;
};

const products =ProductData

const limitedProducts =products.slice(4,10);

const filters = ['ALL', 'SUMMER COLL.', 'NEW ARIV.', 'BEST SELL', 'FLASH'];


export const ProductCard = ({ product }:{product:Product}) => {
  return (
    <Link to={`/product/${product.id}`}>
      <div className="border p-4 shadow hover:shadow-xl  ease-in-out  hover:scale-105  whitespace-nowrap hover:whitespace-break-spaces ">
        <img src={product.imgUrl} alt={product.name} className="w-full h-64 object-cover mb-2" loading='lazy' />
        <h2 className="font-bold text-lg   text-ellipsis  overflow-hidden  ">{product.name}</h2>
        <p className="text-gray-600">{product.price}</p>
      
      </div>
    </Link>
  );
};

const ShopEssentials = () => {
  return (
    <section className="px-4 md:px-16 py-8  w-[90vw] max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">SHOP BY ESSENTIALS</h2>

      <div className="flex flex-wrap gap-2 mb-8">
        {filters.map((filter, index) => (
          <button key={index} className="px-6 py-2 text-m font-semibold border-2 rounded-full hover:bg-black hover:text-white transition">
            {filter}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2  sm:grid-cols-2  md:grid-cols-3  lg:grid-cols-4 gap-8">
        {limitedProducts.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </section>
  );
};

export default ShopEssentials;



 export const InfoSection = () => {
  return (
    <div className="flex flex-col gap-10 p-8 items-center">

      {/* Top Section */}
      <div className="flex flex-col lg:flex-row gap-6 items-stretch max-w-278 w-full max-h-120 h-full ">
        
        {/* Left Image */}
        <div className="flex-1 rounded-3xl overflow-hidden   ">
          <img 
            src="src/components/Product/images/girly.jpg" 
            alt="Model" 
            className="w-full h-full object-cover object-center rounded-3xl" 
          />
        </div>

        {/* Right Text */}
        <div className="flex-1 bg-green-800 text-white rounded-3xl p-6 flex flex-col justify-center">
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-6 ml-5">
            WE’RE CHANGING <br />THE WAY THINGS <br />GET MADE
          </h2>
          
          <div className="grid sm:grid-cols-2 gap-15 mt-4 border-1 p-10 pl-5 rounded-3xl">
            <div>
              <div className="flex items-center gap-2 text-lg font-bold">
                <FaLeaf />
                SUSTAINABILITY
              </div>
              <p className="text-sm mt-2 text-white/90">
                We’re challenging conventional retail, putting an end to toxic stock and waste.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-2 text-lg font-bold">
                <FaBullseye />
                MISSION
              </div>
              <p className="text-sm mt-2 text-white/90">
                We empower creators to make incredible, sustainable fashion.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Section */}
      <div className="flex flex-col items-center gap-10">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-center mt-5  mb-5">
          WANT TO DESIGN YOUR OWN? <br /> CALM, WE CAN DO IT
        </h2>

        <div className="rounded-3xl overflow-hidden  max-w-278 w-full">
          <img 
            src="src/components/Product/images/Customer-Support.jpg" 
            alt="Design your own" 
            className="w-full object-cover"
          />
        </div>

        <button className="mt-4 px-6 py-2 rounded-full bg-black text-white text-sm hover:bg-gray-800 transition">
          ▶ Watch to learn more
        </button>
      </div>
    </div>
  );
};
;
