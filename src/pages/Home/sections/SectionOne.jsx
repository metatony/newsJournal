import React from "react";
import { TfiArrowCircleRight } from "react-icons/tfi";
import { useGlobal } from "../../../provider/GlobalProvider";
import ShimmerEffect from "../../../components/ShimmerEffect";
import newsCategory from "../../../constants/newsCategory";

function SectionOne() {
  const { data, loading } = useGlobal();

  if (loading) {
    return <ShimmerEffect />;
  }

  return (
    <section>
      <div className="grid grid-cols-1 sm:max-lg:grid-cols-2 lg:grid-cols-4 gap-5 px-5 xl:px-0 ">
        {newsCategory.map(function (item) {
          return (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex items-center space-x-4">
                <img
                  className="h-16 w-16 md:h-20 md:w-20 object-cover rounded-lg"
                  src={item.thumbnailImage}
                  alt={item.name}
                />

                <div className="space-y-1">
                  <p className="text-sm md:text-sm font-[500] ">{item.name}</p>
                  <p className="text-xs md:text-sm font-light leading-5 md:leading-6 ">
                    {item.slug}
                  </p>
                </div>
              </div>
            </a>
          );
        })}
      </div>

      {/* background image */}
      <div>
        <div className="mt-10 lg:rounded-lg">
          <img className="w-full " src={data[4].image} alt={data[4].title} />
        </div>

        {/* bottom section */}
        <div className="flex align mt-10 px-5 xl:px-0 ">
          <p className="small-header-title w-[230px] sm:w-80 lg:w-[600px] leading-7">
            {data[4].title}
          </p>

          <a
            href={data[4].url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-5"
          >
            <p className="paragraph-text">Read Article</p>
            <TfiArrowCircleRight />
          </a>
        </div>
      </div>
    </section>
  );
}

export default SectionOne;
