import Image from "next/image";
import React from "react";

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
import infologo from "@/assets/icon/info.svg";
import Appactivity from "@/components/charts/page";
import BreadCrumb from "@/common/BreadCrumb";
import ProductTopSection from "@/components/productDetail/ProductTopSection";
import PeaceOfMind from "@/components/productDetail/PeaceOfMind";
export default function ReleaseDateSection() {
  return (
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
        <div className="grid gap-5 lg:grid-cols-2 md:grid-cols-2 grid-cols-1">
          <div className="text-spacegray">
            <h2 className=" text-xl font-medium">Pricing details</h2>
            <div>
              {/* first box */}
              <div className=" grid gap-0 lg:grid-cols-2 md:grid-cols-2 grid-cols-2 pt-6">
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
              <div className=" grid gap-0 lg:grid-cols-2 md:grid-cols-2 grid-cols-2">
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
            <Appactivity />
          </div>
        </div>
      </div>
    </section>
  );
}
