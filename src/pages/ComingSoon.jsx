import hero from "../assets/imgs/soon-hero.jpg"

const ComingSoon = () => {
  return (
    <div
      className="bg-cover bg-center h-100 flex items-center justify-center text-black"
      style={{ backgroundImage: `url(${hero})` }}
    >
      <div className="flex flex-col bg-transparent backdrop-blur-sm p-4 text-center">
        <h1 className="text-center text-white">
          Coming Soon
        </h1>
        <h3 className="text-center text-white mb-0">
          our most commonly asked questions
        </h3>
      </div>
    </div>
  )
}

export default ComingSoon