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
    <div className="mt-20 ">
      <div className="flex items-start align border-b pb-4 px-5 lg:px-10">
        <p className="md:text-2xl font-medium w-64 md:w-80  lg:w-[600px] ">
          LATEST NEWS
        </p>

        <Link to={data[0].url} className="flex items-center space-x-5">
          <p className="text-sm md:text-base font-light">Read Article</p>
          <TfiArrowCircleRight />
        </Link>
      </div>

      {/* latest news grid */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 mt-10 lg:px-10">
        {/* large */}
        <div className="">
          <img
            className="object-cover h-full w-full lg:rounded-lg"
            src={data[5].image}
            alt=""
          />
        </div>

        {/* flex-col grid */}
        <div className="grid grid-cols-1 gap-5 px-5 lg:px-0">
          {data.slice(6, 8).map(function (item) {
            return (
              <Link
                key={item.url}
                to={item.url}
                className="grid grid-cols-1 md:grid-cols-2 gap-5"
              >
                <div className="">
                  <p className="font-medium"> {item.title}</p>
                  <p className="font-light">{item.source.name} - September, 2025</p>
                </div>

                <div className="">
                  <img className="lg:h-[140px] w-full  rounded-lg" src={item.image} alt="" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* 3 grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-20 px-5 lg:px-10 justify-between">
        {data.slice(0, 3).map(function (item) {
          return (
            <Link
              key={item.url}
              to={item.url}
              className="flex flex-col items-start space-y-5"
            >
              <img
                className=" w-full object-cover rounded-lg"
                src={item.image}
                alt=""
              />
              <div>
                <p className="font-medium ">{item.title}</p>
                <p className="font-light mt-3">{item.source.name} - September, 2025</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default SectionTwo;
