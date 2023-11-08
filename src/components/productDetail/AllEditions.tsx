import React, { useState } from "react";
import ProductCard from "../cards/ProductCard";
import TabButton from "@/common/TabButton";
import DropDownButton from "@/common/DropDownButton";

export default function AllEditions({ products }: { products: any }) {
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <section className="container mx-auto py-24 px-4  lg:px-0">
        <div>
          <div className="flex justify-between items-center gap-5">
            <div className="basis-1/6">
              <h2 className="text-2xl font-medium text-black tracking-tight">
                All editions
              </h2>
            </div>
            <div className="basis-4/5 ">
              <hr className=" border-black" />
            </div>
            <div className="flex text-spacegray">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-3.5 h-3.5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"
                />
              </svg>
            </div>
          </div>
          <div className="flex justify-between mx-auto pt-14">
            <div className=" pt-5">
              <TabButton />
              <div className=" flex items-center py-3 gap-2">
                <input type="checkbox" className="w-5 h-5" />
                <div className="text-neutral-900 text-sm font-normal tracking-tight">
                  First sale
                </div>
              </div>
            </div>
            <DropDownButton />
          </div>
        </div>
        <div>
          <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 mx-auto">
            {products &&
              products.map((item: any, i: any) => {
                return (
                  <div key={i}>
                    <ProductCard item={item} />
                  </div>
                );
              })}
          </div>
          <div className="flex justify-center mt-8">
            <button className="py-2.5 px-4 bg-bgsecondary text-white rounded-lg text-center">
              Explore
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
