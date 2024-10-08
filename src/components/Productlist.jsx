import axios from "axios";
import React, { useEffect, useState } from "react";
import { IoFilter } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import ScrollTop from "../util/Scrolltop";
import { Link } from "react-router-dom";

export default function Productlist() {
  const [viewmore, setViewmore] = useState(false);
  const [listing, setListing] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState(200);
  const view = () => {
    setViewmore(!viewmore);
  };
  useEffect(() => {
    const fetchlist = async () => {
      try {
        const respon = await axios.get(
          "https://shoesback.onrender.com/product"
        );
        setListing(respon.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchlist();
  }, []);

  //   filter
  const size = Array.from({ length: 10 }, (_, i) => i + 36);
  const Catogry = [
    "Casual shoes",
    "Outdoor",
    "Golf",
    "Runners",
    "Basketball",
    "Hiking",
    "Sneaker",
  ];

  return (
    <div className="font-Rubik">
      <ScrollTop />
      <div className="p-2 gap-5">
        <div className="md:hidden">
          <div className="flex justify-center items-center gap-5 p-2">
            <button className="bg-zinc-100  flex justify-between items-center p-4  text-neutral-800 text-sm font-semibold font-OpenSans tracking-tight w-full py-2 xl:py-3 xl:px-5 rounded-lg ">
              Filters <IoFilter size={15} />
            </button>
            <button className="bg-zinc-100 flex justify-between items-center p-4 text-neutral-800 text-sm font-semibold  font-OpenSans tracking-tight w-full py-2 xl:py-3 xl:px-5 rounded-lg ">
              Trending <MdKeyboardArrowDown size={20} />
            </button>
          </div>
        </div>
        <div className="flex flex-col  p-2">
          <h1 className="text-neutral-800 text-xl font-semibold ">
            Life Style Shoes
          </h1>
          <p className="opacity-80 text-neutral-800 text-sm font-semibold  font-OpenSans">
            122 items
          </p>
        </div>
        {/* filter */}
        <div className="flex justify-center gap-5">
          <div className="hidden xl:block mt-5">
            <div className=" w-[315px] sticky top-0  flex flex-col gap-5">
              <div>
                <h1 className="text-neutral-800 text-2xl font-semibold">
                  Filter
                </h1>
              </div>
              <div className="flex flex-col">
                <div className=" flex justify-between items-center">
                  <h1 className="text-neutral-800 text-base font-semibold  uppercase">
                    Refine by
                  </h1>
                  <h1>
                    {viewmore ? (
                      <MdKeyboardArrowDown
                        size={25}
                        className="cursor-pointer "
                        onClick={view}
                      />
                    ) : (
                      <MdKeyboardArrowUp
                        size={25}
                        className="cursor-pointer "
                        onClick={view}
                      />
                    )}
                  </h1>
                </div>
                <div className="flex pt-2 gap-5">
                  {["Men", "Casual", "Women"].map((refine) => (
                    <div
                      key={refine}
                      className="cursor-pointer h-[38px] px-4 py-3 bg-indigo-500 rounded-xl justify-start items-start gap-2.5 inline-flex"
                    >
                      <h1 className={`text-white text-xs font-semibold`}>
                        {refine}
                      </h1>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col">
                <div className=" flex justify-between items-center">
                  <h1 className="text-neutral-800 text-base font-semibold  uppercase">
                    Size
                  </h1>
                  <h1>
                    {viewmore ? (
                      <MdKeyboardArrowDown
                        size={25}
                        className="cursor-pointer "
                        onClick={view}
                      />
                    ) : (
                      <MdKeyboardArrowUp
                        size={25}
                        className="cursor-pointer "
                        onClick={view}
                      />
                    )}
                  </h1>
                </div>
                <div className="flex pt-2 gap-2 flex-wrap">
                  {size.map((items, i) => (
                    <div
                      key={i}
                      className="cursor-pointer w-[50.25px] h-12   px-4 py-3 bg-white rounded-lg justify-center items-center flex"
                    >
                      <h1 className={` text-xs font-semibold`}>{items}</h1>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col">
                <div className=" flex justify-between items-center">
                  <h1 className="text-neutral-800 text-base font-semibold  uppercase">
                    color
                  </h1>
                  <h1>
                    {viewmore ? (
                      <MdKeyboardArrowDown
                        size={25}
                        className="cursor-pointer "
                        onClick={view}
                      />
                    ) : (
                      <MdKeyboardArrowUp
                        size={25}
                        className="cursor-pointer "
                        onClick={view}
                      />
                    )}
                  </h1>
                </div>
                <div className="flex pt-2 gap-2 flex-wrap">
                  {size.map((items, i) => (
                    <div
                      key={i}
                      className="cursor-pointer w-[50.25px] h-12   px-4 py-3 bg-white rounded-lg justify-center items-center flex"
                    >
                      <h1 className={` text-xs font-semibold`}>{items}</h1>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col">
                <div className=" flex justify-between items-center">
                  <h1 className="text-neutral-800 text-base font-semibold  uppercase">
                    Catogry
                  </h1>
                  <h1>
                    {viewmore ? (
                      <MdKeyboardArrowDown
                        size={25}
                        className="cursor-pointer "
                        onClick={view}
                      />
                    ) : (
                      <MdKeyboardArrowUp
                        size={25}
                        className="cursor-pointer "
                        onClick={view}
                      />
                    )}
                  </h1>
                </div>
                <div className="flex pt-2 gap-2  flex-col">
                  {Catogry.map((items, i) => (
                    <div
                      key={i}
                      className="cursor-pointer  gap-3  rounded-lg justify-start items-center flex"
                    >
                      <input
                        type="checkbox"
                        name=""
                        id=""
                        className="w-[15px] h-[15px]"
                      />
                      <h1
                        className={` text-neutral-800 text-base font-semibold font-OpenSans`}
                      >
                        {items}
                      </h1>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col">
                <div className=" flex justify-between items-center">
                  <h1 className="text-neutral-800 text-base font-semibold  uppercase">
                    Gender
                  </h1>
                  <h1>
                    {viewmore ? (
                      <MdKeyboardArrowDown
                        size={25}
                        className="cursor-pointer "
                        onClick={view}
                      />
                    ) : (
                      <MdKeyboardArrowUp
                        size={25}
                        className="cursor-pointer "
                        onClick={view}
                      />
                    )}
                  </h1>
                </div>
                <div className="flex pt-2 gap-2  flex-col">
                  {["Men", "Women"].map((items, i) => (
                    <div
                      key={i}
                      className="cursor-pointer  gap-3  rounded-lg justify-start items-center flex"
                    >
                      <input
                        type="checkbox"
                        name=""
                        id=""
                        className="w-[15px] h-[15px]"
                      />
                      <h1
                        className={` text-neutral-800 text-base font-semibold font-OpenSans`}
                      >
                        {items}
                      </h1>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col">
                <div className=" flex justify-between items-center">
                  <h1 className="text-neutral-800 text-base font-semibold  uppercase">
                    Price
                  </h1>
                  <h1>
                    {viewmore ? (
                      <MdKeyboardArrowDown
                        size={25}
                        className="cursor-pointer "
                        onClick={view}
                      />
                    ) : (
                      <MdKeyboardArrowUp
                        size={25}
                        className="cursor-pointer "
                        onClick={view}
                      />
                    )}
                  </h1>
                </div>
                <div className="flex pt-2 gap-2  flex-col">
                  {/* Price Range Slider */}
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-neutral-800 text-sm font-medium">
                      Rs. 0
                    </span>
                    <span className="text-neutral-800 text-sm font-medium">
                      Rs. 500
                    </span>
                  </div>

                  <input
                    type="range"
                    min="0"
                    max="500"
                    value={selectedPrice}
                    onChange={(e) => setSelectedPrice(e.target.value)}
                    className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-blue-500"
                  />

                  {/* Display Selected Price */}
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-neutral-800 text-sm font-medium">
                      Rs. {selectedPrice}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* listing */}
          {listing.length == 0 ? (
            <div className="grid grid-cols-2 gap-4 xl:grid-cols-3 xl:p-2 xl:justify-center mt-2  ">
              {Array(9)
                .fill("")
                .map((items, i) => (
                  <div
                    key={i}
                    className="flex  bg-[#d5d4d4] rounded-2xl flex-col  animate-pulse   items-start flex-wrap  gap-3 xl:hover:ease-in-out transition "
                  >
                    <div className="xl:w-[318px] xl:h-[350px] h-[180px] w-[171px] p-2  rounded-2xl justify-start  items-start gap-2.5 flex relative"></div>
                    <div className=" flex-col justify-between items-start gap-2 flex  ">
                      <div className="  flex-col justify-start items-start gap-2.5 flex"></div>
                    </div>
                  </div>
                ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-3 xl:gap-7     xl:grid-cols-3 xl:p-2 xl:justify-center mt-2 ">
              {listing.map((items) => (
                <Link to={`/product/${items.id}`} key={items.id}>
                  <div className="flex flex-col  justify-between h-[320px] xl:h-[490px]  xl:gap-0   items-start flex-wrap  gap-3 xl:hover:ease-in-out transition ">
                    <div className="flex flex-col justify-center gap-2 flex-wrap">
                      <div className="xl:w-[318px] xl:h-[350px] h-[180px] p-2 bg-neutral-50 rounded-2xl justify-start  items-start gap-2.5 flex relative">
                        <img
                          className=" self-stretch rounded-xl object-cover pointer-events-none"
                          src={items.imageUrl}
                        />

                        <div
                          className={`px-2 py-1 ${
                            items.Discount === "New"
                              ? "bg-[#4a69e2]"
                              : "bg-[#ffa52f]"
                          } rounded-tl-xl rounded-br-[13px] justify-start items-start gap-2.5 flex absolute`}
                        >
                          <div className="text-white text-xs font-semibold  ">
                            {items.Discount}
                          </div>
                        </div>
                      </div>
                      <div>
                        <h1 className=" text-[#232321] xl:text-xl text-base font-semibold  w-[171px] xl:w-[318px]">
                          {items.brand}
                        </h1>
                      </div>
                      <div>
                        <h1 className=" text-[#232321] xl:text-lg text-base  w-[171px] xl:w-[318px]">
                          {items.name}
                        </h1>
                      </div>
                    </div>
                    <div className="bg-[#232321] w-full text-center py-2 rounded-lg">
                      <button className="xl:w-[318px]   rounded-lg ">
                        <span className="text-white text-xs font-medium  uppercase tracking-tight">
                          View Product -{" "}
                        </span>
                        <span className="text-white text-xs font-medium   tracking-tight">
                          {items.price}
                        </span>
                      </button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
        <div>pagination</div>
      </div>
    </div>
  );
}
//https://www.flipkart.com/grocery-supermart-store?marketplace=GROCERY&fm=neo%2Fmerchandising&iid=M_bc3a07b9-9258-4063-a0a8-85387aedf9fc_1_372UD5BXDFYS_MC.CBUR1Q46W5F1&otracker=hp_rich_navigation_1_1.navigationCard.RICH_NAVIGATION_Grocery_CBUR1Q46W5F1&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_1_L0_view-all&cid=CBUR1Q46W5F1
