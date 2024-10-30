import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import decraf from "../../assets/decraf.jpg"
import suraab_mobile from '../../assets/suraab_logo.svg';
import "./Navbar.scss";
import ContactBtn from "../ContactBtn/ContactBtn";
import { Sling as Hamburger } from "hamburger-react";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [isActive, setActive] = useState(0);
  const location = useLocation();
  const [isOpen, setOpen] = useState(false);
  // const [isTransparent, setIsTransparent] = useState(true);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollPosition = window.scrollY;
  //     // Change the value according to the scroll position where you want the transparency to change
  //     const scrollThreshold = 10;
  //     if (scrollPosition > scrollThreshold) {
  //       setIsTransparent(true);
  //     } else {
  //       setIsTransparent(false);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  useEffect(() => {
    const { pathname } = location;
    if (pathname === "/") {
      setActive(0);
    } else if (pathname === "/aboutus") {
      setActive(1);
    } else if (pathname === "/service") {
      setActive(2);
    } else if (pathname === "/contactus") {
      setActive(3);
    }
  }, [location]);

  const handleClick = (index) => {
    setActive(index);
    setShow(false);
    window.scrollTo(0, 0);
  };

  const showHamburger = () => {
    setShow(!show); 
  };

  const closeMenu = () => {
    setShow(false);
    setOpen(false);
  };

  return (
    <div>
      {/* Background overlay when mobile menu is active */}
      {show && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black opacity-75 z-40"
          onClick={closeMenu}
        />
      )}

      <div
        className={`fixed z-50 top-0 w-full bg-black`}
      >
        <header
          className="responsive relative w-11/12 text-white-100 flex justify-between items-center"
        >
          <div className="flex justify-between xl:w-2/5 lg:w-2/5 w-full items-center py-5 ">
            <Link to="/">
              <img src={decraf} alt="" className="hidden lg:block desktop-logo" />
              <img src={decraf} alt="" className="block lg:hidden logo" />
            </Link>
            <div
              className="lg:hidden block fixed top-5 pb-3 pr-3  md:pr-6 z-50  right-0"
              onClick={showHamburger}
            >
              <Hamburger color="red" toggled={isOpen} toggle={setOpen} />
            </div>
          </div>

        <div
          className={`${show ? "menu" : ""} lg:flex items-center justify-between  gap-10 lg:gap-16 xl:gap-20 hidden border-0 lg:border-0 border-t-2 border-stone-700`}
          onClick={closeMenu}
        >
          <nav>
            <ul className="flex lg:flex-row flex-col items-center gap-10 lg:gap-16 xl:gap-20 text-white">
              <li>
                <Link
                  to="/"
                  onClick={() => handleClick(0)}
                  className={`${isActive === 0 && "active"} relative`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/aboutus"
                  onClick={() => handleClick(1)}
                  className={`${isActive === 1 && "active"} relative`}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/service"
                  onClick={() => handleClick(2)}
                  className={`${isActive === 2 && "active"} relative `}
                >
                  Services
                </Link>
              </li>
            </ul>
          </nav>
          <div className="mt-6 lg:mt-0 py-5 flex justify-center items-center">
            <ContactBtn />
          </div>
        </div>
      </header>
    </div>
    </div>
  );
};

export default Navbar;
