import React from 'react'
import HomeBanner from '../Components/HomeBanner'
import HomeHero from '../Components/HomeHero'
import HomeProducts from '../Components/HomeProducts'
import AboutIntro from '../Components/AboutIntro'
import HomeCustom from '../Components/HomeCustom'
import HomeTestimonials from '../Components/HomeTestimonials'

const Home = () => {
  return (
    <div>
      <HomeBanner />
      <HomeHero />
      <HomeProducts />
      <AboutIntro />
      <HomeCustom />
      <HomeTestimonials />
    </div>
  )
}

export default Home