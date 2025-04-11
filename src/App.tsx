import { BrowserRouter,Routes,Route } from "react-router";
import HomePage from "./pages/Home/HomePage";
// import ShopPage from './pages/Shop/ShopPage';
import Menswear from "./pages/Shop/Menswear";
import Child from "./pages/Shop/Child";
import Womenswear from "./pages/Shop/Womenswear";
import Sales from "./pages/Shop/Sales";
import "./index.css";

function App(){
  return(
    <BrowserRouter>
    <Routes>
<Route path="/" element ={<HomePage/>}/>
{/* <Route path="/shop" element ={<ShopPage/>}/> */}
<Route path="/menswear" element= {<Menswear/>}/>
<Route path="/womenswear" element= {<Womenswear/>}/>
<Route path="/kids" element= {<Child/>}/>
<Route path="sale" element={<Sales/>}/>



    </Routes>
    </BrowserRouter>
  )
}

export default App;