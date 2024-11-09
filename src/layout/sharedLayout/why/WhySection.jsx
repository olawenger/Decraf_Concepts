import shield from "../../../assets/Vector (2).png";
import experience from "../../../assets/Vector (3).png";
import pricing from "../../../assets/Vector (4).png";
import "./WhySection.scss";

const WhySection = () => {
  return (
    <div className="bg-red-500">
      <div className="w-11/12 mx-auto text-white-100 text-center lg:text-left leading-9 py-14 responsive">
        <div className="py-3">
          <h4 className="text-center text-white-100 medium-text">WHY DECRAFT ?</h4>
          <h1 className="text-center text-white-100 large-text py-3 w-full lg:w-3/4 mx-auto">
            {/* Lorem ipsum dolor sit amet consectetur. Lobortis porttitor */}
          </h1>
        </div>
        <div className="py-5 grid grid-cols-1 gap-5 lg:grid-cols-3 lg:gap-10">
          <div className="flex flex-col gap-4 justify-center lg:justify-start items-center lg:items-start">
            <div className="img-card justify-center lg:justify-start items-center lg:items-start">
              <img className=" " src={experience} alt="" />
            </div>
            <h1 className="text-white-100 medium-text">Premium Service</h1>
            <p>
              {/* Lorem ipsum dolor sit amet consectetur. Lobortis porttitor
              condimentum fusce nisl. Ultricies cursus amet ut porttitor
              fringilla viverra diam suspendisse. Volutpat velit adipiscing nunc
              ut fermentum erat egestas sed. Arcu faucibus sit eu in neque. */}
            </p>
          </div>

          <div className="flex flex-col gap-4 justify-center lg:justify-start items-center lg:items-start">
            <div className="img-card  flex justify-center lg:justify-start items-center lg:items-start">
              <img className="" src={shield} alt="" />
            </div>
            <h1 className="text-white-100 medium-text">Experienced Team</h1>
            <p>
              {/* Lorem ipsum dolor sit amet consectetur. Lobortis porttitor
              condimentum fusce nisl. Ultricies cursus amet ut porttitor
              fringilla viverra diam suspendisse. Volutpat velit adipiscing nunc
              ut fermentum erat egestas sed. Arcu faucibus sit eu in neque. */}
            </p>
          </div>
          <div className="flex flex-col gap-4 justify-center lg:justify-start items-center lg:items-start">
            <div className="img-card flex justify-center lg:justify-start items-center lg:items-start">
              <img className="" src={pricing} alt="" />
            </div>
            <h1 className="text-white-100 medium-text">Affordable Pricing</h1>
            <p>
              {/* Lorem ipsum dolor sit amet consectetur. Lobortis porttitor
              condimentum fusce nisl. Ultricies cursus amet ut porttitor
              fringilla viverra diam suspendisse. Volutpat velit adipiscing nunc
              ut fermentum erat egestas sed. Arcu faucibus sit eu in neque. */}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhySection;
