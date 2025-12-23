import React from "react";
import { useLoaderData } from "react-router-dom";
import BredCrumb from "../../Components/BredCrumb/BredCrumb";

const TopCourseDetails = () => {
  const courses = useLoaderData();
  // console.log(courses);

  const { image, rating, price, time, level, author, authorImg } = courses;

  return (
    <>
      <div className="">
        <BredCrumb bredCrumb={"Course Details"} />
      </div>
      <div className="xl:py-[120px] lg:pt-[100px] md:pt-[90px] sm:pt-20 pt-[70px]">
        <div className="container-2">
          <div className="">
            <img
              className="w-full h-[600px] rounded-xl object-cover"
              src={image}
              alt=""
            />
          </div>
          {/* <div className="grid grid-cols-12 gap-6">
            <div className="col-span-8">
              <div className="">
                <div className="">
                  <img src={authorImg} alt="" />
                  <span>{author}</span>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default TopCourseDetails;
