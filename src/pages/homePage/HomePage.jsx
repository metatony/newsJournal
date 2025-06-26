import React from 'react'
import { TfiArrowCircleRight } from "react-icons/tfi";
import { useGlobal } from '../../provider/GlobalProvider';
import { Link } from 'react-router-dom';


function HomePage() {

  const {data, loading} = useGlobal();

  const wallStreetArticles = data.wallStreet;
  const BusinessArticles = data.Business;
  const techCrunchArticles = data.techCrunch;
  const appleArticles = data.apple;
  const teslaArticles = data.tesla;
  const TopHeadlines = data.TopHeadlines;
  const bbcNewsArticles = data.bbcNews;


  if (loading) {
    return <div>Loading...</div>;
  }



  return (
    <div className=' mt-5 lg:mt-20 mb-6'>

      {/* top section */}
      <div className='flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center px-5 lg:px-10'>
        {
          bbcNewsArticles.slice(0,4).map(function(item){
            return(
              <Link key={item.url} to={item.url}>
                <div className='flex items-start lg:items-center space-x-5  '>
                    
                  <div>
                    <img className='h-[80px] lg:w-[80px] object-cover rounded-lg' src={item.urlToImage} alt={item.source.name} />
                  </div>
          
                  <div className=''>
                    <p className='font-medium'>{item.title?.length > 30 ? item.title.substring(0,30) + '...' : item.title }</p>
                    <p className='lg:w-[174px] font-light text-sm'>
                      {item.description && item.description.length > 90 ? item.description.substring(0, 90) + '...' : item.description}</p>
                  </div>
                </div>
              </Link>
            )
          })

        }
      </div>

      {/* background image */}
      <div className=' lg:px-10'>
        <div className='mt-10'>
          <img className='w-full lg:rounded-lg' src={TopHeadlines[0].urlToImage} alt="featured news image" />
        </div>

        {/* bottom section */}
        <div className='flex align items-start mt-10 px-5 lg:px-0 '>
          <p className='md:text-2xl font-light w-[260px] lg:w-[600px]'>{TopHeadlines[0].title}</p>

          <Link to={TopHeadlines[0].url} className='flex items-center space-x-5'>
              <p className='text-sm md:text-base font-light'>Read Article</p>
              <TfiArrowCircleRight />
          </Link>

        </div>
      </div>


      {/* Latest News */}
      <div className='mt-20'>

        <div className='flex items-start align border-b border-[#b1b1b1] pb-4'>
          <p className='md:text-2xl font-medium w-[260px] lg:w-[600px] px-5 lg:px-10'>LATEST NEWS</p>

          <Link to={TopHeadlines[0].url} className='flex items-center space-x-5 px-5 lg:px-10'>
              <p className='text-sm md:text-base font-light'>Read Article</p>
              <TfiArrowCircleRight />
          </Link>
        </div>

        {/* latest news grid */}

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5 lg:px-10'>
          {/* large */}
          <div className=''>
            <img className='lg:h-full object-cover lg:rounded-lg' src={wallStreetArticles[0].urlToImage} alt="" />

          </div>
          {/* flex-col grid */}
          <div className='flex flex-col space-y-7 px-5 lg:px-0 '>

            <Link to={bbcNewsArticles[1].url} className='flex items-start lg:items-center space-x-5'>
              <div className='block lg:hidden'>
                <img className='lg:hidden h-[80px] lg:h-[230px] w-full object-cover rounded-lg' src={bbcNewsArticles[1].urlToImage} alt="" />
              </div>
              <div>
                <p className='w-[264px] lg:w-[302px] lg:text-lg'>{bbcNewsArticles[1].title}</p>
                <p className='font-light text-sm mt-3'>BBC News - September, 2025</p>
              </div>
              <div className='hidden lg:block'>
                <img className='h-[80px] lg:h-[230px] w-full object-cover rounded-lg' src={bbcNewsArticles[1].urlToImage} alt="" />
              </div>
            </Link>

            <Link to={BusinessArticles[0].url} className='flex items-start lg:items-center space-x-5'>
              <div className='block lg:hidden'>
                <img className='lg:hidden h-[80px] lg:h-[230px] w-full object-cover rounded-lg' src={BusinessArticles[1].urlToImage} alt="" />
              </div>
              <div>
                <p className='w-[264px] lg:w-[302px] lg:text-lg'>{BusinessArticles[0].title}</p>
                <p className='font-light text-sm mt-3'>Tesla News - September, 2025</p>
              </div>
              <div className='hidden lg:block'>
                <img className='h-[80px] lg:h-[230px] w-full object-cover rounded-lg' src={BusinessArticles[0].urlToImage} alt="" />
              </div>
            </Link>

          </div>

        </div>


        

        {/* 3 grid */}
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-7 mt-10 px-5 lg:px-10 justify-between'>
          <Link to={BusinessArticles[0].url} className='flex flex-col items-start space-y-3'>
            <img className='h-[230px] w-full object-cover rounded-lg' src={BusinessArticles[0].urlToImage} alt="" />
            <div>
              <p className='lg:w-[302px] lg:text-lg'>{BusinessArticles[0].title}</p>
              <p className='font-light text-sm mt-3'>BBC News - September, 2025</p>
            </div>
          </Link>

          <Link to={BusinessArticles[1].url} className='flex flex-col items-start space-y-3'>
            <img className='h-[230px] w-full object-cover rounded-lg' src={BusinessArticles[1].urlToImage} alt="" />
            <div>
              <p className='lg:w-[302px] lg:text-lg'>{BusinessArticles[1].title}</p>
              <p className='font-light text-sm mt-3'>BBC News - September, 2025</p>
            </div>
          </Link>

          <Link to={BusinessArticles[2].url} className='flex flex-col items-start space-y-3'>
            <img className='h-[230px] w-full object-cover rounded-lg' src={BusinessArticles[2].urlToImage} alt="" />
            <div>
              <p className='lg:w-[302px] lg:text-lg'>{BusinessArticles[2].title}</p>
              <p className='font-light text-sm mt-3'>BBC News - September, 2025</p>
            </div>
          </Link>

        </div>

      </div>



      {/* World news */}

      <div className='mt-20'>

        <div className='flex align border-b border-[#b1b1b1] pb-4'>
          <p className=' pl-5 lg:pl-10 md:text-2xl font-medium w-[260px] lg:w-[600px]'>WORLD NEWS</p>

          <Link to={TopHeadlines[0].url} className='flex items-center space-x-5 pr-5 lg:pr-10'>
              <p className='text-sm md:text-base font-light'>View all</p>
              <TfiArrowCircleRight />
          </Link>
        </div>


        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mt-5 lg:px-10 '>
          {/* large */}
            <div className='col-span-2'>
              <img className='h-full w-full object-cover lg:rounded-lg' src={wallStreetArticles[0].urlToImage} alt="" />

            </div>
            {/* flex-col grid */}
            <div className='flex flex-col space-y-5 px-5 lg:px-0'>

              <Link to={wallStreetArticles[1].url} className='flex items-start lg:items-center space-x-5'>
                <div>
                  <img className='h-[80px] lg:h-[182px] lg:w-[190px] object-cover rounded-lg ' src={wallStreetArticles[1].urlToImage} alt="" />
                </div>

                <div className=''>
                  <p className='font-light text-sm '>WallStreet Journal - September, 2025</p>
                  <p className='w-[264px] lg:w-[280px] lg:text-lg '>{wallStreetArticles[1].title}</p>
                </div>
              </Link>

              <Link to={wallStreetArticles[2].url} className='flex items-center space-x-5'>
                <div>
                  <img className='h-[80px] lg:h-[182px] lg:w-[190px] object-cover rounded-lg' src={wallStreetArticles[2].urlToImage} alt="" />
                </div>

                <div>
                  <p className='font-light text-sm '>WallStreet Journal - September, 2025</p>
                  <p className='w-[264px] lg:w-[280px] lg:text-lg '>{wallStreetArticles[2].title}</p>
                </div>
              </Link>


              <Link to={wallStreetArticles[3].url} className='flex items-center space-x-5'>
                <div>
                  <img className='h-[80px] lg:h-[182px] lg:w-[190px] object-cover rounded-lg' src={wallStreetArticles[3].urlToImage} alt="" />
                </div>

                <div>
                  <p className='font-light text-sm'>WallStreet Journal - September, 2025</p>
                  <p className='w-[264px] lg:w-[280px] lg:text-lg'>{wallStreetArticles[3].title}</p>
                </div>
              </Link>

            </div>

        </div>
      </div>


      {/* technology news */}
      <div className='mt-20'>


        <div className='flex align border-b border-[#b1b1b1] pb-4'>
            <p className=' pl-5 lg:pl-10 md:text-2xl font-medium w-[260px] lg:w-[600px]'>TECHNOLOGY NEWS</p>

            <Link to={techCrunchArticles[0].url} className='flex items-center space-x-5 pr-5 lg:pr-10'>
                <p className='text-sm md:text-base font-light'>View all</p>
                <TfiArrowCircleRight />
            </Link>
        </div>



        {/* 3 grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10 px-5 lg:px-10 justify-between'>
          <Link to={techCrunchArticles[0].url} className='flex flex-col items-start space-y-3'>
            <img className='h-[230px] w-full object-cover rounded-lg' src={techCrunchArticles[0].urlToImage} alt="" />
            <div>
              <p className='font-light text-sm mt-3'>TechCrunch - September, 2025</p>
              <p className='w-[302px] lg:text-lg'>{techCrunchArticles[0].title}</p>
            </div>
          </Link>

          <Link to={techCrunchArticles[1].url} className='flex flex-col items-start space-y-3'>
            <img className='h-[230px] w-full object-cover rounded-lg' src={techCrunchArticles[1].urlToImage} alt="" />
            <div>
              <p className='font-light text-sm mt-3'>TechCrunch - September, 2025</p>
              <p className='w-[302px] lg:text-lg'>{techCrunchArticles[1].title}</p>
            </div>
          </Link>

          <Link to={techCrunchArticles[2].url} className='flex flex-col items-start space-y-3'>
            <img className='h-[230px] w-full object-cover rounded-lg' src={techCrunchArticles[2].urlToImage} alt="" />
            <div>
              <p className='font-light text-sm mt-3'>TechCrunch - September, 2025</p>
              <p className='w-[302px] lg:text-lg'>{techCrunchArticles[2].title}</p>
            </div>
          </Link>

          <Link to={techCrunchArticles[3].url} className='flex flex-col items-start space-y-3'>
            <img className='h-[230px] w-full object-cover rounded-lg' src={techCrunchArticles[3].urlToImage} alt="" />
            <div>
              <p className='font-light text-sm mt-3'>TechCrunch - September, 2025</p>
              <p className='w-[302px] lg:text-lg'>{techCrunchArticles[3].title}</p>
              
            </div>
          </Link>

        </div>



      </div>

      

    </div>
  )
}

export default HomePage