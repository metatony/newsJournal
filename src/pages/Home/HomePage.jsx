import React from "react";
import SectionOne from "./sections/SectionOne";
import LatestNews from "./sections/LatestNews";
import WorldNews from "./sections/WorldNews";
import TechnologyNews from "./sections/TechnologyNews";


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
