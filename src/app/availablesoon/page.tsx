"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation"; 
import { getFilters } from "@/services/Common";
import { useQuery } from "@tanstack/react-query"; 
import { getProductSearch } from "@/services/ProductSerach";
import resoImage from "@/assets/image/frame-1.png";
import RegionCountry from "@/components/regioncountry/page";
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
  const regionparagraph = `Bordeaux, a renowned wine region, is acclaimed for its bold red blends, predominantly featuring Merlot, Cabernet Sauvignon, and Cabernet Franc. The wines exhibit rich flavors and a superb balance, making Bordeaux a global wine capital. Burgundy, in eastern France, is famous for its exquisite Pinot Noir and Chardonnay wines. The terroir of Burgundy imparts a unique character, resulting in elegant, nuanced, and often complex flavors, highly sought after by wine connoisseurs. Champagne, located in northeastern France, is synonymous with sparkling wine. Using the traditional méthode champenoise, this region crafts the world's most celebrated bubbly. Champagne is known  `;
  const regionparagraphs = `for its effervescence, finesse, and celebratory nature.`;
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
          Available Soon
        </h1>
        {/* defined card */}
        <RegionCountry
          regionparagraph={regionparagraph}
          regionparagraphs={regionparagraphs}
          image={resoImage}
        />
      </div>
    </>
  );
}

export default Availablesoon;
