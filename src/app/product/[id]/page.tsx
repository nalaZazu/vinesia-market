"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import bottle from "../../../assets/icon/bottle.svg";
import case1 from "../../../assets/icon/Case.svg";
import redwine from "../../../assets/icon/redwine.svg";
import big from "../../../assets/icon/big.png";
import big1 from "../../../assets/icon/big1.png";
import Vector from "../../../assets/icon/Vector.svg";
import ownership from "../../../assets/icon/ownership.svg";
import frame from "../../../assets/icon/Frame.svg";
import playvideo from "../../../assets/icon/Playvideo.svg";
import logo1 from "../../../assets/icon/logo1.svg";
import infologo from "../../../assets/icon/info.svg";
import pricehistory from "../../../assets/icon/pricehistory.svg";
import { productlist } from "@/constants/winelist";

import Link from "next/link";
// import orange from "../style.module.css"
import css from "styled-jsx/css";
// client componet fetching

export default function Product() {
  const [show, setShow] = useState([]);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const [isOpen, setIsOpen] = useState(false);
  const axiosCall = async () => {
    const data = await fetch("https://fakestoreapi.com/products");
    const reposne = data.json();
    setShow(await reposne);
    console.log(show);
  };
  useEffect(() => {
    axiosCall();
  }, []);

  // this is className base strcture of style base module
  // const {brown} = orange
  return (
    <div>
      <nav className="flex pt-5" aria-label="Breadcrumb">
        <ol className="container mx-auto flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <a
              href="#"
              className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
            >
              Vinesia Marketplace
            </a>
          </li>
          <li>
            <div className="flex items-center">
              /
              <a
                href="#"
                className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white"
              >
                Home Page
              </a>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              /
              <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
                Collections
              </span>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              /
              <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
                Chateau La Mission and Art
              </span>
            </div>
          </li>
        </ol>
      </nav>
      <div className=" container mx-auto py-5 py-md-2">
        <h1 className=" text-3xl font-bold tracking-tight text-spacegray">
          Chateau La Mission Haut Brion Cru Classe | 2009
        </h1>
        <p>With Art of Lola Designer Fun</p>
      </div>
      {/* hero section start*/}
      <section className="bg-themegray py-12 mt-5">
        {/* <div className="container flex grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-2"> */}
        <div className="container grid max-w-screen-xl  mx-auto lg:grid-cols-3">
          {/* first section start */}
          <div>
            <div className="bg-white py-1">
              <div>
                <div className="flex py-3 border-b gap-3 items-center">
                  <div className="w-2/6 text-end uppercase text-xs">
                    <span className=" text-spacegray ">First release DaTE</span>
                  </div>
                  <div className="flex space-x-2 border-s ps-3">
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
                    <span className="font-bold text-base text-spacegray">
                      Sep 29, 2023
                    </span>
                  </div>
                </div>
                <div className="flex py-3 gap-3 items-center">
                  <div className="w-2/6 text-end text-xs">
                    <span className=" text-spacegray ">OWNER</span>
                  </div>
                  <div className="flex space-x-2 border-b">
                    <Image
                      src={logo1}
                      alt="Picture of the author"
                      width={20}
                      height={20}
                      // blurDataURL="data:..." automatically provided
                      // placeholder="blur" // Optional blur-up while loading
                    />
                    <a href="#">
                      <span className="font-bold text-base text-spacegray">
                        @Vinesia
                      </span>
                    </a>
                  </div>
                </div>
                <div className="flex py-3 gap-3 items-center">
                  <div className="w-2/6 text-end uppercase text-xs">
                    <span className=" text-spacegray ">Edition</span>
                  </div>
                  <div className="flex space-x-2 border-s ps-3">
                    <span className="font-bold text-base text-spacegray">
                      #1 from 24
                    </span>
                  </div>
                </div>
                <div className="flex py-3 gap-3 items-center">
                  <div className="w-2/6 text-end uppercase text-xs">
                    <span className=" text-spacegray ">Wine asset ID</span>
                  </div>
                  <div className="flex space-x-2 border-s ps-3">
                    <span className="font-bold text-base text-spacegray">
                      1234_1234_1345678
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-spacegray text-white py-1 px-10">
              <div>
                <div className="flex justify-between py-3 gap-3 items-center">
                  <div className=" capitalize text-xs text-white">
                    <span>ask price</span>
                  </div>
                  <div className="flex">
                    <span className=" uppercase font-bold text-xs">
                      AVAILABLE to buy
                    </span>
                  </div>
                </div>
                <div>
                  <p className=" text-2xl font-medium">€66,666</p>
                  <p className=" text-xs">Last sale: €55,666 more</p>
                </div>
                <div className="py-6">
                  <button className="w-full h-12 mb-3 px-6 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                    Accept ask
                  </button>
                  <button
                    type="button"
                    className="w-full h-12 mb-3 px-6 text-sm font-medium focus:outline-none  rounded-lg border border-gray-200 text-white focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  >
                    Place a bid
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* first section end */}

          {/* slider start */}
          <div>
            <div className="flex justify-center">
              <span>
                <Image src={big1} alt="Picture of the author" />
              </span>
            </div>
            <div className="flex justify-center">
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
            </div>
          </div>
          {/* slider end */}
          {/* second section start */}
          <div>
            <div className="flex gap-5 ps-5 ps-md-3">
              <div className="border-b-4 rounded border-spacegray">
                <button className="ml-1 text-2xl font-medium text-spacegray">
                  Wine
                </button>
                <p className=" text-xs">LWIN:123456</p>
              </div>
              <div>
                <button className="ml-1 text-2xl font-medium text-spacegray">
                  Art
                </button>
                <p className=" text-xs">Artist: Lola Designer Funny</p>
              </div>
            </div>
            <div className="bg-white py-1">
              <div>
                <div className="flex py-3 gap-3">
                  <div className="w-2/6 text-end text-base">
                    <span className=" text-spacegray ">
                      This wine is sourced
                    </span>
                  </div>
                  <div className="flex space-x-2 border-b">
                    <Image
                      src={bottle}
                      alt="Picture of the author"
                      width={20}
                      height={20}
                      // blurDataURL="data:..." automatically provided
                      // placeholder="blur" // Optional blur-up while loading
                    />
                    <a href="#">
                      <span className="font-bold text-base text-spacegray">
                        directly from the winery
                      </span>
                    </a>
                  </div>
                </div>
                <div className="flex py-3 gap-3 ">
                  <div className="w-2/6 text-end uppercase text-xs">
                    <span className=" text-spacegray ">Case & bottle size</span>
                  </div>
                  <div>
                    <div className="flex space-x-2 border-s ps-3">
                      <Image
                        src={case1}
                        alt="Picture of the author"
                        width={20}
                        height={20}
                        // blurDataURL="data:..." automatically provided
                        // placeholder="blur" // Optional blur-up while loading
                      />
                      <span className="font-bold text-base text-spacegray">
                        99 bottle case,
                      </span>
                    </div>
                    <div>
                      <span className=" ps-10 font-bold text-base text-spacegray">
                        Double Magnum (1,5l)
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex py-3 gap-3 ">
                  <div className="w-2/6 text-end uppercase text-xs">
                    <span className=" text-spacegray ">type</span>
                  </div>
                  <div className="flex space-x-2 border-s ps-3">
                    <Image
                      src={redwine}
                      alt="Picture of the author"
                      width={20}
                      height={20}
                      // blurDataURL="data:..." automatically provided
                      // placeholder="blur" // Optional blur-up while loading
                    />
                    <span className="font-bold text-base text-spacegray">
                      Red, 14% Alc
                    </span>
                  </div>
                </div>
                <div className="flex py-3 gap-3">
                  <div className=" flex justify-end items-center w-2/6 text-end uppercase text-xs">
                    <span className=" text-spacegray ">Origin</span>
                  </div>
                  <div className="flex space-x-2 border-s ps-3">
                    <div>
                      <div>
                        <span className="text-base text-spacegray">
                          Winery:{" "}
                        </span>
                        <a href="#" className="border-b border-black font-bold">
                          Château Le Pin
                        </a>
                      </div>
                      <div>
                        <span className="font-bold text-base text-spacegray">
                          France, Region, Appellation
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-2">
                  <div className="grid grid-cols-4 gap-4">
                    <div className="bg-themegray col-span-1 py-6">
                      <p className="text-spacegray text-xs text-center">
                        A. Critic name
                      </p>
                      <div className="flex items-end justify-center">
                        <p className=" text-xl">100/</p>
                        <span className=" text-xs">100</span>
                      </div>
                    </div>
                    <div className="bg-themegray col-span-1 py-6">
                      <p className="text-spacegray text-xs text-center">
                        B. Critic name
                      </p>
                      <div className="flex items-end justify-center">
                        <p className=" text-xl">98/</p>
                        <span className=" text-xs">100</span>
                      </div>
                    </div>
                    <div className="bg-themegray col-span-1 py-6">
                      <p className="text-spacegray text-xs text-center">
                        J. Critic name
                      </p>
                      <div className="flex items-end justify-center">
                        <p className=" text-xl">19/</p>
                        <span className=" text-xs">20</span>
                      </div>
                    </div>
                    <div className="bg-themegray col-span-1 py-6">
                      <p className="text-spacegray text-xs text-center">
                        G. Critic name
                      </p>
                      <div className="flex items-end justify-center">
                        <p className=" text-xl">99/</p>
                        <span className=" text-xs">100</span>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className=" border-t-2" />
                <div className="flex justify-end items-center gap-12 py-2 px-5 text-spacegray">
                  <div>
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
                        d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
                      />
                    </svg>
                    <p>Share</p>
                  </div>
                  <div>
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
                        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <p>999</p>
                  </div>
                  <div>
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
                        d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
                      />
                    </svg>
                    <p>999</p>
                  </div>
                  <button
                    type="button"
                    className="text-spacegray bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 mr-2"
                  >
                    See More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-4 h-4 ms-2 text-spacegray"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
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
      {/* hero section end*/}
      {/* our peace of mind pledge section start */}
      <section className=" py-14">
        <div className="container mx-auto">
          <h2 className=" capitalize text-3xl font-semibold">
            <span className=" text-typegray text-3xl font-normal">our</span>{" "}
            peace of mind pledge
          </h2>
          <p className=" text-base font-medium w-11/12 pt-4">
            “Investor Peace of Mind” is a core principle at Vinesia. It
            encapsulates our commitment to providing a secure, transparent, and
            hassle-free investment experience. Here’s what it entails:
          </p>

          <div className="md:basis-3/5 basis-full z-0 pt-10">
            <div className="container grid mx-auto gap-6 lg:grid-cols-4">
              <div className="max-w-md bg-themegray flex items-center justify-between p-4">
                <div>
                  <p className="text-base font-bold text-gray-900 truncate dark:text-white">
                    Proof
                  </p>
                  <p className="text-base font-bold text-gray-900 truncate dark:text-white pb-4">
                    of authenticity
                  </p>
                  <hr className=" border-t-2" />
                </div>
                <div>
                  <Image src={Vector} alt="Picture of the author" width={70} />
                </div>
              </div>

              <div className="max-w-md bg-themegray flex items-center justify-between p-4">
                <div className="flex-1">
                  <p className="text-base font-bold text-gray-900 truncate dark:text-white">
                    Proof
                  </p>
                  <p className="text-base font-bold text-gray-900 truncate dark:text-white pb-4">
                    of ownership
                  </p>
                  <hr className=" border-t-2" />
                </div>
                <div>
                  <Image
                    src={ownership}
                    alt="Picture of the author"
                    width={70}
                  />
                </div>
              </div>

              <div className="max-w-md bg-themegray flex items-center justify-between p-4">
                <div className="flex-1">
                  <p className="text-base font-bold text-gray-900 truncate dark:text-white">
                    Proof of
                  </p>
                  <p className="text-base font-bold text-gray-900 truncate dark:text-white pb-4">
                    storage conditions
                  </p>
                  <hr className=" border-t-2" />
                </div>
                <div>
                  <Image
                    src={frame}
                    alt="Picture of the author"
                    width={70}
                    className=""
                  />
                </div>
              </div>

              <div className="max-w-md bg-themegray flex items-center justify-between p-4">
                <div className="flex-1">
                  <p className="text-base font-bold text-gray-900 truncate dark:text-white pb-4">
                    See our video
                  </p>
                  <hr className=" border-t-2" />
                </div>
                <div>
                  <Image
                    src={playvideo}
                    alt="Picture of the author"
                    width={120}
                    className=""
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-center pt-7">
              <button
                type="button"
                className="text-white bg-spacegray focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-6 py-2.5 text-center"
              >
                Invest now
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* our peace of mind pledge section end */}
      {/* Release details section start */}
      <section className="container mx-auto">
        <div className="flex justify-between ">
          <div>
            <h2 className="text-3xl font-medium">Release details</h2>
          </div>
          <div className="flex text-spacegray">
            <p className="flex gap-4 items-center">
              <span>On the market are </span>
              <span className=" text-lg font-medium">24</span>
              <span>editions of this product</span>
              <span>
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
                    d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                  />
                </svg>
              </span>
            </p>
          </div>
        </div>

        <div className=" bg-themegray p-6 mt-7">
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="text-spacegray">
              <h2 className=" text-xl font-medium">Pricing details</h2>
              <div>
                {/* first box */}
                <div className=" grid gap-0 lg:grid-cols-2 pt-6">
                  <div className=" border-2 p-4 py-7 border-typegray">
                    <div className="flex gap-3">
                      <h2 className=" text-sm">Release Price </h2>
                      <Image src={infologo} alt="Picture of the author" />
                    </div>
                    <p className=" text-lg font-medium">€38,888</p>
                  </div>
                  <div className=" border-2 p-4 py-7 border-typegray">
                    <div className="flex gap-3">
                      <h2 className=" text-sm">Average MARKET PRICE</h2>
                      <Image src={infologo} alt="Picture of the author" />
                    </div>
                    <p className=" text-lg font-medium">€48,888</p>
                  </div>
                </div>
                {/* second box */}
                <div className=" grid gap-0 lg:grid-cols-2">
                  <div className=" border-2 p-4 border-typegray">
                    <div>
                      <h2 className=" text-sm">Highest Price</h2>
                      <h2 className=" text-sm">ever transacted for product</h2>
                    </div>
                    <p className=" text-lg font-medium">€68,888</p>
                  </div>
                  <div className=" border-2 p-4 bg-typegray border-typegray text-white">
                    <div>
                      <h2 className=" text-sm">Price Change</h2>
                      <h2 className=" text-sm">since first release</h2>
                    </div>
                    <p className=" text-lg font-medium">+ 66.6%↑</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Image src={pricehistory} alt="Picture of the author" />
            </div>
          </div>
        </div>
      </section>
      {/* Release details section end */}
      {/* All editions start */}
      <section className="container mx-auto py-24">
        <div className="flex justify-between items-center gap-5">
          <div className="basis-1/6">
            <h2 className="text-3xl font-medium">All editions</h2>
          </div>
          <div className="basis-4/5">
            <hr className=" border-spacegray" />
          </div>
          <div className="flex text-spacegray">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-5 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"
              />
            </svg>
          </div>
        </div>
        <div className="flex justify-between items-center mx-auto pt-14 w-[1170px]">
          <div className="">
            <ul
              className="flex flex-wrap text-sm font-medium text-center bg-tabsgray rounded-md p-1"
              id="default-tab"
              data-tabs-toggle="#default-tab-content"
              role="tablist"
            >
              <li className="mr-2" role="presentation">
                <button
                  className="px-10 py-2 rounded-md bg-white shadow-md"
                  id="profile-tab"
                  data-tabs-target="#profile"
                  type="button"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  All
                </button>
              </li>
              <li className="mr-2" role="presentation">
                <button
                  className="px-9 py-2 rounded-md "
                  id="profile-tab"
                  data-tabs-target="#profile"
                  type="button"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  Ask
                </button>
              </li>
              <li className="mr-2" role="presentation">
                <button
                  className="px-9 py-2 rounded-md"
                  id="profile-tab"
                  data-tabs-target="#profile"
                  type="button"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  Bid
                </button>
              </li>
            </ul>
            {/* <div id="default-tab-content">
          Name
          <div
            className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
            id="profile"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            <p className="text-sm text-gray-500 dark:text-gray-400">
              This is some placeholder content the{" "}
              <strong className="font-medium text-gray-800 dark:text-white">
                Profile tab's associated content
              </strong>
              . Clicking another tab will toggle the visibility of this one for
              the next. The tab JavaScript swaps classes to control the content
              visibility and styling.
            </p>
          </div>
        </div> */}
          </div>
          <div className=" -mt-5">
            <p>Sort by</p>
            <div className="relative inline-block text-left">
              <button
                onClick={toggleDropdown}
                type="button"
                className=" gap-3 flex justify-between text-spacegray shadow-none  border focus:ring-0 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-4 py-2.5 w-full text-left items-center"
              >
                See More
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
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>

              {isOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  {/* Dropdown content here */}
                  <ul className="py-2">
                    <li className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                      Item 1
                    </li>
                    <li className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                      Item 2
                    </li>
                    <li className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                      Item 3
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
        <div>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 w-[1170px] mx-auto">
            {productlist &&
              productlist.map((item) => {
                const {
                  bottle1,
                  id,
                  imageAlt,
                  imageSrc,
                  price,
                  name,
                  remain,
                  subtitle,
                } = item;
                return (
                  <div key={id}>
                    <Image
                      src={imageSrc}
                      alt={imageAlt}
                      width={250}
                      height={250}
                      className="mb-3"
                    />
                    <h4 className="font-semibold  text-base	leading-6">
                      {name}
                    </h4>
                    <p className="flex text-xs   items-center font-medium">
                      {subtitle}
                      <span className="ml-2">
                        <Image
                          src={frame}
                          alt="Picture of the author"
                          width={15}
                          height={15}
                          quality={75}
                        />
                      </span>
                    </p>
                    <span>
                      <p className="font-medium text-xs leading-3">Owner</p>
                      <span className=" mt-2 inline-flex items-center rounded-md bg-[#842029] px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-[#842029] ">
                        Vinesia
                      </span>
                    </span>

                    <hr className="my-4 text-[#C6C7C8] font-bold" />
                    <span>
                      <h3 className="font-medium text-xs  leading-3">
                        BUY NOW
                      </h3>
                      <h3 className="font-medium text-lg leading-7">{price}</h3>
                    </span>
                    <span className="flex ">
                      <p>{bottle1}</p>
                      <p className="text-[#959596] ml-3">{remain} </p>
                    </span>
                  </div>
                );
              })}
          </div>
          <div className="flex justify-center mt-8">
            <button className="py-2.5 px-4 bg-bgsecondary text-white rounded-lg text-center">
              Explore
            </button>
          </div>
        </div>
      </section>
      {/* All editions end */}
      {/* How to invest in wine start */}
      <section className=" bg-themegray shadow-lg">
        <div className="container max-w-screen-lg justify-between items-center flex mx-auto py-6">
          <div>
            <h3 className=" text-lg font-semibold">How to invest in wine</h3>
            <p className=" w-3/4 font-normal text-sm">
              See our video to gather new informations
            </p>
            <p className=" w-3/4 font-normal text-sm">
              See our video to gather new informations See our video to gather
              new informations See our video to gather new informations See our
              video to gather new informations See our video to gather new
              informations See our video to gather new informations
            </p>
          </div>
          <div>
            <iframe
              width="400"
              height="230"
              className=" rounded-md"
              src="https://www.youtube.com/embed/7gquYRxLMFI?si=S7E_iDRbr-b1dZef"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
        </div>
      </section>
      {/* How to invest in wine end */}
    </div>
  );
}
