import Image from "next/image";
import React, { useState } from "react";
import bottle from "@/assets/icon/bottle.svg";
import case1 from "@/assets/icon/Case.svg";
import redwine from "@/assets/icon/redwine.svg";
import big from "@/assets/icon/big.png";
import big1 from "@/assets/icon/big1.png";
import Vector from "@/assets/icon/Vector.svg";
import ownership from "@/assets/icon/ownership.svg";
import frame from "@/assets/icon/Frame.svg";
import playvideo from "@/assets/icon/Playvideo.svg";
import logo1 from "@/assets/icon/logo1.svg";
import award from "@/assets/icon/award.svg";
import infologo from "@/assets/icon/info.svg";
import { Wine, releaseDetails, rating } from "@/propTypes/page";

const OverviweTopSection = ({
  wine,
  release,
  rating,
}: {
  wine: Wine;
  release: releaseDetails;
  rating: any;
}) => {
  console.log("Wine ", wine);
  console.log("rating ", rating);
  return (
    <section className="bg-themegray mt-5 px-4">
      <div className="container grid md:max-w-6xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-2">
        {/* second section start */}
        <div className=" md:col-span-2 lg:col-span-1">
          <div className="flex md-w-full gap-5 ps-5 ps-md-3">
            <div className="border-b-4 rounded border-gray-500">
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
              <div className="flex py-2 border-b border-black border-opacity-10 gap-2 items-center">
                <div className="w-2/6 text-end uppercase text-xs font-normal">
                  <span className=" opacity-60 text-black">
                    First release Date
                  </span>
                </div>
                <div className="flex space-x-2 border-s border-black border-opacity-30 ps-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-4 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                    />
                  </svg>
                  <span className=" font-medium text-base">
                    {release?.releaseDate}
                  </span>
                </div>
              </div>
              <div className="flex pb-6 gap-2 pt-6">
                <div className="w-2/6 text-end text-base">
                  <span className=" text-spacegray ">This wine is sourced</span>
                </div>
                <div className="flex space-x-2 border-b border-black border-opacity-30">
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
                <div className=" border-s border-black border-opacity-30 gap-2">
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
                <div className="flex space-x-2 border-s border-black border-opacity-30 ps-2">
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
                <div className="flex space-x-2 border-s border-black border-opacity-30 ps-2">
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
                    console.log("item", item);
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
              <div className="flex  px-11 py-2 bg-white justify-between items-start gap-6 text-bgsecondary shadow">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-5 h-5 text-iconcolor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                  <p className=" text-zinc-700 text-sm font-medium tracking-tight">
                    Favorite
                  </p>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-5 h-5 text-iconcolor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
                    />
                  </svg>
                  <p className="text-zinc-700 text-sm font-medium tracking-tight">
                    Share
                  </p>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-5 h-5 text-iconcolor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <p className=" text-zinc-700 text-sm font-medium tracking-tight">
                    999
                  </p>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-5 h-5 text-iconcolor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
                    />
                  </svg>
                  <p className=" text-zinc-700 text-sm font-medium tracking-tight">
                    999
                  </p>
                </div>
                <button
                  type="button"
                  className="text-gray-500 text-base font-medium tracking-tight rounded-lg px-4 py-2.5 text-center inline-flex items-center bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100  dark:focus:ring-gray-600 dark:bg-gray-800 mr-2"
                >
                  See More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-5 h-5 ms-2 text-iconcolor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex justify-between items-center pt-4 py-1 px-5">
                <div className=" uppercase items-center flex gap-3 ps-3">
                  <p className="opacity-60 text-right text-black text-xs font-normal uppercase tracking-tight">
                    Vinesia price
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 text-iconcolor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                    />
                  </svg>
                  <p className=" text-xl font-semibold text-spacegray ">
                    €68,888
                  </p>
                </div>
                <div>
                  <button
                    type="button"
                    className="text-white bg-spacegray focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-base px-10 py-2.5 text-center inline-flex items-center mr-2 mb-2"
                  >
                    Invest now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* second section end */}
        {/* slider start */}
        <div>
          <div className=" justify-center items-center">
            <div className="relative">
              <Image src={big1} alt="Picture of the author" className="" />
              <span className="flex justify-center absolute -bottom-10 left-10">
                <div className="flex bg-white items-center gap-5 py-2 px-5 text-spacegray shadow-md rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.75 19.5L8.25 12l7.5-7.5"
                    />
                  </svg>

                  <div>
                    <Image
                      src={big1}
                      alt="Picture of the author"
                      width={55}
                      className=" flex justify-center rounded-sm shadow-sm border border-spacegray"
                    />
                  </div>
                  <div>
                    <Image
                      src={big}
                      alt="Picture of the author"
                      width={55}
                      className=" flex justify-center rounded-sm shadow-sm border border-spacegray"
                    />
                  </div>
                  <div>
                    <Image
                      src={big1}
                      alt="Picture of the author"
                      width={55}
                      className=" flex justify-center rounded-sm shadow-sm border border-spacegray"
                    />
                  </div>
                  <div>
                    <Image
                      src={big}
                      alt="Picture of the author"
                      width={55}
                      className=" flex justify-center rounded-sm shadow-sm border border-spacegray"
                    />
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </div>
              </span>{" "}
            </div>{" "}
          </div>
        </div>
        {/* slider end */}
      </div>
    </section>
  );
};

export default OverviweTopSection;
