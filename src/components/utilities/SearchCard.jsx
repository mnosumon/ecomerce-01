import React from "react";
import { searchInputValue } from "../dummyData/Index";

const SearchCard = ({ setInputValue, setSearchCardShow }) => {
  const handleInputSearchValue = (data) => {
    setInputValue(data);
    setSearchCardShow(false);
  };
  return (
    <div>
      <div className="border border-[#96929236] rounded-md shadow-md">
        <ul
          className="flex flex-col font-montserrat text-xl text-[#4b4d4e]"
          style={{ maxWidth: "294px" }}
        >
          {searchInputValue.map((item) => (
            <span
              key={item.id}
              onClick={() => handleInputSearchValue(item.title)}
              className="py-3 px-5 hover:bg-[#faf9f8] text-xl w-full cursor-pointer"
            >
              <a className="">{item.title}</a>
            </span>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchCard;
