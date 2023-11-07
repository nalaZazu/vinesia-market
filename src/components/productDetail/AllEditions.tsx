import React, { useState } from "react";
import ProductCard from "../cards/ProductCard";

export default function AllEditions({ products }: { products: any }) {
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <section className="container mx-auto py-24 px-4  lg:px-0">
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
            <ul
              className="flex flex-wrap text-sm font-medium text-center bg-tabsgray rounded-md p-1"
              id="default-tab"
              data-tabs-toggle="#default-tab-content"
              role="tablist"
            >
              <li
                className="text-center text-zinc-700 text-xs font-normal font-['Jost'] tracking-wide"
                role="presentation"
              >
                <button
                  className="px-10 py-2 rounded-md bg-white shadow-md"
                  id="profile-tab"
                  data-tabs-target="#profile"
                  type="button"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  All
                </button>
              </li>
              <li
                className="text-center text-zinc-700 text-xs font-normal font-['Jost'] tracking-wide"
                role="presentation"
              >
                <button
                  className="px-9 py-2 rounded-md "
                  id="profile-tab"
                  data-tabs-target="#profile"
                  type="button"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  Ask
                </button>
              </li>
              <li
                className="text-center text-zinc-700 text-xs font-normal font-['Jost'] tracking-wide"
                role="presentation"
              >
                <button
                  className="px-9 py-2 rounded-md"
                  id="profile-tab"
                  data-tabs-target="#profile"
                  type="button"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  Bid
                </button>
              </li>
            </ul>
            <div className=" flex items-center py-3 gap-2">
              <input type="checkbox" className="w-5 h-5" />
              <div className="text-neutral-900 text-sm font-normal tracking-tight">
                First sale
              </div>
            </div>
          </div>
          <div className="">
            <p className="text-neutral-900 text-sm font-normal tracking-tight">
              Sort by
            </p>
            <div>
              <button
                onClick={toggleDropdown}
                type="button"
                className="tracking-tight text-sm w-48 py-2 px-4 text-left items-center flex justify-between text-spacegray shadow-none  border focus:ring-0 focus:outline-none focus:ring-gray-100 font-medium rounded-lg "
              >
                Recommended
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-4 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>

              {isOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  {/* Dropdown content here */}
                  <ul className="py-2">
                    <li className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                      Item 1
                    </li>
                    <li className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                      Item 2
                    </li>
                    <li className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                      Item 3
                    </li>
                  </ul>
                </div>
              )}
            </div>
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
