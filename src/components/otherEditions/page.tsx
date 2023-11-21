import React, { useState } from "react"; 
import Slider from "react-slick"; 
import { NextIcon, PrevIcon } from "@/assets/icon/Icons";
import ProductCard from "../cards/ProductCard";
import Link from "next/link";
export default function OtherEditions({ data }: { data: any }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderSettings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    centerPadding: "100px",
    beforeChange: (current: any, next: any) => setCurrentSlide(next),
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
    prevArrow:
      currentSlide === 0 ? (
        <></>
      ) : (
        <div className="slick-custom-arrow slick-prev top-full ">
          <div className="border border-gray-600 rounded-lg w-8 h-8 text-center flex items-center">
            
            <div className="mx-auto">
              <PrevIcon />
            </div>
          </div>
        </div>
      ),
    nextArrow:
      currentSlide === data.length - 2 ? (
        <></>
      ) : (
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
    <>
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
        </div>
      </div>
    </>
  );
}
