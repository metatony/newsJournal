import React from "react";
import { TfiArrowCircleRight } from "react-icons/tfi";
import { useGlobal } from "../../../provider/GlobalProvider";
import ShimmerPost from "../../../components/ShimmerPost";

function TechnologyNews() {
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
      <div className="flex align border-b pb-4">
        <p className=" pl-5 xl:pl-0 big-header-text w-64 md:w-80 lg:w-[600px]">
          TECHNOLOGY NEWS
        </p>

        <a
          href={data[0].url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-5 pr-5 xl:pr-0"
        >
          <p className="paragraph-text">View all</p>
          <TfiArrowCircleRight />
        </a>
      </div>

      {/* 3 grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-7 mt-10 px-5 xl:px-0">
        {data?.slice(5, 9).map(function (item) {
          return (
            <a
              key={item.url}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col space-y-5 "
            >
              <img
                className="object-cover rounded-lg h-[190px] md:h-44 w-full"
                src={item.image}
                alt={item.title}
              />
              <div className="space-y-3">
                <p className="text-xs sm:text-sm leading-7 font-medium">
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

export default TechnologyNews;
