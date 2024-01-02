import React, {useContext} from 'react';
import {ProductContext} from "../contexts/ProductContext";
import Product from "../components/Product";
import Banner from "../components/Banner";

const Home = () => {
  const { products } = useContext(ProductContext);
  const filterProducts = products.filter((item) => {
    return(
      item.category === "men's clothing" || item.category === "women's clothing"
    );
  })
  return (
    <div>
      <Banner />
    <section className={'py-16'}>
      <div className="container mx-auto">
        <div className={'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-[10px] mx-auto max-w-sm max-auto md:max-w-none md:max-0'}>
          {filterProducts.map(product => {
            return <Product product={product} key={product.id} />
          })}
        </div>
      </div>
    </section>
  </div>);
};

export default Home;
