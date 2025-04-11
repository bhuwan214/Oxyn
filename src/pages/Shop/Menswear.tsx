
const products = [
  {
    id: 1,
    name: "Oversized Graphic T-Shirt",
    price: "₹799",
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?fit=crop&w=500&q=80",
  },
  {
    id: 2,
    name: "Distressed Denim Jacket",
    price: "₹2,499",
    image: "https://images.unsplash.com/photo-1600185365223-6d6d11f844b3?fit=crop&w=500&q=80",
  },
  {
    id: 3,
    name: "Slim Fit Cargo Pants",
    price: "₹1,599",
    image: "https://images.unsplash.com/photo-1523381294911-8d3cead13475?fit=crop&w=500&q=80",
  },
  {
    id: 4,
    name: "Urban Hoodie",
    price: "₹1,299",
    image: "https://images.unsplash.com/photo-1618354691214-f0ac2f0e7eac?fit=crop&w=500&q=80",
  },
];

const Menswear = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>🔥 Trendy Men's Clothing</h2>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: '1px solid #ddd',
              borderRadius: '8px',
              padding: '1rem',
              width: '220px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{ width: '100%', borderRadius: '6px', marginBottom: '0.5rem' }}
            />
            <h3 style={{ fontSize: '1.1rem', margin: '0.5rem 0' }}>{product.name}</h3>
            <p style={{ color: '#555' }}>{product.price}</p>
            <button style={{
              marginTop: '0.5rem',
              backgroundColor: '#000',
              color: '#fff',
              padding: '0.5rem 1rem',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menswear;
