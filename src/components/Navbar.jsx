import React from "react";
import { HiMiniBars2 } from "react-icons/hi2";
import { BiSolidUser } from "react-icons/bi";

export default function Navbar() {
  return (
    <>
      <div className="  py-[20px] p-2">
      {/* mobile */}
        <div className="bg-[#FAFAFA] rounded-2xl flex justify-between p-5 items-center">
          <div>
            <HiMiniBars2 size={25}/>
          </div>
          <div className="w-[80px] font-bold text-black flex justify-center items-center font-Rubik">
            <h3>KI <span className="text-xl">C</span> KS</h3>
          </div>
          <div className="flex gap-1 justify-center items-center">
            <BiSolidUser size={25}/>
            <div className="bg-yellow-600 rounded-full h-8 w-8 text-center  justify-center  items-center hidden">0</div>
          </div>
        </div>
      </div>
    </>
  );
}
