import React from "react";

export default function Offer() {
  const offer = [
    {
      image:
        "https://static.nike.com/a/images/t_prod/w_1920,c_limit,f_auto,q_auto/736f15ca-d2f6-4d98-ad8a-fa51606bbeab/pdp-943345.jpg",
      time: "Limited time only",
      offer: "40%",
      title:
        "Sneakers made with your comfort in mind so you can put all of your focus into your next session.",
    },
  ];
  return (
    <div className="font-Rubik">
      <div className="p-2 flex flex-col gap-5">
        {offer.map((items, i) => (
          <div
            key={i}
            className="relative bg-cover bg-center bg-no-repeat h-[149px] md:h-[395px] rounded-3xl"
            style={{ backgroundImage: `url(${items.image})` }}
          >
            <div className="absolute inset-0 bg-black/50 flex flex-col justify-center md:gap-8 rounded-3xl p-4 text-white">
              <h1 className="text-stone-200 text-xs font-normal font-OpenSans md:text-2xl">{items.time}</h1>
              <h1 className="text-white text-xl font-semibold md:text-[74px]">Get {items.offer} OFF</h1>
              <p className="text-stone-200 text-[10px] font-normal font-OpenSans md:text-xl md:w-[490px]">{items.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
