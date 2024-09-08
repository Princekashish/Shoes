import React from "react";
import { Link } from "react-router-dom";

export default function NewDrop() {
  const newDrop = [
    {
      img: "https://img.freepik.com/premium-photo/close-up-shot-runners-shoes_1276045-62.jpg?w=1380",
      Discount: "New",
      modletitle: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
      price: "Rs. 125",
    },
    {
      img: "https://img.freepik.com/free-photo/pair-trainers_144627-3800.jpg?t=st=1725396322~exp=1725399922~hmac=0c28be2f343d6d5803cdabc7acfc7141e537fec5f145951a0213f9c32e67b929&w=1380",
      Discount: "25% off",
      modletitle: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
      price: "Rs. 125",
    },
    {
      img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f4448f7f-f2fd-46f1-9e99-aef025acab48/NIKE+AIR+MAX+270+GS.png",
      Discount: "25% off",
      modletitle: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
      price: "Rs. 125",
    },
    {
      img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/17d79451-f6f2-4b5e-94ee-5c9ba460c2ef/AIR+MAX+DN+OLY.png",
      Discount: "25% off",
      modletitle: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
      price: "Rs. 125",
    },
  ];

  return (
    <div className="font-Rubik mt-10">
      <div className="p-2 flex flex-col gap-10">
        <div className="flex justify-between items-end">
          <h1 className="text-[#232321] text-2xl font-semibold w-[172px] xl:text-[74px] xl:w-[589px]  xl:uppercase xl:leading-[70.30px]">
            Don’t miss out new drops
          </h1>
          <Link to={"./listing"}><button className="bg-[#4a69e2]  text-white text-sm font-medium  uppercase tracking-tight px-4 py-2 xl:py-3 xl:px-5 rounded-lg justify-center items-center">
            Shop new drops
          </button></Link>
        </div>

        {/* listing */}
        <div className="grid grid-cols-2 gap-4 xl:flex xl:p-2 xl:justify-center">
          {newDrop.map((items, i) => (
            <div
              key={i}
              className="flex flex-col justify-start items-start flex-wrap  gap-3"
            >
              <div className="xl:w-[318px] xl:h-[350px] p-2 bg-neutral-50 rounded-2xl justify-start  items-start gap-2.5 flex relative">
                <img
                  className=" self-stretch rounded-xl object-cover"
                  src={items.img}
                />
                <div
                  className={`px-2 py-1 ${
                    items.Discount === "New" ? "bg-[#4a69e2]" : "bg-[#ffa52f]"
                  } rounded-tl-xl rounded-br-[13px] justify-start items-start gap-2.5 flex absolute`}
                >
                  <div className="text-white text-xs font-semibold  ">
                    {items.Discount}
                  </div>
                </div>
              </div>
              <div className=" flex-col justify-start items-start gap-2 flex">
                <h1 className=" text-[#232321] text-base font-semibold  w-[171px] xl:w-[318px]">
                  {items.modletitle}
                </h1>
                <div className="  flex-col justify-start items-start gap-2.5 flex">
                  <button className="  px-3 py-3 bg-[#232321] rounded-lg justify-center items-center gap-1 flex">
                    <span className="text-white text-xs font-medium  uppercase tracking-tight">
                      View Product -{" "}
                    </span>
                    <span className="text-[#ffa52f] text-xs font-medium   tracking-tight">
                      {items.price}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
