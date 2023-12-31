import Image from "next/image";
import React from "react";
import bottlePic from "../../assets/image/image25.png";
import moment from "moment";
const Available = ({ data }: { data: any }) => {
  return (
    <div className="md:py-16 py-5">
      <h1 className="text-primary font-semibold  tracking-tight text-xxl pb-4">
        Available Soon
      </h1>
      <div className="mx-auto gap-x-10 md:flex sm:grid sm:grid-cols-1">
        <div className="bg-bgprimary md:py-8 py-8 text-end grid grid-cols-5 md:w-7/12">
          <div className="mb-8 text-black  tracking-tight flex flex-col justify-end">
            {data?.map((d: any, i: any) => {
              return (
                <div key={i}>
                  <p className="  text-sm font-bold  ">{d?.name}</p>
                  <p className=" text-base font-medium ">
                    {" "}
                    {moment(d?.date).format("DD MMM YYYY")}{" "}
                  </p>
                </div>
              );
            })}
          </div>
          <div className=" flex justify-end m-4 col-span-4">
            <Image
              src={bottlePic}
              alt="Picture of the author"
              quality={75}
              className="mb-3 w-full"
            />
          </div>
        </div>

        <div className="max-w-xl lg:max-w-lg md:px-5 ">
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
                Subscribe
              </label>
            </div>
          </div>

          <div className=" mt-6 px-4 py-2.5 bg-gray-500 rounded-lg justify-center items-center gap-2 inline-flex">
            <button className="text-white text-base font-medium tracking-tight">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Available;
