import Image from "next/image";
import React, { useState } from "react";
import img1 from "../../assets/image/image1.png";
import img2 from "../../assets/image/image 23.png";
import arrow from "../../assets/icon/arrow-right.svg";
import alert from "../../assets/icon/alert-circle.svg";
import arrowleft from "../../assets/image/arrow slide left.png";
import wine from "../../assets/image/group2.png";
import signature from "../../assets/image/Zrzut ekranu 2023-10-1 o 11.17 1.png";
import alert from "../../assets/image/alert-circle.png";
import { NextIcon, PrevIcon } from "@/assets/icon/Icons";
const Critics = ({ data }: { data: any }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  console.log("Critics Data ", data);

  return (
    <div className="py-16 sm:py-24">
      {/* critics-section */}
      <h1 className="text-primary font-semibold text-3xl leading-10">
        Critics selection
      </h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2 items-center">
        <div className=" flex">
          <ul className=" text-secondary text-lg font-semibold  tracking-tight ">
            {data?.map((critics: any, i: any) => {
              return (
                <li
                  key={i}
                  onClick={() => setSelectedTab(i)}
                  className=" mt-4 grid grid-cols-6 gap-2 items-center cursor-pointer"
                >
                  <span className=" text-xxl font-semibold  tracking-tight  text-primary">
                    {i + 1}
                  </span>
                  <div className=" col-span-4 pe-3">
                    <div className="">{critics?.name}</div>
                    <div> {critics?.vintage} </div>
                  </div>
                  {
                    <div>
                      {i == selectedTab && (
                        <div className="w-8 h-8 flex mx-auto bg-neutral-200 rounded-full border-2 border-black text-center items-center">
                          <span className="mx-auto">
                            <NextIcon />
                          </span>
                        </div>
                      )}
                    </div>
                  }
                </li>
              );
            })}
          </ul>
        </div>

        <div className="col-span-2 ">
          {/* imageand text */}
          {data?.map((detail: any, i: any) => {
            return (
              <div key={i}>
                {i == selectedTab && (
                  <div className="flex">
                    <div>
                      <Image src={wine} alt="image" className="mr-2" />
                    </div>
                    <ul className=" md:w-2/3 px-4  text-base font-medium   tracking-tight flex flex-col justify-between">
                      {detail?.description}
                      <div className="text-center">
                        {/* <button className="py-2.5 px-4 mt-3 border border-bgsecondary  text-bgsecondary rounded-lg   text-base font-medium   tracking-tight">
                          Invest now
                        </button> */}

                        <button className="w-[108px] h-10 px-4 py-2.5 rounded-lg border border-gray-500 justify-center items-center gap-2 inline-flex">
                          <div className="text-gray-500 text-base font-medium tracking-tight">
                            Invest now
                          </div>
                        </button>
                      </div>
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        {/* text portion */}
        <div className=" ">
          {data?.map((d: any, i: any) => {
            return (
              <div key={i}>
                {i == selectedTab && (
                  <div>
                    <h2 className="  flex text-secondary text-sm font-normal  tracking-tight">
                      Score
                      <Image
                        src={alert}
                        alt="Picture of the author"
                        width={15}
                        height={15}
                        quality={75}
                        style={{ objectFit: "contain" }}
                        className="ml-2"
                      />
                    </h2>
                    <div className="flex flex-col ">
                      <span className="font-semibold  text-secondary text-xxl  tracking-tight">
                        {d?.rating}/{d?.maxRating}
                      </span>
                      <span className="text-base font-medium mt-5   text-secondary  tracking-tigh">
                        by {d?.ratingBy}
                      </span>
                    </div>
                    <span>
                      <Image src={signature} alt="signature" />
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="grid lg:grid-cols-4">
        <div className="flex-1 md:py-16 py-4">
          <Image src={img1} alt="image" />
        </div>
        <div className="col-span-3">
          <div className="grid md:grid-cols-2">
            <div className=" pl-5 md:py-16 py-4">
              <h1 className="text-primary text-xxl font-semibold tracking-tight">
                Wine & art collections
              </h1>
              <p className="w-[400px] text-base font-medium   tracking-tight">
                Collections are carefully curated around specific themes,
                featuring exceptional wines from prestigious wineries worldwide.
                Each collection is a celebration of the finest vintages,
                thoughtfully selected by our team of experts. Some of our
                collections also include captivating artwork from the renowned
                artist Reso, adding an artistic touch to the wine collections
                you invest in.
              </p>
              <div className="flex">
                <button className="py-2.5 px-4 mt-3 bg-bgsecondary text-white rounded-lg  ">
                  Start Exploring
                </button>
                <button className="py-2.5 px-4 gap-3 ml-2  text-bgsecondary rounded-lg  font-medium text-base flex items-center ">
                  Meet the artist
                  <Image src={arrow} alt="arrow" />
                </button>
              </div>
            </div>
            <div className="md:py-16 py-4">
              <Image
                className="mx-auto max-w-[100%] h-auto"
                src={img2}
                alt="image"
                style={{ objectFit: "contain" }}
                quality={75}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Critics;
