import Image from "next/image";
import React from "react";
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
import infologo from "@/assets/icon/info.svg";
export default function PeaceOfMind() {
  return (
    <section className=" py-14">
      <div className="container mx-auto">
        <h2 className=" capitalize text-3xl font-semibold">
          <span className=" text-typegray text-3xl font-normal">our</span> peace
          of mind pledge
        </h2>
        <p className=" text-base font-medium w-11/12 pt-4">
          “Investor Peace of Mind” is a core principle at Vinesia. It
          encapsulates our commitment to providing a secure, transparent, and
          hassle-free investment experience. Here’s what it entails:
        </p>

        <div className="md:basis-3/5 basis-full z-0 pt-10">
          <div className="container grid mx-auto gap-6 lg:grid-cols-4">
            <div className="max-w-md bg-themegray flex items-center justify-between p-4">
              <div>
                <p className="text-base font-bold text-gray-900 truncate dark:text-white">
                  Proof
                </p>
                <p className="text-base font-bold text-gray-900 truncate dark:text-white pb-4">
                  of authenticity
                </p>
                <hr className=" border-t-2" />
              </div>
              <div>
                <Image src={Vector} alt="Picture of the author" width={70} />
              </div>
            </div>

            <div className="max-w-md bg-themegray flex items-center justify-between p-4">
              <div className="flex-1">
                <p className="text-base font-bold text-gray-900 truncate dark:text-white">
                  Proof
                </p>
                <p className="text-base font-bold text-gray-900 truncate dark:text-white pb-4">
                  of ownership
                </p>
                <hr className=" border-t-2" />
              </div>
              <div>
                <Image src={ownership} alt="Picture of the author" width={70} />
              </div>
            </div>

            <div className="max-w-md bg-themegray flex items-center justify-between p-4">
              <div className="flex-1">
                <p className="text-base font-bold text-gray-900 truncate dark:text-white">
                  Proof of
                </p>
                <p className="text-base font-bold text-gray-900 truncate dark:text-white pb-4">
                  storage conditions
                </p>
                <hr className=" border-t-2" />
              </div>
              <div>
                <Image
                  src={frame}
                  alt="Picture of the author"
                  width={70}
                  className=""
                />
              </div>
            </div>

            <div className="max-w-md bg-themegray flex items-center justify-between p-4">
              <div className="flex-1">
                <p className="text-base font-bold text-gray-900 truncate dark:text-white pb-4">
                  See our video
                </p>
                <hr className=" border-t-2" />
              </div>
              <div>
                <Image
                  src={playvideo}
                  alt="Picture of the author"
                  width={120}
                  className=""
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center pt-7">
            <button
              type="button"
              className="text-white bg-spacegray focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-6 py-2.5 text-center"
            >
              Invest now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}