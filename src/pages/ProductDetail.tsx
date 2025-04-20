import { useParams } from "react-router";

const dummyProductData = 
 [

        { id: 1, name: 'BENIES', price: '$100', imgUrl: 'src/components/Product/images/hat1.jpg', label: 'NEW ARRIVAL' },
        { id: 2, name: 'JOGGER', price: '$90', imgUrl: 'src/components/Product/images/jogger.jpg', badge: 'GET OFF 20%' },
        { id: 3, name: 'CARDIGAN', price: '$80', imgUrl: 'src/components/Product/images/knits.jpg' },
        { id: 4, name: 'PANTS', price: '$98', imgUrl: 'src/components/Product/images/sweeter.jpg' },
        { id: 5, name: 'JACKETS', price: '$120', imgUrl: 'src/components/Product/images/carhartt.jpg', label: 'ADD TO CART' },
        { id: 6, name: 'CASUAL CAPS', price: '$88', imgUrl: 'src/components/Product/images/caps.jpg' },
    
    
];

const ProductDetail = () => {
  const { id } = useParams();
  const product = dummyProductData.find((p) => p.id.toString() === id);

  if (!product) return <p>Product not found</p>;

  return (
    <div className="p-10 max-w-3xl mx-auto">
      <img src={product.imgUrl} className="w-full h-[400px] object-cover rounded-lg mb-6" />
      <h1 className="text-3xl font-bold">{product.name}</h1>
      <p className="text-xl mt-2">{product.price}</p>
      <button className="bg-black text-white px-6 py-2 mt-4">Add to Cart</button>
    </div>
  );
};

export default ProductDetail;
