import React from 'react'
import { Link } from 'react-router-dom'

import bridal from '../assets/imgs/shop-bridal.jpg'
import arrangements from '../assets/imgs/shop-arrangements.jpg'
import bouquets from '../assets/imgs/shop-bouquets.jpg'

const HomeProducts = () => {
  return (
    <div className="md:h-[700px] flex flex-col justify-center items-center">
      <h2 className="text-black m-10">Our Best Sellers</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-0 md:mx-10">
        <div>
          <img src={bridal} alt="product" className="w-[405px]" />
          <p className="text-primary">Shop Bridal</p>
        </div>
        <div>
          <img src={arrangements} alt="product" className="w-[405px]" />
          <p className="text-primary">Shop Arrangements</p>
        </div>
        <div>
          <img src={bouquets} alt="product" className="w-[405px]" />
          <p className="text-primary">Shop Bouquets</p>
        </div>
      </div>
      <Link
        to="/shop"
        className="py-2 m-10 inline-block border-2 border-primary bg-tertiary px-6 pb-[6px] pt-2 text-xs font-medium leading-normal text-primary hover:bg-primary hover:text-tertiary"
      >
        Shop Best Sellers
      </Link>
    </div>
  );
}

export default HomeProducts