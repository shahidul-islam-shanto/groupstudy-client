import React from "react";
import Hero from "../../Components/Hero/Hero";
import AboutSection from "../../Components/AboutSection/AboutSection";
import TopFeatured from "../../Components/TopFeatured/TopFeatured";

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutSection />
      <TopFeatured
        title={"Top Featured Courses"}
        description={
          "Our Top Featured Courses section showcases the most popular,updated, and in-demand courses."
        }
      />
    </div>
  );
};

export default Home;
