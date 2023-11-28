"use client";
import React, { useRef, useState } from "react";
import ProductCard from "../cards/ProductCard";
import Slider from "react-slick";
import { NextIcon, PrevIcon } from "@/assets/icon/Icons";
import Link from "next/link";
const Heritage = ({ data }: { data: any }) => {
  const [currentslide, setCurrentSlide] = useState(0);

  const sliderSettings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerPadding: "100px",
    beforeChange: (current: any, next: any) => setCurrentSlide(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
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
      <div>
        {currentslide === 0 ? (
          <></>
        ) : (
          <div className="slick-custom-arrow slick-prev top-full ">
            <div className="border border-gray-600 rounded-lg w-8 h-8 text-center flex items-center">
              <div className="mx-auto">
                <PrevIcon />
              </div>
            </div>
          </div>
        )}
      </div>
    ),

    nextArrow: (
      <div>
        {currentslide === data?.length - 2 ? (
          <></>
        ) : (
          <div className="slick-custom-arrow slick-next top-full">
            <div className="border border-gray-600 rounded-lg w-8 h-8 text-center flex items-center">
              <div className="mx-auto">
                <NextIcon />
              </div>
            </div>
          </div>
        )}
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
          <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-4 md:gap-0">
            <div className="gap-6 md:py-16 py-5 heritage_carousel">
              <Slider {...sliderSettings}>
                {data?.map((item: any, index: any) => {
                  return (
                    <Link href={`/product/${index + 1}`} key={index}>
                      <div>
                        <ProductCard item={item} />
                      </div>
                    </Link>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heritage;
