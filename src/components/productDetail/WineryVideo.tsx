import React from "react";

export default function WineryVideo() {
  return (
    <div>
      <section className=" pt-7 px-4 lg:px-6 md:px-4">
        <div className=" container mx-auto">
          <h2 className=" capitalize text-4xl font-medium text-zinc-700 tracking-tight">
            Wineries
          </h2>
        </div>

        <div className="container mt-5  items-center grid  gap-5 grid-cols-1 md:grid-cols-3 mx-auto py-1 border-bordergray ">
          {[1, 2, 3].map((d, i) => {
            return (
              <div
                key={i}
                className=" h-[276px] bg-gray-50 border-2 border-zinc-500 items-center ps-6 relative "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 absolute right-1/2 left-1/2 bottom-1/2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
                  />
                </svg>

                <div className=" grid grid-cols-2 h-full">
                  <div className="flex items-center">
                    <span className="text-black text-3xl font-semibold text-wrap w-full md:w-32">
                      Château Le Pin
                    </span>
                  </div>
                  <div className="flex items-end justify-end pe-10 pb-5">
                    <button className="text-white text-base font-medium px-4 py-2.5 bg-gray-500 rounded-lg">
                      Explore
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
