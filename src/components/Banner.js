import React from 'react';
import Woman from '../img/woman.png';
import {Link} from "react-router-dom";

const Banner = () => {
  return (
    <section className=" h-[400px] lg:h-[800px] bg-banner bg-no-repeat bg-cover bg-center py-24">
      <div className="container mx-auto flex justify-around">
        <div className='flex flex-col justify-center'>
          <div className='font-semibold flex items-center uppercase'>
            <div className='w-10 h-[2px] bg-red-500 mr-3'></div>New collection
          </div>
          <h1 className='text-[58px] lg:text-[70px] leading-[1.1] font-light mb-4'>Women's and men's <br /></h1>
          <Link to={'/'} className='self-start uppercase font-semibold border-b-2 border-primary'>More</Link>
        </div>
        <div className='hidden lg:block'>
          <img src={Woman} alt="Woman shopping" title="Woman shopping"></img>
        </div>
      </div>
    </section>
  );
};

export default Banner;
