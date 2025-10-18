import { Copyright } from 'lucide-react';
import React from 'react';

const Footer = () => {
  return (
    <div className='fixed bg-white w-full bottom-0 z-50'>
      <p className='flex justify-center items-center gap-2 text-gray-700 text-[0.8rem] p-4 md:text-2xl md:p-8 lg:text-[1rem] lg:p-4'>
        <Copyright />
        Todos direitos reservados.2025
      </p>
      
    </div>
  );
}

export default Footer;
