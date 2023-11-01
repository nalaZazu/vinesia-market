import Image from "next/image";
import React from "react";
import bottlePic from "../../assets/image/image25.png";
const Available = () => {
  return (
    <div className="py-16 sm:py-24">
             
      <h2 className="text-primary font-bold">Available Soon</h2>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-4 gap-y-8 lg:max-w-none lg:grid-cols-2 h-80">
        <div className="bg-bgprimary  flex justify-end items-end">
          <div className="mb-8">
            <p className="font-bold">Text about drop</p>
            <p>Date</p>
          </div>
          <div className=" flex justify-end m-4">
            <Image
              src={bottlePic}
              alt="Picture of the author"
              width={400}
              height={350}
              className="mb-3"
            />  
          </div>
        </div>

        <div className="max-w-xl lg:max-w-lg">
          
          <p className=" text-lg leading-8  font-bold w-9/12">
            Soon you will be able to invest in new wines. Sign up for the
            waiting list to get notified.
          </p>  
          
          <div className="mt-6  max-w-md gap-x-4">
          <label htmlFor="email-address" className="text-black text-base font-normal">
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

          <button
            type="submit"
            className="flex-none mt-6 rounded-md bg-bgsecondary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bgsecondary cursor-pointer"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Available;
