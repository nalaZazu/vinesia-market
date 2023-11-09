import Image from "next/image";
import React, { useState } from "react";
import bottle from "@/assets/icon/bottle.svg";
import case1 from "@/assets/icon/Case.svg";
import redwine from "@/assets/icon/redwine.svg";
import big from "@/assets/icon/big.png";
import big1 from "@/assets/icon/big1.png";
import Vector from "@/assets/icon/Vector.svg";
import ownership from "@/assets/icon/ownership.svg";
import frame from "@/assets/icon/Frame.svg";
import playvideo from "@/assets/icon/Playvideo.svg";
import logo1 from "@/assets/icon/logo1.svg";
import award from "@/assets/icon/award.svg";
import infologo from "@/assets/icon/info.svg";
import { Wine, releaseDetails, rating } from "@/propTypes/page";
import WineCard from "./WineCard";
import ArtCard from "./ArtCard";

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
  console.log("Wine ", wine);
  console.log("rating ", rating);
  return (
    <section className="bg-themegray mt-5 px-4">
      <div className="container grid md:max-w-6xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-2">
        {/* second section start */}
        <div className=" md:col-span-2 lg:col-span-1">
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
        {/* second section end */}
        {/* slider start */}
        <div>
          <div className=" justify-center items-center">
            <div className="relative">
              <Image src={big1} alt="Picture of the author" className="" />
              <span className="flex justify-center absolute -bottom-10 left-10">
                <div className="flex bg-white items-center gap-5 py-2 px-5 text-spacegray shadow-md rounded-md">
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
                      d="M15.75 19.5L8.25 12l7.5-7.5"
                    />
                  </svg>

                  <div>
                    <Image
                      src={big1}
                      alt="Picture of the author"
                      width={55}
                      className=" flex justify-center rounded-sm shadow-sm border border-spacegray"
                    />
                  </div>
                  <div>
                    <Image
                      src={big}
                      alt="Picture of the author"
                      width={55}
                      className=" flex justify-center rounded-sm shadow-sm border border-spacegray"
                    />
                  </div>
                  <div>
                    <Image
                      src={big1}
                      alt="Picture of the author"
                      width={55}
                      className=" flex justify-center rounded-sm shadow-sm border border-spacegray"
                    />
                  </div>
                  <div>
                    <Image
                      src={big}
                      alt="Picture of the author"
                      width={55}
                      className=" flex justify-center rounded-sm shadow-sm border border-spacegray"
                    />
                  </div>
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
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </div>
              </span>{" "}
            </div>{" "}
          </div>
        </div>
        {/* slider end */}
      </div>
    </section>
  );
};

export default OverviweTopSection;
