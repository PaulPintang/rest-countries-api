import React from "react";

const Header = () => {
  return (
    <div>
      <header className="shadow-[0_6px_10px_-10px_rgba(0,0,0,0.3)] h-[60px]">
        <div className="flex justify-between items-center h-full w-[950px] px-[27px] mx-auto">
          <h1 className="font-extrabold">Where in the world?</h1>
          <p className="text-xs font-medium">Dark Mode</p>
        </div>
      </header>
    </div>
  );
};

export default Header;
