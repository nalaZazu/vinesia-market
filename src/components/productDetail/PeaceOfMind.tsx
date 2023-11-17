import Image from "next/image";
import React from "react";
import Vector from "@/assets/icon/Vector.svg";
import ownership from "@/assets/icon/ownership.svg";
import frame from "@/assets/icon/Frame.svg";
import playvideo from "@/assets/icon/Playvideo.svg";
import { useSelector } from "react-redux";
import arrow from "@/assets/icon/arrow-white.svg";

export default function PeaceOfMind() {
  const isAuthenticted = useSelector<any>(
    (state) => state?.account?.isAuthenticated
  );
  return (
    <section className=" py-14 px-4 md:px-4 lg:px-0">
      <div className="container mx-auto">
        <div className="flex justify-between items-center gap-5">
          <div className="basis-full md:basis-3/12">
            <h2 className=" capitalize text-2xl font-medium">
              <span className=" text-typegray font-normal">our </span> peace of
              mind pledge
            </h2>
          </div>
          <div className="basis-9/12 border"></div>
        </div>
        <p className=" text-base lg:w-4/6 pt-4">
          “Investor Peace of Mind” is a core principle at Vinesia. It
          encapsulates our commitment to providing a secure, transparent, and
          hassle-free investment experience. Here’s what it entails:
        </p>

        <div className=" flex-wrap md:basis-3/5 basis-full z-0 pt-10">
          <div className="container grid mx-auto gap-6 grid-cols-1 lg:grid-cols-4 md:grid-cols-2">
            <div className="bg-themegray flex items-center justify-between px-5  py-2">
              <div className="flex-1">
                <p className="text-base font-semibold text-gray-900 truncate">
                  Proof
                </p>
                <p className="text-base font-semibold text-gray-900 truncate  pb-3">
                  of authenticity
                </p>
                <hr className=" border-t-2" />
              </div>
              <div>
                <Image src={Vector} alt="Picture of the author" width={80} />
              </div>
            </div>
            <div className=" bg-themegray flex items-center justify-between px-5 py-2">
              <div className="flex-1">
                <p className="text-base font-semibold text-gray-900 truncate ">
                  Proof
                </p>
                <p className="text-base font-semibold text-gray-900 truncate  pb-3">
                  of ownership
                </p>
                <hr className=" border-t-2" />
              </div>
              <div>
                <Image src={ownership} alt="Picture of the author" width={80} />
              </div>
            </div>

            <div className=" bg-themegray flex items-center justify-between px-5 py-2">
              <div className="flex-1">
                <p className="text-base font-semibold text-gray-900 truncate ">
                  Proof of
                </p>
                <p className="text-base font-semibold text-gray-900 truncate  pb-3">
                  storage conditions
                </p>
                <hr className=" border-t-2" />
              </div>
              <div>
                <Image
                  src={frame}
                  alt="Picture of the author"
                  width={80}
                  className=""
                />
              </div>
            </div>

            <div className=" bg-themegray flex items-center justify-between px-5 py-2">
              <div className="flex-1">
                <p className="text-base font-semibold text-gray-900 truncate  pb-3">
                  See our video
                </p>
                <hr className=" border-t-2" />
              </div>
              <div>
                <Image
                  src={playvideo}
                  alt="Picture of the author"
                  width={130}
                  className=""
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center pt-7">
            {isAuthenticted ? (
              <div className="text-white bg-spacegray focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-6 py-2.5 text-center flex gap-1 items-center">
                <button type="button">See all certificates</button>
                <Image src={arrow} alt="arrow" />
              </div>
            ) : (
              <div className="text-white bg-spacegray focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-6 py-2.5 text-center flex gap-1 items-center">
                <button type="button"> Read more</button>
                <Image src={arrow} alt="arrow" />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
