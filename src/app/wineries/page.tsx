"use client";
import React from "react";
import { usePathname } from "next/navigation";
import resoImage from "@/assets/image/reso-image.png";
import RegionCountry from "@/components/regioncountry/page";
import { NextIcon } from "@/assets/icon/Icons";
import { wineCountry } from "@/constants/winelist";
import Link from "next/link";
import { wine, wines } from "@/constants/paragraph";
const Wineries = () => {
  const pathname = usePathname();
  return (
    <>
      <div className="container mx-auto  pt-3 md:pt-5  px-4 flex gap-4">
        <p className="text-xxs font-normal text-breadcrumb tracking-wide">
          Vinesia Marketplace
        </p>
        <p className="text-xxs font-normal text-breadcrumb tracking-wide">/</p>
        <p className="text-xxs font-normal text-breadcrumb tracking-wide">
          Home Page
        </p>
        <p className="text-bgtertiary text-xxs font-normal  tracking-wide capitalize">
          /
        </p>
        <p className="text-xxs font-normal text-bgtertiary tracking-wide">
          {pathname.split("/")}
        </p>
      </div>
      <div className="container mx-auto pt-3 md:pt-5 lg:pt-10 pb-7 px-4 ">
        <h1 className="text-primary text-xxl font-semibold  tracking-tight">
          Wineries
        </h1>
        <div className=" lg:max-w-[1172px] xl:max-w-8xl xl:max-auto ">
          <RegionCountry
            regionparagraph={wine}
            regionparagraphs={wines}
            image={resoImage}
          />
        </div>
        {wineCountry?.map((item: any) => {
          const {
            id,
            countryName,
            regionName1,
            regionName2,
            regionName3,
            regionName4,
            regionName5,
            regionName6,
            explor,
            explor1,
            explor2,
          } = item;

          return (
            <div className="max-w-[1172px] ms-auto" key={id}>
              <div className="ms-auto">
                <div className="flex justify-between items-center gap-5">
                  <div className=" basis-1/5">
                    <h2 className="   text-secondary text-xxl font-semibold tracking-tight">
                      {countryName}
                    </h2>
                  </div>
                  <div className="basis-4/5">
                    <hr className=" border-secondary" />
                  </div>
                </div>
                {/* 1st div */}
                <div className="grid grid-cols-2 gap-4  pb-6">
                  <div>
                    <p className="text-secondary text-sm font-normal tracking-tight pt-5">
                      Winery name
                    </p>
                    <h3 className=" text-secondary text-2xl font-semibold tracking-tight pt-3">
                      {regionName1}
                    </h3>
                    <Link href={`/wineries/${explor?.replace(/ /g, "_")}`}>
                      <span className="flex gap-3 pt-11">
                        <p className="text-secondary text-lg font-semibold tracking-tight">
                          Explore
                        </p>
                        <div className="w-8 h-8 flex   bg-neutral-200 rounded-full border-2 border-black text-center items-center">
                          <span className="mx-auto">
                            <NextIcon />
                          </span>
                        </div>
                      </span>
                    </Link>
                  </div>

                  <div>
                    <p className="text-secondary text-sm font-normal tracking-tight pt-5">
                      Winery name
                    </p>
                    <h3 className=" text-secondary text-2xl font-semibold tracking-tight pt-3">
                      {regionName2}
                    </h3>
                  </div>
                </div>
                {/* 2nd div */}
                <div className="grid grid-cols-2 gap-4  border-t-2  border-secondary pb-6">
                  <div>
                    <p className="text-secondary text-sm font-normal tracking-tight pt-5">
                      Winery name
                    </p>
                    <h3 className=" text-secondary text-2xl font-semibold tracking-tight pt-3">
                      {regionName3}
                    </h3>
                    <Link href={`/wineries/${explor1?.replace(/ /g, "_")}`}>
                      <span className="flex gap-3 pt-11">
                        <p className="text-secondary text-lg font-semibold tracking-tight">
                          Explore
                        </p>
                        <div className="w-8 h-8 flex   bg-neutral-200 rounded-full border-2 border-black text-center items-center">
                          <span className="mx-auto">
                            <NextIcon />
                          </span>
                        </div>
                      </span>
                    </Link>
                  </div>

                  <div>
                    <p className="text-secondary text-sm font-normal tracking-tight pt-5">
                      Winery name
                    </p>
                    <h3 className=" text-secondary text-2xl font-semibold tracking-tight pt-3">
                      {regionName4}
                    </h3>
                  </div>
                </div>
                {/* 3rd div */}
                <div className="grid grid-cols-2 gap-4  border-t-2  border-secondary pb-16">
                  <div>
                    <p className="text-secondary text-sm font-normal tracking-tight pt-5">
                      Winery name
                    </p>
                    <h3 className=" text-secondary text-2xl font-semibold tracking-tight pt-3">
                      {regionName5}
                    </h3>
                    <Link href={`/wineries/${explor2?.replace(/ /g, "_")}`}>
                      <span className="flex gap-3 pt-11">
                        <p className="text-secondary text-lg font-semibold tracking-tight">
                          Explore
                        </p>
                        <div className="w-8 h-8 flex   bg-neutral-200 rounded-full border-2 border-black text-center items-center">
                          <span className="mx-auto">
                            <NextIcon />
                          </span>
                        </div>
                      </span>
                    </Link>
                  </div>

                  <div>
                    <p className="text-secondary text-sm font-normal tracking-tight pt-5">
                      Winery name
                    </p>
                    <h3 className=" text-secondary text-2xl font-semibold tracking-tight pt-3">
                      {regionName6}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Wineries;
