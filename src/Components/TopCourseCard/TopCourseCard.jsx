import React from "react";

const TopCourseCard = ({ course }) => {
  const { image } = course;
  return (
    <>
      <div className="px-4 py-4 bg-nu60">
        <img className="w-full h-full" src={image} alt="" />
        <div className=""></div>
      </div>
    </>
  );
};

export default TopCourseCard;
