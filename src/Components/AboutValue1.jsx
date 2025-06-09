import value1 from '../assets/imgs/value1.jpg'

const AboutValue1 = () => {
  return (
     <div className="md:h-[500px] flex flex-col justify-center items-center bg-secondary">
      <div className="max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-4 mx-5 md:mx-60">
        <div className="md:mr-10 md:mt-0 mt-5 flex flex-col justify-center items-start text-left">
          <h2 className="text-black mb-5">Farm-fresh Quality</h2>
          <p className="text-primary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat
          </p>
        </div>
        <div className="flex justify-center">
          <img src={value1} alt="product" className="w-[450px] mb-5 md:m-0 shadow-lg" />
        </div>
      </div>
    </div>
  )
}

export default AboutValue1