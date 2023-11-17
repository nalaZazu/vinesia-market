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
import resoImage from "@/assets/image/frame-1.png";
import RegionCountry from "@/components/regioncountry/page";
import { getProductSearch } from "@/services/ProductSerach";
import { useQuery } from "@tanstack/react-query";
import { getFilters } from "@/services/Common";
import DropDownBadge from "@/common/dropdownbadge/page";
import ProductCard from "@/components/cards/ProductCard";
import Link from "next/link";
const LimitedCollections = () => {
  const pathname = usePathname();
  const regionparagraph = `Bordeaux, a renowned wine region, is acclaimed for its bold red blends, predominantly featuring Merlot, Cabernet Sauvignon, and Cabernet Franc. The wines exhibit rich flavors and a superb balance, making Bordeaux a global wine capital. Burgundy, in eastern France, is famous for its exquisite Pinot Noir and Chardonnay wines. The terroir of Burgundy imparts a unique character, resulting in elegant, nuanced, and often complex flavors, highly sought after by wine connoisseurs. Champagne, located in northeastern France, is synonymous with sparkling wine. Using the traditional méthode champenoise, this region crafts the world's most celebrated bubbly. Champagne is known  `;
  const regionparagraphs = `for its effervescence, finesse, and celebratory nature.`;
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
        <p className="text-xxs font-normal text-breadcrumb tracking-wide">
          / Home Page
        </p>
        <p className="text-bgtertiary text-xxs font-normal  tracking-wide capitalize">
          / {pathname.split("/")}
        </p>
      </div>
      <div className="container mx-auto pt-3 md:pt-5 lg:pt-10 pb-7 px-4 ">
        <h1 className="text-primary text-xxl font-semibold  tracking-tight">
          Limited collections
        </h1>
        <RegionCountry
          regionparagraph={regionparagraph}
          regionparagraphs={regionparagraphs}
          image={resoImage}
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
                  <div>
                    {item && <ProductCard item={item} />}
                  </div>
                </Link>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default LimitedCollections;
