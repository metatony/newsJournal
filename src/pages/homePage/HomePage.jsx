import React from 'react'
import images from '../../constants/images'
import { TfiArrowCircleRight } from "react-icons/tfi";
import { Link } from 'react-router';


function HomePage() {

  const list = [
    {
      id: 1,
      image: images.frame,
      title: 'WORLD NEWS',
      description: 'Economic policies are shaping international markets'
    },
    {
      id: 2,
      image: images.frame,
      title: 'TECHNOLOGY',
      description: 'Economic policies are shaping international markets'
    },
    {
      id: 3,
      image: images.frame,
      title: 'HEALTH',
      description: 'Economic policies are shaping international markets'
    },
    {
      id: 4,
      image: images.frame,
      title: 'SPORTS',
      description: 'Economic policies are shaping international markets'
    },
  ]
  return (
    <div className=' mt-20 mb-6 '>

      {/* top section */}
      <div className='flex justify-between px-10'>
        {
          list.map(function(item){
            return(
              <div key={item.id} className='flex items-center space-x-5 '>
                <div>
                  <img src={item.image} alt="news thumbnail" />
                </div>
        
                <div className=''>
                  <p className='font-medium'>{item.title}</p>
                  <p className='w-[174px] font-light text-sm'>{item.description}</p>
                </div>
              </div>
            )
          })

        }
      </div>

      {/* background image */}
      <div className='mt-10'>
        <img className='w-full' src={images.background} alt="" />
      </div>

      {/* bottom section */}
      <div className='flex justify-between items-start mt-10 px-10'>
        <p className='text-3xl font-light w-[600px]'>A deep dive into the influence of cultural movements on contemporary society</p>

        <Link to='/' className='flex items-center space-x-5'>
            <p className=' font-light'>Read Article</p>
            <TfiArrowCircleRight />
        </Link>

      </div>


      

    </div>
  )
}

export default HomePage