import { useNavigate } from "react-router-dom";
import "./contactbtn.scss";

const ContactBtn = () => {
  const navigate = useNavigate();

  // Function to handle button click
  const handleClick = () => {
    window.scrollTo(0, 0); // Scroll to the top of the page
    navigate("/contactus"); // Navigate to the contact page
  };

  return (
    <div className="contactbtn">
      <button
        onClick={handleClick}
          className="bg-[#fb923c] lg:w-44 w-36 text-white-100 relative text-xl h-12 hover:border-2 hover:bg-black-500 border-white-100"
      >
        <span className="btneffect"></span>
        <span className="z-100">Contact Us</span>
      </button>
    </div>
  );
};

export default ContactBtn;
