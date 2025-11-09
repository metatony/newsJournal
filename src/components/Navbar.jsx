import React, { useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { RiArrowRightSLine } from "react-icons/ri";
import { CiGlobe } from "react-icons/ci";
import images from "../constants/images";
import { Link, useLocation, useNavigate } from "react-router-dom";
import navMenu from "../constants/navMenu";

function Navbar() {
  function getFormattedDate() {
    const date = new Date();
    const options = {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    };
    return date.toLocaleDateString("en-US", options);
  }

  console.log(getFormattedDate());

  const location = useLocation();
  const navigate = useNavigate();

  const [menuLabel, setMenuLabel] = useState(() => {
    const match = navMenu.find((item) => item.link === location.pathname);
    return match || navMenu[0];
  });

  useEffect(() => {
    const match = navMenu.find((item) => item.link === location.pathname);
    if (match) {
      setMenuLabel(match);
    }
  }, [location.pathname]);

  const handleMenuClick = (e) => {
    e.preventDefault();

    const currentIndex = navMenu.findIndex(
      (item) => item.name === menuLabel.name
    );
    const nextIndex = (currentIndex + 1) % navMenu.length;
    const nextItem = navMenu[nextIndex];

    setMenuLabel(nextItem);
    navigate(nextItem.link); // navigate to the new menu item
  };

  return (
    <div className="top-0 z-60 bg-white ">
      {/* top nav */}

        <div className="align border-t border-b py-4 flex px-5 xl:px-0">
          <div className="flex items-center space-x-5">
            <CiGlobe />
            <p className="paragraph-text">{getFormattedDate()}</p>
          </div>
          <div className="flex items-center space-x-5 paragraph-text">
            {/* <p className="hidden lg:block">Menu</p> */}
            <Link
              to={menuLabel.link}
              onClick={(e) => handleMenuClick(e)}
              className="block"
            >
              {menuLabel.name}
            </Link>
            <RiArrowRightSLine />
            <IoSearchOutline />
          </div>
        </div>

      {/* middle nav : logo */}
      <div className="flex justify-center py-3 px-5 xl:px-0">
        <Link to="/">
          <img
            className="h-14 w-[300px] item-center"
            src={images.logo}
            alt="news logo"
          />
        </Link>
      </div>

      {/* bottom nav - menu */}
      <div className="hidden lg:block border-t border-b py-4">
        <div className="flex justify-center space-x-14 paragraph-text">
          {navMenu.map(function (item) {
            return (
              <Link className="" key={item.name} to={item.link}>
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
