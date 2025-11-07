import React from "react";
import images from "../constants/images";
import { CgDropInvert } from "react-icons/cg";
import { IoLogoInstagram } from "react-icons/io5";
import { CiLinkedin } from "react-icons/ci";
import { AiOutlineYoutube } from "react-icons/ai";
import { CiTwitter } from "react-icons/ci";
import { FcReddit } from "react-icons/fc";

function Footer() {
  return (
    <div className="mt-28 ">
      {/* top footer nav */}
      <div className="py-4 border-t px-5 xl:px-0">
        <img src={images.blackLogo} alt="footer logo" />
      </div>

      {/* bottom footer nav */}
      <div className="">
        <div className="align flex flex-col md:flex-row px-5 xl:px-0 border-t py-4">
          <div className="flex items-center space-x-5">
            <CgDropInvert />
            <p className="paragraph-text font-light">
              &copy; {new Date().getFullYear()} - All rights reserved
            </p>
            <a
              className="paragraph-text font-light  hover:text-blue-400 "
              target="_blank"
              href="https://github.com/metatony"
              rel=" noopener noreferrer "
            >
              Website built by metatony
            </a>
          </div>
          <div className="flex items-center space-x-5 mt-5 lg:mt-0">
            <IoLogoInstagram />
            <CiLinkedin />
            <AiOutlineYoutube />
            <CiTwitter />
            <FcReddit />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
