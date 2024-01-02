import React, {useContext} from 'react';
import {SidebarContext} from "../contexts/SidebarContext";
import {CartContext} from "../contexts/CartContext";
import {BsCart} from 'react-icons/bs'
import {BsHouse} from 'react-icons/bs'
import {Link} from "react-router-dom";

const Header = () => {
  const {isOpen, setIsOpen} = useContext(SidebarContext);
  const {itemAmount} = useContext(CartContext);

  return (
    <header className="bg-header sticky top-0 z-10">
      <div className="container mx-auto flex justify-between py-2">
        <Link to='/'><BsHouse className={'w-[32px] h-[32px]'}/></Link>
        <div onClick={() => setIsOpen(!isOpen)} className='cursor-pointer flex items-center relative max-w-[60px]'>
          <BsCart className={'text2-xl w-[32px] h-[32px]'}/>
          <div className='bg-red-700 absolute -right-2 -top-1 text-[10px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center'>{itemAmount}</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
