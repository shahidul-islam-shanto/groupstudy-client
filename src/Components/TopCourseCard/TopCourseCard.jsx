import React from "react";
import { FaStar } from "react-icons/fa";

const TopCourseCard = ({ course }) => {
  const { image, coursesName, author, authorImg, rating, price, time, level } =
    course;
  return (
    <>
      <div className="px-4 py-4 bg-nu60">
        <img className="w-full h-full" src={image} alt="" />
        <div className="">
          <div className="">
            <span>{rating}</span>
            <div className="">
              <FaStar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopCourseCard;
