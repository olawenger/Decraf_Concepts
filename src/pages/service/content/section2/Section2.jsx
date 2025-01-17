import React, { useState } from "react";
import s1 from "../../../../assets/uncomplete.jpg";
import s2 from "../../../../assets/service_img2.png";
import s3 from "../../../../assets/pool.jpg";
import s4 from "../../../../assets/kitchen.png";
import s5 from "../../../../assets/office.jpg";
import s6 from "../../../../assets/space.jpg";
import s7 from "../../../../assets/house.jpg";
import s8 from "../../../../assets/pool.jpg";
import check from "../../../../assets/check.png";
import "./Section2.scss";
import ContactBtn from "../../../../components/ContactBtn/ContactBtn";

// Service data array for easier maintainability and scalability
const serviceData = [
  {
    title: "Civil Construction",
    image: s1,
    items: [
      "Residential and commercial buildings",
      "Modern markets and shopping centres",
      "Borehole drilling",
      "Road and bridge construction",
      "Soft and hard landscaping",
      "Public building construction",
      "Industrial buildings",
      "Mass housing estate development",
    ],
  },
  {
    title: "Electrical Installations",
    image: s2,
    items: [
      "Automated indoor device installations",
      "Air conditioning, refrigeration, and cold rooms",
      "Rural electrification",
      "Provision and installation of CCTV",
      "Power supply installations/networks for buildings and estates",
      "Solar power systems",
      "Installation and maintenance of fire alarm systems",
    ],
  },
  {
    title: "Mechanical Installations",
    image: s3,
    items: [
      "Borehole drilling and reticulations",
      "Provision and installation of sprinklers",
      "Installation and servicing of air conditioning and ventilation systems",
      "Fabrication/installation of structural steel water storage tanks and roofs",
      "Swimming pool installation",
    ],
  },
  {
    title: "Laboratory Worktops/Shelves",
    image: s4,
    items: [
      "Academic laboratories",
      "Residential kitchen worktops/wardrobes",
      "Architraves and doors",
      "Wooden and aluminium partitioning",
    ],
  },
  {
    title: "Interior Finishing",
    image: s5,
    items: [
      "Office and residential furniture",
      "Vertical Venetian blinds",
      "Rigging and carpeting",
    ],
  },
  {
    title: "Professional Services",
    image: s6,
    items: [
      "Preliminary planning",
      "Design management",
      "Procurement process and methods",
      "Pre and post-construction management services",
      "Cost planning and control",
      "Package deal, design-and-build or turnkey contracts",
      "Budgetary control",
      "Life cycle cost studies",
      "Industrial engineering cost control and administration",
      "Budgetary control of engineering services in buildings",
      "Construction management",
      "Project management",
      "Facility management",
    ],
  },
  {
    title: "Core Competencies",
    image: s7,
    items: [
      "Project management services",
      "Construction management services",
      "Value engineering services",
      "Architectural design",
      "Engineering design",
      "Quantity surveying services",
      "Mass housing development",
      "Landscape design",
      "Interior design service",
    ],
  },
  {
    title: "Subsidiary: Food Safety and Quality Consultancy",
    image: s4,
    items: [
      "Consultancy services in food safety and food quality systems",
      "Training programmes for small and medium-scale food processing outfits",
      "Implementation of food safety management systems",
      "Auditing and certification preparation",
      "Customised training sessions for staff development",
      "Development and documentation of food safety protocols and procedures",
    ],
  },
];

const ServiceItem = ({ text }) => (
  <div className="flex gap-2 items-center">
    <span>
      <img src={check} alt="Checkmark icon" />
    </span>
    <p className="pb-2 w-full">{text}</p>
  </div>
);

const ServiceSection = ({ title, image, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      {/* Header with toggle functionality */}
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h4 className="medium-text font-bold">{title}</h4>
        <button
          className={`transform transition-transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          ▼
        </button>
      </div>

      {/* Content that expands/collapses */}
      {isOpen && (
        <div className="mt-4 flex items-center gap-7 ">
          <img
            src={image}
            alt={title}
            className="border-img border-8 hidden lg:block border-white-100 mb-4"
          />
          <div>
          {items.map((item, index) => (
            <ServiceItem key={index} text={item} />
          ))}
          {/* <div className="flex justify-start mt-4">
            <ContactBtn />
          </div> */}
          </div>
          
        </div>
      )}
    </div>
  );
};

const Section2 = () => {
  return (
    <div className="section-two">
      <div className="responsive w-11/12 mx-auto py-12">
        <h1 className="text-center large-text w-full lg:w-1/2 pb-9 mx-auto">
          Explore Our Services At <br /> Decraft
        </h1>
        <div className="grid grid-cols-1 gap-6">
          {serviceData.map((service, index) => (
            <ServiceSection
              key={index}
              title={service.title}
              image={service.image}
              items={service.items}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section2;
