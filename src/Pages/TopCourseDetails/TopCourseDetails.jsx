import React from "react";
import { useLoaderData } from "react-router-dom";
import BredCrumb from "../../Components/BredCrumb/BredCrumb";
import { FaStar } from "react-icons/fa";
import CourseVideo from "../../assets/images/course-video.png";
import Video from "../../assets/images/video-icon.png";
import VideoPopup from "../../Components/VideoPopup/VideoPopup";

const TopCourseDetails = () => {
  const courses = useLoaderData();
  // console.log(courses);

  const { image, rating, price, time, level, author, authorImg, coursesName } =
    courses;

  return (
    <>
      <div className="">
        <BredCrumb bredCrumb={"Course Details"} />
      </div>
      <div className="xl:py-[120px] lg:pt-[100px] md:pt-[90px] sm:pt-20 pt-[70px]">
        <div className="container-2">
          <div className="">
            <div className="mb-12">
              <img
                className="w-full h-[600px] rounded-xl object-cover"
                src={image}
                alt=""
              />
            </div>
          </div>
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-8">
              <div className="pl-10">
                <div className=" mb-8">
                  <div className="flex items-center gap-4 lg:mb-8 mb-6">
                    <div className="flex items-center gap-2">
                      <img className="rounded-full" src={authorImg} alt="" />
                      <span>{author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-nu70 text-[16px]">{rating}</span>
                      <div className="flex items-center gap-2">
                        <FaStar className="text-[14px] text-primary1" />
                        <FaStar className="text-[14px] text-primary1" />
                        <FaStar className="text-[14px] text-primary1" />
                        <FaStar className="text-[14px] text-primary1" />
                        <FaStar className="text-[14px] text-primary1" />
                      </div>
                    </div>
                  </div>
                  <h1>{coursesName}</h1>
                </div>
                <div className="">
                  <div className="tabs tabs-border duration-300">
                    <input
                      type="radio"
                      name="my_tabs_2"
                      className="tab text-nu20 mb-3 text-[18px] font-semibold hover:text-primary1 duration-300 bg-nu60 px-8"
                      aria-label="Overview"
                    />
                    <div className="tab-content px-4 py-8 border-0 duration-300">
                      <h4 className="text-nu20 font-semibold mb-4">
                        Course Description
                      </h4>
                      <p className="text-nu70 font-medium mb-3">
                        This course is designed to help learners gain practical
                        knowledge and essential skills in a structured and
                        easy-to-understand way. Starting from the basics and
                        progressing to advanced concepts, the course ensures a
                        step-by-step learning experience supported by real-world
                        examples and hands-on practice.
                      </p>
                      <p className="text-nu70 font-medium">
                        The curriculum includes industry-relevant content,
                        project-based learning, and modern tools and
                        technologies to help students build strong
                        problem-solving skills and real-life project experience.
                        Each lesson is crafted to make learning engaging,
                        effective, and applicable in real-world scenarios.
                      </p>
                    </div>

                    <input
                      type="radio"
                      name="my_tabs_2"
                      className="tab text-nu20 text-[18px] font-semibold hover:text-primary1 duration-300 bg-nu60 px-8"
                      aria-label="Curriculum"
                    />
                    <div className="tab-content px-8 py-8 border-0 duration-300">
                      Tab content 2
                    </div>

                    <input
                      type="radio"
                      name="my_tabs_2"
                      className="tab text-nu20 text-[18px] font-semibold hover:text-primary1 duration-300 bg-nu60 px-8"
                      aria-label="Instructor"
                    />
                    <div className="tab-content px-8 py-8 border-0 duration-300">
                      Tab content 3
                    </div>

                    <input
                      type="radio"
                      name="my_tabs_2"
                      className="tab text-nu20 text-[18px] font-semibold hover:text-primary1 duration-300 bg-nu60 px-8"
                      aria-label="Reviews"
                    />
                    <div className="tab-content px-8 py-8 border-0 duration-300">
                      Tab content 4
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-4">
              <div className="px-4 py-4 bg-nu10 rounded-lg shadow -mt-40 mr-8">
                <VideoPopup />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopCourseDetails;
