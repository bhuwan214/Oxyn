import Navbar from "../../components/Navigation/Navbar";
import "./HomePage.css";
import CursorFollower from "../../components/UI/CustomCursor";
import { FaStarOfLife } from "react-icons/fa";
import  ShopEssentials, { InfoSection }  from "../../components/Product/Product";
import PuremodFooter from "../../components/Navigation/Footer";




function HomePage() {
  return (
    <div  className="  
    "
    >
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
          <div className="box box2  "><CursorFollower/></div>
          <div className="box box3 "></div>
          <div className="box box4 "></div>
        </div>
      </div>
      <div className="text-content flex justify-center item-center  p-5 text-4xl w-full">
      <Description/>

      </div>
      <div className="flex flex-col justify-center items-center" > 
        <ShopEssentials/>
        <InfoSection/>
        
        
        </div>
        <PuremodFooter/>

      
    </div>
  );
}

export default HomePage;
type BubbleProps = {
  ImgUrl: string;
  position: string;
};

export const Description = () => {
  return (
    <div className="text-container">
      <div className="text-content group flex p-5 w-[75vw]">
        <h3 className="p-4 text-center  leading-relaxed ">
          Puremod Clothing for Elevated Everyday Life. Styles change
          <span className="inline-flex items-center justify-center border-2 rounded-full pr-4 pl-4 m-3 w-fit bg-white">
            <FaStarOfLife className="text-2xl h-6 w-6 mr-2" />
            with seasons
          </span>
          united by the liberating essence of travel-inspired lightheart
        </h3>

        {/* 🫧 Bubble Images */}
        <ImageBubble
          ImgUrl="src/assets/images/image-bubble1.jpg"
          position="top-[102%] left-[35%]"
        />
        <ImageBubble
          ImgUrl="src/assets/images/image-bubble2.jpg"
          position="top-[130%] left-[68%]"
        />
      </div>
    </div>
  );
};

export const ImageBubble = ({ ImgUrl, position }: BubbleProps) => {
  return (
    <div
      className={`absolute ${position} w-30 h-30 rounded-full border-2 border-white hidden group-hover:block animate-bubble `}
    >
      <img
        src={ImgUrl}
        alt="Bubble"
        className="w-full h-full object-cover object-[50%_35%] rounded-full"
      />
    </div>
  );
};