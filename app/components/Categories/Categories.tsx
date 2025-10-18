"use client"
import React from 'react';
import { useState } from 'react';

const Categories = () => {
  const [selected, setSelected] = useState("")
  const categorias = ["Todos","Pratos","Bedidas","Sobremesas","Combos",]
  return (
    <div>
      <h1 className='text-3xl mb-2'>Categorias</h1>
      <div className=' w-full overflow-x-auto flex gap-1 pb-2 scroll-smooth touch-pan-x'>
        {categorias.map((cat) => (  
           <button
        key={cat}
        onClick={() => setSelected(cat)}
        className={` border-3 text-2xl py-2 px-2  rounded-3xl whitespace-nowrap trasition-all duration-400 ${selected === cat? "bg-black text-white" : "bg-white text-black"}`}>
          {cat}
        </button>
        ))}
      </div>
    </div>
  );
}

export default Categories;
