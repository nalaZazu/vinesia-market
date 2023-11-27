import Image from "next/image";
import React from "react";
import productimg from "@/assets/icon/productsimage.png";
import ProductCard from "../cards/ProductCard";

export default function YouMayAlso({ products }: { products: any }) {
  return (
    <div>
      <section className=" py-14 px-4 lg:px-0 md:px-4">
        <div className="container mx-auto">
          <h2 className=" capitalize text-4xl font-medium text-zinc-700 tracking-tight">
            You may also like
          </h2>

          <div className="md:basis-3/5 lg:basis-3/5 basis-full z-0 pt-10">
            <div className="container grid mx-auto gap-6 lg:grid-cols-4 md:grid-cols-2 grid-cols-2">
              <div className="bg-themegray flex text-center items-center md:items-center lg:items-end lg:text-center h-[400px] pb-6 border-2 border-spacegray">
                <div className="w-full">
                  <div className="flex justify-center pb-8">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h1 className=" text-3xl font-semibold">
                      Vinesia Art Collections
                    </h1>
                  </div>
                  <div className="flex justify-center pt-7">
                    <button
                      type="button"
                      className="text-base px-6 py-2.5 text-white bg-spacegray focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg  text-center"
                    >
                      Explore
                    </button>
                  </div>
                </div>
              </div>

              {products?.slice(0, 3).map((d: any, i: any) => {
                return (
                  <div key={i}>
                    <ProductCard item={d} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
