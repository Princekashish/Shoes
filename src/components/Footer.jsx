import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const category = [
    { text: "Running", link: "/" },
    { text: "Sneakers", link: "/" },
    { text: "Basketball", link: "/" },
    { text: "Outdoor", link: "/" },
    { text: "Golf", link: "/" },
    { text: "Hiking", link: "/" },
  ];
  const Company = [
    { text: "About", link: "/" },
    { text: "Contact", link: "/" },
    { text: "Blog", link: "/" },
  ];
  const follow = [
    { icon: <FaInstagram size={20} />, link: "/" },
    { icon: <BsTwitterX size={20} />, link: "/" },
    { icon: <FaLinkedin size={20} />, link: "/" },
  ];
  return (
    <>
      <div className=" p-2 font-Rubik">
        <div className="bg-[#4B69E2] rounded-3xl  ">
          <div className="flex lg:flex-row lg:justify-around p-5 flex-col lg:items-center">
            <div className="flex  text-white flex-col justify-start items-start gap-5 leading-none">
              <h1 className="lg:w-[510px] text-white text-[32px] lg:text-5xl font-semibold font-Rubik lg:uppercase ">
                Join our KicksPlus Club & get 15% off
              </h1>
              <h3 className="text-[#E7E7E3] text-lg leading-none">
                Sign up for free! Join the community.
              </h3>
              <div className="flex gap-5 flex-wrap  justify-start items-center leading-none  ">
                <input
                  type="text"
                  placeholder="Email address"
                  className="py-2 px-5 rounded-lg border bg-transparent outline-none "
                />
                <button className="text-white text-sm font-medium px-4 py-2 bg-[#232321] rounded-lg uppercase tracking-tight">
                  Submit
                </button>
              </div>
            </div>
            <div className="mt-5 lg:mt-0 lg:p-20">
              <img
                src="/Group.png"
                alt=""
                className="w-[200px] lg:w-[367px] lg:h-[112px]"
              />
            </div>
          </div>
          {/* aboutus */}
          <div className="bg-[#232321] rounded-3xl flex flex-col  h-[650px] lg:h-[451px]   overflow-hidden">
            <div className="flex  p-5  text-white flex-col justify-start items-start gap-5 mt-5 lg:flex-row lg:justify-around  lg:items-start">
              <div className="flex flex-col justify-start items-start ">
                <h1 className="text-[24px] text-[#FFA52F] font-semibold">
                  About us
                </h1>
                <p className="text-[16px] lg:w-[446px]">
                  We are the biggest hyperstore in the universe. We got you all
                  cover with our exclusive collections and latest drops.
                </p>
              </div>
              <div className="flex flex-col justify-start items-start gap-3 leading-none">
                <h1 className="text-[24px] text-[#FFA52F] font-semibold">
                  Category
                </h1>
                <div className="flex flex-col gap-3">
                  {category.map((items, i) => (
                    <Link key={i} to={items.link}>
                      {items.text}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="flex flex-col justify-start items-start leading-none gap-3">
                <h1 className="text-[24px] text-[#FFA52F] font-semibold">
                  Company
                </h1>
                <div className="flex flex-col gap-3">
                  {Company.map((items, i) => (
                    <Link key={i} to={items.link}>
                      {items.text}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="flex flex-col justify-start items-start leading-none gap-3">
                <h1 className="text-[24px] text-[#FFA52F] font-semibold">
                  Follow
                </h1>
                <div className="flex  gap-3">
                  {follow.map((items, i) => (
                    <Link key={i} to={items.link}>
                      {items.icon}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            {/* brand */}
            <div className="flex justify-center items-center">
              <img src="/Group.png" alt="" />
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center p-5 text-center text-xs">
          <h1>Copyright © 2024 Prince Kashish. All rights reserved.</h1>
        </div>
      </div>
    </>
  );
}
