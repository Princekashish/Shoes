import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ScrollTop from "../util/Scrolltop";
import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoMdHeartEmpty,
} from "react-icons/io";

export default function Productpage() {
  const { id } = useParams();
  const [productinfo, setProductinfo] = useState({});
  const size = Array.from({ length: 10 }, (_, i) => i + 36);
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

  useEffect(() => {
    const fetchlist = async () => {
      try {
        const response = await axios.get(
          `https://shoesback.onrender.com/product/${id}`
        );
        setProductinfo(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchlist();
  }, []);

  return (
    <>
      <ScrollTop />
      <div className="font-Rubik">
        <div className="p-2 gap-5">
          <div className="flex flex-col xl:flex-row justify-start gap-5">
            <div>
              <img
                className="xl:h-[530px] rounded-xl"
                src={productinfo.imageUrl}
                alt={productinfo.name}
              />
            </div>
            {/*product details */}
            <div className="flex flex-col gap-5 ">
              <div>
                <button className="bg-indigo-500 px-4 py-2 rounded-lg text-white text-xs font-semibold inline-flex">
                  New release
                </button>
                <h1 className="text-neutral-800 text-lg font-semibold">
                  {productinfo.name}
                </h1>
                <h1>
                  <span className="text-indigo-500 text-2xl font-semibold tracking-tight">
                    Rs.{productinfo.price}
                  </span>
                </h1>
              </div>
              {/* Color */}
              <div>
                <h1 className="text-neutral-800 text-base font-semibold ">
                  Color
                </h1>
                <div className="flex gap-2 flex-wrap mt-2">
                  {productinfo.colors?.map((color, index) => (
                    <div
                      key={index}
                      className="w-10 h-10 rounded-full"
                      style={{
                        backgroundColor: color,
                      }}
                      title={color}
                    />
                  ))}
                </div>
              </div>
              {/* Size */}
              <div className="">
                <div className="flex justify-between items-center ">
                  <h1 className="text-neutral-800 text-base font-semibold">
                    Size
                  </h1>
                  <h1 className=" text-neutral-800 text-sm font-medium font-['Rubik'] underline uppercase tracking-tight">
                    size chart
                  </h1>
                </div>
                <div className="flex pt-2 gap-2 flex-wrap mt-2 xl:w-[430px]">
                  {size.map((item, i) => {
                    // Check if the size is available
                    const isAvailable = productinfo.sizes?.includes(item);
                    return (
                      <button
                        key={i}
                        className={` cursor-pointer w-[50.25px] h-12 px-4 py-3 rounded-lg flex items-center justify-center text-xs font-semibold ${
                          isAvailable
                            ? "bg-white text-black text-sm "
                            : "bg-[#D2D1D3] text-neutral-400 text-sm   cursor-not-allowed"
                        }`}
                        disabled={!isAvailable}
                      >
                        <h1>{item}</h1>
                      </button>
                    );
                  })}
                </div>
              </div>
              {/* buyign */}
              <div className="flex flex-col justify-center items-center gap-4 ">
                <div className="flex justify-between items-center gap-2 w-full">
                  <button className="text-white text-sm flex justify-center items-center rounded-lg font-medium w-[80%] h-12 px-4 py-2 bg-neutral-800 uppercase tracking-tight">
                    add to cart
                  </button>
                  <button className="bg-neutral-800 flex justify-center items-center rounded-lg text-white w-[20%] h-12  py-2">
                    <IoMdHeartEmpty size={34} />
                  </button>
                </div>
                <div className=" w-full">
                  <button className="text-white text-sm flex justify-center items-center rounded-lg font-medium w-full h-12 px-4 py-2  bg-indigo-500 uppercase tracking-tight">
                    buy it now
                  </button>
                </div>
              </div>

              {/* productinfo */}
              <div className="  flex-col justify-start items-start gap-2 inline-flex">
                <div className="text-neutral-800 text-base font-semibold uppercase">
                  About the product
                </div>
                <div className="">
                  <span className="text-neutral-800 text-base font-normal font-OpenSans">
                    {/* Shadow Text */}
                    {productinfo.colors && productinfo.colors.length >= 2
                      ? `Shadow ${productinfo.colors[0]} / ${productinfo.colors[1]}`
                      : "Shadow color not available"}
                    <br />
                    <br />
                    This product is excluded from all promotional discounts and
                    offers.
                    <br />
                    <br />
                  </span>

                  <span className="text-neutral-800 text-base font-normal font-OpenSans">
                    <ul className="list-disc pl-5">
                      <li>
                        Pay over time in interest-free installments with Affirm,
                        Klarna, or Afterpay.
                      </li>
                      <li>
                        Join adiClub to get unlimited free standard shipping,
                        returns, & exchanges.
                      </li>
                    </ul>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-start gap-5 mt-10">
            <div className="flex justify-between items-end">
              <h1 className="text-neutral-800 text-2xl font-semibold xl:text-5xl xl:w-[589px]  xl:uppercase xl:leading-[70.30px]">
                You may also like
              </h1>
              <div className="flex gap-2 justify-center items-center">
                <h1 className="bg-neutral-800 text-white px-3 py-3 rounded-lg opacity-50">
                  <IoIosArrowBack size={18} />
                </h1>
                <h1 className="bg-neutral-800 text-white px-3 py-3 rounded-lg">
                  <IoIosArrowForward size={18} />
                </h1>
              </div>
            </div>
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
      </div>
    </>
  );
}
