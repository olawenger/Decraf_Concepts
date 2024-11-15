import { Link } from "react-router-dom";
import { useEffect } from "react"; // Import the useEffect hook
import ContactBtn from "../ContactBtn/ContactBtn";
import "./Footer.scss";
import decraf from "../../assets/decraf.jpg";
import logo from "../../assets/suraab_logo.svg";
import facebookIcon from "../../assets/facebook.png";
import whatsappIcon from "../../assets/whatsapp.png";
import instagramIcon from "../../assets/instagram.png";

const Footer = () => {
  // Scroll to the top of the page when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Function to handle link click
  const handleLinkClick = () => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  return (
    <div className="bg-black-200 text-white-100 py-10">
      <div className="grid lg:grid-cols-3 grid-cols-1 py-6 gap-8 w-11/12 responsive">
        <div className="flex flex-col gap-5 items-center lg:items-start">
          <Link to="/" onClick={handleLinkClick}>
            <img className="" src={decraf} alt="" />
          </Link>
          <p className=" text-center lg:text-start md:w-3/5 mx-auto lg:w-full ">
            {/* Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus eligendi, sit labore debitis omnis harum. */}
          </p>
          <ContactBtn />
        </div>
        <div className="hidden lg:block">
          <div className="flex flex-col lg:ps-20 gap-5 items-start ">
            <h2 className="medium-text font-semibold">Quick Links</h2>
            <ul className="flex flex-col gap-4 justify-start items-start">
              <li>
                <Link to="/" onClick={handleLinkClick}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/aboutus" onClick={handleLinkClick}>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/service" onClick={handleLinkClick}>
                  Service
                </Link>
              </li>
              <li>
                <Link to="/contactus" onClick={handleLinkClick}>
                  {" "}
                  Contact Us{" "}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="">
          <div className="flex flex-col gap-3 lg:gap-5 items-center lg:items-start  ">
            <div className="hidden lg:block">
              <h2 className="medium-text font-semibold  text-center lg:text-start">
                Contact Us
              </h2>
              <p className=" text-start  w-11/12  pt-4 pb-1 ">
                Abuja Address: House B58B Saraha Home Security Estate, Gwarimpa.
              </p>
              <p className=" text-start  w-11/12  pt-1 pb-2 ">
                Lagos Address: 1 Iguodala Street, Off Abosede Aro avenue, Abesan
                Estate, Ipaja, Lagos.
              </p>
              <div className="flex gap-4">
                <p className="text-start">08030816332</p>
                <p className="text-start">09092662911</p>
              </div>
            </div>
            <div>
              <div className="flex flex-row justify-center items-center gap-6 py-4 lg:py-0">
                <img className="social" src={whatsappIcon} alt="" />
                <img className="social" src={facebookIcon} alt="" />
                <img className="social" src={instagramIcon} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className=""></div>
      </div>
      <hr className="bg-gray-500" />
      <p className="text-center text-gray-500 mt-3 text-sm pt-5">
        CopyRight {new Date().getFullYear()}, All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
