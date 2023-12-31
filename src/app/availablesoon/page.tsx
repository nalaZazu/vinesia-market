"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { getFilters } from "@/services/Common";
import { useQuery } from "@tanstack/react-query";
import { getProductSearch } from "@/services/ProductSerach";
import resoImage from "@/assets/image/frame-1.png";
import RegionCountry from "@/components/regioncountry/page";
import { avaliablesoon, avaliablesoons } from "@/constants/paragraph";
function Availablesoon() {
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
        <p className="text-bgtertiary text-xxs font-normal  tracking-wide capitalize">
          /
        </p>
        <p className="text-bgtertiary text-xxs font-normal  tracking-wide capitalize">
          {pathname.split("/")}
        </p>
      </div>
      <div className="container mx-auto pt-3 md:pt-5 lg:pt-10 pb-7 px-4 ">
        <h1 className="text-primary text-xxl font-semibold  tracking-tight">
          Available Soon
        </h1>
        {/* defined card */}
        <RegionCountry
          regionparagraph={avaliablesoon}
          regionparagraphs={avaliablesoons}
          image={resoImage}
        />
      </div>
    </>
  );
}

export default Availablesoon;
