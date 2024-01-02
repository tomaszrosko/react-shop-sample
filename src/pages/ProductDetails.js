import React, {useContext} from 'react';
import {Link, useParams} from "react-router-dom";
import {CartContext} from "../contexts/CartContext";
import {ProductContext} from "../contexts/ProductContext";


const ProductDetails = () => {
  const {id} = useParams();
  const {products} = useContext(ProductContext);
  const {addToCart} = useContext(CartContext);

  const product = products.find((item) => {
    return item.id === parseInt(id);
  });
  if (!product) {
    return <section className="flex justify-center h-screen">Looading...</section>
  }
  const {title, price, description, image, category} = product;

  return <section className='pt-32 pb-12 lg:py-32 h-screen flex items-center'>
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row items-center">
        <div className='flex flex-1 justify-center mb-8 lg:mb-0'>
          <img className='max-w-[200px] lg:max-w-sm' src={image} alt=""></img>
        </div>
        <div className='flex-1 text-center lg:text-left'>
          <h1 className='text-[26px] font-medium mb-2 max-w-[450px] mx-auto'>{title}</h1>
          <span className='text-[18px] flex max-w-[450px] mx-auto mb-2 font-semibold'>Category: {category}</span>
          <div className='text-xl text-red-500 font-medium mb-6 max-w-[450px] mx-auto'>$ <i>{price}</i></div>
          <p className='max-w-[450px] mx-auto'>{description}
            <div>
            <button onClick={() => addToCart(product, product.id)} className="bg-primary py-4 px-8 mt-4 text-white">Add
              cart
            </button>
            <Link to='/' className='bg-sky-300 py-4 px-8 mt-4 ml-4 text-white'>Back</Link>
            </div>
          </p>
        </div>
      </div>

    </div>
  </section>
    ;
};

export default ProductDetails;
