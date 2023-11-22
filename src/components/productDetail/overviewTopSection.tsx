import React, { useState } from "react";
import { Wine, releaseDetails, rating } from "@/propTypes/page";
import WineCard from "./WineCard";
import ArtCard from "./ArtCard";
import ProductCarousel from "../productsCarousel/page";

const OverviweTopSection = ({
  wine,
  release,
  rating,
}: {
  wine: Wine;
  release: releaseDetails;
  rating: any;
}) => { 
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <section className="bg-themegray mt-5 px-4 pb-20">
      <div className="container grid md:max-w-6xl px-4 pb-16 mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-2 md:grid-cols-1 grid-cols-1">
        {/* first section start */}
        <div className=" md:col-span-2 lg:col-span-1 md:pb-0 pb-5">
          <div className="flex md-w-full gap-5 ps-5 ps-md-3">
            <div
              className={` border-gray-500 ${
                selectedTab == 0 && "border-b-4"
              } `}
            >
              <button
                className="ml-1 text-2xl font-medium text-spacegray"
                onClick={() => setSelectedTab(0)}
              >
                Wine
              </button>
              <p className=" text-xxs">LWIN:{`${wine?.lwinNumber}`}</p>
            </div>
            <div
              className={` border-gray-500 ${
                selectedTab == 1 && "border-b-4"
              } `}
            >
              <button
                className="ml-1 text-2xl font-medium text-spacegray"
                onClick={() => setSelectedTab(1)}
              >
                Art
              </button>
              <p className=" text-xxs">Artist: Lola Designer Funny</p>
            </div>
          </div>
          {selectedTab == 0 ? (
            <>
              <WineCard wine={wine} release={release} rating={rating} />
            </>
          ) : (
            <>
              <ArtCard />
            </>
          )}
        </div>
  
        {/* slider start */}
        <ProductCarousel />
        {/* slider end */}
      </div>
    </section>
  );
};

export default OverviweTopSection;
