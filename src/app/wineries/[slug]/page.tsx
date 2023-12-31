"use client";
import React, { useEffect, useState } from "react";
import RegionCountry from "@/components/regioncountry/page";
import resoImage from "@/assets/image/frame-1.png";
import ExploreCountry from "@/components/explorecountry/page";
import DropDownBadge from "@/common/dropdownbadge/page";
import { useQuery } from "@tanstack/react-query";
import { getFilters } from "@/services/Common";
import Link from "next/link";
import ProductCard from "@/components/cards/ProductCard";
import { getProductSearch } from "@/services/ProductSerach";
import {
  authorName,
  explor1,
  explor2,
  explorParagraph,
  explorParagraphs,
  regionparagraph,
  regionparagraphs,
  winaryOwner,
} from "@/constants/paragraph";
import PTSSkelton from "@/components/productDetail/PTSSkelton";

const WinerRegion = ({ params }: { params: any }) => {
  const { slug } = params;
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
  // here  is defined the slug param pass to other page
  useEffect(() => {
    if (filtersData && slug) {
      setSelectedFilters([slug?.replace(/_/g, " ")]);
    }
  }, [filtersData, slug]);
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
        <p className="text-xxs font-normal text-breadcrumb tracking-wide">/</p>
        <p className="text-xxs font-normal text-breadcrumb tracking-wide">
          Winery
        </p>
        <p className="text-bgtertiary text-xxs font-normal  tracking-wide capitalize">
          /
        </p>
        <p className="text-bgtertiary text-xxs font-normal  tracking-wide capitalize">
          {slug?.replace(/_/g, " ")}
        </p>
      </div>
      <div className="container mx-auto pt-3 md:pt-5 lg:pt-10 pb-7 px-4 ">
        <h1 className="text-primary text-xxl font-semibold  tracking-tight capitalize">
          {slug?.replace(/_/g, " ")}
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
            <PTSSkelton />
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

export default WinerRegion;
