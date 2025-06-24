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

  return (
    <div className='sticky top-0 bg-[#F4F4F9] z-10'>

        {/* top nav */}
        <div className='pt-4'>
            <hr />
            <div className='align flex my-2.5 px-10'>
                <div className='flex items-center space-x-5'>
                    <CiGlobe />
                    <p>{getFormattedDate()}</p>
                </div>
                <div className='flex items-center space-x-5'>
                    <p>Menu</p>
                    <RiArrowRightSLine />
                    <IoSearchOutline />
                </div>
            </div>
            <hr />
        </div>


        {/* middle nav : logo */}
        <div className=' flex justify-center py-8 px-10'>
            <Link to='/'>
                <img className='h-14 w-[300px] item-center'
                src={images.logo}
                alt="news logo" />
            </Link>
        </div>


        {/* bottom nav - menu */}
        <div>
            <hr />
            <div className='flex justify-center space-x-14  px-10'>
                {navMenu.map(function(item){
                    return (
                        <Link className='py-2' key={item.name} to={item.link} >
                            {item.name}
                        </Link>
                    )
                })}
            </div>
            <hr />
        </div>


    </div>
  )
}

export default Navbar