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
      <section className="mt-20">
        <div className="flex align border-b pb-4">
          <p className=" pl-5 lg:pl-10 md:text-2xl font-medium w-64 md:w-80  lg:w-[600px]">
            TECHNOLOGY NEWS
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

        {/* 3 grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10 px-5 lg:px-10">
          {data?.slice(5, 9).map(function (item) {
            return (
              <a key={item.url} href={item.url} 
              target="_blank" rel="noopener noreferrer" 
              className="flex flex-col ">
                <img
                  className="object-cover rounded-lg md:h-44 w-full"
                  src={item.urlToImage}
                  alt=""
                />
                <div>
                  <p className="font-light text-sm mt-5">
                    {item.source.name} - {formatDate(item.publishedAt)}
                  </p>
                  <p className="">{item.title}</p>
                </div>
              </a>
            );
          })}
        </div>
      </section>
  );
}

export default TechnologyNews;

