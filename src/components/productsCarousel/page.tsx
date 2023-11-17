import Image from "next/image";
import React, { useState } from "react";
import big from "@/assets/icon/dots.png";
import big1 from "@/assets/icon/big1.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextIcon2, PrevIcon2 } from "@/assets/icon/Icons";
import ProductCard from "../cards/ProductCard";

export default function ProductCarousel() {
  const sliderSettings = {
    customPaging: function () {
      return (
        <div className="image.dots z-0">
          <Image src={big} alt="" width={56} height={74} />
        </div>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
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
      <div className=" productcarousel z-50">
        <div className=" text-black rounded-lg w-8 h-8 text-center flex items-center absolute top-[308px] left-[90px]">
          <div className="mx-auto">
            <PrevIcon2 />
          </div>
        </div>
      </div>
    ),
    nextArrow: (
      <div className="productcarousel  z-50">
        <div className=" text-black rounded-lg w-8 h-8 text-center flex items-center absolute top-[308px] right-[150px]">
          <div className="mx-auto">
            <NextIcon2 />
          </div>
        </div>
      </div>
    ),
  };
  return (
    <div>
      <Slider {...sliderSettings} className="product_slider z-0">
        {[1, 2, 3, 4]?.map((item: any, i: any) => {
          return (
            <div key={i}>
              <div key={i} className=" justify-center items-center">
                <div className="relative">
                  <Image
                    src={big1}
                    alt="Picture of the author"
                    className=" z-0"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
