import Image from "next/image";
import React from "react";
import bottlePic from "../../assets/image/image 25.png";
import { BeakerIcon } from "@heroicons/react/24/solid";
const Available = () => {
  return (
    <div>
      <h3>Available Soon</h3>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2 h-80">
        <div className="bg-availableGray  flex justify-end items-end">
          <div className="m-4">
            <BeakerIcon className="h-6 w-6 text-blue-500" />
            <p className="font-bold">Text about drop</p>
            <p>Date</p>
          </div>
          <div className=" flex justify-end m-4">
            <Image
              src={bottlePic}
              alt="Picture of the author"
              width={150}
              height={150}
            />
            <Image
              src={bottlePic}
              alt="Picture of the author"
              width={150}
              height={150}
            />
            <Image
              src={bottlePic}
              alt="Picture of the author"
              width={150}
              height={150}
            />
          </div>
        </div>

        <div className="max-w-xl lg:max-w-lg">
          {/* <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Subscribe to our newsletter.
          </h2> */}
          <p className="  text-lg leading-8  ">
            Soon you will be able to invest in new wines. Sign up for the
            waiting list to get notified.
          </p>
          <div className="mt-6 flex max-w-md gap-x-4">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="w-full rounded-md border  border-gray-200 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10    sm:text-sm sm:leading-6"
              placeholder="placeholder"
            />
          </div>
          <div className="relative flex gap-x-3">
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
            className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Available;
