import price from "../assets/icons/price.png";

const AboutValue2 = () => {
  return (
    <div className="md:h-[300px] flex flex-col justify-center items-center text-center bg-primary">
      <div className="max-w-7xl flex flex-col m-5 lg:m-0">
        <span class="inline-flex items-baseline justify-center">
                    <img
                      src={price}
                      className="mx-1 size-10 self-center rounded-full"
                    />
                    <span>
                      <h2 className="text-white">Responsibly Priced Arrangements</h2>
                    </span>
                  </span>
              <p className="text-white">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, fuga. Amet totam accusamus architecto consequatur sunt sequi eius iste cupiditate magnam quaerat, accusantium qui. Sunt sequi aut nisi magnam animi similique ipsam porro necessitatibus architecto maxime. Corporis ad quo, dolorem aliquid vero earum repudiandae inventore veritatis odio beatae
              </p>
      </div>
    </div>
  );
};

export default AboutValue2;
