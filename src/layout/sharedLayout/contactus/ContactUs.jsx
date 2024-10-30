import { useState } from "react";
import { useForm } from "react-hook-form";
import "./ContactUs.scss";
import { useNavigate } from "react-router-dom";

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [email, setEmail] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate hook

  const onSubmit = () => {
    // Scroll to the top of the page
    window.scrollTo(0, 0);

    // Redirect to the contact form page with the email address as a query parameter
    const encodedEmail = encodeURIComponent(email);
    navigate(`/contactus?email=${encodedEmail}`);
  };

  return (
    <div className="contact-background flex flex-col items-center justify-center">
      <div className="text-white-100 py-10 text-center w-11/12 mx-auto grid grid-cols-1 gap-7 ">
        <h1 className="text-white-100 large-text w-full lg:w-3/5 xl:w-3/6 mx-auto">
          Ready to Book Your First  Service
        </h1>
        <p className=" ">
          Our mission is to redefine excellence in Construction solutions,
          beautifying homes and live with a <br /> commitment  to safety, reliability,
          and innovation. We embark on this mission
        </p>
        <div className="w-full mx-auto lg:w-3/4 xl:w-3/5">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="py-5 w-full flex justify-center items-center"
          >
            <div className="relative w-full">
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Invalid email address",
                  },
                })}
                className="p-3 w-full text-black-500 py-5 rounded-none outline-none"
                placeholder="Your Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && (
                <div className="absolute bottom-[-25px] left-0 text-white-500 text-sm">
                  {errors.email.type === "required" && "Email is required. "}
                  {errors.email.type === "pattern" && "Invalid email address. "}
                </div>
              )}
            </div>
            <button
              type="submit"
              className="w-5/12 bg-orange-600 px-0 lg:px-20 py-5"
            >
              Contact us
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
