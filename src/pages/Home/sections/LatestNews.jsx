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
    <section className="mt-14 ">
      <div className="flex items-start align border-b pb-4 px-5 xl:px-0">
        <p className="big-header-text w-56 md:w-80 lg:w-[600px]">LATEST NEWS</p>

        <a
          href={data[0].url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-5"
        >
          <p className="paragraph-text ">View All</p>
          <TfiArrowCircleRight />
        </a>
      </div>

      {/* latest news grid */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 mt-10 md:px-5 xl:px-0">
        {/* large */}
        <div className="relative">
          <div className="absolute bottom-2 left-4 z-10 text-white w-xs md:w-lg space-y-3 ">
            <h3 className="paragraph-text leading-7 font-medium md:underline">
              {data[5].title?.length > 80
                ? data[5].title.substring(0, 80) + "..."
                : data[5].title}
            </h3>
            <p className="source-text">
              {data[5].source.name} | {formatDate(data[5].publishedAt)}
            </p>
          </div>
          <div className="absolute inset-0 bg-black opacity-35 lg:rounded-lg"></div>
          <img
            className="object-cover h-full md:h-[400px] w-full lg:rounded-lg"
            src={data[5].image}
            alt={data[5].title}
            loading="lazy"
          />
        </div>

        {/* flex-col grid */}
        <div className="flex flex-col gap-5 px-5 xl:px-0 ">
          {data.slice(6, 8).map(function (item) {
            return (
              <a
                key={item.url}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="grid grid-cols-1 md:grid-cols-2 gap-3 md:items-center"
              >
                <div className="space-y-3 order-2 md:order-0">
                  <p className="paragraph-text leading-7 font-medium ">
                    {" "}
                    {item.title?.length > 100
                      ? item.title.substring(0, 100) + "..."
                      : item.title}
                  </p>
                  <p className="source-text">
                    {item.source.name} | {formatDate(item.publishedAt)}
                  </p>
                </div>

                <div className="order-1 md:order-0">
                  <img
                    className="h-[190px] w-full rounded-lg"
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                  />
                </div>
              </a>
            );
          })}
        </div>
      </div>

      {/* 3 grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 md:mt-20 px-5 xl:px-0 justify-between">
        {data.slice(0, 3).map(function (item) {
          return (
            <a
              key={item.url}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-start space-y-5"
            >
              <img
                className=" w-full h-[190px] md:h-64 object-cover rounded-lg"
                src={item.image}
                alt={item.title}
              />
              <div className="space-y-3">
                <p className="paragraph-text leading-7 font-medium ">
                  {item.title?.length > 100
                    ? item.title.substring(0, 100) + "..."
                    : item.title}
                </p>
                <p className="source-text">
                  {item.source.name} | {formatDate(item.publishedAt)}
                </p>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}

export default LatestNews;
