"use client";
import { Home, Menu, Phone, ShoppingCart, UserSquare, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

function MenuBtn() {
  const [open, setOpen] = useState(false);

  const toggleBtn = () => setOpen(!open);

  return (
    <div>
      <div>
        <button onClick={toggleBtn} className="text-gray-600">
          {open ? <X size={40} /> : <Menu size={40} />}
        </button>

        <div
          className={`${
            open ? "block" : "hidden"
          } absolute top-5 left-15 w-full rounded-2xl bg-white`}
        >
          <ul className="flex flex-col">
            <li className="border-b-2 border-gray-800">
              <Link href="/" className="flex gap-2 py-2 px-5">
                <Home size={30} className="text-gray-950" />
                <p className="text-gray-500 text-[20px] hover:text-gray-950">
                  Menu
                </p>
              </Link>

              <Link href="/" className="flex gap-2 py-2 px-5">
                <ShoppingCart
                  size={30}
                  className="text-gray-500 hover:hover:text-gray-950"
                />
                <p className="text-gray-950 text-[20px]">Pedidos</p>
              </Link>

              <Link href="/" className="flex gap-2 py-2 px-5">
                <UserSquare
                  size={30}
                  className="text-gray-500 hover:text-gray-950"
                />
                <p className="text-gray-950 text-[20px]">Conta</p>
              </Link>

              <Link href="/" className="flex gap-2 py-2 px-5">
                <Phone
                  size={30}
                  className="text-gray-500 hover:text-gray-950"
                />
                <p className="text-gray-950 text-[20px]">Contacto</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default MenuBtn;
