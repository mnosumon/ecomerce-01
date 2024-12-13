"use client";
import React, { useRef, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import NavbarLink from "../../../utilities/NavbarLink";
import Link from "next/link";
import { menuItems } from "../../../dummyData/Index";
import { IoCloseOutline } from "react-icons/io5";
import { BsCart3 } from "react-icons/bs";
import Products from "../../../../app/products/page";

const NavForMobile = ({ setOpen, open }) => {
  const [productOpen, setProductOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const cartRef = useRef();
  console.log(productOpen);

  const handleMenuClick = (menu) => {
    setActiveMenu((prevMenu) => (prevMenu === menu ? null : menu));
    setProductOpen(menu === "products");
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full sm:w-4/5 md:w-3/5 z-10 h-screen bg-red-400 transform transition-transform duration-700 ease-in-out ${
        open ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* Main Menu */}
      {!productOpen && (
        <div className="w-full mx-auto relative">
          <div className="flex items-center justify-between py-7 px-4">
            <span
              className="text-3xl cursor-pointer"
              onClick={() => setOpen(false)}
            >
              <IoCloseOutline />
            </span>
            <span className="text-right block">
              <Link href="#">Sign In</Link> or <Link href="#">Register</Link>
            </span>
          </div>
          <hr className="h-[2px] bg-gray-400 border-0 w-full" />
          <ul className="flex flex-col gap-4 px-4">
            {menuItems.map((item) => (
              <li
                key={item.category}
                onClick={() => handleMenuClick(item.category)}
                className="flex justify-between items-center cursor-pointer"
              >
                <NavbarLink href="#" label={item.label} />
                <IoIosArrowForward />
              </li>
            ))}
          </ul>
          <hr className="h-[2px] bg-gray-400 border-0 w-full" />
          <div className="flex gap-4 items-center py-3 px-4">
            <Link
              href="#"
              ref={cartRef}
              className="text-2xl text-[#4b4d4e] cursor-pointer"
            >
              <BsCart3 />
            </Link>
            <span className="uppercase text-lg font-bold">Cart</span>
          </div>
        </div>
      )}

      {/* Submenu or Content */}
      {productOpen && (
        <div className="absolute top-0 left-0 w-full h-full bg-slate-400">
          <div className="flex items-center justify-between py-7 px-4">
            <span
              className="text-3xl cursor-pointer"
              onClick={() => setProductOpen(false)}
            >
              <IoCloseOutline />
            </span>
            <span className="text-right block">
              <Link href="#">Sign In</Link> or <Link href="#">Register</Link>
            </span>
          </div>
          <div className="px-4">
            {activeMenu === "products" && <Products />}
            {activeMenu === "findVitamins" && <h1>Find vitamins for me</h1>}
            {activeMenu === "tipsResources" && <h1>Tips & Resources</h1>}
            {activeMenu === "about" && <h1>About</h1>}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavForMobile;
