import React from "react";
import { TfiArrowCircleRight } from "react-icons/tfi";
import { useGlobal } from "../../../provider/GlobalProvider";
import ShimmerEffect from "../../../components/ShimmerEffect";

function SectionOne() {
  const { data, loading } = useGlobal();

  if (loading) {
    return <ShimmerEffect />;
  }

  return (
    <section>
      <div className="grid grid-cols-1 sm:max-lg:grid-cols-2 lg:grid-cols-4 gap-5 px-5 lg:px-10">
        {data.slice(0, 4).map(function (item) {
          return (
            <a key={item.url} href={item.url} target="_blank" rel="noopener noreferrer">
              <div className="flex space-x-4">
                <img
                  className="h-16 w-16 md:h-20 bg-blue-300 md:w-20 object-cover rounded-lg"
                  src={item.urlToImage}
                  alt={item.source.name}
                />

                <div className="">
                  <p className="font-medium">
                    {item.title?.length > 30
                      ? item.title.substring(0, 30) + "..."
                      : item.title}
                  </p>
                  <p className="text-sm font-light">
                    {item.description && item.description.length > 70
                      ? item.description.substring(0, 70) + "..."
                      : item.description}
                  </p>
                </div>
              </div>
            </a>
          );
        })}
      </div>

      {/* background image */}
      <div>
        <div className="mt-10 lg:px-10 lg:rounded-lg">
          <img
            className="w-full lg:rounded-lg"
            src={data[4].urlToImage}
            alt="featured news image"
          />
        </div>

        {/* bottom section */}
        <div className="flex align items-start mt-10 px-5 lg:px-10 ">
          <p className="md:text-xl font-light w-[230px] sm:w-80 lg:w-[600px]">
            {data[4].title}
          </p>

          <a href={data[4].url} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-5">
            <p className="text-sm md:text-base font-light">Read Article</p>
            <TfiArrowCircleRight />
          </a>
        </div>
      </div>
    </section>
  );
}

export default SectionOne;
