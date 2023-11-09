import Image from "next/image";
import React from "react";
import play from "@/assets/icon/Play_Circle.svg";
import arrow from "@/assets/icon/arrow-right2.svg";
import Link from "next/link";
const ExploreRegion = () => {
  return (
    <div>
      <section className="container mx-auto">
        <div className="py-10">
          <h1 className="text-primary font-semibold  tracking-tight text-xxl">
            Explore by region
          </h1>
        </div>
        <div className=" grid lg:grid-cols-6 gap-4">
          {/* column one */}
          <div className="border border-[#7c7b83] h-[21rem] items-end justify-left p-3">
            <div className="flex items-end justify-center h-1/2">
              <Image src={play} alt="play-button" />
            </div>
            <div className=" flex items-end justify-left h-1/2">
              <h1 className=" text-black text-xxl font-semibold tracking-tight">
                France
              </h1>
            </div>
          </div>

          {/* column two */}

          <div className=" h-[21rem] items-end justify-left p-3">
            <div>
              <ul className="text-secondary text-sm font-normal   leading-[49px] tracking-tight">
                <Link href="/">
                  <li className="flex items-center justify-between">
                    <span>Bordeaux</span>
                    <span>
                      <Image src={arrow} alt="arrow" />
                    </span>
                  </li>
                </Link>

                <Link href="/">
                  <li className="flex items-center justify-between">
                    <span>Burgundy</span>
                    <span>
                      <Image src={arrow} alt="arrow" />
                    </span>
                  </li>
                </Link>

                <Link href="/">
                  <li className="flex items-center justify-between">
                    <span>Champagne</span>
                    <span>
                      <Image src={arrow} alt="arrow" />
                    </span>
                  </li>
                </Link>

                <Link href="/">
                  <li className="flex items-center justify-between">
                    <span>Rhône</span>
                    <span>
                      <Image src={arrow} alt="arrow" />
                    </span>
                  </li>
                </Link>

                <Link href="/">
                  <li className="flex items-center justify-between">
                    <span>Alsace</span>
                    <span>
                      <Image src={arrow} alt="arrow" />
                    </span>
                  </li>
                </Link>
              </ul>
            </div>
          </div>

          {/* column two */}
          <div className="col-span-2 flex flex-col gap-4">
            <div className="border  border-[#7c7b83] h-40 items-end justify-left p-3 ">
              <div className="flex items-end justify-center h-1/2">
                <Image src={play} alt="play-button" />
              </div>
              <div className=" flex items-end justify-left h-1/2">
                <h1 className="text-black text-xxl font-semibold  tracking-tight ">
                  Germany
                </h1>
              </div>
            </div>
            <div className="border  border-[#7c7b83] h-40 items-end justify-left p-3  ">
              <div className="flex items-end justify-center h-1/2">
                <Image src={play} alt="play-button" />
              </div>
              <div className=" flex items-end justify-left h-1/2">
                <h1 className="text-black text-xxl font-semibold  tracking-tight ">
                  Switzerland
                </h1>
              </div>
            </div>
          </div>

          {/* column two */}
          <div className="flex flex-col gap-4">
            <div className="border  border-[#7c7b83] h-40 items-end justify-left p-3  ">
              <div className="flex items-end justify-center h-1/2">
                <Image src={play} alt="play-button" />
              </div>
              <div className=" flex items-end justify-left h-1/2">
                <h1 className="text-black text-xxl font-semibold  tracking-tight ">
                  Italy
                </h1>
              </div>
            </div>

            {/* next div */}
            <div className="border  border-[#7c7b83] h-40 items-end justify-left p-3  ">
              <div className="flex items-end justify-center h-1/2">
                <Image src={play} alt="play-button" />
              </div>
              <div className=" flex items-end justify-left h-1/2">
                <h1 className="text-black text-xxl font-semibold  tracking-tight ">
                  USA
                </h1>
              </div>
            </div>
          </div>
          {/* link colum */}
          <div className=" items-end justify-left p-3">
            <div>
              <ul className="text-secondary text-sm font-normal   leading-[49px] tracking-tight">
                <Link href="/">
                  <li className="flex items-center justify-between">
                    <span>Tuscany</span>
                    <span>
                      <Image src={arrow} alt="arrow" />
                    </span>
                  </li>
                </Link>

                <Link href="/">
                  <li className="flex items-center justify-between">
                    <span>Piedmont</span>
                    <span>
                      <Image src={arrow} alt="arrow" />
                    </span>
                  </li>
                </Link>
              </ul>
            </div>

            <div className=" items-end justify-left p-3">
              <div>
                <ul className="text-secondary text-sm font-normal   leading-[49px] tracking-tight">
                  <Link href="/">
                    <li className="flex items-center justify-between">
                      <span>Tuscany</span>
                      <span>
                        <Image src={arrow} alt="arrow" />
                      </span>
                    </li>
                  </Link>

                  <Link href="/">
                    <li className="flex items-center justify-between">
                      <span>Piedmont</span>
                      <span>
                        <Image src={arrow} alt="arrow" />
                      </span>
                    </li>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
          {/* next link comlum */}
        </div>
      </section>
    </div>
  );
};
export default ExploreRegion;
