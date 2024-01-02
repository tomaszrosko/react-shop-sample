import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {BsPlus, BsEyeFill} from 'react-icons/bs'
import {CartContext} from "../contexts/CartContext";

const Product = ({product}) => {
  const {addToCart} = useContext(CartContext)
  const {id, image, category, title, price} = product;
  return (
    <div>
      <div className='border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition'>
        <div className='w-full h-full flex justify-center items-center'>
          <div className='w-[200px] mx-auto flex justify-center items-center'>
            <img className='max-h-[160px] group-hover:scale-110 transition duration-300' src={image} alt=""></img>
          </div>
          <div className='absolute -top-6 right-6 group-hover:top-6  p-2 flex flex-col gap-y-2 justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-500'>
            <button onClick={() => addToCart(product, id)}>
              <div className={'flex justify-center items-center bg-amber-200 w-12 h-12 text-white'}>
                <BsPlus className='text-3xl'/>
              </div>
            </button>
            <Link to={`/product/${id}`} className='w-12 h-12 bg-white flex justify-center items-center text-center drop-shadow-xl'>
              <BsEyeFill/>
            </Link>
          </div>
        </div>
      </div>
      <div className={'text-sm capitalize text-gray-700 mb-2'}>{category}</div>
      <Link to={`product/${id}`}>
        <h2 className={'font-semibold mb-2'}>{title}</h2>
        <div className={'font-extrabold'}>Price: {price} $</div>
      </Link>
    </div>
  );
};

export default Product;
