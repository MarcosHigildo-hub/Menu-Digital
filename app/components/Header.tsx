import React from "react";
import Image from "next/image";
import { image } from "@/public/image";
import Sectionpromo from "./Sectionpromo";

const Header = () => {
  return (
    <div>
      <h1 className="text-center text-xl">logo menu</h1>
      <div className="bg-gray-950 rounded-xl shadow-lg p-4 text-white max-w-sm mx-auto">
        <h2 className="text-[1.45rem] font-bold text mb-1">Prato do dia</h2>
        <p className="text-gray-300 text-[1.2rem] mb-3">Feijoada tradicional</p>

        <Image
          src={image.pratoDoDia}
          alt="Prato do dia"
          className="rounded-xl w-full  h-60 object-contain mb-3"
        />

        <div className="border-t border-gray-400 pt-3 flex justify-between items-center">
          <p className="text-gray-300 text-[1rem] font-medium">Preço:</p>
          <p className="text-green-500 font-bold text-[1.2rem]">450,00 MZN</p>
        </div>
      </div>

      <div>
        <Sectionpromo />
      </div>
    </div>
  );
};

export default Header;
