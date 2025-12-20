import React from "react";
import Categories1 from "../../assets/images/categories/categories1.png";
import Categories2 from "../../assets/images/categories/categories2.png";
import Categories3 from "../../assets/images/categories/categories3.png";
import Categories4 from "../../assets/images/categories/categories4.png";
import Categories5 from "../../assets/images/categories/categories5.png";
import Categories6 from "../../assets/images/categories/categories6.png";
import { Link } from "react-router-dom";
import CategoriesCompo from "./CategoriesCompo";

const Categories = () => {
  return (
    <>
      <div className="xl:pt-[120px] lg:pt-[100px] md:pt-[90px] sm:pt-20 pt-[70px]">
        <div className="container-2">
          <div className="grid grid-cols-12 justify-center items-center">
            <CategoriesCompo
              Categories={Categories1}
              categoriesName={"Chemistry"}
            />
            <CategoriesCompo
              Categories={Categories2}
              categoriesName={"Graphic Design"}
            />
            <CategoriesCompo
              Categories={Categories3}
              categoriesName={"Software"}
            />
            <CategoriesCompo
              Categories={Categories4}
              categoriesName={"Mobile App"}
            />
            <CategoriesCompo
              Categories={Categories5}
              categoriesName={"Finance"}
            />
            <CategoriesCompo
              Categories={Categories6}
              categoriesName={"Art & Humanities"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
