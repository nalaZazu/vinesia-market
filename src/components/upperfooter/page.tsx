import React from "react";

const UpperFooter = () => {
  return (
    <>
      {/* Be the first to know start */}
      <section className="px-4 lg:px-0 md:px-4 pt-16">
        <div className=" flex lg:justify-end lg:items-center">
          <div className="lg:w-1/3 w-full bg-themegray p-3 lg:border-y-2 lg:border-l-2  border-spacegray  lg:rounded-s-md rounded">
            <div className="flex justify-between w-full lg:max-w-sm max-w-full mx-auto">
              <h2 className=" font-semibold text-2xl">Be the first to know </h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
            <div className=" flex pt-3 ">
              <form className="flex gap-5 mx-auto">
                <div>
                  <div className="flex">
                    <input
                      className=" text-base w-[265px] bg-transparent outline-none border-2 px-4 py-2 rounded-lg focus:ring-0 focus:outline-none"
                      type="text"
                      placeholder="Add email to join newsletter"
                      aria-label="Full name"
                    />
                  </div>
                  <div className="md:flex md:items-start pt-3">
                    <label className="block text-gray-500 font-bold  space-x-3">
                      <input className=" leading-tight" type="checkbox" />
                      <span className=" text-sm">I agree to...</span>
                    </label>
                  </div>
                </div>
                <div>
                  <button
                    type="button"
                    className="text-white bg-spacegray focus:ring-0 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-base px-6 py-2.5 text-center"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* Be the first to know end */}
    </>
  );
};

export default UpperFooter;
