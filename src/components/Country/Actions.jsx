import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
const Actions = () => {
  const [region, setRegion] = useState("Filter by region");
  return (
    <div className="flex justify-between items-center w-full h-[115px]">
      <div className="relative w-full md:w-auto lg:w-auto">
        <input
          className="shadow-[0px_0px_5px_0px_#6564644b] px-3 py-[13px] md:w-56 lg:w-[300px] w-full rounded text-xs transition focus:outline-none dark:bg-gray-800 dark:text-gray-100 "
          type="text"
          placeholder="Select for a country..."
        />
      </div>
      <div className="">
        <div>
          <button
            type="button"
            className="shadow-[0px_0px_5px_0px_#6564644b] flex justify-between items-center md:w-48 lg:w-36 w-full rounded px-4 py-[11px] bg-white text-sm font-medium focus:outline-none border-opacity-30 dark:bg-gray-800 dark:text-gray-400"
            id="menu-button"
            aria-expanded="true"
            aria-haspopup="true"
          >
            <small>{region}</small>
            <MdKeyboardArrowDown fontSize={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Actions;
