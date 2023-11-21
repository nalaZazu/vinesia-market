import React, { useState } from "react";
import Image from "next/image";
import infologo from "@/assets/icon/info.svg";
import Appactivity from "@/components/charts/page";
import logo from "@/assets/icon/logonew.png";
import logo1 from "@/assets/icon/img1.png";
import logo2 from "@/assets/icon/img2.png";
import logo3 from "@/assets/icon/img3.png";
import logo4 from "@/assets/icon/img4.svg";

export default function AssetDetails() {
  const [selected, setSelected] = useState(0);
  const list = ["All", "Transactions", "Bid", "Asks"];
  return (
    <section className="container mx-auto">
      <div className="flex justify-between py-7">
        <div>
          <h2 className=" capitalize text-4xl tracking-tight text-zinc-700 font-medium">
            <span className=" text-3xl font-normal text-neutral-400  tracking-tight">
              About
            </span>
            <span> Wine asset details</span>
          </h2>
        </div>
        <div className="flex text-bgsecondary">
          <button
            type="button"
            className="tracking-tight text-sm w-48 py-2 px-4 text-left items-center flex justify-between text-spacegray shadow-none  border focus:ring-0 focus:outline-none focus:ring-gray-100 font-medium rounded-lg "
          >
            See product overview
          </button>
        </div>
      </div>

      <div className="mt-7">
        <div className="grid gap-4 md:gap-10 md:grid-cols-8 grid-cols-4">
          <div className=" md:col-span-5 col-span-4 px-4 md:px-6">
            <div className="flex items-center pb-6">
              <div className="basis-1/4">
                <h2 className="text-black text-lg font-semibold tracking-tight">
                  Pricing history
                </h2>
              </div>
              <div className="basis-4/5 ">
                <hr className=" border border-black" />
              </div>
            </div>

            <div>
              {/* first box */}
              <div className=" flex justify-between bg-white rounded-tl rounded-tr border border-black items-center gap-0.5 p-4">
                <div className="flex text-bgsecondary">
                  <p className="flex gap-4 items-center">
                    <span className="text-lg text-gray-500  font-normal">
                      On the market are
                    </span>
                    <span className=" text-2xl font-bold text-gray-500">
                      243
                    </span>
                    <span className="text-lg grow shrink basis-0 text-gray-500 font-normal">
                      editions of this product
                    </span>
                  </p>
                </div>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                    />
                  </svg>
                </span>
              </div>

              <div className=" grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1">
                <div className=" grid gap-0 lg:grid-cols-1 md:grid-cols-1 grid-cols-1">
                  <div className=" flex justify-between items-center border-t-2 border-x-2 border-gray-500 gap-2.5 px-5 py-2.5">
                    <h2 className="text-sm text-gray-500 font-medium uppercase tracking-tight">
                      Release Price{" "}
                    </h2>
                    <div className="flex gap-2">
                      <Image
                        src={infologo}
                        alt="Picture of the author"
                        className=" w-6 h-6"
                      />
                      <p className=" text-lg font-semibold text-gray-500 tracking-tight">
                        €38,888
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-between items-center border-t-2 border-x-2 border-gray-500 gap-2.5 px-5 py-2.5">
                    <h2 className="text-sm text-gray-500 font-medium uppercase tracking-tight">
                      Average MARKET PRICE
                    </h2>
                    <div className="flex gap-2">
                      <Image
                        src={infologo}
                        alt="Picture of the author"
                        className=" w-6 h-6"
                      />

                      <p className=" text-lg font-semibold text-gray-500 tracking-tight">
                        €48,888
                      </p>
                    </div>
                  </div>

                  {/* second box */}
                  <div className=" flex justify-between items-center border-t-2 border-x-2 border-gray-500 gap-2.5 px-5 py-2.5">
                    <div>
                      <h2 className=" text-sm font-bold text-gray-500 uppercase tracking-tight">
                        Highest Price
                      </h2>
                      <h2 className=" text-sm font-normal text-gray-500 tracking-tight">
                        ever transacted for product
                      </h2>
                    </div>
                    <p className=" text-lg font-semibold text-gray-500 tracking-tight">
                      €68,888
                    </p>
                  </div>
                  <div className=" border-x-2 border-b-2 p-4 bg-typegray border-typegray text-white flex justify-between items-center gap-2.5 px-5 py-2.5">
                    <div>
                      <h2 className=" text-sm font-bold text-white  uppercase tracking-tight">
                        Price Change
                      </h2>
                      <h2 className=" text-sm font-normal text-white tracking-tight">
                        since first release
                      </h2>
                    </div>
                    <p className=" text-lg font-semibold text-white  tracking-tight">
                      + 66.6%↑
                    </p>
                  </div>
                </div>
                {/* column two */}
                <div className=" grid gap-0 lg:grid-cols-1 md:grid-cols-1 grid-cols-1">
                  <Appactivity />
                </div>
              </div>
            </div>
          </div>
          {/* second box */}
          <div className="md:col-span-3 col-span-4 px-4 md:px-6">
            <div className="flex items-center pb-6 gap-10">
              <h2 className="basis-1/2 text-black text-lg font-semibold tracking-tight">
                Transactions history
              </h2>
              <hr className=" basis-1/2 border border-black" />
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
            <div className="flex justify-between mx-auto     py-5">
              <div className="">
                <ul
                  className="flex flex-wrap font-medium text-center bg-zinc-100 rounded-lg"
                  id="default-tab"
                  data-tabs-toggle="#default-tab-content"
                  role="tablist"
                >
                  {list.map((l, i) => {
                    return (
                      <li
                        key={i}
                        className="text-center text-zinc-700 text-xxs font-medium"
                        role="presentation"
                      >
                        <button
                          onClick={() => setSelected(i)}
                          className={`px-8 py-1.5 rounded-lg   ${
                            selected == i ? "bg-white shadow-md" : ""
                          } `}
                          id="profile-tab"
                          data-tabs-target="#profile"
                          type="button"
                          role="tab"
                          aria-controls="profile"
                          aria-selected="false"
                        >
                          {l}
                        </button>
                      </li>
                    );
                  })}
                </ul>
                <div className="pt-6">
                  <div className="flow-root">
                    <ul role="list" className=" space-y-3">
                      <li className="flex justify-between ">
                        <div className="flex-col inline-flex">
                          <p className="text-neutral-900 text-xs font-medium ">
                            @Marta
                          </p>
                          <div className="pl-2.5 border-l border-black border-opacity-30 justify-start items-center gap-2 inline-flex">
                            <p className="opacity-60 text-right text-black text-xs font-normal uppercase tracking-tight">
                              place a Bid
                            </p>
                            <div className="border-l justify-start items-start gap-2.5 flex">
                              <p className="text-justify text-neutral-900 text-xs font-medium ">
                                50 560 EUR
                              </p>
                            </div>
                          </div>
                          <div className="px-2.5 pb-1 border-l border-black border-opacity-40 justify-start items-center gap-2 inline-flex">
                            <p className="text-justify text-neutral-400 text-xxs font-normal ">
                              5 minutes ago
                            </p>
                          </div>
                        </div>
                        <div className="flex-shrink-0">
                          <Image
                            src={logo}
                            alt="Picture of the author"
                            className="w-5"
                          />
                        </div>
                      </li>
                      <li className="flex justify-between ">
                        <div className="flex-col inline-flex">
                          <p className="text-neutral-900 text-xs font-medium ">
                            @Jo_azja
                          </p>
                          <div className="pl-2.5 border-l border-black border-opacity-30 justify-start items-center gap-2 inline-flex">
                            <p className="opacity-60 text-right text-black text-xs font-normal uppercase tracking-tight">
                              buy for
                            </p>
                            <div className="border-l justify-start items-start gap-2.5 flex">
                              <p className="text-justify text-neutral-900 text-xs font-medium ">
                                €49,550
                              </p>
                            </div>
                          </div>
                          <div className="px-2.5 pb-1 border-l border-black border-opacity-40 justify-start items-center gap-2 inline-flex">
                            <p className="text-justify text-neutral-400 text-xxs font-normal ">
                              Yesterday | 3:45 AM
                            </p>
                          </div>
                        </div>
                        <div className="flex-shrink-0">
                          <Image
                            src={logo1}
                            alt="Picture of the author"
                            className=" w-7"
                          />
                        </div>
                      </li>
                      <li className="flex justify-between ">
                        <div className="flex-col inline-flex">
                          <p className="text-neutral-900 text-base font-medium">
                            @buyer_1234_5432
                          </p>
                          <div className="pl-2.5 border-l border-black border-opacity-30 justify-start items-center gap-2 inline-flex">
                            <p className="opacity-60 text-right text-black text-xs font-normal uppercase">
                              buy for
                            </p>
                            <div className="border-l justify-start items-start gap-2.5 flex">
                              <p className="text-neutral-900 text-xs font-medium">
                                €46,560
                              </p>
                            </div>
                          </div>
                          <div className="px-2.5 pb-1 border-l border-black border-opacity-40 justify-start items-center gap-2 inline-flex">
                            <p className="text-justify text-neutral-400 text-xxs font-normal">
                              Yesterday | 3:45 AM
                            </p>
                          </div>
                        </div>
                        <div className="flex-shrink-0">
                          <Image
                            src={logo2}
                            alt="Picture of the author"
                            className=" w-12"
                          />
                        </div>
                      </li>
                      <li className="flex justify-between ">
                        <div className="flex-col inline-flex">
                          <p className="text-neutral-900 text-xs font-medium">
                            @buyer_1234_5432
                          </p>
                          <div className="pl-2.5 border-l border-black border-opacity-30 justify-start items-center gap-2 inline-flex">
                            <p className="opacity-60 text-right text-black text-xs font-normal uppercase">
                              place a Bid
                            </p>
                            <div className="border-l justify-start items-start gap-2.5 flex">
                              <p className="text-neutral-900 text-xs font-medium">
                                €46,560
                              </p>
                            </div>
                          </div>
                          <div className="px-2.5 pb-1 border-l border-black border-opacity-40 justify-start items-center gap-2 inline-flex">
                            <p className="text-justify text-neutral-400 text-xxs font-normal">
                              Sep 30, 2023 | 2:45 AM
                            </p>
                          </div>
                        </div>
                        <div className="flex-shrink-0">
                          <Image
                            src={logo2}
                            alt="Picture of the author"
                            className=" w-7"
                          />
                        </div>
                      </li>
                      <li className="flex justify-between ">
                        <div className="flex-col inline-flex">
                          <p className="text-neutral-900 text-xs font-medium">
                            @Victorian
                          </p>
                          <div className="pl-2.5 border-l border-black border-opacity-30 justify-start items-center gap-2 inline-flex">
                            <p className="opacity-60 text-right text-black text-xs font-normal uppercase">
                              place a Bid
                            </p>
                            <div className="border-l justify-start items-start gap-2.5 flex">
                              <p className="text-neutral-900 text-xs font-medium">
                                46 360 EUR
                              </p>
                            </div>
                          </div>
                          <div className="px-2.5 pb-1 border-l border-black border-opacity-40 justify-start items-center gap-2 inline-flex">
                            <p className="text-justify text-neutral-400 text-xxs font-normal">
                              Sep 24, 2023 | 3:45 PM
                            </p>
                          </div>
                        </div>
                        <div className="flex-shrink-0">
                          <Image
                            src={logo3}
                            alt="Picture of the author"
                            className=" w-7"
                          />
                        </div>
                      </li>
                      <li className="flex justify-between ">
                        <div className="flex-col inline-flex">
                          <p className="text-neutral-900 text-xs font-medium">
                            @Victorian
                          </p>
                          <div className="pl-2.5 border-l border-black border-opacity-30 justify-start items-center gap-2 inline-flex">
                            <p className="opacity-60 text-right text-black text-xs font-normal uppercase">
                              Ask for
                            </p>
                            <div className="border-l justify-start items-start gap-2.5 flex">
                              <p className="text-neutral-900 text-xs font-medium">
                                €46,560
                              </p>
                            </div>
                          </div>
                          <div className="px-2.5 pb-1 border-l border-black border-opacity-40 justify-start items-center gap-2 inline-flex">
                            <p className="text-justify text-neutral-400 text-xxs font-normal">
                              Sep 23, 2023 | 3:45 PM
                            </p>
                          </div>
                        </div>
                        <div className="flex-shrink-0">
                          <Image
                            src={logo4}
                            alt="Picture of the author"
                            className=" w-7 border rounded-2xl p-1"
                          />
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
