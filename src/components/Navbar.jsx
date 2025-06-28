import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { RiArrowRightSLine } from "react-icons/ri";
import { CiGlobe } from "react-icons/ci";
import images from '../constants/images';
import { Link } from 'react-router';
import navMenu from '../constants/navMenu';


function Navbar() {

    function getFormattedDate() {
        const date = new Date();
        const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
        return date.toLocaleDateString('en-US', options);
      }
      
      console.log(getFormattedDate());

    //   sticky top-0
  return (
    <div className='sticky top-0 bg-[#F4F4F9] z-10 shadow-sm'>

        {/* top nav */}
        
        <div className='pt-4'>
            <div className='align border-t border-b py-4 flex my-2.5 px-5 lg:px-10'>
                <div className='flex items-center space-x-5'>
                    <CiGlobe />
                    <p>{getFormattedDate()}</p>
                </div>
                <div className='flex items-center space-x-5'>
                    <p className='hidden lg:block' >Menu</p>
                    <Link to='/world-news' className='block lg:hidden' >World News</Link>
                    <RiArrowRightSLine />
                    <IoSearchOutline />
                </div>
            </div>
        </div>

        {/* middle nav : logo */}
        <div className=' flex justify-center py-8 px-5 lg:px-10'>
            <Link to='/'>
                <img className='h-14 w-[300px] item-center'
                src={images.logo}
                alt="news logo" />
            </Link>
        </div>

        {/* bottom nav - menu */}
        <div className='hidden lg:block border-t border-b py-4'>
            <div className='flex justify-center space-x-14 px-10'>
                {navMenu.map(function(item){
                    return (
                        <Link className='' key={item.name} to={item.link} >
                            {item.name}
                        </Link>
                    )
                })}
            </div>
        </div>


    </div>
  )
}

export default Navbar