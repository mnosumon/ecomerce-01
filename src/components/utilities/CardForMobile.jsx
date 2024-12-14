"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import { products } from "../dummyData/Index";

const CardForMobile = () => {
  return (
    <>
      <div className="flex flex-col gap-5 w-[90%] mx-auto relative">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-[#F5F5F7] border rounded-lg shadow-md p-4 w-full font-montserrat flex items-center"
          >
            {/* Product Image */}
            <div className="w-2/5 flex justify-center">
              <Image
                src={item.image}
                alt="EnergyMAX Product"
                width={150}
                height={100}
                className="object-cover"
              />
            </div>

            {/* Product Title */}
            <div className="w-3/5 flex flex-col gap-3">
              <div className="w-full">
                <h3 className="font-bold text-base text-[#343438] tracking-[2px] capitalize">
                  {item.nameBase}
                  <span className="font-normal uppercase">
                    {item.nameSubtruc}
                  </span>
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

              {/* "New" Badge */}

              <div className="">
                <div className="flex items-center justify-center gap-10">
                  <div className="flex flex-col gap-1 items-center">
                    <span className="h-5 w-5 "> {item.productIcon}</span>
                    <p className="text-xs text-[#343438] tracking-wider">
                      {item.productType}
                    </p>
                  </div>
                  <span className="h-10 w-[1px] bg-slate-500"></span>
                  <div className="flex flex-col items-center gap-1">
                    <span className="h-5 w-5 ">{item.doseIcon}</span>
                    <p className="font-bold text-[#343438]">{item.doseType}</p>
                  </div>
                </div>
                <div className="flex gap-10 sm:gap-20 items-center justify-center mt-5">
                  <p className="text-base font-normal text-[#343438]">
                    {item.price}
                  </p>
                  <button className="text-base sm:text-lg font-montserrat font-bold rounded-bl-xl rounded-tr-xl px-3 sm:px-6 py-1 bg-[#FDCA21] text-[#343438] hover:text-[#000] hover:scale-[1.02] transform transition-all ease-in-out duration-300 capitalize">
                    {item.buyBtn}
                  </button>
                </div>
              </div>
            </div>
            <button className="absolute top-3 right-3 text-gray-400 hover:text-red-500 text-xl">
              {item.favorites}
            </button>
            <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-normal px-2 py-1 h-12 w-12 rounded-full flex items-center justify-center">
              {item.isNew}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CardForMobile;
