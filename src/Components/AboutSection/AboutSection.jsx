import React from "react";
import About from "../../assets/images/about.png";
import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <>
      <div className="xl:pt-[120px] lg:pt-[100px] md:pt-[90px] sm:pt-20 pt-[70px]">
        <div className="container-2">
          <div className="grid grid-cols-12 xl:gap-8 gap-4">
            <div className="xl:col-span-6 col-span-12">
              <img className="w-full h-full rounded-lg" src={About} alt="" />
            </div>
            <div className="xl:col-span-6 col-span-12">
              <div className="">
                <h2 className="text-nu20 lg:mb-6 mb-4">
                  Educating the next generation with pride.
                </h2>
                <p className="text-nu70 lg:mb-8 mb-6">
                  A lively and playful blend of motion, sound, and imagination,
                  where fast-paced actions and quirky characters come together
                  to create an energetic and creative scene.
                </p>
                <div className="flex max-lg:flex-wrap justify-between items-center lg:gap-4 gap-2 lg:mb-4 mb-3">
                  <div className="">
                    <div className="flex items-center gap-2 mb-5">
                      <span className="px-1.5 py-1.5 bg-primary1 rounded-full">
                        <FaCheck className="text-[14px] text-nu20 " />
                      </span>
                      <span>Education built on heritage.</span>
                    </div>
                    <div className="flex items-center gap-2 mb-5">
                      <span className="px-1.5 py-1.5 bg-primary1 rounded-full">
                        <FaCheck className="text-[14px] text-nu20 " />
                      </span>
                      <span>Learning that carries tradition.</span>
                    </div>
                    <div className="flex items-center gap-2 mb-5">
                      <span className="px-1.5 py-1.5 bg-primary1 rounded-full">
                        <FaCheck className="text-[14px] text-nu20 " />
                      </span>
                      <span>A legacy of learning.</span>
                    </div>
                  </div>
                  <div className="">
                    <div className="flex items-center gap-2 mb-5">
                      <span className="px-1.5 py-1.5 bg-primary1 rounded-full">
                        <FaCheck className="text-[14px] text-nu20 " />
                      </span>
                      <span>Education with heritage.</span>
                    </div>
                    <div className="flex items-center gap-2 mb-5">
                      <span className="px-1.5 py-1.5 bg-primary1 rounded-full">
                        <FaCheck className="text-[14px] text-nu20 " />
                      </span>
                      <span>A proud learning legacy.</span>
                    </div>
                    <div className="flex items-center gap-2 mb-5">
                      <span className="px-1.5 py-1.5 bg-primary1 rounded-full">
                        <FaCheck className="text-[14px] text-nu20 " />
                      </span>
                      <span>Tradition in every lesson.</span>
                    </div>
                  </div>
                </div>
                <div className="">
                  <Link to={"/about"}>
                    <button className="px-6 py-2 bg-primary1 rounded-md">
                      Read More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
