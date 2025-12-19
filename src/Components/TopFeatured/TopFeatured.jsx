import React, { useEffect, useState } from "react";
import TopFeaturedCard from "../TopFeaturedCard/TopFeaturedCard";

const TopFeatured = ({ title, description }) => {
  const [course, setCourse] = useState([]);

  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCourse(data);
      });
  }, []);
  return (
    <>
      <div className=" xl:pt-[120px] lg:pt-[100px] md:pt-[90px] sm:pt-20 pt-[70px]">
        <div className="container-2">
          <div className="">
            <div className="text-center mb-12">
              <h1 className="text-nu20 font-bold mb-4">{title}</h1>
              <p className="text-nu70 font-medium">{description}</p>
            </div>
            <div className="grid grid-cols-12 gap-6">
              {course.map((items) => (
                <div className="col-span-4">
                  <TopFeaturedCard course={items} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopFeatured;
