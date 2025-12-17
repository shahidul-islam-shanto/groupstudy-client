import React from "react";
import About from "../../assets/images/about.png";
import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <>
      <div className="py-40">
        <div className="container-2">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-6">
              <img className="w-full h-full rounded-lg" src={About} alt="" />
            </div>
            <div className="col-span-6">
              <div className="">
                <h2 className="text-nu20 mb-6">
                  Educating the next generation with pride.
                </h2>
                <p className="text-nu70 mb-8">
                  A lively and playful blend of motion, sound, and imagination,
                  where fast-paced actions and quirky characters come together
                  to create an energetic and creative scene.
                </p>
                <div className="flex justify-between items-center gap-4 mb-4">
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
                    <button className="px-6 py-2 bg-primary1 rounded-md">Read More</button>
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
