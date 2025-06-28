import React from 'react'
import { useGlobal } from '../../provider/GlobalProvider';
import { Link } from 'react-router';

function WorldNews() {

    const { data, loading } = useGlobal();
    if (loading) {
        return <div>Loading...</div>;
      }


  return (
    <div className='mt-20'>
        <div className="border-b pb-4 px-5 lg:px-10">
            <p className="md:text-2xl font-medium w-56 md:w-80 lg:w-[600px]">
            WORLD NEWS
            </p>
        </div>
      
        <div className="grid grid-cols-1 sm:max-lg:grid-cols-2 lg:grid-cols-3 gap-5 px-5 lg:px-10 mt-10">
        {data.map(function (item) {
          return (
            <Link key={item.url} to={item.url}>
              <div className="">
                  <img
                    className=" bg-blue-300 h-[267px] w-full object-cover rounded-lg"
                    src={item.image}
                    alt={item.source.name}
                  />
        
                <div className="mt-5">
                  <p className="font-medium">
                    {item.title}
                  </p>
                  <p className="text-sm font-light">
                  Source - {item.source.name}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  )
}

export default WorldNews