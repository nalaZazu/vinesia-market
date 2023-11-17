import React from "react";
import Image from "next/image";
import infologo from "@/assets/icon/info.svg";
import Appactivity from "@/components/charts/page";
import { releaseDetails } from "@/propTypes/page";
import { getPriceHistory } from "@/services/ProductDetail";

export default function PricingDetail({ release }: { release: any }) {
  return (
    <div>
      <h2 className="text-neutral-400 text-xl font-bold">Pricing details</h2>
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
          <div className=" border-2 md:border-b-0 border-gray-500 items-start gap-2.5  p-4 py-7">
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
              + 
              {`  ${(
                ((release?.highPrice - release?.releasePrice) /
                  release?.releasePrice) *
                100
              ).toFixed(3)} % ↑`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
