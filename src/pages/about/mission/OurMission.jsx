import React from "react";
import ContactBtn from "../../../components/ContactBtn/ContactBtn";
import check from "../../../assets/check.png";
import elect1 from "../../../assets/elect1.png";
import elect2 from "../../../assets/elect2b.png";
import elect3 from "../../../assets/elect2c.png";
import cman from "../../../assets/cman.jpg";

const OurMission = () => {
  return (
    <div className="responsive">
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-7 lg:gap-20 items-center w-11/12 mx-auto mission py-16 ">
        <img src={elect2} className=" block lg:hidden w-full" alt="" />
        <div className="flex flex-row  gap-10 items-center justify-center ">
          {/* <div>
            <img
              className="hidden lg:block rounded-xl w-full"
              src={elect1}
              alt=""
            />
          </div> */}
          <div className="flex flex-col gap-10">
            <img className="hidden lg:block rounded-md" src={cman} alt="" />
            {/* <img className="hidden lg:block rounded-md" src={elect3} alt="" /> */}
          </div>
        </div>
        <div className="grid grid-cols-1 gap-3">
          <h1 className="large-text font-bold text-center lg:text-start">
            Our Mission at Decraft NG Limited
          </h1>
          <p className=" text-center lg:text-start w-full ">
            Our mission is to create exceptional construction solutions that
            meet our clients' needs by leveraging our expertise, commitment to
            quality, and innovative practices. We aim to deliver projects within
            budget, on time, and to the highest standards, while fostering
            sustainable development and upholding the highest ethical values in
            all our endeavors.
          </p>

          <div className="flex justify-center lg:justify-start">
            <ContactBtn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
