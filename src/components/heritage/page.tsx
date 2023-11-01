import Image from "next/image";
import React from "react";
import winbottle from "../../assets/image/Frame1.png";
import backbg from "../../assets/image/bg.png";
import alert from "../../assets/image/alert-circle.png";
import HeritageTab from "../heritagetab/page";
const Heritage = () => {
  return (
    <div className="py-16 sm:py-24">
      <h1 className="font-semibold text-primary leading-10 text-4xl">Invest in heritage</h1>
      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="mx-auto max-w-2xl  lg:max-w-none  ">
          {/* <div className="mt-6  grid lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
        
          </div>   */}

          <div className="  grid lg:grid-cols-2 md:grid-cols-1 grid-cols-2 gap-4 md:gap-0">
            <div className="lg:mb-0 mb-6">
              <div className="lg:grid lg:grid-cols-2 md:grid-cols-1 grid-cols-2 lg:gap-8 md:gap-0">
                <div>
                  <Image
                    src={winbottle}
                    alt="Picture of the author"
                    className="mb-3"
                  />
                  <h4 className=" font-semibold  text-base	leading-6">
                    Brunello di Montalcino {`"Piaggione"`} | 2019
                  </h4>
                  <p className="flex text-xs  items-center font-medium">
                    6 bottles collection{" "}
                    <span className="ml-2">
                      <Image
                        src={alert}
                        alt="Picture of the author"
                        width={15}
                        height={15}
                        quality={75}
                      />
                    </span>
                  </p>
                  <span>
                    <p className="font-semibold text-xs">Owner</p>
                    <span className="inline-flex items-center rounded-md bg-[#842029] px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-[#842029]">
                      Vinesia
                    </span>
                  </span>
                  <hr className="my-4 text-[#C6C7C8] font-bold" />
                  <span>
                    <h3 className="font-semibold text-xs leading-4">BUY NOW</h3>
                    <h3 className="font-semibold text-lg">€3,600</h3>
                  </span>
                  <span className="flex font-medium text-xs">
                    <p>50 bottles</p>
                    <p className="text-[#959596] ml-3">50 remaining </p>
                  </span>
                </div>
                <div>
                  <Image
                    src={winbottle}
                    alt="Picture of the author"
                    className="mb-3"
                  />
                  <h4 className=" font-semibold  text-base	leading-6">
                    Brunello di Montalcino {`"Piaggione"`} | 2019
                  </h4>
                  <p className="flex text-xs  items-center font-medium">
                    6 bottles collection{" "}
                    <span className="ml-2">
                      <Image
                        src={alert}
                        alt="Picture of the author"
                        width={15}
                        height={15}
                        quality={75}
                      />
                    </span>
                  </p>
                  <span>
                    <p className="font-semibold text-xs">Owner</p>
                    <span className="inline-flex items-center rounded-md bg-[#842029] px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-[#842029]">
                      Vinesia
                    </span>
                  </span>
                  <hr className="my-4 text-[#C6C7C8] font-bold" />
                  <span>
                    <h3 className="font-semibold text-xs leading-4">BUY NOW</h3>
                    <h3 className="font-semibold text-lg">€3,600</h3>
                  </span>
                  <span className="flex font-medium text-xs">
                    <p>50 bottles</p>
                    <p className="text-[#959596] ml-3">50 remaining </p>
                  </span>
                </div>
              </div>
            </div>

            <div className="ml-4  lg:mt-0">
              <Image
                src={backbg}
                alt="Picture of the author"
                className="mb-3 md:mb-0 "
              />
            </div>
          </div>
        </div>
      </div>
      {/* <HeritageTab/> */}
    </div>
  );
};

export default Heritage;
