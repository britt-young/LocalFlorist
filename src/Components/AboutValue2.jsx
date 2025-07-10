// import price from "../assets/icons/price.png";


const AboutValue2 = () => {
  return (
    <div className="md:h-[300px] flex flex-col justify-center items-center text-center bg-primary">
      <div className="max-w-7xl flex flex-col m-5 lg:m-0">
        <span className="inline-flex items-baseline justify-center mb-2">
                    {/* <img
                      src={price}
                      className="me-4 size-10 self-center rounded-full"
                    /> */}
                      <h2 className="text-white">Responsibly Priced Arrangements</h2>
                  </span>
              <h6 className="text-white">
                We offer responsibly priced arrangements without compromising
                on quality or style. Whether you’re looking for a simple bouquet
                or something more elaborate, we provide thoughtful,
                handcrafted designs to fit a range of budgets—always fresh,
                always made with care.
              </h6>
      </div>
    </div>
  );
};

export default AboutValue2;
