import React from "react";

const TopFeaturedCard = ({ course }) => {
  const { image } = course;
  return (
    <>
      <div className="">
        <img src={image} alt="" />
        <div className=""></div>
      </div>
    </>
  );
};

export default TopFeaturedCard;
