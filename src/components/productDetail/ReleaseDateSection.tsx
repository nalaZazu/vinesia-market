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
import { releaseDetails } from "@/propTypes/page";
export default function ReleaseDateSection({
  release,
}: {
  release: releaseDetails;
}) {
  return (
    <section className="container mx-auto">
      <div className="flex flex-wrap justify-between py-7 px-4 md:px-0">
        <div>
          <h2 className="text-4xl font-medium text-spacegray">
            Release details
          </h2>
        </div>
        <div className="flex flex-wrap text-bgsecondary">
          <p className="flex gap-4 items-center">
            <span className="text-lg">On the market are </span>
            <span className=" text-2xl font-bold">24</span>
            <span className="text-lg">editions of this product</span>
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
          <div>
            <h2 className="text-neutral-400 text-xl font-bold">
              Pricing details
            </h2>
            <div>
              {/* first box */}
              <div className=" grid gap-0 lg:grid-cols-2 md:grid-cols-1 grid-cols-1 pt-6">
                <div className=" border-t-2 border-l-2 md:border-2 border-2 border-gray-500 items-start gap-2.5  p-4 py-7">
                  <div className="flex gap-3 text-sm text-gray-500 font-medium uppercase tracking-tight">
                    <h2>Release Price </h2>
                    <Image
                      src={infologo}
                      alt="Picture of the author"
                      className=" w-6 h-6"
                    />
                  </div>
                  <p className=" text-lg font-semibold text-gray-500 tracking-tight">
                    €{`${release?.releasePrice}`}
                  </p>
                </div>
                <div className=" border-2 border-gray-500 items-start gap-2.5  p-4 py-7">
                  <div className="flex gap-3 text-sm text-gray-500 font-medium uppercase tracking-tight">
                    <h2>Average MARKET PRICE </h2>
                    <Image
                      src={infologo}
                      alt="Picture of the author"
                      className=" w-6 h-6"
                    />
                  </div>
                  <p className=" text-lg font-semibold text-gray-500 tracking-tight">
                    €{`${release?.averagePrice}`}
                  </p>
                </div>
              </div>
              {/* second box */}
              <div className=" grid gap-0 lg:grid-cols-2 md:grid-cols-1 grid-cols-1">
                <div className=" border-y-2 border-l-2 md:border-2 border-2 p-4 border-typegray">
                  <div>
                    <h2 className=" text-sm font-bold text-gray-500 uppercase tracking-tight">
                      Highest Price
                    </h2>
                    <h2 className=" text-sm font-normal text-gray-500 tracking-tight">
                      ever transacted for product
                    </h2>
                  </div>
                  <p className=" text-lg font-semibold text-gray-500 tracking-tight">
                    €{`${release?.highPrice}`}
                  </p>
                </div>

                <div className=" border-x-2 border-b-2 p-4 bg-typegray border-typegray text-white">
                  <div>
                    <h2 className=" text-sm font-bold text-white  uppercase tracking-tight">
                      Price Change
                    </h2>
                    <h2 className=" text-sm font-normal text-white tracking-tight">
                      since first release
                    </h2>
                  </div>
                  <p className=" text-lg font-semibold text-white  tracking-tight">
                    + 66.6%↑
                  </p>
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
