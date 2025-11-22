import React from "react";
import { TfiArrowCircleRight } from "react-icons/tfi";
import { useGlobal } from "../../../provider/GlobalProvider";
import ShimmerPost from "../../../components/ShimmerPost";
import { Link } from "react-router-dom";

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

        <Link to="/latest-news" className="flex items-center space-x-5">
          <p className="paragraph-text ">View All</p>
          <TfiArrowCircleRight />
        </Link>
      </div>

      {/* latest news grid */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-5 mt-10 md:px-5 xl:px-0">
        {/* large */}

        <a
          key={data[1].url}
          href={data[1].url}
          target="_blank"
          rel="noopener noreferrer"
          className="relative"
        >
          <div className="absolute bottom-2 left-4 z-10 text-white w-xs space-y-3 ">
            <h3 className="paragraph-text leading-7 font-medium sm:underline">
              {data[1].title?.length > 80
                ? data[1].title.substring(0, 80) + "..."
                : data[1].title}
            </h3>
            <p className="source-text">
              {data[1].source.name} | {formatDate(data[1].publishedAt)}
            </p>
          </div>
          <div className="absolute inset-0 bg-black opacity-35 md:rounded-lg"></div>

          <div className="aspect-[7/4] h-full w-full overflow-hidden md:rounded-lg order-1 md:order-0">
            <img
              className="w-full h-full object-cover "
              src={data[1].image}
              alt={data[1].title}
              loading="lazy"
            />
          </div>
        </a>

        {/* flex-col grid */}
        <div className="grid grid-cols-1 gap-5 px-5 md:px-0 xl:px-0 ">
          {data.slice(2, 4).map(function (item) {
            return (
              <a
                key={item.url}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="grid grid-cols-1 md:grid-cols-2 gap-2 md:items-center"
              >
                <div className="space-y-3 order-2 md:order-0">
                  <p className="paragraph-text leading-7 font-medium ">
                    {" "}
                    {item.title?.length > 70
                      ? item.title.substring(0, 70) + "..."
                      : item.title}
                  </p>
                  <p className="source-text">
                    {item.source.name} | {formatDate(item.publishedAt)}
                  </p>
                </div>

                <div className="aspect-[7/4] overflow-hidden rounded-lg order-1 md:order-0">
                  <img
                    className="w-full h-full object-cover "
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
        {data.slice(4, 7).map(function (item) {
          return (
            <a
              key={item.url}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-start space-y-5"
            >
              <div className="aspect-[7/4] w-full overflow-hidden rounded-lg">
                <img
                  className="w-full h-full object-cover "
                  src={item.image}
                  alt={item.title}
                />
              </div>

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
