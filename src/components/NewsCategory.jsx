import React from "react";
import { useGlobal } from "../provider/GlobalProvider";
import { Link } from "react-router";
import ShimmerPost from "./ShimmerPost";

const NewsCategory = (props) => {
  const { data, loading } = useGlobal();
  if (loading) {
    return <ShimmerPost />;
  }

  return (
    <div className="mt-14">
      <div className="border-b pb-4 px-5 xl:px-0">
        <p className="md:text-2xl font-medium w-56 md:w-80 lg:w-[600px]">
          {props.category}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:max-lg:grid-cols-2 lg:grid-cols-3 gap-7 space-y-5 px-5 xl:px-0 mt-10">
        {data.map(function (item) {
          return (
            <Link key={item.url} to={item.url}>
              <div className="">
                <img
                  className="h-[267px] w-full object-cover rounded-lg"
                  src={item.image}
                  alt={item.source.name}
                />

                <div className="mt-5 space-y-3">
                  <p className="text-xs sm:text-sm leading-7 font-medium">
                    {item.title?.length > 100
                      ? item.title.substring(0, 100) + "..."
                      : item.title}
                  </p>
                  <p className="source-text">
                    Source | {item.source.name}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default NewsCategory;
