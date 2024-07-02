import { pizza } from "../assets";

import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex h-lg bg-black text-white font-bold justify-center items-center">
      <div className="max-w-[1400px] flex  w-full p-5">
        <div className="flex-1 mx-lg flex gap-2 items-center ">
          <img className="w-[40px] h-[40px]" src={pizza} alt="" />
          <h2 className="text-xl">
            Pizza <span className="text-red-600">Ghar</span>
          </h2>
        </div>
        <ul className="flex gap-10 items-center cursor-pointer">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/menu">
            <li>Menu</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/contact">
            {" "}
            <li>Contact</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
