import React from 'react'
import { TfiArrowCircleRight } from "react-icons/tfi";
import { useGlobal } from '../../provider/GlobalProvider';
import { Link } from 'react-router-dom';


function SectionFour() {

    const {data, loading} = useGlobal();

    const wallStreetArticles = data.wallStreet;
    const BusinessArticles = data.Business;
    const techCrunchArticles = data.techCrunch;
    const appleArticles = data.apple;
    const teslaArticles = data.tesla;
    const TopHeadlines = data.TopHeadlines;
    const bbcNewsArticles = data.bbcNews;
  
  
    // if (loading) {
    //   return <div>Loading...</div>;
    // }
  
    if (loading || !wallStreetArticles || !BusinessArticles || !techCrunchArticles || !appleArticles || !teslaArticles || !TopHeadlines || !bbcNewsArticles) {
      return <p className="text-center mt-20">Loading...</p>;
    }

  return (
    <div>
      <div className="mt-20">
            <div className="flex align border-b border-[#b1b1b1] pb-4">
                <p className=" pl-5 lg:pl-10 md:text-2xl font-medium w-[260px] lg:w-[600px]">
                    TECHNOLOGY NEWS
                </p>

                <Link
                    to={techCrunchArticles[0].url} className="flex items-center space-x-5 pr-5 lg:pr-10">
                    <p className="text-sm md:text-base font-light">View all</p>
                    <TfiArrowCircleRight />
                </Link>
            </div>

            {/* 3 grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10 px-5 lg:px-10 justify-between">
                {
                    techCrunchArticles.slice(0, 4).map(function(item){
                        return(
                            <Link
                            to={item.url}
                            className="flex flex-col items-start space-y-3">
                                <img
                                className="h-[230px] w-full object-cover rounded-lg"
                                src={item.urlToImage}
                                alt=""
                                />
                                <div>
                                    <p className="font-light text-sm mt-3">TechCrunch - September, 2025</p>
                                    <p className="w-[302px] lg:text-lg">{item.title}</p>
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

export default SectionFour;
