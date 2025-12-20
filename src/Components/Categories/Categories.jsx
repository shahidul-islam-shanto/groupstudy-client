import React from "react";
import Categories1 from "../../assets/images/categories/categories1.png";
import Categories2 from "../../assets/images/categories/categories2.png";
import Categories3 from "../../assets/images/categories/categories3.png";
import Categories4 from "../../assets/images/categories/categories4.png";
import Categories5 from "../../assets/images/categories/categories5.png";
import Categories6 from "../../assets/images/categories/categories6.png";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <>
      <div className="xl:pt-[120px] lg:pt-[100px] md:pt-[90px] sm:pt-20 pt-[70px]">
        <div className="container-2">
          <div className="grid grid-cols-12 justify-center items-center">
            
            <div className="col-span-2">
              <Link to={"/"} className="flex justify-center items-center">
                <img
                  className="w-[150px] h-[150px] bg-cover rounded-full"
                  src={Categories1}
                  alt=""
                />
              </Link>
            </div>
            <div className="col-span-2">
              <Link to={"/"}>
                <div className="flex justify-center items-center lg:mb-6 mb-4">
                  <img
                    className="w-[150px] h-[150px] bg-cover rounded-full"
                    src={Categories2}
                    alt=""
                  />
                </div>
                <div className="flex justify-center items-center">
                  <h4 className="text-nu20 font-bold hover:text-nu40">
                    Chemistry
                  </h4>
                </div>
              </Link>
            </div>
            <div className="col-span-2">
              <Link to={"/"} className="flex justify-center items-center">
                <img
                  className="w-[150px] h-[150px] bg-cover rounded-full"
                  src={Categories3}
                  alt=""
                />
              </Link>
            </div>
            <div className="col-span-2">
              <Link to={"/"} className="flex justify-center items-center">
                <img
                  className="w-[150px] h-[150px] bg-cover rounded-full"
                  src={Categories4}
                  alt=""
                />
              </Link>
            </div>
            <div className="col-span-2">
              <Link to={"/"} className="flex justify-center items-center">
                <img
                  className="w-[150px] h-[150px] bg-cover rounded-full"
                  src={Categories5}
                  alt=""
                />
              </Link>
            </div>
            <div className="col-span-2">
              <Link to={"/"} className="flex justify-center items-center">
                <img
                  className="w-[150px] h-[150px] bg-cover rounded-full"
                  src={Categories6}
                  alt=""
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
