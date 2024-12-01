import ContactBtn from  '../../../../components/ContactBtn/ContactBtn';
import './HeroSection.scss'

const HeroSection = () => {
  return (
    <div className='z-40'>
       <div className=' flex justify-center items-center'>
       <div className=' absolute  left-0 right-0 flex top-16  lg:top-14 z-30 justify-center items-center lg:justify-start transform translate-y-[7%]'>
          <div className='w-11/12 mx-auto responsive pt-3 md:pt-7 lg:pt-8'>
          <div className= 'w-full  lg:w-1/2 '>
           <h1 className='w-full hero-text text-white-100 text-center   lg:text-start pt-3  md:pt-12  lg:pt-6 xl:pt-12'><span className='hero-text bg-[#fb923c]  text-center lg:text-start'>WELCOME</span>  To <br className="md:hidden"/> Decraf</h1>
           <p className='py-5 text-white-100 text-center text-sm   md:text-lg lg:text-start font-poppins leading-relaxed  '>Where innovation meets excellence in construction and consultancy. As a leading force in Nigeria's construction industry, we deliver top-notch civil, electrical, and mechanical solutions, complemented by cutting-edge interior finishing and professional services. Our new subsidiary extends our commitment to quality, offering expert consultancy and training in food safety and quality systems for small and medium-scale food processing outfits. Join us in shaping a sustainable and superior future, one project at a time.</p>
           <div className='flex justify-center lg:justify-start items-center lg:items-start '>
           {/* <ContactBtn/> */}
           </div>
           </div>
          </div>
           <div>
           </div>
        </div>

       </div>
    </div>
  )
}

export default HeroSection