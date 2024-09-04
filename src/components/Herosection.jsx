import React, { useState } from "react";

export default function Herosection() {
  const [backgroundImage, setBackgroundImage] = useState(
    "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=2824&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  );

  const allImages = [
    "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=2824&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1549298916-f52d724204b4?q=80&w=2826&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1549298916-c6c5f85fa167?q=80&w=2826&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  const [thumbnail, setThumbnail] = useState([allImages[1], allImages[2]]);

  const handleThumbnailClick = (clickedImageIndex) => {
    setBackgroundImage(thumbnail[clickedImageIndex]);

    const newThumbnails = [...thumbnail];
    newThumbnails[clickedImageIndex] = backgroundImage;
    setThumbnail(newThumbnails);
  };

  return (
    <div className="font-Rubik">
      <div className="p-2 flex flex-col gap-5">
        <div className="text-[55px] lg:text-[223.50px] tracking-wide leading-none">
          <h1 className="text-[#232321] font-bold uppercase">
            Do it{" "}
            <span className="text-[#4a69e2] font-bold uppercase">Right</span>{" "}
          </h1>
        </div>

        {/* Background image dynamically changes based on state */}
        <div
          className={`bg-no-repeat bg-cover bg-center h-[382px] lg:h-[750px] rounded-3xl`}
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="bg-black/30 h-[382px] lg:h-[750px] rounded-3xl">
            {/* Trending product tag */}
            <div className="h-[30px] xl:w-[237px] xl:h-[67px] relative right-[63px] xl:right-[84px] xl:top-32 top-24 p-2 -rotate-90 bg-[#232321] rounded-bl-lg xl:rounded-bl-2xl xl:rounded-br-2xl rounded-br-lg justify-start xl:justify-center xl:items-center items-start gap-2.5 inline-flex">
              <h1 className="text-[#e7e7e3] text-xs xl:text-base font-semibold">
                Nike product of the year{" "}
              </h1>
            </div>
            <div className="flex justify-between p-2 relative top-[50%]">
              <div className="flex flex-col justify-start items-start xl:gap-5 gap-2 p-3">
                <h1 className="text-white text-2xl xl:text-[74px] font-semibold">
                  NIKE AIR MAX
                </h1>
                <p className="lg:w-[490px] w-[197px] text-sm text-[#e7e7e3] xl:text-2xl font-semibold">
                  Nike introducing the new air max for everyone's comfort
                </p>
                <div className="">
                  <button className="bg-[#4a69e2] text-white px-4 py-2 rounded-lg">
                    Shop now
                  </button>
                </div>
              </div>
              <div className="h-[136px] xl:h-[336px] flex-col justify-start items-start gap-2 inline-flex">
                {thumbnail.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-16 h-16 xl:h-32 xl:w-40 rounded-lg border border-[#e7e7e3] cursor-pointer"
                    onClick={() => handleThumbnailClick(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
