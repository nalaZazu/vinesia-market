import Image from "next/image";
import React from "react";
import winbottle from "../../assets/image/Frame1.png";
import backbg from "../../assets/image/bg.png";
import alert from "../../assets/image/alert-circle.png";
import ProductCard from "../cards/ProductCard";
import Slider from "react-slick";
import { NextIcon, PrevIcon } from "@/assets/icon/Icons";
const Heritage = ({ data }: { data: any }) => {
  const sliderSettings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    centerPadding: "100px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
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
    <div className="">
      <h1 className="text-primary font-semibold  tracking-tight text-xxl">
        Invest in heritage
      </h1>
      <div className="mx-auto">
        <div className="mx-auto max-w-2xl  lg:max-w-none  ">
          {/* <div className="mt-6  grid lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
        
          </div>   */}

          <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-4 md:gap-0">
            <div className="gap-6 md:py-16 py-5">
              <Slider {...sliderSettings}>
                {data?.map((item: any, i: any) => {
                  return (
                    <div key={i}>
                      <ProductCard item={item} />
                    </div>
                  );
                })}
              </Slider>
            </div>
            <div className="ml-4  lg:mt-0 md:py-16 py-5">
              <iframe
                width="480"
                height="520"
                className="w-full  h-full"
                src="https://www.youtube.com/embed/iu2C7AeIqac?si=m_dZQecmVZYzo6MU "
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
              {/* <Image
                src={backbg}
                alt="Picture of the author"
                className="mb-3 md:mb-0 "
              /> */}
            </div>
          </div>
        </div>
      </div>
      {/* <HeritageTab/> */}
    </div>
  );
};

export default Heritage;
