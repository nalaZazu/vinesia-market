import React from "react";
import Image from "next/image";
import collection from "@/assets/icon/big1.png";
import bottle1 from "@/assets/icon/bottle1.svg";
import redwine from "@/assets/icon/redwine.svg";
import Slider from "react-slick";
import { NextIcon, PrevIcon } from "@/assets/icon/Icons";

export default function Collection() {

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
            <span className=" text-typegray font-normal">Included </span>
            In this collection
          </h2>
          <div className="basis-4/5">
            <hr className=" border-black" />
          </div>
        </div>
        <div className="  mx-auto max-w-4xl">
          <div className=" md:py-16 py-5 px-20 mx-auto collection_carousel">
            <Slider {...sliderSettings}>
              {[1, 2, 4, 5, 4, 5, 5, 5]?.map((item: any, i: any) => {
                return (
                  <div key={i}>
                    <div key={i} className="relative">
                      <Image
                        src={collection}
                        alt="Picture of the author"
                        className=" w-full h-auto rounded-sm  border border-black relative z-0"
                      />
                      <div className=" w-12 h-6 flex bg-white absolute top-2 z-50 left-0 items-center justify-center border-y-2 border-black border-r-2">
                        <p className="text-gray-500 text-xs font-medium">1</p>
                        <Image
                          src={bottle1}
                          alt="Picture of the author"
                          className="w-4 h-4"
                        />
                      </div>
                      <div className=" pt-5">
                        <h5 className="w-40 text-black text-sm font-semibold">
                          Chateau La Mission Haut Brion Cru Classe | 2009
                        </h5>
                        <div className="flex w-40 justify-between">
                          <div className="flex border-l border-black border-opacity-30 ps-1">
                            <Image
                              src={redwine}
                              alt="Picture of the author"
                              className="w-4 h-4"
                            />
                            <p className="text-black text-xs font-normal">
                              Red
                            </p>
                          </div>
                          <p
                            className="w-[79px] h-[19px] text-right text-indigo-500 text-sm font-normal font-['Jost'] underline tracking-tight cursor-pointer"
                          >
                            See details
                          </p>
                        </div>
                      </div>
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
