
const PuremodFooter = () => {
  return (
    <footer className="bg-black text-white py-10 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        {/* Brand Column */}
        <div>
          <h2 className="text-2xl font-bold mb-2 leading-tight">
            OXYN
          </h2>
          <p className="text-xs mt-2 text-gray-400">
            FOR EVERYONE BUT NOTANYONE
          </p>
        </div>

        {/* Product Links */}
        <div>
          <h3 className="font-semibold mb-3">PRODUCT</h3>
          <ul className="space-y-1 text-gray-300">
            <li><a href="#">Jackets</a></li>
            <li><a href="#">Shirts</a></li>
            <li><a href="#">Dresses</a></li>
            <li><a href="#">Outwears</a></li>
            <li><a href="#">Hats</a></li>
          </ul>
        </div>

        {/* Buying Links */}
        <div>
          <h3 className="font-semibold mb-3">BUYING</h3>
          <ul className="space-y-1 text-gray-300">
            <li><a href="#">Shop</a></li>
            <li><a href="#">Terms of Use</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">How it works</a></li>
            <li><a href="#">Customer Service</a></li>
          </ul>
        </div>

        {/* Social + Newsletter */}
        <div>
          <h3 className="font-semibold mb-3">SOCIAL</h3>
          <ul className="space-y-1 text-gray-300 mb-4">
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
          </ul>
          <h3 className="font-semibold mb-2">JOIN OUR COMMUNITY</h3>
          <form className="flex items-center border border-gray-600 rounded px-2 py-1">
            <input
              type="email"
              placeholder="EMAIL ADDRESS"
              className="bg-black text-white outline-none w-full placeholder-gray-400 text-xs"
            />
            <button type="submit" className="ml-2 text-white text-lg">→</button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default PuremodFooter;
