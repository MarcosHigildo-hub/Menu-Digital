import React from 'react'
import Sliderpromo from "./Sliderpromo";
import { PromosData } from '@/app/data/PromosData_temp';

const Sectionpromo = () => {
  return (
    <section className='px-4 py-6 lg:mx-auto'>
        <h2 className='text-[1.45rem] md:text-[3rem] lg:text-[1.8rem] font-bold mb-3 text-gray-950 text-center'>Promoções do dia</h2>
        <Sliderpromo images={PromosData}/>
    </section>
  )
}

export default Sectionpromo