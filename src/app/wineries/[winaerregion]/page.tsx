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
import RegionCountry from "@/components/regioncountry/page";
import resoImage from "@/assets/image/frame-1.png";
import ExploreCountry from "@/components/explorecountry/page";
import { usePathname } from "next/navigation";

const WinerRegion = ({ params }: { params: any }) => {
  console.log("param", params);
  const { winaerregion } = params;
  const pathname = usePathname();
  const regionparagraph = `Not all great wine producers come from traditional families or have a long history in winemaking. A notable example is Jérôme Galeyrand, whose journey in the world of wine began when he purchased his first half-hectare vineyard in 2002.`;
  const regionparagraphs = `Up until then, Jérôme Galeyrand worked in the food industry, and his first immersion into the Burgundy world happened during two harvests at Domaine Alain Burguet in Gevrey-Chambertin.
  `;

  const explorParagraph = ` This encounter sparked an overwhelming passion for wine in him, leading him to enroll in the renowned wine school in Beaune and decide to completely change direction.`;
  const explorParagraphs = `
  Despite not owning vineyards in the prestigious terroirs of Grand Cru or Premier Cru in Burgundy, Jérôme Galeyrand produces regional-level wines that surprisingly managed to break the barriers of Burgundy’s appellation system, achieving a quality and recognition far beyond expectations.`;
  const winaryOwner=`Winery owner`;
  const authorName = `Yann Charlopin`;
  const explor1 = `The cultivation of Jérôme Galeyrand’s vineyards is based on sustainable organic practices. Additionally, some biodynamic techniques are applied, seeking harmony between nature and wine. This careful and respectful approach to the environment results in grapes of exceptional quality.`;
  const explor2 = `Jérôme Galeyrand is a true phenomenon in the Burgundy region, earning recognition and acclaim for his tireless dedication to producing exceptional wines. Each glass of his wines reveals the passionate soul of a producer who challenges conventions and exceeds all expectations.`;
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
          / Winery
        </p>
        <p className="text-bgtertiary text-xxs font-normal  tracking-wide capitalize">
          / {winaerregion}
        </p>
      </div>
      <div className="container mx-auto pt-3 md:pt-5 lg:pt-10 pb-7 px-4 ">
        <h1 className="text-primary text-xxl font-semibold  tracking-tight capitalize">
          {winaerregion}
        </h1>
        <RegionCountry
          regionparagraph={regionparagraph}
          regionparagraphs={regionparagraphs}
          image={resoImage}
          winaryOwner={winaryOwner}
          authorName={authorName}
        />

        <ExploreCountry
          explorParagraph={explorParagraph}
          explorParagraphs={explorParagraphs}
          explor1={explor1}
          explor2={explor2}
        />

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

export default WinerRegion;
