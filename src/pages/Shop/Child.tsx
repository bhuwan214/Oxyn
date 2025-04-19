import Navbar from "../../components/Navigation/Navbar";
import PuremodFooter from "../../components/Navigation/footer";


function Child() {
  return (
   <>
<Navbar/>
   <div className="h-[60vh]">
    <h1>This is kids page </h1>
   </div>
  <PuremodFooter/>
   </>
  )
}

export default Child
