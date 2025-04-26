// components/CartSidebar.tsx
import { useCart } from "../context/CartContext";

const CartSidebar = () => {
  const { cart, removeFromCart, isCartOpen } = useCart();

  return (
    <div className={`absolute top-17 right-0 w-80 bg-white shadow-lg h-full z-50 transition-transform ${isCartOpen ? "translate-x " : "translate-x-full hidden"}`}>
      <h2 className="text-lg font-bold p-4 border-b">Your Cart</h2>
      <div className="p-4 space-y-4">
        {cart.length === 0 ? (
          <p className="text-gray-500">Cart is empty</p>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="flex justify-between items-center border-b pb-2">
              <div>
                <p className="font-semibold">{item.name}</p>
                <p>Qty: {item.quantity}</p>
                <p>{item.price}</p>
              </div>
              <button
                className="text-red-500 hover:cursor-pointer"
                onClick={() => removeFromCart(item.id)}
              >
                ✕
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CartSidebar;
