import React from 'react'
import HomeBanner from '../Components/HomeBanner'
import HomeHero from '../Components/HomeHero'
import HomeProducts from '../Components/HomeProducts'
import AboutIntro from '../Components/AboutIntro'
import HomeCustom from '../Components/HomeCustom'
import HomeTestimonials from '../Components/HomeTestimonials'
import InstagramGallery from '../Components/InstagramEmbed'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div>
      <HomeBanner />
      <HomeHero />
      <HomeProducts />
      <AboutIntro />
      <HomeCustom />
      <HomeTestimonials />
      <InstagramGallery />
      <Footer />
    </div>
  )
}

export default Home