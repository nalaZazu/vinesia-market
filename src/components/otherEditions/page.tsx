import React, { useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import winbottle from "@/assets/image/otheredition.png";
import { InfoIcon } from "@/assets/icon/Icons";
import { NextIcon, PrevIcon } from "@/assets/icon/Icons";
export default function OtherEditions() {
  const sliderSettings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    centerPadding: "100px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    prevArrow: (
      <div className="slick-custom-arrow slick-prev top-full ">
        <div className="border border-gray-600 rounded-lg w-8 h-8 text-center flex items-center">
          <div className="mx-auto">
            <PrevIcon />
          </div>
        </div>
      </div>
    ),
    nextArrow: (
      <div className="slick-custom-arrow slick-next top-full">
        <div className="border border-gray-600 rounded-lg w-8 h-8 text-center flex items-center">
          <div className="mx-auto">
            <NextIcon />
          </div>
        </div>
      </div>
    ),
  };
  return (
    <div>
      <div className=" container mx-auto pt-7 px-4 md:px-0">
        <div className="flex justify-between items-center gap-5">
          <h2 className="basis-1/4 capitalize text-2xl font-medium">
            All editions
          </h2>
          <div className="basis-4/5">
            <hr className=" border-black" />
          </div>
        </div>
        <div className="mx-auto">
          <div className=" md:py-16 py-5 px-20 mx-auto collection_carousel">
            <Slider {...sliderSettings}>
              {[1, 2, 4, 5, 4, 5, 5, 5]?.map((item: any, i: any) => {
                return (
                  <div key={i}>
                    <div key={i}>
                      <Image
                        src={winbottle}
                        alt="Picture of the author"
                        className="mb-3 w-full"
                      />
                      <h4 className=" text-black text-base font-semibold  tracking-tight	">
                        {item?.name} | {item?.vintage}
                      </h4>
                      <p className="flex  items-center text-black text-xxs font-medium  py-1 tracking-wide">
                        {item?.packageSize} bottles collection{" "}
                        <span className=" ms-1">
                          <InfoIcon />
                        </span>
                      </p>
                      <span>
                        <p className="font-semibold  text-black text-xxs tracking-wide">
                          {item?.owners?.map((ow: any, i: any) => {
                            return (
                              <span
                                className={
                                  i > 0
                                    ? "border-s-2 border-black px-1 uppercase"
                                    : "px-1 uppercase"
                                }
                                key={i}
                              >
                                {" "}
                                {ow}{" "}
                              </span>
                            );
                          })}
                        </p>
                        <span className="inline-flex items-center rounded bg-[#842029] px-2 py-1   font-medium text-white ring-1 ring-inset ring-[#842029]  text-xxs  tracking-wide">
                          Vinesia
                        </span>
                      </span>
                      <hr className="my-4 text-[#C6C7C8] font-bold" />
                      <span>
                        <h3 className="  text-black text-xxs font-semibold   tracking-wide">
                          BUY NOW
                        </h3>
                        <h3 className="font-semibold text-lg  text-black tracking-tight">
                          €{item?.buyNowPrice}
                        </h3>
                      </span>
                      <span className="flex  text-black text-xxs font-medium  tracking-wide">
                        <p> {item?.total} bottles</p>
                        <p className=" pl-1 text-[#959596]  text-xxs font-medium  tracking-wide">
                          {item?.available} remaining
                        </p>
                      </span>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}
