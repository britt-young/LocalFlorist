const AboutHero = () => {
  return (
    <div>
      <header>
        {/* Hero section with background image, heading, subheading and button */}
        <div className="relative h-[800px] overflow-hidden bg-[url('C:\Users\britt\develop\LocalFlorist\frontend\src\assets\imgs\hero2.jpg')] bg-cover bg-[50%] bg-no-repeat">
          <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black/20 bg-fixed">
            <div className="flex flex-col items-center justify-center text-center h-full w-full">
              <div className="bg-transparent backdrop-blur-sm p-4">
                <h1>Our Story</h1>
                <h3 className="mb-0">Professionally styled floral bouquets and arrangements</h3>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default AboutHero;
