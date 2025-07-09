import React from "react";
import { TfiArrowCircleRight } from "react-icons/tfi";
import { useGlobal } from "../../../provider/GlobalProvider";
import { Link } from "react-router-dom";
import ShimmerGallery from "../../../components/ShimmerGallery";

function WorldNews() {
  const { data, loading } = useGlobal();

  if (loading) {
    return <ShimmerGallery />;
  }

  return (
    <section className="mt-20">
      <div className="flex align border-b  pb-4">
        <p className=" pl-5 lg:pl-10 md:text-2xl font-medium w-64 md:w-80  lg:w-[600px]">
          WORLD NEWS
        </p>

        <a
          href={data[0].url}
          target="_blank" rel="noopener noreferrer"
          className="flex items-center space-x-5 pr-5 lg:pr-10"
        >
          <p className="text-sm md:text-base font-light">View all</p>
          <TfiArrowCircleRight />
        </a>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-5 lg:px-10 ">
        {/* large large */}
        <div className="md:col-span-2">
          <img
            className="h-full w-full object-cover lg:rounded-lg"
            src={data[0].image}
            alt=""
          />
        </div>
        {/* flex-col grid */}

        <div className="grid grid-cols-1 space-y-5 px-5 lg:px-0 content-between ">
          {data.slice(1, 4).map(function (item) {
            return (
              <a
              key={item.url}
                href={item.url}
                target="_blank" rel="noopener noreferrer"
                className="grid grid-cols-2 items-start gap-5"
              >
                <div className="">
                  <img
                    className="lg:h-44 lg:w-full object-cover rounded-lg"
                    src={item.image}
                    alt=""
                  />
                </div>

                <div className="">
                  <p className="font-light text-sm">
                    {item.source.name} - September, 2025
                  </p>
                  <p className="font-medium ">{item.title}</p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WorldNews;
