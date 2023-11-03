import React from "react";
const ExploreRegion = () => {
  return (
    <div>
      <section className=" container mx-auto">
        <div className="py-10">
          <h1 className="text-primary font-semibold  tracking-tight text-xxl">
            Explore by region
          </h1>
        </div>
        <div className=" grid lg:grid-cols-6 gap-4">
          {/* column one */}
          <div className="border border-bordergray h-80 items-end justify-left p-3">
            <div className="flex items-end justify-center h-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-bordergray"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
                />
              </svg>
            </div>
            <div className=" flex items-end justify-left h-1/2">
              <h1 className=" font-semibold text-3xl ">France</h1>
            </div>
          </div>
          {/* column two */}
          <div className="border border-bordergray h-80 items-end justify-left p-3">
            <div className="flex items-end justify-center h-1/2"></div>
            <div className=" flex items-end justify-left h-1/2">
              <h1 className=" font-semibold text-3xl ">France</h1>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default ExploreRegion;
