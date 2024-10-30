import arrow from '../../assets/arrow.png'
import './Service.scss'
import HeroSection from './content/hero/HeroSection'
import Section2 from './content/section2/Section2'
import ContactUs from '../../layout/sharedLayout/contactus/ContactUs'


const ServicePage = () => {
  return (
    <div >
        <HeroSection img={arrow}/>
        <Section2/>
        <ContactUs/>
        
    </div>
  )
}

export default ServicePage