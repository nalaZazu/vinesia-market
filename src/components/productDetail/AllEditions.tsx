import React, { useState } from "react";
import ProductCard from "../cards/ProductCard";
import TabButton from "@/common/TabButton";
import DropDownButton from "@/common/DropDownButton";
import Link from "next/link";
import { ArrowBtn } from "@/assets/icon/Icons";

export default function AllEditions({
  products,
  firstSale,
  setFirstSale,
}: {
  products: any;
  firstSale?: any;
  setFirstSale?: any;
}) {
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section className="container mx-auto pt-24 pb-16 px-4  lg:px-0">
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
              <ArrowBtn />
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-3.5 h-3.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"
                />
              </svg> */}
            </div>
          </div>
          <div className="flex justify-between mx-auto pt-14 max-w-[1170px]">
            <div className=" pt-5">
              <TabButton />
              <div className=" flex items-center py-3 gap-2">
                <input
                  checked={firstSale}
                  onChange={(e) => setFirstSale(e?.target?.checked ? 1 : 0)}
                  type="checkbox"
                  className="w-5 h-5"
                />
                <div className="text-neutral-900 text-sm font-normal tracking-tight">
                  First sale
                </div>
              </div>
            </div>

            <div className=" w-44">
              <p className="text-neutral-900 text-sm font-normal tracking-tight">
                Sort by
              </p>
              <DropDownButton />
            </div>
          </div>
        </div>
        <div className=" max-w-[1170px] mx-auto">
          <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 mx-auto">
            {products &&
              products.map((item: any, index: any) => {
                return (
                  <Link href={`/product/${index + 1}`} key={index}>
                    <div>
                      <ProductCard item={item} />
                    </div>
                  </Link>
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
    </>
  );
}
