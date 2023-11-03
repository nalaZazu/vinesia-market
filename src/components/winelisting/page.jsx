import { productlist } from "@/constants/winelist";
import Image from "next/image";
import alert from "../../assets/image/alert-circle.png";
import React from "react";
import ProductCard from "../cards/ProductCard";
const Listing = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {productlist &&
          productlist.map((item) => {
            const {
              bottle1,
              id,
              imageAlt,
              imageSrc,
              price,
              name,
              remain,
              subtitle,
            } = item;
            return (
              <div key={id}>
                <ProductCard />
              </div>
            );
          })}
      </div>
      <div className="grid justify-center mt-8">
        <button className="py-2.5 px-4 bg-bgsecondary text-white rounded-lg text-center">
          Explore
        </button>
      </div>
    </>
  );
};

export default Listing;
