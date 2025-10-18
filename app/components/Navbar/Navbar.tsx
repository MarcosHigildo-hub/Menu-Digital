"use client";
import React from "react";
// import Image from "next/image";
import { User } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import SearchBar from "./SearchBar";
import MenuBtn from "./MenuBtn";

const Navbar = () => {
  return (
    <nav className="bg-white flex w-full justify-between px-6 py-4 fixed top-0 md:bg-gray-950 md:rounded-b-4xl md:py-6 lg:py-4">
      <div className="flex justify-between items-center w-full md:hidden">
        <MenuBtn />
        <ShoppingCart size={40} className="text-gray-600" />
      </div>

      <div className="hidden md:flex md:justify-between md:items-center md:text-white w-full md:px-9">
        <div>
          <h1 className="text-3xl font-bold">Logo</h1>
        </div>
        <div className="flex gap-5">
          <SearchBar />
          <ShoppingCart size={40} />
          <User size={40} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
