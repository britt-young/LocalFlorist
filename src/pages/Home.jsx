import React from 'react'
import HomeBanner from '../Components/HomeBanner'
import HomeHero from '../Components/HomeHero'
import HomeProducts from '../Components/HomeProducts'

const Home = () => {
  return (
    <div>
      <HomeBanner />
      <HomeHero />
      <HomeProducts />
    </div>
  )
}

export default Home