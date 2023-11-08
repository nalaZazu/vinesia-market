"use client";
import React from "react";
import Image from "next/image";
import DropDown from "@/components/dropdown/page";
import {
  artCollect,
  bottleSize,
  casing,
  color,
  other,
  ratingCritics,
  regions,
  winary,
} from "@/constants/invesdropdown";
import Recomend from "@/components/dropdown/recomend/page";
import { productlist } from "@/constants/winelist";
import { usePathname } from "next/navigation";
import RegionCountry from "@/components/regioncountry/page";
import countryregion from "@/assets/image/france1.jpg";
const France = () => {
  const pathname = usePathname();
  const regionparagraph = `France is renowned worldwide for its exquisite wines, each region offering a unique and  distinct flavor profile. Bordeaux, in the
    southwest, is celebrated for its robust reds, notably blends of
    Merlot, Cabernet Sauvignon, and Cabernet Franc. Burgundy, in the
    east, is famed for its Pinot Noir and Chardonnay, reflecting the
    region's terroir with elegance and finesse.`;
    const regionparagraphs=`Champagne, a region in the northeast, is synonymous with sparkling
    wine, using the traditional méthode champenoise to produce the
    iconic bubbly. The Loire Valley is diverse, boasting a range of
    white, red, rosé, and sparkling wines, with Sauvignon Blanc and
    Cabernet Franc being prominent.`;
    
  return (
    <>
      <div className="container mx-auto  pt-3 md:pt-5  px-4 flex gap-4">
        <p className="text-xxs font-normal text-breadcrumb tracking-wide">
          Vinesia Marketplace
        </p>
        <p className="text-xxs font-normal text-breadcrumb tracking-wide">
          / Home Page
        </p>
        <p className="text-xxs font-normal text-breadcrumb tracking-wide">
          / Regions
        </p>
        <p className="text-bgtertiary text-xxs font-normal  tracking-wide">
          / {pathname.split("/")}
        </p>
      </div>
      <div className="container mx-auto pt-3 md:pt-5 lg:pt-10 pb-7 px-4 ">
        <h1 className="text-primary text-xxl font-semibold  tracking-tight">
          France
        </h1>
        <RegionCountry regionparagraph={regionparagraph} regionparagraphs={regionparagraphs} image={countryregion}/>
        {/* dropdown  */}
        <div className="flex justify-between md:pt-7 md:pb-7 flex-wrap">
          <div className="flex gap-2 flex-wrap">
            <div>
              <DropDown option={bottleSize} />
            </div>
            <div>
              <DropDown />
            </div>
            <div>
              <DropDown option={casing} />
            </div>
            <div>
              <DropDown option={ratingCritics} />
            </div>
            <div>
              <DropDown option={regions} />
            </div>
            <div>
              <DropDown option={winary} />
            </div>
            <div>
              <DropDown />
            </div>
            <div>
              <DropDown option={color} />
            </div>
            <div>
              <DropDown />
            </div>
            <div>
              <DropDown option={artCollect} />
            </div>
            <div>
              <DropDown option={other} />
            </div>
          </div>
          <div className="flex items-center gap-2 pe-2 flex-wrap">
            <p className="text-primary text-xs font-normal  tracking-wide">
              Sort by
            </p>
            <Recomend />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {productlist?.map((item) => {
            const {
              bottle1,
              id,
              imageAlt,
              imageSrc,
              name,
              price,
              remain,
              subtitle,
            } = item;
            return (
              <div key={id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md ">
                  <Image
                    src={imageSrc}
                    alt={imageAlt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className=" text-left">
                  <h4 className=" text-base font-semibold">{name}</h4>
                  <p className=" text-xxs ">{subtitle}</p>
                  <p className=" text-xxs font-semibold">OWNER</p>
                  <span className="justify-center items-center gap-0.5 inline-flex  mb-2  text-white text-xxs">
                    <p className="   bg-bgbutton w-12 text-center   p-0.5 rounded-sm">
                      Vinesia
                    </p>
                    <p className="  bg-[#6c757e] font-medium tracking-wide p-0.5 rounded-sm">
                      Private investors
                    </p>
                  </span>

                  <hr />
                  <button className="text-xxs uppercase ">buy now</button>
                  <h3 className=" font-semibold text-lg ">€{price}</h3>
                  <p className=" flex gap-3">
                    <span className=" text-xxs font-medium">{bottle1}</span>
                    <span className=" text-xxs">{remain} remaining</span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default France;
