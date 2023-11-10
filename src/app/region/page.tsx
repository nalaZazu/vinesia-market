"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { productlist } from "@/constants/winelist";
import Image from "next/image";
import DropDown from "@/components/dropdown/page";
import {
  winary,
  bottleSize,
  casing,
  ratingCritics,
  regions,
  color,
  artCollect,
  other,
} from "@/constants/invesdropdown";
import Recomend from "@/components/dropdown/recomend/page";
import Card from "@/components/card/page";
import { Popover } from "@headlessui/react";
import { getFilters } from "@/services/Common";
import { useQuery } from "@tanstack/react-query";
import DropDownButton from "@/common/DropDownButton";
function Region() {
  const pathname = usePathname();
  useState;

  const {
    isLoading: filtersLoading,
    error: filtersError,
    data: filtersData,
  } = useQuery({
    queryKey: ["getAllFilters"],
    queryFn: getFilters,
  });

  console.log("Filters Data ", filtersData?.data);
  const filtersList = filtersData?.data;
  return (
    <>
      <div className="container mx-auto  pt-3 md:pt-5  px-4 flex gap-4">
        <p className="text-xxs font-normal text-breadcrumb tracking-wide">
          Vinesia Marketplace
        </p>
        <p className="text-xxs font-normal text-breadcrumb tracking-wide">
          / Home Page
        </p>
        <p className="text-bgtertiary text-xxs font-normal  tracking-wide">
          / {pathname.split("/")}
        </p>
      </div>
      <div className="container mx-auto pt-3 md:pt-5 lg:pt-10 pb-7 px-4 ">
        <h1 className="text-primary text-xxl font-semibold  tracking-tight">
          Regions
        </h1>
        <Card />
        {/* dropdown  */}
        <div className="flex justify-between md:pt-5 md:pb-14 flex-wrap gap-2">
          <div className="flex gap-2 flex-wrap">
            {filtersList?.map((list: any, i: any) => {
              return (
                <div key={i}>
                  <DropDown data={list} />
                </div>
              );
            })}
          </div>
          <div className="flex items-center gap-2 pe-2 flex-wrap pt-2 md:pt-0">
            <p className="text-primary text-xs font-normal  tracking-wide">
              Sort by
            </p>
            <div className="w-44">
              <DropDownButton />
            </div>
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
}

export default Region;
