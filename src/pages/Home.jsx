import React from 'react'
import HomeBanner from '../Components/HomeBanner'
import HomeHero from '../Components/HomeHero'
import HomeProducts from '../Components/HomeProducts'
import HomeAbout from '../Components/HomeAbout'
import HomeCustom from '../Components/HomeCustom'
import HomeTestimonials from '../Components/HomeTestimonials'
import InstagramGallery from '../Components/InstagramEmbed'

const Home = () => {
  return (
    <div>
      <HomeBanner />
      <HomeHero />
      <HomeProducts />
      <HomeAbout />
      <HomeCustom />
      <HomeTestimonials />
      <InstagramGallery />
    </div>
  )
}

export default Home