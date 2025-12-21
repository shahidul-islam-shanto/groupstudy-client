import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import Festival1 from "../../assets/images/festival1.png";
import Festival2 from "../../assets/images/festival2.png";
import Festival3 from "../../assets/images/festival3.png";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import "./UniversityAdmission.css";

const UniversityAdmission = () => {
  return (
    <>
      <div className="xl:pt-[120px] lg:pt-[100px] md:pt-[90px] sm:pt-20 pt-[70px]">
        <div className="container-2">
          <div className="">
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
                <div className="relative text-center">
                  <div className="hero-wrapper">
                    <img
                      className="w-full h-full bg-cover hero-image rounded-xl"
                      src={Festival1}
                      alt=""
                    />
                  </div>
                  <div className="rounded-md absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="">
                      <div className="">
                        <h2 className="text-nu10 mb-8">
                          University Admission <br />
                          <span className="display-4 mt-4">FESTIVAL</span>
                        </h2>
                        <div className="">
                          <Link to={"/"}>
                            <button className="px-4 py-2 bg-primary1 rounded-md">
                              Apply Now
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative text-center">
                  <div className="hero-wrapper">
                    <img
                      className="w-full h-full bg-cover hero-image rounded-xl"
                      src={Festival2}
                      alt=""
                    />
                  </div>
                  <div className="rounded-md absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="">
                      <div className="">
                        <h2 className="text-nu10 mb-8">
                          University Admission <br />
                          <span className="display-4 mt-4">FESTIVAL</span>
                        </h2>
                        <div className="">
                          <Link to={"/"}>
                            <button className="px-4 py-2 bg-primary1 rounded-md">
                              Apply Now
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative text-center">
                  <div className="hero-wrapper">
                    <img
                      className="w-full h-full bg-cover hero-image rounded-xl"
                      src={Festival3}
                      alt=""
                    />
                  </div>
                  <div className="rounded-md absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="">
                      <div className="">
                        <h2 className="text-nu10 mb-8">
                          University Admission <br />
                          <span className="display-4 mt-4">FESTIVAL</span>
                        </h2>
                        <div className="">
                          <Link to={"/"}>
                            <button className="px-4 py-2 bg-primary1 rounded-md">
                              Apply Now
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default UniversityAdmission;
