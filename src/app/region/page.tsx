"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import DropDown from "@/components/dropdown/page";
import Card from "@/components/card/page";
import { getFilters } from "@/services/Common";
import { useQuery } from "@tanstack/react-query";
import DropDownButton from "@/common/DropDownButton";
import Badges from "@/components/badage/page";
import ProductCard from "@/components/cards/ProductCard";
import { getProductSearch } from "@/services/ProductSerach";
import { useSelector } from "react-redux";
function Region() {
  const pathname = usePathname();
  const [products, setProducts] = useState<any>([]);

  const {
    isLoading: filtersLoading,
    error: filtersError,
    data: filtersData,
  } = useQuery({
    queryKey: ["getAllFilters"],
    queryFn: getFilters,
  });
  const filtersList = filtersData?.data;
  const datadropdown = useSelector<any>(
    (state) => state?.dropdown?.dropdownData
  );
  
  useEffect(() => {
    let postData = {
      filters: datadropdown,
      // "sort": "string",
      first: 0,
    };
    console.log("postData" , postData);
    
    getProductSearch(postData).then((res) => {
      setProducts(res?.data);
      console.log("resposne ", res?.data);
      console.log("resposne setProduct", setProducts(res?.data));
    });
  }, []);
  console.log("products-data", products?.data);

  return (
    <>
      <div className="container mx-auto  pt-3 md:pt-5  px-4 flex gap-4">
        <p className="text-xxs font-normal text-breadcrumb tracking-wide">
          Vinesia Marketplace
        </p>
        <p className="text-xxs font-normal text-breadcrumb tracking-wide">
          / Home Page
        </p>
        <p className="text-bgtertiary text-xxs font-normal  tracking-wide capitalize">
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
        {/* badge */}
        <Badges />

        {/* <PriceSlider /> */}
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products?.data &&
            products?.data?.map((item: any) => {
              console.log("productItem", item);
              return (
                <div key={item?.id}>{item && <ProductCard item={item} />}</div>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default Region;
