import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Hero1 from "../../assets/images/hero1.png";
import Hero2 from "../../assets/images/hero2.png";
import Hero3 from "../../assets/images/hero3.png";
import Hero4 from "../../assets/images/hero4.png";
import "./Hero.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Hero = () => {
  return (
    <>
      <div className="hero-image">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="">
              <img className="w-full h-screen hero-image" src={Hero1} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="">
              <img className="w-full h-screen hero-image" src={Hero2} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="">
              <img className="w-full h-screen hero-image" src={Hero3} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="">
              <img className="w-full h-screen hero-image" src={Hero4} alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Hero;
