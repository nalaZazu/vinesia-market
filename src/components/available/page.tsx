import Image from "next/image";
import React from "react";
import bottlePic from "../../assets/image/image25.png";
const Available = () => {
  return (
    <div>
    <h1 className="text-primary font-semibold  tracking-tight text-xxl">
      Available Soon
    </h1>
    <div className="mx-auto gap-x-10 md:flex sm:grid sm:grid-cols-1">
        <div className="bg-bgprimary md:py-8 py-8  flex justify-end items-end md:w-7/12">
          <div className="mb-8 text-black  tracking-tight">
            <p className="  text-sm font-bold  ">Text about drop</p>
            <p className=" text-base font-medium ">Date</p>
          </div>
          <div className=" flex justify-end m-4">
            <Image
              src={bottlePic}
              alt="Picture of the author"
              // width={400}
              // height={350}
              style={{objectFit: "contain"}}
              quality={75}
              className="mb-3"

            />
          </div>
        </div>

        <div className="max-w-xl lg:max-w-lg md:px-5 md:py-8 py-8">
          <p className="  text-black text-lg font-semibold  tracking-tight  w-[74%]">
            Soon you will be able to invest in new wines. Sign up for the
            waiting list to get notified.
          </p>

          <div className="mt-6  max-w-md gap-x-4">
            <label
              htmlFor="email-address"
              className="text-black  text-base font-normal tracking-tight"
            >
              Email address <span className="text-red-600">*</span>
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="w-full rounded-md border  border-gray-200 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10    sm:text-sm sm:leading-6  "
              placeholder="placeholder"
            />
          </div>
          <div className="relative flex gap-x-3 mt-6">
            <div className="flex h-6 items-center">
              <input
                id="offers"
                name="offers"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600  "
              />
            </div>
            <div className="text-sm leading-6">
              <label htmlFor="offers" className="font-medium text-gray-900">
                Label
              </label>
            </div>
          </div>

          <div className=" mt-6 px-4 py-2.5 bg-gray-500 rounded-lg justify-center items-center gap-2 inline-flex">
            <button className="text-white text-base font-medium tracking-tight">
              Subscribe
            </button>
          </div>
          {/* 
          <button
            type="submit"
            className="flex-none  rounded-md bg-bgsecondary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bgsecondary cursor-pointer"
          >
            Subscribe
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Available;
