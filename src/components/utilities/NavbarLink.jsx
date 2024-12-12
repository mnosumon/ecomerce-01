import Link from "next/link";
import React from "react";

const NavbarLink = ({ label, href, handleClick, className }) => {
  return (
    <Link
      href={href}
      className={`lg:text-xl md:text-base !text-sm font-bold font-[Montserrat,sans-serif] uppercase lg:leading-[4rem] px-1 text-dark-grey hover:text-[#B20035] transform transition-all ease-in-out duration-300 ${className}`}
      onClick={handleClick}
    >
      {label}
    </Link>
  );
};

export default NavbarLink;
