 import React from "react";
import ProductCard from "../cards/ProductCard";
const Listing = ({ data }: { data: any }) => {
  return (
    <>
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {data &&
          data.map((item: any) => {
            return (
              <div key={item?.id}>{item && <ProductCard item={item} />}</div>
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
