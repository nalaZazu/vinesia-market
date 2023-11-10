"use client";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import redwine from "@/assets/icon/redwine.svg";

// import Link from "next/link";
// import css from "styled-jsx/css";

import BreadCrumb from "@/common/BreadCrumb";
import ProductTopSection from "@/components/productDetail/ProductTopSection";
import PeaceOfMind from "@/components/productDetail/PeaceOfMind";
import ReleaseDateSection from "@/components/productDetail/ReleaseDateSection";

import { getProductDetail } from "@/services/ProductDetail";

import ArtCard from "@/components/productDetail/ArtCard-ex";

import PTSSkelton from "@/components/productDetail/PTSSkelton";
import { getHomePage } from "@/services/Home";

import AssetDetails from "@/components/productDetail/AssetDetails";
import Collection from "@/components/productDetail/Collection";
import WineryVideo from "@/components/productDetail/WineryVideo";
import AboutWineries from "@/components/productDetail/AboutWineries";

import AllEditions from "@/components/productDetail/AllEditions";
import HowToInvest from "@/components/productDetail/HowToInvest";
import CriticsDetailCards from "@/components/productDetail/CriticsDetailCards";
import AboutArtWork from "@/components/productDetail/AboutArtWork";
import AboutWinerySection from "@/components/productDetail/AboutWinerySection";
import YouMayAlso from "@/components/productDetail/YouMayAlso";
// import ReleaseDateSection from '@/components/productDetail/ReleaseDateSection'
// client componet fetching

export default function Product() {
  const { id } = useParams();
  const [data, setData] = useState<any>({});
  const [products, setProducts] = useState([]);

  console.log("Params", id);

  const [show, setShow] = useState([]);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const [isOpen, setIsOpen] = useState(false);
  // const axiosCall = async () => {
  //   const data = await fetch("https://fakestoreapi.com/products");
  //   const reposne = data.json();
  //   setShow(await reposne);
  //   console.log("show", show);
  // };
  useEffect(() => {
    // axiosCall();
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

  // this is className base strcture of style base module
  // const {brown} = orange
  const wine = data?.wine;
  const releaseDetails = data?.releaseDetails;
  const ratings = data?.ratings;
  return (
    <div className=" overflow-hidden">
      <BreadCrumb />
      <div className="container mx-auto pt-3 md:pt-5 lg:pt-10 pb-7 px-4">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-primary">
          {data?.wine?.name}
        </h1>
        <p className="text-xl md:text-sm lg:text-base font-normal">
          <p> {data?.wine?.description} </p>
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
      <Collection />
      {/* our peace of mind pledge section start */}
      <PeaceOfMind />
      {/* our peace of mind pledge section end */}
      {/* Release details section start */}
      <AssetDetails />
      {/* Release details section end */}

      {/* All editions start */}

      <AllEditions products={products} />
      {/* All editions end */}
      <AboutWineries />
      {/* How to invest in wine start */}
      <HowToInvest />
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

        <div className="max-w-[1100px] gap-7 items-center grid grid-col-1  md:grid-cols-5 lg:grid-cols-5 mx-auto py-8">
          <div className="pb-4 lg:pb-0 md:pb-4 md:col-span-2 col-span-1 ">
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
            <p className="w-full font-normal text-base">
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
          <div className="flex justify-end md:col-span-3 col-span-1">
            <iframe
              className=" rounded-md w-full h-72"
              src="https://www.youtube.com/embed/7gquYRxLMFI?si=S7E_iDRbr-b1dZef"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
        </div>

        <CriticsDetailCards />
      </section>

      {/* About Chateau La Mission Haut Brion Cru Classe | 2009 end */}
      {/* About artwork start */}
      <AboutArtWork />
      {/* About artwork end */}
      {/* About Winery Château Le Pin start */}
      <AboutWinerySection />
      {/* About Winery Château Le Pin end */}
      {/* You may also like start */}
      <YouMayAlso products={products} />
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
      {/* <CollectionPopup /> */}
    </div>
  );
}
