import React from "react";
import { TfiArrowCircleRight } from "react-icons/tfi";
import { useGlobal } from "../../provider/GlobalProvider";
import { Link } from "react-router-dom";

function SectionOne() {
    const {data, loading} = useGlobal();

    // const TopHeadlines = data.TopHeadlines;
    // const bbcNewsArticles = data.bbcNews;

    if (loading) {
        return <div>Loading...</div>;
      }



  return (
    <div>
      <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center px-5 lg:px-10">
        {data.slice(0, 4).map(function (item) {
          return (
            <Link key={item.url} to={item.url}>
              <div className="flex items-start lg:items-center space-x-5  ">
                <div>
                  <img
                    className="h-[80px] lg:w-[80px] object-cover rounded-lg"
                    src={item.urlToImage}
                    alt={item.source.name}
                  />
                </div>

                <div className="">
                  <p className="font-medium">
                    {item.title?.length > 30
                      ? item.title.substring(0, 30) + "..."
                      : item.title}
                  </p>
                  <p className="lg:w-[174px] font-light text-sm">
                    {item.description && item.description.length > 90
                      ? item.description.substring(0, 90) + "..."
                      : item.description}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* background image */}
      <div className=' lg:px-10'>
        <div className='mt-10'>
          <img className='w-full lg:rounded-lg' src={data[0].urlToImage} alt="featured news image" />
        </div>

        {/* bottom section */}
        <div className='flex align items-start mt-10 px-5 lg:px-0 '>
          <p className='md:text-2xl font-light w-[260px] lg:w-[600px]'>{data[0].title}</p>

          <Link to={data[0].url} className='flex items-center space-x-5'>
              <p className='text-sm md:text-base font-light'>Read Article</p>
              <TfiArrowCircleRight />
          </Link>

        </div>
      </div>


    </div>
  );
}

export default SectionOne;
