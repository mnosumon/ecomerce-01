"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrNext, GrPrevious } from "react-icons/gr";

const ProductCard = ({ items }) => {
  const sliderRef = useRef(null);
  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  const settings = {
    dots: false,
    autoplay: false,
    slidesToShow: 4,
    speed: 500,
    slidesToScroll: 1,
    appendDots: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 414,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <div className="relative w-[89%] mx-auto py-10">
      <Slider ref={sliderRef} {...settings}>
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
      </Slider>

      {/* Navigation Buttons */}
      <div style={{ textAlign: "center" }}>
        {/* Previous Button */}
        <button
          className="button absolute top-1/2 -translate-y-1/2 -left-7  h-16 !w-7  !bg-[#C8C8C8] flex  justify-center items-center !rounded-s-md "
          onClick={previous}
        >
          <GrPrevious className="text-lg text-white" />
        </button>

        {/* Next Button */}
        <button
          className="button absolute top-1/2 -translate-y-1/2 -right-3 h-16 !w-7 !rounded-e-md !bg-[#C8C8C8] flex justify-center items-center"
          onClick={next}
        >
          <GrNext className="text-lg text-white" />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
