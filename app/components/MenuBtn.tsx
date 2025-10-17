"use client";
import { Home, Menu, Phone, ShoppingCart, UserSquare, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

function MenuBtn() {
  const [open, setOpen] = useState(false);

  const toggleBtn = () => setOpen(!open);

  return (
    <div className="md:hidden">
        <button onClick={toggleBtn} className="text-gray-600 ">
          {open ? <X size={40} /> : <Menu size={40} />}
        </button>

        <div
          className={`${
            open ? "block" : "hidden"
          } absolute top-15 left-0 w-full rounded-2xl bg-white`}
        >
          <ul className="flex flex-col px-17 py-3 ">
            <li className="border-b-2 mb-2 border-gray-600 pb-2">
              <Link
                href="/"
                className="flex gap-2 text-gray-600 hover:text-gray-950"
              >
                <Home size={30} />
                <p className="text-[22px]">Menu</p>
              </Link>
            </li>

            <li className="border-b-2 mb-2 border-gray-600 pb-2">
              <Link
                href="/"
                className="flex gap-2 text-gray-600 hover:text-gray-950 "
              >
                <ShoppingCart size={30} />
                <p className="text-[22px]">Pedidos</p>
              </Link>
            </li>

            <li className="border-b-2 mb-2 border-gray-600 pb-2">
              <Link href="/" className="flex gap-2 text-gray-600 hover:text-gray-950">
                <UserSquare
                  size={30}
                />
                <p className="text-[20px]">Conta</p>
              </Link>
            </li>

            <li className="border-b-2 mb-2 border-gray-600 pb-2">
              <Link href="/" className="flex gap-2 text-gray-600 hover:text-gray-950">
                <Phone
                  size={30}
                />
                <p className="text-[20px]">Contacto</p>
              </Link>
            </li>
          </ul>
        </div>
    </div>
  );
}
export default MenuBtn;
