import Navbar from "../../components/Navigation/Navbar";
import "./HomePage.css";

function HomePage() {
  return (
    <div>
      <Navbar />
      <div className="container flex justify-center mx-auto px-4 py-8">
        <div className="bento-box">
          <div className="box box1 flex flex-col justify-between ">
            <h1
              className="flex flex-col">FOR <img src="src\assets\images\Arrow 1.svg"alt="" className=" w-60"/> EveryOne but Notanyone </h1>

            <h5 className="p-[20px] pb-10">
              We establish personal relationship with our boutiques to make sure
              each is vetted for a stress-free shopping experience
            </h5>
          </div>
          <div className="box box2 bg-green-200 "></div>
          <div className="box box3 bg-amber-300"></div>
          <div className="box box4 bg-red-400"></div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
