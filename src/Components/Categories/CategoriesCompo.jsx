import React from "react";
import { Link } from "react-router-dom";

const CategoriesCompo = ({ Categories, categoriesName }) => {
  return (
    <>
      <div className="col-span-2">
        <Link to={"/"}>
          <div className="flex justify-center items-center lg:mb-6 mb-4">
            <img
              className="w-[150px] h-[150px] border-6 border-primary1 bg-cover rounded-full"
              src={Categories}
              alt=""
            />
          </div>
          <div className="flex justify-center items-center">
            <h4 className="text-nu20 font-bold hover:text-primary1 duration-300">
              {categoriesName}
            </h4>
          </div>
        </Link>
      </div>
    </>
  );
};

export default CategoriesCompo;
