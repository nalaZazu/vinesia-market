 
"use client"; 
import React from "react";
import { usePathname } from "next/navigation"; 
import Image from "next/image";
import Recomend from "@/components/dropdown/recomend/page";
import resoImage from "@/assets/image/reso-image.png";
import RegionCountry from "@/components/regioncountry/page";
const Wineries = () => {
    const pathname = usePathname();
    const regionparagraph = `Bordeaux, a renowned wine region, is acclaimed for its bold red blends, predominantly featuring Merlot, Cabernet Sauvignon, and Cabernet Franc. The wines exhibit rich flavors and a superb balance, making Bordeaux a global wine capital. Burgundy, in eastern France, is famous for its exquisite Pinot Noir and Chardonnay wines. The terroir of Burgundy imparts a unique character, resulting in elegant, nuanced, and often complex flavors, highly sought after by wine connoisseurs. Champagne, located in northeastern `;
    const regionparagraphs = `France, is synonymous with sparkling wine. Using the traditional méthode champenoise, this region crafts the world's most celebrated bubbly.`;
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
      Wineries
      </h1>
      <RegionCountry
        regionparagraph={regionparagraph}
        regionparagraphs={regionparagraphs}
        image={resoImage}
      />   
    </div>
  </>
  )
}

export default Wineries