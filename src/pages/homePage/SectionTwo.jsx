import React from "react";
import { TfiArrowCircleRight } from "react-icons/tfi";
import { useGlobal } from "../../provider/GlobalProvider";
import { Link } from "react-router-dom";

function SectionTwo() {
  const { data, loading } = useGlobal();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mt-20">
      <div className="flex items-start align border-b border-[#b1b1b1] pb-4">
        <p className="md:text-2xl font-medium w-[260px] lg:w-[600px] px-5 lg:px-10">LATEST NEWS</p>

        <Link to={data[0].url} className="flex items-center space-x-5 px-5 lg:px-10">
          <p className="text-sm md:text-base font-light">Read Article</p>
          <TfiArrowCircleRight />
        </Link>
      </div>

      {/* latest news grid */}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5 lg:px-10">
        {/* large */}
        <div className="">
          <img
            className="lg:h-full object-cover lg:rounded-lg"
            src={data[0].urlToImage}
            alt=""
          />
        </div>
        {/* flex-col grid */}
        <div className="flex flex-col space-y-7 px-5 lg:px-0 ">
          {data.slice(0, 2).map(function (item) {
            return (
              <Link to={item.url} className="flex items-start lg:items-center space-x-5">
                <div className="block lg:hidden">
                  <img
                    className="lg:hidden h-[80px] lg:h-[230px] w-full object-cover rounded-lg"
                    src={item.urlToImage}
                    alt=""
                  />
                </div>

                <div>
                  <p className="w-[264px] lg:w-[302px] lg:text-lg">{item.title}</p>
                  <p className="font-light text-sm mt-3">BBC News - September, 2025</p>
                </div>

                <div className="hidden lg:block">
                  <img
                    className="h-[80px] lg:h-[230px] w-full object-cover rounded-lg"
                    src={item.urlToImage}
                    alt=""
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* 3 grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 mt-10 px-5 lg:px-10 justify-between">
        {data.slice(0, 3).map(function (item) {
          return (
            <Link to={item.url} className="flex flex-col items-start space-y-3">
              <img
                className="h-[230px] w-full object-cover rounded-lg"
                src={item.urlToImage}
                alt=""
              />
              <div>
                <p className="lg:w-[302px] lg:text-lg">{item.title}</p>
                <p className="font-light text-sm mt-3">
                  BBC News - September, 2025
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default SectionTwo;
