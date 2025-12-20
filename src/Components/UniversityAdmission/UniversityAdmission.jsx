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
                <div className="grid grid-cols-12 h-full px-3 py-3 bg-nu80 rounded-md">
                  <div className="col-span-6">
                    <div className="h-full flex items-center pl-8">
                      <div className="">
                        <h2 className="text-nu20 mb-6">
                          University Admission <br />{" "}
                          <span className="display-4 mt-2">FESTIVAL</span>
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
                  <div className="col-span-6">
                    <div className="hero-wrapper">
                      <img
                        className="w-full h-[280px] hero-image rounded-xl"
                        src={Festival1}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="grid grid-cols-12 h-full px-3 py-3 bg-nu80 rounded-md">
                  <div className="col-span-6">
                    <div className="h-full flex items-center pl-8">
                      <div className="">
                        <h2 className="text-nu20 mb-6">
                          University Admission <br />{" "}
                          <span className="display-4 mt-2">FESTIVAL</span>
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
                  <div className="col-span-6">
                    <div className="hero-wrapper">
                      <img
                        className="w-full h-[280px] hero-image rounded-xl"
                        src={Festival2}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="grid grid-cols-12 h-full px-3 py-3 bg-nu80 rounded-md">
                  <div className="col-span-6">
                    <div className="h-full flex items-center pl-8">
                      <div className="">
                        <h2 className="text-nu20 mb-6">
                          University Admission <br />{" "}
                          <span className="display-4 mt-2">FESTIVAL</span>
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
                  <div className="col-span-6">
                    <div className="hero-wrapper">
                      <img
                        className="w-full h-[280px] hero-image rounded-xl"
                        src={Festival3}
                        alt=""
                      />
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
