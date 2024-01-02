import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {IoMdAdd, IoMdClose, IoMdRemove} from "react-icons/io";
import {CartContext} from "../contexts/CartContext";

const CartProduct = ({item}) => {
  const {removeFromCart, incrementAmount, decrementationAmount} = useContext(CartContext)
  const {id, title, image, price, amount} = item;
  return (
    <div className='flex gap-x-4 py-2 lg:px-6 border-b '>
      <div className='w-full min-h-[140px] flex items-center gap-x-4'>
        <Link to={`/product/${id}`}>
          <img className='max-w-[60px]' src={image} alt={title} title={title}></img>
        </Link>
        <div className='w-full flex flex-col'>
          <div className='flex justify-between mb-2'>
            <Link to={`/product/${id}`}>{title}</Link>
            <div onClick={() => removeFromCart(id)} className='text-xl cursor-pointer'><IoMdClose className='hover:text-red-500'/></div>
          </div>
          <div className='flex gap-x-2 h-[36px] text-sm'>
            <div className="flex flex-1 masz-w-[100px  items-center h-full border text-primary font-medium">
              <div onClick={() => decrementationAmount(id)}  className='flex-1 h-full flex justify-center items-center cursor-pointer'>
                <IoMdRemove/>
              </div>
              <div className='h-full flex justify-center items-center px-2'>{amount}</div>
              <div onClick={() => incrementAmount(id)} className='flex-1 h-full flex justify-center items-center cursor-pointer'><IoMdAdd /></div>
            </div>
            <div className='flex-1 flex justify-end items-center font-light'>$ {price}</div>
            <div className='flex-1 flex justify-end items-center font-medium'>$ {parseFloat(price * amount).toFixed(2) }</div>
          </div>
        </div>
      </div>
    </div>);
};

export default CartProduct;
