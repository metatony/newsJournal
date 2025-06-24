import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { RiArrowRightSLine } from "react-icons/ri";
import { CiGlobe } from "react-icons/ci";
import images from '../constants/images';
import { Link } from 'react-router';
import { CgDropInvert } from "react-icons/cg";
import { IoLogoInstagram } from "react-icons/io5";
import { CiLinkedin } from "react-icons/ci";
import { AiOutlineYoutube } from "react-icons/ai";
import { CiTwitter } from "react-icons/ci";
import { FcReddit } from "react-icons/fc";


function Footer() {
  return (
    <div>

        {/* top footer nav */}
        <div className='px-5 py-4 border-t-2'>
            <img src={images.blackLogo} alt="footer logo" />
        </div>


        {/* bottom footer nav */}
        <div className=''>
            <hr />
            <div className='align flex my-4 px-5'>
                <div className='flex items-center space-x-5'>
                    <CgDropInvert />
                    <p className='font-light text-sm'>Copyright © 2024 - The News - All rights reserved</p>
                </div>
                <div className='flex items-center space-x-5'>
                    <IoLogoInstagram /> 
                    <CiLinkedin /> 
                    <AiOutlineYoutube />
                    <CiTwitter />
                    <FcReddit />
                </div>
            </div>
            <hr />
        </div>


    </div>
  )
}

export default Footer