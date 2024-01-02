import React, {useContext} from 'react';
import {IoIosCloseCircleOutline} from 'react-icons/io';
import {SidebarContext} from "../contexts/SidebarContext";
import {CartContext} from "../contexts/CartContext";
import {Link} from "react-router-dom";
import CartProduct from "./CartProduct";


const Sidebar = () => {
  const {isOpen, handleClose} = useContext(SidebarContext);
  const {cart, itemAmount} = useContext(CartContext);
  return <div
    className={`${isOpen ? 'right-0' : '-right-full'} w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl-max-w-[30vw transition-all duration-300 z-20 px-4  lg:px-[35px]`}>
    <div className='flex items-center justify-between py-6 border-b'>
      <div className='uppercase text-sm font-semibold'>Shopping Bag ({itemAmount})</div>
      <div onClick={handleClose} className='cursor-pointer w-8 h-8 flex justify-center items-center'>
        <IoIosCloseCircleOutline className='text-2xl'/>
      </div>
    </div>
    <div>
      {cart.map((item) => {
      return <CartProduct item={item} key={item.id} />
    })}</div>
    <Link to='/' className='bg-gray-200 flex p-4 my-2 justify-center text-white w-full font-medium'>View cart</Link>
    <Link to='/' className='bg-primary flex p-4 justify-center text-white w-full font-medium'>Checkout</Link>
  </div>;

};

export default Sidebar;
