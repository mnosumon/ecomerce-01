"use client";
import React, { useRef, useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

import NavbarLink from "../../../utilities/NavbarLink";
// import Products from "../products/Index";
import Link from "next/link";
import { menuItems } from "../../../dummyData/Index";
import { IoCloseOutline } from "react-icons/io5";
import { BsCart3 } from "react-icons/bs";

const NavForMobile = ({ setOpen, open }) => {
  const [activeMenu, setActiveMenu] = useState(null);
  const cartRef = useRef();

  const handleMenuClick = (menu) => {
    setActiveMenu((prevMenu) => (prevMenu === menu ? null : menu));
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full sm:w-4/5 md:w-3/5 z-50  h-screen bg-red-400 transform duration-500 ease-in-out transition-all ${
        open ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="">
        <div className="w-full mx-auto relative ">
          <div className="flex items-center justify-between py-7 px-4">
            <span
              className="text-3xl cursor-pointer"
              onClick={() => setOpen(false)}
            >
              <IoCloseOutline />
            </span>
            <span className="text-right block">
              <Link href="#">Sign In</Link> or <Link href="#"> Register</Link>
            </span>
          </div>
          <hr className="h-[2px] bg-gray-400 border-0 w-full" />
          <ul className="flex flex-col gap-4">
            {menuItems.map((item) => (
              <li
                key={item.category}
                onClick={() => handleMenuClick(item.category)}
                className="flex justify-between items-center cursor-pointer"
              >
                <NavbarLink className="" href="#" label={item.label} />
                <div>
                  {/* {activeMenu === item.category ? (
                    <IoIosArrowDown />
                  ) : (
                    <IoIosArrowUp />
                  )} */}
                  <IoIosArrowForward />
                </div>
              </li>
            ))}
          </ul>
          <hr className="h-[2px] bg-gray-400 border-0 w-full" />
          <div className="flex gap-4 items-center py-3 px-4">
            <Link
              href="#"
              ref={cartRef}
              //   onClick={() => setYourCart(!yourCart)}
              className="text-2xl text-[#4b4d4e] cursor-pointer"
            >
              <BsCart3 />
            </Link>
            <span className="uppercase text-lg font-bold">cart</span>
          </div>
          <hr className="h-[1px] bg-gray-400 border-0 w-full" />
          <div className="absolute w-full mx-auto px-4 left-0 top-0 z-20">
            {activeMenu === "products" && <h1>Product</h1>}
            {activeMenu === "findVitamins" && <h1>Find vitamins for me</h1>}
            {activeMenu === "tipsResources" && <h1>Tips & Resources</h1>}
            {activeMenu === "about" && <h1>About</h1>}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavForMobile;
