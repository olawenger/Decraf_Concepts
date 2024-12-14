import "./SwiperCarousel.scss";
import "swiper/css";
import "swiper/css/pagination";
import { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination, Autoplay } from "swiper/modules";
// import slide1 from "../../../assets/slide1.png";
// import slide2 from "../../../assets/slide2.png";
// import slidethree from "../../../assets/slide3.png";
import imgnew1 from '../../../assets/kitchen.png'
// import imgnew4 from '../../../assets/imgnew4.jpg'
import imgnew3 from '../../../assets/TERRACE.jpg'
import imgnew2 from '../../../assets/house.jpg'
import imgnew4 from '../../../assets/court.jpg'
import imgnew5 from '../../../assets/Response.jpg'
import imgnew6 from '../../../assets/manga_5.jpg'
import panorama from "../../../assets/paranoma.png";


const SwiperCarousel = () => {
  return (
    <div className="py-10 relative flex justify-center items-center">
      <img src={panorama} alt="" className="absolute top-1 z-30 w-full" />
      <img src={panorama} alt="" className="absolute bottom-1 z-30 w-full" />

      <Swiper

breakpoints={{
    320: {
      slidesPerView: 1,
    },
    375: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1024: { slidesPerView: 3 },
    1440: { slidesPerView: 3 },
  }}

        spaceBetween={40}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay]}
        className="mySwiper"
      
      >
        <SwiperSlide className="h-[300px]">
          <img src={imgnew1} alt="" className="" />
        </SwiperSlide>
        <SwiperSlide className="h-[300px]">
          <img src={imgnew2} alt="" className="" />
        </SwiperSlide>
        <SwiperSlide className="h-[300px]">
          <img src={imgnew3} alt="" className="" />
        </SwiperSlide>
        <SwiperSlide className="h-[300px]">
          <img src={imgnew4} alt="" className=""/>
        </SwiperSlide>
        <SwiperSlide className="h-[300px]">
          <img src={imgnew5} alt="" className=""/>
        </SwiperSlide>
        <SwiperSlide className="h-[300px]">
          <img src={imgnew6} alt="" className=""/>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperCarousel;
