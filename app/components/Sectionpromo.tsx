import React from 'react'
import Sliderpromo from "./Sliderpromo";
import { PromosData } from '../data/PromosData_temp';

const Sectionpromo = () => {
  return (
    <section className='px-4 py-6'>
        <h2 className='text-3xl font-bold mb-3 text-gray-950 text-center'>Promoções do dia</h2>
        <Sliderpromo images={PromosData}/>
    </section>
  )
}

export default Sectionpromo