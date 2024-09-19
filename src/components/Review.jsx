import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import { FaStar } from "react-icons/fa6";

export default function Review() {
  const review = [
    {
      review:
        "Amazing service! Ordered my shoes at 8 PM, and they arrived the next morning by 10 AM.",
      rating: 5,
      user: "John Doe",
      userprofile: "/image.png",
      image:
        "https://static.nike.com/a/images/t_prod/w_1920,c_limit,f_auto,q_auto/736f15ca-d2f6-4d98-ad8a-fa51606bbeab/pdp-943345.jpg",
    },
    {
      review: "I was in a pinch and needed shoes for a last-minute event.",
      rating: 3,
      user: "Sarah Smith",
      userprofile: "/image.png",
      image:
        "https://static.nike.com/a/images/t_prod/w_1920,c_limit,f_auto,q_auto/736f15ca-d2f6-4d98-ad8a-fa51606bbeab/pdp-943345.jpg",
    },
    {
      review:
        "Fastest delivery I’ve ever experienced! The shoes were exactly as described. 24-hour delivery is a game changer!",
      rating: 5,
      user: "Emily Johnson",
      userprofile: "/image.png",
      image:
        "https://static.nike.com/a/images/t_prod/w_1920,c_limit,f_auto,q_auto/736f15ca-d2f6-4d98-ad8a-fa51606bbeab/pdp-943345.jpg",
    },
  ];

  return (
    <div className="font-Rubik mt-10">
      <div className="p-2 flex flex-col gap-10">
        <div className="flex justify-between items-end">
          <h1 className="text-[#232321] text-2xl font-semibold w-[172px] xl:text-[74px] xl:w-[589px]  xl:uppercase xl:leading-[70.30px]">
            Reviews
          </h1>
          <button className="bg-[#4a69e2]  text-white text-sm font-medium  uppercase tracking-tight px-4 py-2 xl:py-3 xl:px-5 rounded-lg justify-center items-center">
            See All
          </button>
        </div>

        {/* reviews */}
        <div className=" ">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar]}
            spaceBetween={10}
            slidesPerView={1.5}
            centeredSlides={false}
            breakpoints={{
              0: { slidesPerView: 1.15 },
              400: { slidesPerView: 1.15 },
              639: { slidesPerView: 1.15 },
              865: { slidesPerView: 1.15 },
              1000: { slidesPerView:3 },
              1500: { slidesPerView: 1.15 },
              1700: { slidesPerView: 1.15 },
            }}
            navigation
            // pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            className="h-[390px] "
          >
            <div className="max-h-[470px] ">
              {review.map((items, i) => (
                <SwiperSlide
                  key={i}
                  className="rounded-3xl  bg-[#FAFAFA]  overflow-hidden relative"
                >
                  <div className="justify-end items-start flex gap-3 p-3">
                    <div className="flex justify-center items-start gap-1 flex-col">
                      <p className="opacity-80 text-[#232321] text-sm font-normal p-2">
                        {items.review}
                      </p>
                      <div className="flex gap-1">
                        {Array(items.rating)
                          .fill(0)
                          .map((_, idx) => (
                            <FaStar key={idx} className="text-[#FFA52F]" />
                          ))}
                        <p className="text-[#232321] text-sm font-semibold pl-1">
                          {items.rating}.0
                        </p>
                      </div>
                    </div>
                    <img
                      src={items.userprofile}
                      className="rounded-full h-[46px] w-[47px]"
                    />
                  </div>
                  <div className="flex justify-start items-center bg-red-400 w-full mt-10 gap-5 absolute bottom-0">
                    <img src={items.image} alt="" className="h-[229px] xl:w-full object-cover" />
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
