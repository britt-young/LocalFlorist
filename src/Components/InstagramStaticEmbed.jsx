const instagramPosts = [
  {
    url: "https://www.instagram.com/p/DLCsy9NTfk-/?utm_source=ig_web_copy_link",
    img: "/images/ig1.jpeg",
  },
  {
    url: "https://www.instagram.com/p/DLCsy9NTfk-/?utm_source=ig_web_copy_link",
    img: "/images/ig2.jpeg",
  },
  {
    url: "https://www.instagram.com/p/DLCsy9NTfk-/?utm_source=ig_web_copy_link",
    img: "/images/ig3.jpeg",
  },
  {
    url: "https://www.instagram.com/p/DLCsy9NTfk-/?utm_source=ig_web_copy_link",
    img: "/images/ig4.jpeg",
  },
  {
    url: "https://www.instagram.com/p/DKKDn0_zat2/?utm_source=ig_web_copy_link&igsh=c3NkNnp2NjlrYnlm",
    img: "/images/ig5.jpeg",
  },
  {
    url: "https://www.instagram.com/p/DIjDjsKT2_P/?img_index=3",
    img: "/images/ig6.jpeg",
  },
];

const InstagramStaticEmbed = () => {
  return (
    <div className=" mx-auto p-10">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-black leading-4">@yourlocalflorist</h2>
        <h3 className="text-black mb-5">#shoplocal</h3>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-6 gap-4 p-4">
        {instagramPosts.map((post, index) => (
          <a
            key={index}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
          >
            <img
              src={post.img}
              alt={`Instagram post ${index + 1}`}
              loading="lazy"
              className="lg:h-full lg:w-full w-4/5 mx-auto shadow-md group-hover:opacity-70 transition duration-300"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default InstagramStaticEmbed;
