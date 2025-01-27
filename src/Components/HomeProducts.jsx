import React from 'react'
import bridal from '../assets/imgs/shop-bridal.jpg'
import arrangements from '../assets/imgs/shop-arrangements.jpg'
import bouquets from '../assets/imgs/shop-bouquets.jpg'

const HomeProducts = () => {
  return (
    <div className="md:h-[700px] flex flex-col justify-center items-center">
        <h1 className='text-black m-10'>Our Best Sellers</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-0 md:mx-10">
            <div>
            <img src={bridal} alt="product" className='w-[405px]'/>
            <p className='text-primary'>Shop Bridal</p>
            </div>
            <div>
            <img src={arrangements} alt="product" className='w-[405px]'/>
            <p className='text-primary'>Shop Arrangements</p>
            </div>
            <div>
            <img src={bouquets} alt="product" className='w-[405px]'/>
            <p className='text-primary'>Shop Bouquets</p>
            </div>
        </div>
        <button className='bg-black text-white px-4 py-2 m-10'>See More Best Sellers</button>
    </div>
  )
}

export default HomeProducts