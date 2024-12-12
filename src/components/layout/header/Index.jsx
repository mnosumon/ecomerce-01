"use client";
import React, { useEffect, useRef, useState } from "react";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { BsCart3 } from "react-icons/bs";

import Image from "next/image";
import Link from "next/link";
import { RxCross1 } from "react-icons/rx";
// import YourCart from "./yourCart/YourCart";
// import NavbarToggle from "./../navbar/NavbarToggle";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaBars, FaTimes } from "react-icons/fa";
import SearchCard from "../../utilities/SearchCard";
import NavForMobile from "../navbar/navForMobile/NavForMobile";

const Header = () => {
  const [searchCardShow, setSearchCardShow] = useState(false);
  //   const [yourCart, setYourCart] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [open, setOpen] = useState(false);

  const inputRef = useRef(null);
  const cardRef = useRef(null);
  const cartRef = useRef(null);
  const cartBodyRef = useRef(null);

  const handleSearchShow = () => {
    setSearchCardShow(!searchCardShow);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target) &&
        cardRef.current &&
        !cardRef.current.contains(event.target)
      ) {
        setSearchCardShow(false);
      }
      if (
        cartBodyRef.current &&
        !cartBodyRef.current.contains(event.target) &&
        !cartRef.current.contains(event.target)
      ) {
        // setYourCart(false); // Close the cart when clicked outside
        console.log(event.target);
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <header className="border-b border-[#4b4d4e]">
      <div className="w-full lg:container relative mx-auto py-3">
        <div className="flex justify-between items-center px-4">
          <div className="w-full lg:hidden">
            <span onClick={() => setOpen(!open)}>
              <FaBars />
            </span>
            {open && <NavForMobile setOpen={setOpen} />}
          </div>
          <div className="flex gap-[190px] xl:gap-[300px] items-center">
            <Link href="#" className="overflow-hidden">
              <Image
                src="/logos/nm-logo-header.avif"
                alt="Logo"
                width={150}
                height={100}
                className="object-cover"
              />
            </Link>
            <div className="gap-5 items-center text-[#4b4d4e] font-montserrat text-xl  flex">
              <Link
                href="#"
                className="hover:text-[#000] transform transition-all ease-in-out duration-300"
              >
                WHERE TO BUY
              </Link>
              <Link
                href="#"
                className="hover:text-[#000] transform transition-all ease-in-out duration-300"
              >
                SIGN IN
              </Link>
              <Link href="#" className="text-2xl cursor-pointer">
                <IoIosHeartEmpty />
              </Link>
            </div>
          </div>

          <Link
            href="#"
            ref={cartRef}
            //   onClick={() => setYourCart(!yourCart)}
            className="text-2xl text-[#4b4d4e] cursor-pointer"
          >
            <BsCart3 />
          </Link>
        </div>

        <div className="w-full relative lg:w-[300px] lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:right-[9%] mt-2 lg:mt-0 px-4">
          <input
            onClick={handleSearchShow}
            onChange={(e) => setInputValue(e.target.value)}
            ref={inputRef}
            value={inputValue}
            type="text"
            placeholder="Search:"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900 shadow-sm transition-all"
          />
          <div className="absolute right-6 lg:right-3 top-1/2 -translate-y-1/2 flex gap-3 items-center">
            {inputValue && (
              <div
                onClick={() => setInputValue("")}
                className=" text-gray-500 cursor-pointer text-xl"
              >
                <RxCross1 />
              </div>
            )}
            <div className=" text-gray-500 cursor-pointer text-xl">
              <IoSearchOutline />
            </div>
          </div>
          {searchCardShow && (
            <div
              ref={cardRef}
              className="absolute top-full right-0 z-10 bg-white w-full"
            >
              <SearchCard
                setInputValue={setInputValue}
                inputValue={inputValue}
                setSearchCardShow={setSearchCardShow}
              />
            </div>
          )}
        </div>
        {/* Mobile mobile view mobile view */}
        {/* <div
          className={`absolute lg:hidden top-0 w-4/5 h-screen bg-blue-400 transition-transform duration-500 transform ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <NavbarToggle />
        </div> */}
        {/* 
        {yourCart && (
          <div
            ref={cartBodyRef}
            className="absolute top-[130%] right-0 z-20 w-2/5"
          >
            <YourCart setYourCart={setYourCart} />
          </div>
        )} */}
      </div>
    </header>
  );
};

export default Header;
