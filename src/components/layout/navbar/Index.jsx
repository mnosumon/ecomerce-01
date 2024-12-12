"use client";
import React, { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { menuItems } from "../../dummyData/Index";
import NavbarLink from "../../utilities/NavbarLink";
// import Products from "../products/Index";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMenuClick = (menu) => {
    setActiveMenu((prevMenu) => (prevMenu === menu ? null : menu));
  };

  return (
    <nav>
      <div className="bg-[#F5F5F7] hidden lg:block">
        <div className="container mx-auto relative px-4">
          <ul className="flex gap-5">
            {menuItems.map((item) => (
              <li
                key={item.category}
                onClick={() => handleMenuClick(item.category)}
                className="flex gap-1 items-center cursor-pointer"
              >
                <NavbarLink href="#" label={item.label} />
                <div>
                  {activeMenu === item.category ? (
                    <IoIosArrowDown />
                  ) : (
                    <IoIosArrowUp />
                  )}
                </div>
              </li>
            ))}
          </ul>
          <div className="absolute w-full z-20">
            {activeMenu === "products" && <h1>Find vitamins for me</h1>}
            {activeMenu === "findVitamins" && <h1>Find vitamins for me</h1>}
            {activeMenu === "tipsResources" && <h1>Tips & Resources</h1>}
            {activeMenu === "about" && <h1>About</h1>}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
