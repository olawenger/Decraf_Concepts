import "./HeroSection.scss";
// import arrow from "../../../../assets/arrow.png";
import { Link } from "react-router-dom";
import img from '../../../../assets/arrow.png'

const HeroSection = () => {
  return (
    <div className="contact-bg flex items-center justify-center">
      <div className="py-10 text-center">
        <h1 className="text-white-100 large-text pt-24">Contact</h1>
        <div className="flex justify-center items-center gap-2 py-5 ">
          <Link to="/">
            <p className="text-black-100 text-3xl font-medium hidden md:block">Home</p>
          </Link>
          <span>
            <img className="hidden md:block" src={img} alt="" />
          </span>
          <h5 className="text-white-100 text-3xl font-semibold hidden md:block">Contact</h5>
          
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
