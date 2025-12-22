import React from "react";
import { useLoaderData } from "react-router-dom";

const TopCourseDetails = () => {
  const courses = useLoaderData();
  console.log(courses);

  const { image } = courses;

  return (
    <div>
      <div className="">
        <div className="container-2">
          <div className="">
            <img src={image} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopCourseDetails;
