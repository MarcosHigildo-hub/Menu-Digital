import { ArrowRight } from "lucide-react";
import React from "react";
import Link from "next/link";

const Button = () => {
  return (
    <>
      <Link
        href="/"
        className="text-[1.1rem] flex  px-2 py-2 w-60 lg:w-50 md:w-100 mx-auto mb-2 justify-center items-center gap-2
       font-semibold border-2 border-gray-400 rounded-full cursor-pointer transition-all 
       duration-300 ease-in-out hover:-translate-y-0.5 active:translate-y-0 md:text-[2rem] lg:text-[1.1rem]"
      >
        Pedir Agora
        <span>
          <ArrowRight size={40} />
        </span>
      </Link>
    </>
  );
};

export default Button;
