"use client";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import redwine from "@/assets/icon/redwine.svg";
import frame from "@/assets/icon/Frame.svg";
import { productlist } from "@/constants/winelist";
import group from "@/assets/icon/Group.png";
import kranu from "@/assets/icon/kranu.png";
import zut from "@/assets/icon/zut.png";
import productimg from "@/assets/icon/productsimage.png";

// import Link from "next/link";
// import css from "styled-jsx/css";
import Appactivity from "@/components/charts/page";
import BreadCrumb from "@/common/BreadCrumb";
import ProductTopSection from "@/components/productDetail/ProductTopSection";
import PeaceOfMind from "@/components/productDetail/PeaceOfMind";
import ReleaseDateSection from "@/components/productDetail/ReleaseDateSection";
import ProductCard from "@/components/cards/ProductCard";
import { getProductDetail } from "@/services/ProductDetail";

import ArtCard from "@/components/productDetail/ArtCard";

import { Wine, releaseDetails, rating } from "@/propTypes/page";
import PTSSkelton from "@/components/productDetail/PTSSkelton";
import { getHomePage } from "@/services/Home";

// import ReleaseDateSection from '@/components/productDetail/ReleaseDateSection'
// client componet fetching

export default function Product() {
  const { id } = useParams();
  const [data, setData] = useState<any>({});
  const [products, setProducts] = useState([]);

  const [show, setShow] = useState([]);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const [isOpen, setIsOpen] = useState(false);
  const axiosCall = async () => {
    const data = await fetch("https://fakestoreapi.com/products");
    const reposne = data.json();
    setShow(await reposne);
    console.log("show", show);
  };
  useEffect(() => {
    axiosCall();
    if (id) {
      getProductDetail(id)
        .then((res) => {
          console.log("Res from Product Detail ", res?.data?.wine);
          setData(res?.data);
        })
        .catch((err) => {
          console.log("Err from Product Detail", err);
        });
    }
    getHomePage().then((res) => {
      console.log("Response From APi Home Api", res?.data);
      setProducts(res?.data?.products);
    });
  }, [id]);

  /**
   *Api -Data variable
   */
  const { wine } = data;
  const { releaseDetails } = data;
  const { ratings } = data;
  return (
    <div className=" overflow-hidden">
      <BreadCrumb />

      <div className="container mx-auto pt-3 md:pt-5 lg:pt-10 pb-7 px-4">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-primary">

          {wine?.name}
        </h1>
        <p className="text-xs md:text-sm lg:text-base">
          <p> {wine?.description} </p>
        </p>
      </div>

      {/* hero section start*/}
      {wine ? (
        <ProductTopSection
          wine={wine}
          release={releaseDetails}
          rating={ratings}
        />
      ) : (
        <PTSSkelton />
      )}
      {/* hero section end*/}
      {/* our peace of mind pledge section start */}
      <PeaceOfMind />
      {/* our peace of mind pledge section end */}
      {/* Release details section start */}
      {releaseDetails ? <ReleaseDateSection release={releaseDetails} /> : null}
      {/* Release details section end */}
      {/* All editions start */}
      <section className="container mx-auto py-24 px-4  lg:px-0">
        <div className="flex justify-between items-center gap-5">
          <div className="basis-1/6">
            <h2 className="text-2xl font-medium text-black tracking-tight">
              All editions
            </h2>
          </div>
          <div className="basis-4/5 ">
            <hr className=" border-black" />
          </div>
          <div className="flex text-spacegray">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-3.5 h-3.5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"
              />
            </svg>
          </div>
        </div>
        <div className="flex justify-between mx-auto pt-14">
          <div className=" pt-5">
            <ul
              className="flex flex-wrap text-sm font-medium text-center bg-tabsgray rounded-md p-1"
              id="default-tab"
              data-tabs-toggle="#default-tab-content"
              role="tablist"
            >
              <li
                className="text-center text-zinc-700 text-xs font-normal font-['Jost'] tracking-wide"
                role="presentation"
              >
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
              <li
                className="text-center text-zinc-700 text-xs font-normal font-['Jost'] tracking-wide"
                role="presentation"
              >
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
              <li
                className="text-center text-zinc-700 text-xs font-normal font-['Jost'] tracking-wide"
                role="presentation"
              >
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
                  . Clicking another tab will toggle the visibility of this one
                  for the next. The tab JavaScript swaps classes to control the
                  content visibility and styling.
                </p>
              </div>
            </div> */}
            <div className=" flex items-center py-3 gap-2">
              <input type="checkbox" className="w-5 h-5" />
              <div className="text-neutral-900 text-sm font-normal tracking-tight">
                First sale
              </div>
            </div>
          </div>
          <div className="">
            <p className="text-neutral-900 text-sm font-normal tracking-tight">
              Sort by
            </p>
            <div>
              <button
                onClick={toggleDropdown}
                type="button"
                className="tracking-tight text-sm w-48 py-2 px-4 text-left items-center flex justify-between text-spacegray shadow-none  border focus:ring-0 focus:outline-none focus:ring-gray-100 font-medium rounded-lg "
              >
                Recommended
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
          <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 mx-auto">
            {products &&
              products.map((item: any, i: any) => {
                return (
                  <div key={i}>
                    <ProductCard item={item} />
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
      <section className="bg-themegray shadow-lg px-4 lg:px-0 md:px-4">
        <div className="container justify-between items-center grid grid-col-2  md:grid-cols-2 lg:grid-cols-2 mx-auto py-4 lg:py-6 md:py-4">
          <div className=" lg:ps-24 pb-4 lg:pb-0 md:pb-4">
            <h3 className=" text-lg font-semibold">How to invest in wine</h3>
            <p className="font-normal text-sm">
              See our video to gather new informations
            </p>
            <p className=" font-normal text-sm">
              See our video to gather new informations See our video to gather
              new informations See our video to gather new informations See our
              video to gather new informations See our video to gather new
              informations See our video to gather new informations
            </p>
          </div>
          <div className="flex lg:justify-center">
            <iframe
              className=" rounded-md w-full md:w-full lg:w-80 h-56"
              src="https://www.youtube.com/embed/7gquYRxLMFI?si=S7E_iDRbr-b1dZef"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
        </div>
      </section>
      {/* How to invest in wine end */}
      {/* About Chateau La Mission Haut Brion Cru Classe | 2009 start */}
      <section className=" pt-12 px-4 lg:px-6 md:px-4">
        <div className=" container mx-auto">
          <h2 className=" capitalize text-4xl font-medium text-zinc-700 tracking-tight">
            <span className=" text-3xl font-normal text-neutral-400  tracking-tight">
              About
            </span>{" "}
            Chateau La Mission Haut Brion Cru Classe | 2009
          </h2>
        </div>

        <div className="container items-center grid grid-col-1  md:grid-cols-2 lg:grid-cols-2 mx-auto py-8">
          <div className="pb-4 lg:pb-0 md:pb-4">
            <div className="flex gap-3">
              <Image
                src={redwine}
                alt="Picture of the author"
                className="w-6"
              />
              <span className=" font-medium text-base text-black">
                Red, 14% Alc
              </span>
            </div>
            <p className=" lg:w-5/6 w-full md:w-11/12 font-normal text-base">
              An evocative nose, floral and exotic with black cherry, lychee and
              passion fruit aromas, delicate and nuanced. Svelte on the palate
              with sculpted and refined tannins – it’s confident, with sinew,
              muscle and plump fruit, but not showy. The 2019 Le Pin is a rich,
              expansive wine that soars from the glass with aromas of raspberry
              preserve, plums, wild berries, rose petals and licorice, framed by
              a deftly judged patina of creamy new oak. Full-bodied, supple and
              velvety, it’s broad and enveloping, with a fleshy core of fruit
              that’s framed by lively acids and powdery tannins, concluding with
              a long, aromatic finish. Le Pin’s vines are rooted in clay, which
              no doubt helps to explain how this wine can perform so well
              in warm, dry vintages.
            </p>
          </div>
          <div className="flex justify-end">
            <iframe
              className=" rounded-md w-full h-72"
              src="https://www.youtube.com/embed/7gquYRxLMFI?si=S7E_iDRbr-b1dZef"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
        </div>
        <div className="container mt-8  items-center grid  md:grid-cols-2 lg:grid-cols-3 mx-auto py-1 border-2 border-bordergray px-4 lg:px-6 md:px-4">
          {[1, 2, 3].map((d, i) => {
            return (
              <div key={i} className=" border-e-2  py-2 px-4">
                <h3 className=" text-base">
                  A. Critic name{" "}
                  <span className=" text-xs font-semibold text-black">
                    100/
                  </span>
                  <span className=" text-xxs text-black">100</span>
                </h3>
                <hr />
                <p className="text-center text-base">
                  This is the best wine for romantic dinner and long term
                  investment. Buy it as soon as you can, cause it wont last
                  long. Buy it as soon as you can.
                </p>
              </div>
            );
          })}
        </div>
      </section>
      {/* About Chateau La Mission Haut Brion Cru Classe | 2009 end */}
      {/* About artwork start */}
      <section className="pt-10 px-4 lg:px-0 md:px-4">
        <div className="container mx-auto">
          <h2 className=" capitalize text-4xl font-medium text-zinc-700 tracking-tight">
            <span className=" text-3xl font-normal text-neutral-400  tracking-tight">
              About
            </span>{" "}
            artwork
          </h2>
          <div className="gap-5 container grid mx-auto lg:grid-cols-2 md:grid-cols-2 max-w-screen-xl items-center py-6 px-0 lg:px-16 md:px-0">
            <div className="pb-4 lg:pb-0 md:pb-4">
              <p className="text-sm text-bordergray">Original Art</p>
              <p className="text-base font-normal">
                Stop Breathing, White_2Stripes_black_blue
              </p>
              <p className="text-xs text-bordergray">
                WP Nr.1 Screen print on paper 31x 41 cm 2022
              </p>
              <p className="text-xs font-medium">Artist Famous and Known</p>
              <p className="font-normal text-base">
                Reso’s deep connection with New York City has been a profound
                source of inspiration throughout his life. The vibrant
                subcultural graffiti movement in the 70s and 80s, which painted
                the cityscape with mesmerizing letterings on subway cars, left
                an indelible mark on his artistic journey. New York’s contrasts
                and diverse experiences shaped Reso’s creativity, leading him to
                explore typography and the power of letters to evoke emotions in
                viewers. His art, born in secrecy and yet attracting extreme
                attention, later evolved into a multidimensional experience,
                where letters overlapped, and functionality gave way to artistic
                expression. Through his international presence, Reso’s name and
                influence became synonymous with the graffiti movement, but he
                sought artistic liberation beyond its confines, embracing a new
                chapter of his creative exploration. Reso turned away from the
                legibility of characters and lettering and instead focused on
                the viewer’s emotional access to his work. His signs are encoded
                in a unique and personal way, making the individual layers no
                longer easy to separate, and the letters lose their classic
                distinguishing features when merged through the overlay of
                letter forms and colors. Reso consciously breaks with
                traditional reading habits and offers viewers a completely new
                image of typography. He no longer arranges the letters
                classically from left to right and one behind the other, but
                allows them to merge into constructs of form in order to provide
                viewers with new visual experiences.
              </p>
            </div>
            <div className="flex lg:justify-end ">
              <Image
                src={group}
                alt="Picture of the author"
                className=" w-full md:w-full lg:w-10/12"
              />
            </div>
          </div>
        </div>
      </section>
      {/* About artwork end */}
      {/* About Winery Château Le Pin start */}
      <section className="pt-10 px-4 lg:px-0 md:px-4">
        <div className="container mx-auto">
          <h2 className=" capitalize text-4xl font-medium text-zinc-700 tracking-tight">
            <span className=" text-3xl font-normal text-neutral-400  tracking-tight">
              About
            </span>{" "}
            Winery Château Le Pin
          </h2>
          <div className="container grid mx-auto lg:grid-cols-2 md:grid-cols-2 max-w-screen-xl items-center py-6 px-0 lg:px-16 md:px-4 pb-4 lg:pb-0 md:pb-4">
            <div>
              <p>
                <span className=" font-semibold">France,</span> Region,
                Appellation
              </p>
              <p className="font-normal text-sm">
                Château Le Pin is a mini chateau in the Pomerol appellation on
                the right bank of the Bordeaux region. It is considered a cult
                estate and is highly sought-after by wine collectors. Its tiny
                production, averaging just 600-700 cases a year, commands even
                higher prices than Château Petrus, making it one of the most
                expensive wines in Bordeaux! Madame Laubie and her family had
                owned this small vineyard since 1924, but sold it in 1979 to the
                Belgian Mr. Jacques Thienpont. At that time, the vineyard
                covered just one hectare. Today, the vineyard covers 2.7
                hectares. The name derives from the two pine trees that grow on
                the estate, near the winery.
              </p>
            </div>
            <div className="flex justify-end">
              <Image
                src={kranu}
                alt="Picture of the author"
                className="w-full h-72"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="pt-10">
        <div className="container mx-auto">
          <div className="container grid mx-auto lg:grid-cols-2 md:grid-cols-2 gap-5 max-w-screen-xl items-center py-6 px-4 lg:px-16 md:px-4">
            <div className="flex pb-4 lg:pb-0 md:pb-4">
              <Image
                src={zut}
                alt="Picture of the author"
                className="w-full h-72"
              />
            </div>
            <div>
              <p>France, Region, Appellation</p>
              <p className="font-normal text-sm">
                Château Le Pin is a mini chateau in the Pomerol appellation on
                the right bank of the Bordeaux region. It is considered a cult
                estate and is highly sought-after by wine collectors. Its tiny
                production, averaging just 600-700 cases a year, commands even
                higher prices than Château Petrus, making it one of the most
                expensive wines in Bordeaux! Madame Laubie and her family had
                owned this small vineyard since 1924, but sold it in 1979 to the
                Belgian Mr. Jacques Thienpont. At that time, the vineyard
                covered just one hectare. Today, the vineyard covers 2.7
                hectares. The name derives from the two pine trees that grow on
                the estate, near the winery.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* About Winery Château Le Pin end */}
      {/* You may also like start */}
      <section className=" py-14 px-4 lg:px-0 md:px-4">
        <div className="container mx-auto">
          <h2 className=" capitalize text-4xl font-medium text-zinc-700 tracking-tight">
            You may also like
          </h2>

          <div className="md:basis-3/5 lg:basis-3/5 basis-full z-0 pt-10">
            <div className="container grid mx-auto gap-6 lg:grid-cols-4 md:grid-cols-2 grid-cols-2">
              <div className="bg-themegray flex text-center items-center md:items-center lg:items-end lg:text-center h-[400px] pb-6 border-2 border-spacegray">
                <div className="w-full">
                  <div className="flex justify-center pb-8">
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
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h1 className=" text-3xl font-semibold">
                      Vinesia Art Collections
                    </h1>
                  </div>
                  <div className="flex justify-center pt-7">
                    <button
                      type="button"
                      className="text-base px-6 py-2.5 text-white bg-spacegray focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg  text-center"
                    >
                      Explore
                    </button>
                  </div>
                </div>
              </div>

              {[1, 2, 3].map((d, i) => {
                return (
                  <div key={i} className="max-w-md flex text-center pb-6">
                    <div>
                      <div className="flex justify-center pb-8">
                        <div>
                          <div className="flex gap-3 pb-3">
                            <Image
                              src={productimg}
                              alt="Picture of the author"
                              width={300}
                              height={20}
                            />
                          </div>
                          <div className=" text-left">
                            <h4 className=" text-base font-semibold">
                              Brunello di Montalcino {`"Piaggione"`} | 2019
                            </h4>
                            <p className=" text-xxs ">6 bottles collection</p>
                            <p className=" text-xxs font-semibold">OWNER</p>
                            <p className=" text-xxs bg-bgbutton w-12 text-center text-white mb-2">
                              Vinesia
                            </p>
                            <hr />
                            <button className="text-xxs uppercase ">
                              buy now
                            </button>
                            <h3 className=" font-semibold text-lg ">€3,600</h3>
                            <p className=" flex gap-3">
                              <span className=" text-xxs font-medium">
                                50 bottles
                              </span>
                              <span className=" text-xxs">50 remaining</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      {/* You may also like end */}
      {/* Be the first to know start */}
      <section className="px-4 lg:px-0 md:px-4">
        <div className=" flex lg:justify-end lg:items-center">
          <div className="lg:w-1/3 w-full bg-themegray p-3 lg:border-y-2 lg:border-l-2  border-spacegray  lg:rounded-s-md rounded">
            <div className="flex justify-between w-full lg:max-w-sm max-w-full mx-auto">
              <h2 className=" font-semibold text-2xl">Be the first to know </h2>
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
            <div className=" flex pt-3 ">
              <form className="flex gap-5 mx-auto">
                <div>
                  <div className="flex">
                    <input
                      className=" text-base w-[265px] bg-transparent outline-none border-2 px-4 py-2 rounded-lg focus:ring-0 focus:outline-none"
                      type="text"
                      placeholder="Add email to join newsletter"
                      aria-label="Full name"
                    />
                  </div>
                  <div className="md:flex md:items-start pt-3">
                    <label className="block text-gray-500 font-bold  space-x-3">
                      <input className=" leading-tight" type="checkbox" />
                      <span className=" text-sm">I agree to...</span>
                    </label>
                  </div>
                </div>
                <div>
                  <button
                    type="button"
                    className="text-white bg-spacegray focus:ring-0 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-base px-6 py-2.5 text-center"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* Be the first to know end */}

      <ArtCard />
    </div>
  );
}