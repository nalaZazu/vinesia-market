"use client";
import React, { useEffect, useState } from "react";
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
import DropDownBadge from "@/common/dropdownbadge/page";
import { useQuery } from "@tanstack/react-query";
import { getFilters } from "@/services/Common";
import Link from "next/link";
import ProductCard from "@/components/cards/ProductCard";
import { getProductSearch } from "@/services/ProductSerach";

const WinerRegion = ({ params }: { params: any }) => {
  const pathname = usePathname();
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
    let postData = {
      filters: selectedFilters,
      // "sort": "string",
      first: 0,
    };

    getProductSearch(postData).then((res) => {
      setProducts(res?.data);
    });
  }, [selectedFilters]);
  const regionparagraph = `Not all great wine producers come from traditional families or have a long history in winemaking. A notable example is Jérôme Galeyrand, whose journey in the world of wine began when he purchased his first half-hectare vineyard in 2002.`;
  const regionparagraphs = `Up until then, Jérôme Galeyrand worked in the food industry, and his first immersion into the Burgundy world happened during two harvests at Domaine Alain Burguet in Gevrey-Chambertin.`;
  const explorParagraph = ` This encounter sparked an overwhelming passion for wine in him, leading him to enroll in the renowned wine school in Beaune and decide to completely change direction.`;
  const explorParagraphs = `
  Despite not owning vineyards in the prestigious terroirs of Grand Cru or Premier Cru in Burgundy, Jérôme Galeyrand produces regional-level wines that surprisingly managed to break the barriers of Burgundy’s appellation system, achieving a quality and recognition far beyond expectations.`;
  const winaryOwner = `Winery owner`;
  const authorName = `Yann Charlopin`;
  const explor1 = `The cultivation of Jérôme Galeyrand’s vineyards is based on sustainable organic practices. Additionally, some biodynamic techniques are applied, seeking harmony between nature and wine. This careful and respectful approach to the environment results in grapes of exceptional quality.`;
  const explor2 = `Jérôme Galeyrand is a true phenomenon in the Burgundy region, earning recognition and acclaim for his tireless dedication to producing exceptional wines. Each glass of his wines reveals the passionate soul of a producer who challenges conventions and exceeds all expectations.`;
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
          {slug}
        </p>
      </div>
      <div className="container mx-auto pt-3 md:pt-5 lg:pt-10 pb-7 px-4 ">
        <h1 className="text-primary text-xxl font-semibold  tracking-tight capitalize">
          {slug}
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

export default WinerRegion;
