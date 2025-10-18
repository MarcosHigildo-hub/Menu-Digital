import React from "react";
import Image from "next/image";
import { image } from "@/public/image";
import Sectionpromo from "./Sectionpromo";
import Button from "./Button";

const Header = () => {
  return (
    <div className="mt-20 mb-32 md:mt-30 lg:mt-22">
      <h2 className="text-[1.45rem] font-bold text-center mb-1 md:text-[3rem] lg:text-[1.8rem]">Prato do dia</h2>
      <div className="bg-gray-950 rounded-xl shadow-lg p-4 text-white max-w-sm mx-auto w-full md:mx-6 md:max-w-2xl lg:mx-auto lg:max-w-3xl">
        <p className="text-gray-300 text-[1.2rem] pl-3 mb-3 md:text-[2rem] lg:text-[1.2rem]">Feijoada tradicional</p>

        <Image
          src={image.pratoDoDia}
          alt="Prato do dia"
          className="rounded-xl w-full  h-60 object-contain mb-2 md:h-100 lg:h-60 border-t border-gray-400 pt-3"
        />

        <div className=" flex justify-between items-center mb-3 ">
          {/* <p className="text-gray-300 text-[1.5rem] font-medium md:text-[2rem]">Preço:</p> */}
          <p className="text-green-500 font-bold text-[1.5rem] mx-auto md:text-[2rem] lg:text-[1.5rem] ">450,00 MZN</p>
        </div>

        <div className="">
          <Button />
        </div>
      </div>

      <div>
        <Sectionpromo />
      </div>
    </div>
  );
};

export default Header;
