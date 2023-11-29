import Image from "next/image";
import React from "react";
import bottle from "@/assets/icon/bottle.svg";
import case1 from "@/assets/icon/Case.svg";
import redwine from "@/assets/icon/redwine.svg";
import big from "@/assets/icon/big.png";
import big1 from "@/assets/icon/big1.png";
import logo1 from "@/assets/icon/logo1.svg";
import award from "@/assets/icon/award.svg";
import { Wine, releaseDetails } from "@/propTypes/page";
import ProductSecCarousel from "./secondslider";

const ProductTopSection = ({
  wine,
  release,
  rating,
}: {
  wine: Wine;
  release: releaseDetails;
  rating: any;
}) => {
  return (
    <section className="bg-themegray py-12 mt-5 px-4">
      {/* <div className="container flex grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-2"> */}
      <div className="container grid  mx-auto lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 px-4 md:px-0 gap:4 md:gap-4 lg:gap-0">
        {/* first section start */}
        <div>
          <div className="bg-white py-1">
            <div>
              <div className="flex py-3 border-b border-bordergray gap-2 items-center">
                <div className="w-2/6 text-end uppercase text-xs font-normal">
                  <span className=" opacity-60 text-black">
                    First release Date
                  </span>
                </div>
                <div className="flex space-x-2 border-s border-bordergray ps-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-4 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                    />
                  </svg>
                  <span className=" font-medium text-base">
                    {release?.releaseDate}
                  </span>
                </div>
              </div>
              <div className="flex py-3 gap-2 items-center">
                <div className="w-2/6 text-end text-xs">
                  <span className=" opacity-60 text-black font-normal">
                    OWNER
                  </span>
                </div>
                <div className="flex space-x-2 border-b border-bordergray">
                  <Image
                    src={logo1}
                    alt="Picture of the author"
                    width={30}
                    height={30}
                    // blurDataURL="data:..." automatically provided
                    // placeholder="blur" // Optional blur-up while loading
                  />
                  <a href="#">
                    <span className=" font-medium text-base text-spacegray">
                      @Vinesia
                    </span>
                  </a>
                </div>
              </div>
              <div className="flex py-3 gap-2 items-center">
                <div className="w-2/6 text-end uppercase text-xs font-normal">
                  <span className=" opacity-60 text-black ">Edition</span>
                </div>
                <div className="flex space-x-2 border-s border-bordergray ps-2">
                  <span className=" font-medium text-base text-spacegray">
                    #1 from 24
                  </span>
                </div>
              </div>
              <div className="flex py-3 gap-2 items-center">
                <div className="w-2/6 text-end uppercase text-xs font-normal">
                  <span className=" opacity-60 text-black ">Wine asset ID</span>
                </div>
                <div className="flex space-x-2 border-s border-bordergray ps-2">
                  <span className=" font-medium text-base text-spacegray">
                    1234_1234_1345678
                  </span>
                </div>
              </div>
              <div className="flex justify-center py-3 gap-2 items-center">
                <div className="flex justify-end uppercase text-xs font-normal">
                  <Image
                    src={award}
                    alt="Picture of the author"
                    className="w-6 h-6"
                  />
                </div>
                <div className="flex">
                  <span className=" font-medium text-xs border-b-2 border-bordergray text-black">
                    Product integrity certificates
                  </span>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-xs font-normal"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="bg-spacegray text-white py-1 px-10">
            <div>
              <div className="flex justify-between py-3 gap-3 items-center">
                <div className=" capitalize text-base text-white font-normal">
                  <span>ask price</span>
                </div>
                <div className="flex">
                  <span className=" uppercase font-normal text-xxs">
                    AVAILABLE to buy
                  </span>
                </div>
              </div>
              <div>
                <p className=" text-3xl font-bold">€66,666</p>

                <div className="flex gap-1 justify-start items-center">
                  <p className=" text-xs font-normal">Last sale: €55,666</p>
                  <p className="text-xs font-normal border-b-2">more</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-3 h-6 text-xs font-normal"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                    />
                  </svg>
                </div>
              </div>
              <div className="py-5">
                <button className="w-full p-2 mb-2 px-3 text-base font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                  Accept ask
                </button>
                <button
                  type="button"
                  className="w-full p-2 mb-3 px-3 text-base font-medium focus:outline-none  rounded-lg border border-gray-200 text-white focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  Place a bid
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* first section end */}
        {/* slider start */}
        <ProductSecCarousel />
        {/* slider end */}
        {/* second section start */}
        <div className=" md:col-span-2 lg:col-span-1">
          <div className="flex md-w-full gap-5 ps-5 ps-md-3">
            <div className="border-b-4 rounded border-bordergray">
              <button className="ml-1 text-2xl font-medium text-spacegray">
                Wine
              </button>
              <p className=" text-xxs">LWIN:{`${wine?.lwinNumber}`}</p>
            </div>
            <div>
              <button className="ml-1 text-2xl font-medium text-spacegray">
                Art
              </button>
              <p className=" text-xxs">Artist: Lola Designer Funny</p>
            </div>
          </div>
          <div className="bg-white py-1">
            <div>
              <div className="flex pb-6 gap-2">
                <div className="w-2/6 text-end text-base">
                  <span className=" text-spacegray ">This wine is sourced</span>
                </div>
                <div className="flex space-x-2 border-b border-bordergray">
                  <Image
                    src={bottle}
                    alt="Picture of the author"
                    className="w-5 h-5"
                  />
                  <a href="#">
                    <span className="font-bold text-base text-black">
                      directly from the winery
                    </span>
                  </a>
                </div>
              </div>
              <div className="flex pb-6 gap-2 items-center">
                <div className="w-2/6 text-end uppercase text-xs font">
                  <span className=" opacity-60 text-black ">
                    Case & bottle size
                  </span>
                </div>
                <div className=" border-s border-bordergray gap-2">
                  <div className="flex space-x-2 ps-2">
                    <Image
                      src={case1}
                      alt="Picture of the author"
                      className="w-5 h-5"
                    />
                    <span className=" font-medium text-base text-black">
                      {`${wine?.type}  ${wine?.size}`}
                    </span>
                  </div>
                  <div>
                    <span className=" ps-10 font-normal text-base text-black">
                      Double Magnum (1,5l)
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex pb-6 gap-2 ">
                <div className="w-2/6 text-end uppercase text-xs">
                  <span className=" opacity-60 text-black ">type</span>
                </div>
                <div className="flex space-x-2 border-s border-bordergray ps-2">
                  <Image
                    src={redwine}
                    alt="Picture of the author"
                    className="w-5 h-5"
                  />
                  <span className=" font-medium text-base text-black">
                    {/* Red, 14% Alc */} {wine?.type}
                  </span>
                </div>
              </div>
              <div className="flex pb-6 gap-2">
                <div className=" flex justify-end items-center w-2/6 text-end uppercase text-xs">
                  <span className=" opacity-60 text-black ">Origin</span>
                </div>
                <div className="flex space-x-2 border-s border-bordergray ps-2">
                  <div>
                    <div>
                      <span className="text-base text-spacegray">Winery: </span>
                      <a
                        href="#"
                        className=" text-sm text-black border-b border-black font-medium"
                      >
                        {wine?.winery?.region?.country}
                      </a>
                    </div>
                    <div>
                      <span className="font-bold text-base text-black">
                        {/* France, Region, Appellation */}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-2">
                <div className="grid grid-cols-4 gap-4">
                  {rating?.map((item: any, i: any) => {
                    const {
                      lwinNumber,
                      critic,
                      vintage,
                      rating,
                      max,
                      description,
                    } = item;
                    return (
                      <div
                        key={i}
                        className="bg-themegray col-span-1 py-5 rounded-sm"
                      >
                        <p className="opacity-60 text-black text-xs text-center">
                          {critic}
                        </p>
                        <div className="flex items-end justify-center">
                          <p className=" text-lg text-black">{rating}/</p>
                          <span className=" text-xs text-black">{max}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <hr className=" border-t-2" />
              <div className="flex justify-end items-center gap-6 py-2 px-5 text-bgsecondary">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
                    />
                  </svg>
                  <p className=" text-sm">Share</p>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <p className=" text-sm">999</p>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
                    />
                  </svg>
                  <p className=" text-sm">999</p>
                </div>
                <button
                  type="button"
                  className="rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center text-bgsecondary bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium dark:focus:ring-gray-600 dark:bg-gray-800 mr-2"
                >
                  See More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5 ms-2 text-bgsecondary"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* second section end */}
      </div>
    </section>
  );
};

export default ProductTopSection;
