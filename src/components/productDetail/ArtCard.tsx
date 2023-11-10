import Image from "next/image";
import React from "react";
import marketart from "@/assets/icon/marketart.svg";
export default function ArtCard() {
  return (
    <div>
      <div className="bg-white py-1">
        <div>
          <div className="flex py-3 gap-3">
            <div className="w-2/6 text-end uppercase text-xs">
              <span className=" text-spacegray ">First release DaTE</span>
            </div>
            <div className="flex space-x-2 border-s ps-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-4 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                />
              </svg>
              <span className="font-bold text-base text-spacegray">
                Sep 29, 2023
              </span>
            </div>
          </div>
          <div className="flex py-3 gap-3">
            <div className="w-2/6 text-end text-sm">
              <span className=" text-spacegray ">Original Art</span>
              <div className=" flex justify-end">
                <Image
                  src={marketart}
                  alt="Picture of the author"
                  width={20}
                  height={20}
                />
              </div>
            </div>
            <div className="flex space-x-2 border-s ps-3">
              <a href="#">
                <p className=" font-medium italic text-base text-black">
                  Stop Breathing, White_2Stripes_black_blue
                </p>
                <p className=" font-medium text-base text-spacegray">
                  WP Nr.1 Screen print on paper 31x 41 cm 2022
                </p>
              </a>
            </div>
          </div>
          <div className="flex py-3 gap-3">
            <div className="w-2/6 text-end uppercase text-xs">
              <span className=" text-spacegray ">Artist</span>
            </div>
            <div className="border-s ps-3">
              <p className=" font-semibold text-base text-black">
                Lola Designer Fun
              </p>
              <p className=" font-normal text-base text-spacegray">
                Designer, Painter, Social Media Surfer
              </p>
            </div>
          </div>
          <div className="grid lg:grid-cols-3 py-3 gap-4 ps-3">
            <div className=" text-end uppercase text-xs">
              <span className=" text-spacegray ">Description</span>
            </div>
            <div className="col-span-2 border-s ps-3">
              <span className=" font-normal text-base text-spacegray">
                Reso consciously breaks with traditional reading habits and
                offers viewers a completely new image of typography. He no
                longer arranges the letters classically from left to right and
                one behind the other, but allows them to merge into constructs
                of form in order to provide viewers with new visual experiences.
              </span>
            </div>
          </div>

          <div className="flex  px-6 py-2 mt-6 bg-white justify-between items-start gap-6 text-bgfirstary">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-5 h-5 text-iconcolor mx-auto"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
              <p className=" text-zinc-700 text-sm font-medium tracking-tight">
                Favorite
              </p>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-5 h-5 text-iconcolor mx-auto"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
                />
              </svg>
              <p className="text-zinc-700 text-sm font-medium tracking-tight">
                Share
              </p>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-5 h-5 text-iconcolor mx-auto"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <p className=" text-zinc-700 text-sm font-medium tracking-tight">
                999
              </p>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-5 h-5 text-iconcolor mx-auto"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
                />
              </svg>
              <p className=" text-zinc-700 text-sm font-medium tracking-tight">
                999
              </p>
            </div>
            <button
              type="button"
              className="text-gray-500 text-base font-medium tracking-tight rounded-lg w-44 px-4 py-2.5 text-center flex justify-center items-center bg-white border border-gray-200 focus:ring-0 focus:outline-none focus:ring-gray-100 mr-2"
            >
              See More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-5 h-5 ms-2 text-iconcolor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                />
              </svg>
            </button>
          </div>
          <hr />
          <div className="flex justify-between items-center pt-4 py-1 px-5">
            <div className=" uppercase items-center flex gap-3 ps-3">
              <p className="opacity-60 text-right text-black text-xs font-normal uppercase tracking-tight">
                Vinesia price
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-iconcolor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                />
              </svg>
              <p className=" text-xl font-semibold text-spacegray ">€68,888</p>
            </div>
            <div>
              <button
                type="button"
                className="text-white bg-gray-500 focus:ring-0 focus:outline-none font-medium rounded-lg text-base w-48 px-4 py-2.5 text-center items-center mr-2 mb-2"
              >
                Invest now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
