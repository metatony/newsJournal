import React from "react";
import { TfiArrowCircleRight } from "react-icons/tfi";
import { useGlobal } from "../../../provider/GlobalProvider";
import ShimmerPost from "../../../components/ShimmerPost";

function LatestNews() {
  const { data, loading } = useGlobal();

  function formatDate(dateString) {
    return new Intl.DateTimeFormat("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }).format(new Date(dateString));
  }

  if (loading) {
    return <ShimmerPost />;
  }

  return (
    <section className="mt-20 ">
      <div className="flex items-start align border-b pb-4 px-5 lg:px-10">
        <p className="md:text-2xl font-medium w-56   md:w-80  lg:w-[600px] ">
          LATEST NEWS
        </p>

        <a href={data[0].url} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-5">
          <p className="text-sm md:text-base font-light">Read Article</p>
          <TfiArrowCircleRight />
        </a>
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
              <a
                key={item.url}
                href={item.url}
                target="_blank" rel="noopener noreferrer"
                className="grid grid-cols-1 md:grid-cols-2 gap-5"
              >
                <div className="">
                  <p className="font-medium"> {item.title}</p>
                  <p className="font-light">{item.source.name} - {formatDate(item.publishedAt)}</p>
                </div>

                <div className="">
                  <img className=" md:h-52    w-full  rounded-lg" src={item.image} alt="" />
                </div>
              </a>
            );
          })}
        </div>
      </div>

      {/* 3 grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-20 px-5 lg:px-10 justify-between">
        {data.slice(0, 3).map(function (item) {
          return (
            <a
              key={item.url}
              href={item.url}
              target="_blank" rel="noopener noreferrer"
              className="flex flex-col items-start space-y-5"
            >
              <img
                className=" w-full md:h-64 object-cover rounded-lg"
                src={item.image}
                alt=""
              />
              <div>
                <p className="font-medium ">{item.title}</p>
                <p className="font-light mt-3">{item.source.name} - {formatDate(item.publishedAt)}</p>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}

export default LatestNews;
