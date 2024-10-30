import "./HerosSection.scss";
import img from "../../../assets/arrow.png";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="about-bg flex items-center justify-center ">
      <div className="py-10 lg:py-16 xl:py-20 text-center">
        <h1 className="text-white-100 large-text pt-24 ">About</h1>
        <div className="flex justify-center items-center gap-2 py-5 ">
          <Link to="/">
            <p className="text-black-100 text-3xl font-medium hidden md:block">Home</p>
          </Link>
          <span>
            <img className="hidden md:block" src={img} alt="" />
          </span>
          <h5 className="text-white-100 text-3xl font-semibold hidden md:block">About</h5>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
