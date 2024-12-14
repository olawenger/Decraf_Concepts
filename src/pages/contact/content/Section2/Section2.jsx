import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import "./Section2.scss";
import loc from "../../../../assets/location.png";
import phone from "../../../../assets/phoneNumber.png";
import email from "../../../../assets/email.png";
import { useForm } from "react-hook-form";

// eslint-disable-next-line react/prop-types
const Section2 = ({ setOpen }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const emailParam = searchParams.get("email");
    if (emailParam) {
      setValue("email", emailParam);
    }
  }, [location.search, setValue]);

  const onSubmit = async (data) => {
    setFormSubmitted(true);
    try {
      if (!data.subject) {
        throw new Error("Subject is required");
      }
      if (!data.message) {
        throw new Error("Message is required");
      }

      // Send data to Google Sheets
      await axios.post(
        "https://sheet.best/api/sheets/2df899bb-c256-4421-b338-bddb6cdfc4b7",
        {
          Name: data.name,
          "Phone Number": data.phone,
          Email: data.email,
          Subject: data.subject,
          "Your Message": data.message,
        }
      );

      // Send data to backend API
      //Sending Data to mail
      await axios.post(
        "https://contact-form-api-xntq.onrender.com/api/v1/mailing",
        {
          name: data.name,
          phone: data.phone,
          email: data.email,
          subject: data.subject,
          message: data.message,
        }
      );

      setFormSubmitted(false);
      setOpen(true);
      reset();
      navigate("/contactus", { replace: true });
    } catch (error) {
      console.error("Error submitting form:", error);
      setFormSubmitted(false);
      // Handle error state
    }
  };

  return (
    <div className="py-9 responsive w-11/12 mx-auto">
      <div className="container mx-auto rounded-lg w-full md:w-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="flex flex-col gap-11">
          <div className="flex flex-col">
            <h3 className="text-black-500 large-text">Get in Touch</h3>
            <span className="text-black-200">
              Ready to find your dream home or have any questions about our real
              estate services? We're here to help! Feel free to get in touch
              with our dedicated team of real estate professionals.
            </span>
          </div>
          <div className="flex flex-col gap-7">
            <div className="flex items-center gap-4">
              <div className="self-start">
                <img src={loc} alt="" />
              </div>
              <span>
                <h5 className="text-black-100">Location</h5>
                <h2 className="text-black-500 medium-text py-3">
                Abuja Address: House B58B Saraha Home Security Estate, Gwarimpa.
                </h2>
                <h2 className="text-black-500 medium-text">
                Lagos Address:<br /> 1 Iguodala Street, Off Abosede Aro avenue, Abesan
                Estate, Ipaja, Lagos.
                </h2>
              </span>
            </div>
            <div className="flex items-center gap-4">
              <div>
                <img src={phone} alt="" />
              </div>
              <span>
                <h5 className="text-black-100">Phone Number</h5>
                <h2 className="text-black-500 medium-text">
                08030427268 | 09092662911
                </h2>
              </span>
            </div>
            <div className="flex items-center gap-4">
              <div>
                <img src={email} alt="" />
              </div>
              <span>
                <h5 className="text-black-100">Email Address</h5>
                <h2 className="text-black-500 medium-text">
                  decraf@gmail.com
                </h2>
              </span>
            </div>
          </div>
        </div>
        <div className="container mx-auto p-4 md:p-8 border border-[#ebebeb] rounded-lg">
          <h2 className="text-black-500 large-text mb-2">Quick Contact</h2>
          <p className="text-black-100 mb-4">Drop us a message</p>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="flex flex-wrap -mx-2">
              <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                <label htmlFor="name" className="block mb-1">
                  Name
                </label>
                <input
                  name="name"
                  type="text"
                  {...register("name", { required: "Name is required" })}
                  className="w-full border border-[#ebebeb] rounded-md p-2"
                />
                {errors.name && (
                  <p className="text-red-500">{errors.name.message}</p>
                )}
              </div>
              <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                <label htmlFor="phone" className="block mb-1">
                  Phone Number
                </label>
                <input
                  name="phone"
                  type="tel"
                  {...register("phone", {
                    required: "Phone number is required",
                    pattern: {
                      value:
                        /(\+\d{1,3}\s?)?((\(\d{3}\)\s?)|(\d{3})(\s|-?))(\d{3}(\s|-?))(\d{4})(\s?(([E|e]xt[:|.|]?)|x|X)(\s?\d+))?/, // Regex pattern to accept only numbers
                      message:
                        "Invalid phone number. Please enter only digits.",
                    },
                  })}
                  className="w-full border border-[#ebebeb] rounded-md p-2"
                />
                {errors.phone && (
                  <p className="text-red-500">{errors.phone.message}</p>
                )}
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block mb-1">
                Email
              </label>
              <input
                name="email"
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Invalid email address",
                  },
                })}
                className="w-full border border-[#ebebeb] rounded-md p-2"
              />
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="subject" className="block mb-1">
                Subject
              </label>
              <input
                name="subject"
                type="text"
                {...register("subject", { required: "Subject is required" })}
                className="w-full border border-[#ebebeb] rounded-md p-2"
              />
              {errors.subject && (
                <p className="text-red-500">{errors.subject.message}</p>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block mb-1">
                Your Message
              </label>
              <textarea
                name="message"
                {...register("message", { required: "Message is required" })}
                className="w-full h-40 border border-[#ebebeb] rounded-md p-2"
              ></textarea>
              {errors.message && (
                <p className="text-red-500">{errors.message.message}</p>
              )}
            </div>
            <button
              type="submit"
              className={`bg-orange-600 text-white-100 py-2 px-4 opacity-50 cursor-not-allowed    hover:bg-black-600 transition duration-300 ${
                formSubmitted ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled
            >
              {formSubmitted ? "Submitting..." : "Submit Now"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Section2;
