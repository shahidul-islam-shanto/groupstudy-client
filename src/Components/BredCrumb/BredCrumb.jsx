import React from "react";
import checkout from "../../assets/images/bred-crumb.png";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

const BredCrumb = ({ bredCrumb }) => {
  return (
    <>
      <div className="">
        <div className="relative ">
          <img src={checkout} className="w-full " />
          <div className="absolute inset-0 bg-[linear-gradient(91deg,rgba(6,7,7,0.600)_0.97%,rgba(2,2,2,0.600)_100%)]"></div>
        </div>
        <div className="absolute top-65 left-60 text-nu10 ">
          <h1 className="text-nu10 font-semibold mb-4">{bredCrumb}</h1>
          <div className="flex items-center gap-2">
            <Link
              to={"/"}
              className="hover:text-primary1 font-medium duration-300"
            >
              Home
            </Link>
            <IoIosArrowForward className="text-nu10 font-bold text-[20px]" />
            <span>Course Details</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default BredCrumb;
