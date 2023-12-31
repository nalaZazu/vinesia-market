"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import RegionCountry from "@/components/regioncountry/page";
import countryregion from "@/assets/image/frame-1.png";
import Link from "next/link";
import DropDownBadge from "@/common/dropdownbadge/page";
import { getProductSearch } from "@/services/ProductSerach";
import ProductCard from "@/components/cards/ProductCard";
import { getFilters } from "@/services/Common";
import { useQuery } from "@tanstack/react-query";
import { wineart, winearts } from "@/constants/paragraph";
import PTSSkelton from "@/components/productDetail/PTSSkelton";
const WineArt = () => {
  const pathname = usePathname();
  const [products, setProducts] = useState<any>([]);
  const [selectedFilters, setSelectedFilters] = useState<any>([]);
  const {
    isLoading: filtersLoading,
    error: filtersError,
    data: filtersData,
  } = useQuery({
    queryKey: ["getAllFilters"],
    queryFn: getFilters,
  });
  const filtersList = filtersData?.data;
  useEffect(() => {
    let postData = {
      filters: selectedFilters,
      // "sort": "string",
      first: 0,
    };

    getProductSearch(postData).then((res) => {
      setProducts(res?.data);
    });
  }, [selectedFilters]);

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
        <p className="text-bgtertiary text-xxs font-normal  tracking-wide capitalize ">
          /
        </p>
        <p className="text-bgtertiary text-xxs font-normal  tracking-wide capitalize ">
          {pathname.split("/")}
        </p>
      </div>
      <div className="container mx-auto pt-3 md:pt-5 lg:pt-10 pb-7 px-4 ">
        <h1 className="text-primary text-xxl font-semibold  tracking-tight">
          Wine & art collections
        </h1>
        <RegionCountry
          regionparagraph={wineart}
          regionparagraphs={winearts}
          image={countryregion}
        />
        {/* card */}
        <div className=" rounded-tl-lg rounded-tr-lg shadow-lg pb-7 md:pb-7">
          <Link href="/wine&artcollections/reso">
            <div className="w-full h-20 bg-violet-300"></div>
            <div className="rounded-bl-lg rounded-br-lg px-4 py-2.5 ">
              <div className="text-primary  text-sm font-normal  tracking-tight">
                Reso
              </div>
            </div>
          </Link>
        </div>
        {/* dropdown  */}
        {/* defined dropdown */}
        {filtersList ? (
          <>
            <DropDownBadge
              filtersList={filtersList}
              selectedFilters={selectedFilters}
              setSelectedFilters={setSelectedFilters}
            />
          </>
        ) : (
          <>
            <PTSSkelton/>
          </>
        )}

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products?.data &&
            products?.data?.map((item: any, index: any) => {
              return (
                <Link href={`/product/${index + 1}`} key={item?.id}>
                  <div>{item && <ProductCard item={item} />}</div>
                </Link>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default WineArt;
