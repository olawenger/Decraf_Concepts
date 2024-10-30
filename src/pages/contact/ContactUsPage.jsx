import { useState } from "react";
import SuccessDialog from "../../components/dialog/SuccessDialog";
import Section2 from "./content/Section2/Section2";
import GoogleMapComponent from "./content/googleMap/GoogleMapComponent";
import HeroSection from "./content/heroSection/HeroSection";

const ContactUsPage = () => {
  const [open, setOpen] = useState(false)
  
  return (
    <div>
      <HeroSection />
      <Section2 setOpen={setOpen} />
      <GoogleMapComponent />
      <SuccessDialog open={open} setOpen={setOpen}/>
    </div>
  );
};

export default ContactUsPage;
