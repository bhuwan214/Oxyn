
type Product = {
  id: number;
  name: string;
  price: string;
  imgUrl: string;
  label?: string;
  badge?: string;
};

const products: Product[] = [
    { id: 1, name: 'BENIES', price: '$100', imgUrl: 'src/components/Product/images/hat1.jpg', label: 'NEW ARRIVAL' },
    { id: 2, name: 'JOGGER', price: '$90', imgUrl: 'src/components/Product/images/jogger.jpg', badge: 'GET OFF 20%' },
    { id: 3, name: 'CARDIGAN', price: '$80', imgUrl: 'src/components/Product/images/knits.jpg' },
    { id: 4, name: 'PANTS', price: '$98', imgUrl: 'src/components/Product/images/sweeter.jpg' },
    { id: 5, name: 'JACKETS', price: '$120', imgUrl: 'src/components/Product/images/carhartt.jpg', label: 'ADD TO CART' },
    { id: 6, name: 'CASUAL CAPS', price: '$88', imgUrl: 'src/components/Product/images/caps.jpg' },
  ];

const filters = ['ALL', 'SUMMER COLL.', 'NEW ARIV.', 'BEST SELL', 'FLASH'];

export const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg border-2 hover:shadow-lg h-130 transition-all">
      <div className="relative">
        <img src={product.imgUrl} alt={product.name} className="w-full h-100  object-cover object-center" />
        {product.label && (
          <span className="label absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded">{product.label}</span>
        )}
        {product.badge && (
          <span className=" badge absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">{product.badge}</span>
        )}
      </div>
      <div className="p-3 text-center">
        <h3 className="product-name text-lg font-bold ">{product.name}</h3>
        <p className=" product-price text-sm text-gray-500">{product.price}</p>
      </div>
    </div>
  );
};

const ShopEssentials = () => {
  return (
    <section className="px-4 md:px-16 py-8  w-[80vw]">
      <h2 className="text-3xl font-bold mb-4">SHOP BY ESSENTIALS</h2>

      <div className="flex flex-wrap gap-2 mb-8">
        {filters.map((filter, index) => (
          <button key={index} className="px-6 py-2 text-m font-semibold border-2 rounded-full hover:bg-black hover:text-white transition">
            {filter}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </section>
  );
};

export default ShopEssentials;
