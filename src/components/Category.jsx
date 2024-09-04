import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

export default function Category() {
  return (
    <div className="font-Rubik bg-[#232321] h-[800px] mt-5 p-2">
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
      <div className="bg-[#eceef0]">

      </div>
    </div>
  );
}
