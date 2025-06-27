import React from 'react'
import { TfiArrowCircleRight } from "react-icons/tfi";
import { useGlobal } from '../../provider/GlobalProvider';
import { Link } from 'react-router-dom';


function SectionThree() {

    const {data, loading} = useGlobal();


    if (loading) {
      return <div>Loading...</div>;
    }
    
    
  return (
      <div className="mt-20">
        <div className="flex align border-b border-[#b1b1b1] pb-4">
          <p className=" pl-5 lg:pl-10 md:text-2xl font-medium w-[260px] lg:w-[600px]">
            WORLD NEWS
          </p>

          <Link
            to={data[0].url}
            className="flex items-center space-x-5 pr-5 lg:pr-10"
          >
            <p className="text-sm md:text-base font-light">View all</p>
            <TfiArrowCircleRight />
          </Link>
        </div>


        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-5 lg:px-10 ">
          {/* large large */}
          <div className="col-span-2">
            <img
              className="h-full w-full object-cover lg:rounded-lg"
              src={data[0].urlToImage}
              alt=""
            />
          </div>
          {/* flex-col grid */}

          <div className="flex flex-col space-y-5 px-5 lg:px-0">
            {
              data.slice(1, 4).map(function(item){
                return(
                  <Link to={item.url} className="flex items-start lg:items-center space-x-5">
                    <div>
                      <img
                        className="h-[80px] lg:h-[182px] lg:w-[190px] object-cover rounded-lg "
                        src={item.urlToImage}
                        alt=""
                      />
                    </div>
    
                    <div className="">
                      <p className="font-light text-sm ">
                        WallStreet Journal - September, 2025
                      </p>
                      <p className="w-[264px] lg:w-[280px] lg:text-lg ">
                        {item.title}
                      </p>
                    </div>
                </Link>
                )
              })
            }
          </div>
        </div>
      </div>
  );
}

export default SectionThree;
