"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { getFilters } from "@/services/Common";
import { useQuery } from "@tanstack/react-query";
import DropDownBadge from "@/common/dropdownbadge/page";
import { getProductSearch } from "@/services/ProductSerach";
import ProductCard from "@/components/cards/ProductCard";
import Link from "next/link";
function Invest() {
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
    console.log("postData", postData);

    getProductSearch(postData).then((res) => {
      setProducts(res?.data);
      console.log("resposne ", res?.data);
      console.log("resposne setProduct", setProducts(res?.data));
    });
  }, [selectedFilters]);
  console.log("Selected-data", selectedFilters);
  return (
    <>
      <div className="container mx-auto  pt-3 md:pt-5  px-4 flex gap-4">
        <p className="text-xxs font-normal text-breadcrumb tracking-wide">
          Vinesia Marketplace
        </p>
        <p className="text-bgtertiary text-xxs font-normal  tracking-wide capitalize">
          / {pathname.split("/")}
        </p>
      </div>
      <div className="container mx-auto pt-3 md:pt-5 lg:pt-10 pb-7 px-4">
        <h1 className="text-primary text-xxl font-semibold  tracking-tight">
          Invest
        </h1>
        {/* defined dropdown */}
        <DropDownBadge
          filtersList={filtersList}
          selectedFilters={selectedFilters}
          setSelectedFilters={setSelectedFilters}
        />

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products?.data &&
            products?.data?.map((item: any, index: any) => {
              return (
                <Link href={`product/${index + 1}`}>
                  <div key={item?.id}>
                    {item && <ProductCard item={item} />}
                  </div>
                </Link>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default Invest;
