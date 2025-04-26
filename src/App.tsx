import { BrowserRouter,Routes,Route } from "react-router";
import HomePage from "./pages/Home/HomePage";
// import ShopPage from './pages/Shop/ShopPage';
import Menswear from "./pages/Shop/Menswear";
import Child from "./pages/Shop/Child";
import Womenswear from "./pages/Shop/Womenswear";
import ProductDetail from "./pages/ProductDetail";
import "./index.css";
import CartSidebar from "./components/CartSidebar";
import {Toaster} from "react-hot-toast";


function App(){
  return(
    <>
    <Toaster position="top-center "  reverse-Order={false}/>
    <CartSidebar/>

    <BrowserRouter>
    <Routes>
<Route path="/" element ={<HomePage/>}/>
{/* <Route path="/shop" element ={<ShopPage/>}/> */}
<Route path="/menswear" element= {<Menswear/>}/>
<Route path="/womenswear" element= {<Womenswear/>}/>
<Route path="/kids" element= {<Child/>}/>
<Route path="/product/:id" element={<ProductDetail />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;