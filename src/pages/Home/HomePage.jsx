import SectionOne from "./sections/SectionOne";
import LatestNews from "./sections/LatestNews";
import TechnologyNews from "./sections/TechnologyNews";

function HomePage() {
  return (
    <div className=" mt-5 lg:mt-7 mb-5">
      {/* top section */}
      <SectionOne />

      <LatestNews />

      <TechnologyNews />
    </div>
  );
}

export default HomePage;
