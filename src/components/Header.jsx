import React from "react";

const Header = () => {
  return (
    <div>
      <header className="shadow-md h-[60px]">
        <div className="flex justify-between items-center h-full px-[100px]">
          <h1 className="font-extrabold">Where in the world?</h1>
          <p className="text-xs font-medium">Dark Mode</p>
        </div>
      </header>
    </div>
  );
};

export default Header;
