"use client";
import React, { useEffect, useState } from "react";
import RegionCountry from "@/components/regioncountry/page";
import resoImage from "@/assets/image/reso-image.png";
import ExploreCountry from "@/components/explorecountry/page";
import DropDownBadge from "@/common/dropdownbadge/page";
import { useQuery } from "@tanstack/react-query";
import { getFilters } from "@/services/Common";
import { getProductSearch } from "@/services/ProductSerach";
import Link from "next/link";
import ProductCard from "@/components/cards/ProductCard";
import {
  resoexplor1,
  resoexplor2,
  resowine,
  resowineexplor,
  resowineexplors,
  resowines,
} from "@/constants/paragraph";
const Rao = ({ params }: { params: any }) => {
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
  useEffect(() => {
    if (filtersData && slug) {
      setSelectedFilters([slug]);
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
          Wine & art collections
        </p>
        <p className="text-bgtertiary text-xxs font-normal  tracking-wide capitalize">
          /
        </p>
        <p className="text-bgtertiary text-xxs font-normal  tracking-wide capitalize">
          {slug}
        </p>
      </div>
      <div className="container mx-auto pt-3 md:pt-5 lg:pt-10 pb-7 px-4 ">
        <h1 className="text-primary text-xxl font-semibold  tracking-tight ">
          Meet the artist: <span className="capitalize">{slug}</span>
        </h1>
        <RegionCountry
          regionparagraph={resowine}
          regionparagraphs={resowines}
          image={resoImage}
        />

        <ExploreCountry
          explorParagraph={resowineexplor}
          explorParagraphs={resowineexplors}
          explor1={resoexplor1}
          explor2={resoexplor2}
        />

        {/* dropdown  */}
        <DropDownBadge
          filtersList={filtersList}
          selectedFilters={selectedFilters}
          setSelectedFilters={setSelectedFilters}
        />

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

export default Rao;
