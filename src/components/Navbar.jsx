import React from "react";
import { appleImg, searchImg, bagImg } from "../utils";
import { navLists } from "../constants";

function Navbar() {
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-center items-center">
      <nav className="flex w-full screen-max-width">
        <img src={appleImg} alt="Apple image" width={14} height={18} />
        <div className="flex flex-1 justify-center max-sm:hidden">
          {navLists.map((nav, i) => {
            return (
              <div
                key={i}
                className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all"
              >
                {nav}
              </div>
            );
          })}
        </div>

          {/* max-sm :sm or above */}
        <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
          <img src={searchImg} alt="Search image" width={14} height={18} />
          <img src={bagImg} alt="Search image" width={14} height={18} />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
