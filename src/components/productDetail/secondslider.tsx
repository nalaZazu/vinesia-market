import Image from "next/image";
import React from "react";
import big from "@/assets/icon/dots.png";
import big1 from "@/assets/icon/big1.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextIcon2, PrevIcon2 } from "@/assets/icon/Icons";
export default function ProductSecCarousel() {
  const sliderSettings = {
    customPaging: function () {
      return (
        <div className="image.dots z-0 flx-img-border">
          <Image src={big} alt="" width={56} height={74} />
        </div>
      );
    },
    dots: true,
    dotsClass: "slick-dotss slick-thumb",
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
          slidesToShow: 1,
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
        <div className=" text-black rounded-lg w-8 h-8 text-center flex items-center absolute top-[256px] md:top-[256px] left-[90px] md:left-[90px]  ">
          {/*  lg:top-[256px] lg:left-[90px] md:top-[290px] md:left-[90px] */}
          <div className="">
            <PrevIcon2 />
          </div>
        </div>
      </div>
    ),
    nextArrow: (
      <div className="productcarousel  z-50">
        <div className=" text-black rounded-lg w-8 h-8 text-center flex items-center absolute top-[256px] right-[70px] md:top-[256px] md:right-[70px]">
          {/*  lg:top-[290px] lg:right-[150px] md:top-[290px] md:right-[345px] */}
          <div className="">
            <NextIcon2 />
          </div>
        </div>
      </div>
    ),
  };
  return (
    <div>
      <Slider {...sliderSettings} className="slidersec z-0">
        {[1, 2, 3, 4]?.map((item: any, i: any) => {
          return (
            <div key={i}>
              <div key={i} className="justify-center items-center">
                <div className="">
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
