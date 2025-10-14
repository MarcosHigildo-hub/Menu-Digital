import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Categories from './components/Categories';
import Footer from './components/Footer';

const page = () => {
  return (
    <>
      <Navbar />

      <div className='px-6 md:px-16 lg:px-32'>
        <Header />
        <Categories />
      </div>

      <Footer />
    </>
  );
}

export default page;

