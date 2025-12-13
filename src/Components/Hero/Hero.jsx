import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Hero1 from "../../assets/images/hero1.png";
import Hero2 from "../../assets/images/hero2.png";
import Hero3 from "../../assets/images/hero3.png";

import "./Hero.css";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Hero = () => {
  return (
    <>
      <div className="relative z-40">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          effect={"fade"}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, EffectFade, Navigation, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="relative z-40">
              <div className="hero-wrapper">
                <img
                  className="w-full h-screen hero-image"
                  src={Hero2}
                  alt=""
                />
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <h1 className="text-nu10 mb-3 text-center display-4">
                  University Graduation Admission
                </h1>
                <p className="text-nu10 text-center mb-8">
                  A smart method for building an eye-catching online
                  presentation.
                </p>
                <div className="text-center">
                  <button className="px-4 py-2 text-nu20 bg-nu10">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative z-30">
              <div className="hero-wrapper">
                <img
                  className="w-full h-screen hero-image"
                  src={Hero1}
                  alt=""
                />
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <h1 className="text-nu10 mb-3 text-center display-4">
                  A truly special experience
                </h1>
                <p className="text-nu10 text-center mb-8">
                  The ultimate solution for creating a visually stunning online
                  presentation.
                </p>
                <div className="text-center">
                  <button className="px-4 py-2 text-nu20 bg-nu10">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative z-30">
              <div className="hero-wrapper">
                <img
                  className="w-full h-screen hero-image"
                  src={Hero3}
                  alt=""
                />
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <h1 className="text-nu10 mb-3 text-center display-4">
                  Academic Admission for Graduation
                </h1>
                <p className="text-nu10 text-center mb-8">
                  A simple yet powerful way to make an outstanding online
                  presentation.
                </p>
                <div className="text-center">
                  <button className="px-4 py-2 text-nu20 bg-nu10">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Hero;
