
import FadedCarousel from '../../layout/sharedLayout/fadedCarousel/FadedCarousel'
import WhySection from '../../layout/sharedLayout/why/WhySection'

import HeroSection from './content/heroSection/HeroSection'
import Testimonial from '../../layout/sharedLayout/testimonial/Testimonial'
import ContactUs from '../../layout/sharedLayout/contactus/ContactUs'
import Section3 from './content/Section3/Section3'
import Section2 from './content/Section2/Section2'
import SwiperCarousel from '../../layout/sharedLayout/swiperCarousel/SwiperCarousel'

const HomePage = () => {
  return (
    <div className=' relative'>
      <FadedCarousel/>
        <HeroSection/>
      <Section2/>
      <Section3/>
      <SwiperCarousel/>
      <WhySection/>
      <Testimonial/>
      <ContactUs/>

    </div>
  )
}

export default HomePage