import React from "react";
import { FaStar } from "react-icons/fa";
import { FaRegFileAlt } from "react-icons/fa";
import { IoMdTimer } from "react-icons/io";
import { PiBooks } from "react-icons/pi";
import { Link } from "react-router-dom";

const TopCourseCard = ({ course }) => {
  const {
    _id,
    image,
    coursesName,
    author,
    authorImg,
    rating,
    price,
    time,
    level,
    totalPages,
  } = course;
  return (
    <>
      <div className="px-4 py-4 bg-nu60 rounded-lg">
        <img className="w-full h-full mb-4 rounded-lg" src={image} alt="" />
        <div className="">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-nu70 text-[16px]">{rating}</span>
            <div className="flex items-center gap-2">
              <FaStar className="text-[14px] text-primary1" />
              <FaStar className="text-[14px] text-primary1" />
              <FaStar className="text-[14px] text-primary1" />
              <FaStar className="text-[14px] text-primary1" />
              <FaStar className="text-[14px] text-primary1" />
            </div>
          </div>
          <Link to={`/courseDetails/${_id}`}>
            <h5 className="text-nu20 font-medium mb-3">{coursesName}</h5>
          </Link>
          <div className="flex justify-between items-center gap-2 pb-4 border-b border-[#e0e0e0]">
            <div className="flex items-center gap-1">
              <FaRegFileAlt className="text-[18px] text-nu70" />
              <span className="text-[16px] font-normal text-nu70">
                {totalPages}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <IoMdTimer className="text-[20px] text-nu70" />
              <span className="text-[16px] font-normal text-nu70">{time}</span>
            </div>
            <div className="flex items-center gap-1">
              <PiBooks className="text-[20px] text-nu70" />
              <span className="text-[16px] font-normal text-nu70">{level}</span>
            </div>
          </div>
          <div className="flex justify-between items-center gap-2 pt-3">
            <div className="flex items-center gap-2">
              <img className=" rounded-full" src={authorImg} alt="" />
              <p>{author}</p>
            </div>
            <span>${price}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopCourseCard;
