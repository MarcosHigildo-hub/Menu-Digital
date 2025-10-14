"use client";
import React from "react";
// import Image from "next/image";
import { User } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import SearchBar from "./SearchBar";
import MenuBtn from "./MenuBtn";

const Navbar = () => {
  return (
    <nav className="flex justify-between px-6 py-6">
      <div className="flex gap-4">
        <MenuBtn />
        {/* <Image src={image.logo} alt="Logo" className="w-12 h-12" /> */}
      </div>
     
      <div className="flex gap-2">
        <SearchBar />
        <ShoppingCart size={30}/>
        <User size={30} />
      </div>
    </nav>
  );
};

export default Navbar;
