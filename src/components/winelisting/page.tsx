import React from "react";
import ProductCard from "../cards/ProductCard";
import Link from "next/link";
const Listing = ({ data }: { data: any }) => {
  console.log("dataapi", data);

  return (
    <>
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {data &&
          data.map((item: any, index: any) => {
            return (
              <Link href={`product/${index + 1}`} key={item?.id}>
                <div >
                  {item && <ProductCard item={item}  />}
                </div>
              </Link>
            );
          })}
      </div>
      <div className="grid justify-center mt-8">
        <button className="w-[87px] h-10 px-4 py-2.5 bg-gray-500 rounded-lg justify-center items-center gap-2 inline-flex">
          <div className="text-white text-base font-medium tracking-tight">
            Explore
          </div>
        </button>
      </div>
    </>
  );
};

export default Listing;
