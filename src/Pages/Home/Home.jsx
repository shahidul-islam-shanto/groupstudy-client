import React from "react";
import Hero from "../../Components/Hero/Hero";
import AboutSection from "../../Components/AboutSection/AboutSection";

import TopCourse from "../../Components/TopCourse/TopCourse";
import Categories from "../../Components/Categories/Categories";
import UniversityAdmission from "../../Components/UniversityAdmission/UniversityAdmission";

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutSection />
      <Categories />
      <UniversityAdmission />
      <TopCourse
        title={"Top Featured Courses"}
        description={
          "Our Top Featured Courses section showcases the most popular,updated, and in-demand courses."
        }
      />
    </div>
  );
};

export default Home;
