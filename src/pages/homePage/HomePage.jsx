import React from "react";
import SectionOne from "./components/SectionOne";
import LatestNews from "./components/LatestNews";
import WorldNews from "./components/WorldNews";
import TechnologyNews from "./components/TechnologyNews";


function HomePage() {
  return (
    <div className=" mt-5 lg:mt-20 mb-6">
      {/* top section */}
      <SectionOne />

      {/* Latest News */}
      <LatestNews />

      {/* World news */}
      <WorldNews />

      {/* technology news */}
      <TechnologyNews />
    </div>
  );
}

export default HomePage;
