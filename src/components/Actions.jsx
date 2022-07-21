import React from "react";

const Actions = () => {
  return (
    <div className="w-[1200px] mx-auto px-[27px]">
      <div className="flex justify-between items-center w-full h-[110px]">
        <div className="relative w-full md:w-auto lg:w-auto">
          <input
            className="px-3 py-2 md:w-56 lg:w-[300px] w-full rounded-md text-sm transition focus:outline-none dark:bg-gray-800 dark:text-gray-100 dark:focus:border-gray-800 dark:border-opacity-20 focus:border-opacity-60 border border-gray-200 border-opacity-40 shadow-sm"
            type="text"
            placeholder="Select for a country..."
          />
        </div>
        <div className="">
          <div>
            <button
              type="button"
              className="flex justify-between md:w-48 lg:w-48 w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none border-opacity-30 dark:bg-gray-800 dark:text-gray-400"
              id="menu-button"
              aria-expanded="true"
              aria-haspopup="true"
            >
              <svg
                className="-mr-1 ml-2 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Actions;
