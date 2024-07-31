import React from "react";
import { appleImg, searchImg, bagImg } from "../utils/index";
import { navLists } from "../constants";

const Navbar = () => {
  return (
    <header className="w-full  py-2 sm:py-2">
      <nav className="screen-max-width flex w-full justify-between  p-4">
        <img className="cursor-pointer " src={appleImg} alt="apple" width={14} height={18} />
        <div className=" hidden sm:flex">
          {navLists.map((navItem) => (
            <div
              className="cursor-pointer px-4 text-sm text-gray-400 transition-all hover:text-white"
              key={navItem}
            >
              {navItem}
            </div>
          ))}
        </div>
        <div className="flex gap-x-5 ">
          <img className="cursor-pointer"  src={searchImg} alt="search " width={18} height={18} />
          <img className="cursor-pointer" src={bagImg} alt="bag " width={18} height={18} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
