"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";

const Card = ({ items }) => {
  return (
    <div className="relative grid grid-cols-4 gap-5 justify-between py-10">
      {items.map((item, index) => (
        <div
          key={index}
          className="bg-[#F5F5F7] border rounded-lg shadow-md p-4 max-w-[270px] font-montserrat relative "
        >
          {/* Heart Icon */}
          <button className="absolute top-3 right-3 text-gray-400 hover:text-red-500 text-3xl">
            {item.favorites}
          </button>

          {/* Product Title */}
          <div className="flex flex-col items-center">
            <h3 className="font-bold text-base text-[#343438] tracking-[2px] capitalize">
              {item.nameBase}
              <span className="font-normal uppercase">{item.nameSubtruc}</span>
            </h3>
            <p className="text-base text-[#343438] font-normal uppercase">
              {item.productTitle}
            </p>

            {/* Star Rating */}
            <div className="flex items-center my-1">
              <div className="flex text-yellow-400"> {item.review}</div>
              <span className="ml-2 text-gray-600 text-sm">
                ( {item.reviewPerson})
              </span>
            </div>
          </div>

          {/* Product Image */}
          <div className="flex justify-center my-4">
            <Image
              src={item.image}
              alt="EnergyMAX Product"
              width={150}
              height={100}
              className="object-cover"
            />
          </div>

          {/* "New" Badge */}
          <div className="absolute top-20 left-2 bg-red-500 text-white text-xs font-normal px-2 py-1 h-16 w-16 rounded-full flex items-center justify-center">
            {item.isNew}
          </div>
          <div className="">
            <div className="flex justify-between items-center my-3">
              <div className="flex  flex-col gap-1 items-center">
                <span className="h-5 w-5 "> {item.productIcon}</span>
                <p className="text-xs text-[#343438] tracking-wider">
                  {" "}
                  {item.productType}
                </p>
              </div>
              <span className="h-10 w-[1px] bg-slate-500"></span>
              <div className="flex flex-col items-center gap-1">
                <span className="h-5 w-5 ">{item.doseIcon}</span>
                <p className="font-bold text-[#343438]">{item.doseType}</p>
              </div>
            </div>
            <div className="flex gap-3 items-center justify-between">
              <p className="text-base font-normal  w-2/5 text-[#343438]">
                {item.price}
              </p>
              <button className="text-lg font-montserrat font-bold rounded-bl-xl rounded-tr-xl px-3 py-1 bg-[#FDCA21] text-[#343438] hover:text-[#000] hover:scale-[1.02] transform transition-all ease-in-out duration-300 capitalize">
                {item.buyBtn}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
