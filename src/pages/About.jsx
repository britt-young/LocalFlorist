import AboutBanner from "../Components/AboutBanner"
import AboutHero from "../Components/AboutHero"
import AboutValue1 from "../Components/AboutValue1"
import AboutValue2 from "../Components/AboutValue2"
import AboutValue3 from "../Components/AboutValue3"
import AboutValues from "../Components/AboutValues"
import HomeTestimonials from "../Components/HomeTestimonials"

const About = () => {
  return (
    <div>
      <AboutHero />
      <AboutBanner />
      <AboutValues />
      <AboutValue1 />
      <AboutValue2 />
      <AboutValue3 />
      <HomeTestimonials />
    </div>
  )
}

export default About