import { forwardRef } from 'react';
import { useCart } from "../context/CartContext";

const CartSidebar = forwardRef<HTMLDivElement>((props, ref) => {
  const { cart, removeFromCart, isCartOpen } = useCart();

  return (
    <div
      ref={ref}
      className={`fixed top-18 right-0 w-80 bg-gray-100 shadow-lg h-full z-50 transform transition-transform duration-300 ease-in-out ${
        isCartOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <h2 className="text-lg font-bold p-4 border-b text-black">Your Cart</h2>

      <div className="p-4 space-y-4 overflow-y-auto h-[calc(100%-4rem)] ">
        {cart.length === 0 ? (
          <p className="text-gray-500">Cart is empty</p>
        ) : (

          cart.map((item) => (
            <div key={`${item.id}-${item.size}`} className="flex items-center gap-4 border-b pb-2">
            
              <img src={item.imgUrl} alt={item.name} className="w-16 h-16 object-cover rounded" />
              <div className="flex flex-col flex-grow text-black">
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm ">Qty: {item.quantity}</p>
                <p className="text-sm ">Size: {item.size || "N/A"}</p>
                <p className="text-sm font-bold">{item.price}</p>
              </div>
              <button
                className="text-red-500 hover:text-red-700 text-2xl"
                onClick={() => removeFromCart(item.id, item.size)}
              >
                ✕
              </button>
            </div>
          
          ))
      
        )}
      </div>
    </div>
  );
});

export default CartSidebar;
