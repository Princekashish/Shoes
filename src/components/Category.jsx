import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineArrowOutward } from "react-icons/md";

export default function Category() {
  const categorydetail = [
    {
      img: "/image31.png",
      titel: "Life Style",
    },
    {
      img: "/image31.png",
      titel: "Life Style",
    },
  ];
  return (
    <div className="font-Rubik bg-[#232321] h-[800px] md:h-[450px] xl:h-[620px]  mt-5 p-2">
      <div className="  flex justify-between items-center p-2">
        <h1 className="text-white text-2xl font-semibold ">Category</h1>
        <div className="flex gap-2 justify-center items-center">
          <h1 className="bg-white px-3 py-3 rounded-lg opacity-50">
            <IoIosArrowBack size={18} />
          </h1>
          <h1 className="bg-white px-3 py-3 rounded-lg">
            <IoIosArrowForward size={18} />
          </h1>
        </div>
      </div>
      <div className={` bg-[#f6f6f6] overflow-hidden flex-col flex xl:flex-row md:flex-row  ml-5 mt-[38px]  md:ml-10 xl:mt-10 md:mt-9 rounded-tl-3xl md:gap-10 `}>
        {categorydetail.map((items, i) => (
          <div key={i} className={` h-[348px] xl:h-[514px] md:w-[690px] flex  flex-col relative justify-center items-center  ${i % 2 === 0 ? "bg-[#f6f6f6]" : ""} `}>
            <img
              className={` h-[348px] xl:w-[480px] xl:h-[600px] xl:p-5 object-cover `}
              src={items.img}
            />
            <div className="absolute  flex justify-between p-2 w-full items-center bottom-0 xl:bottom-8">
              <h1 className="text-[#232321] text-2xl font-semibold ">
                Basketball
                <br />
                Shoes
              </h1>
              <button className="h-8 text-white p-2 bg-[#232321] rounded justify-center items-center gap-1 flex">
                <MdOutlineArrowOutward size={15} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
