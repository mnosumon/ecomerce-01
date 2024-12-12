"use client";
import Card from "../../utilities/card";
import { products } from "../../dummyData/Index";
import ProductCard from "../../utilities/ProductCard";
import React, { useState } from "react";

const Product = () => {
  const [isActive, setIsActive] = useState("All");
  const [items, setItems] = useState(products);

  const categories = ["All", ...new Set(products.map((item) => item.cetagory))];

  const filterItem = (category) => {
    if (category === "All") {
      setItems(products);
    } else {
      const newItems = products.filter(
        (newVal) => newVal.cetagory === category
      );
      setItems(newItems);
    }
    setIsActive(category);
  };

  return (
    <div className="container mx-auto my-20">
      <h2 className="text-5xl font-montserrat font-bold text-center leading-[64px] text-[#343438]">
        Find Your Daily Routine
      </h2>
      <p className="text-lg font-lato font-normal text-center leading-normal text-[#343438] mb-5">
        Shop our best-selling products and start your new routine today
      </p>
      <ul className="flex items-center flex-wrap gap-5 justify-center">
        {categories.map((item) => (
          <li key={item}>
            <button
              onClick={() => filterItem(item)}
              className={`text-[#4A4A4A] text-xl font-montserrat font-bold border rounded-full border-[#6B6B6E] px-5 py-2 capitalize ${
                isActive === item && "bg-[#6B6B6E] text-white"
              }`}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
      <div className="product-container min-h-[500px] mt-10">
        {items.length === 0 ? (
          <p className="text-center text-xl text-gray-500">
            No products available in this category.
          </p>
        ) : (
          //   <ProductCard items={items} />
          <Card items={items} />
        )}
      </div>
    </div>
  );
};

export default Product;
