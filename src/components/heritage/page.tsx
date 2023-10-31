import Image from "next/image";
import React from "react";
import winbottle from "../../assets/image/Frame1.png";
import backbg from "../../assets/image/bg.png";
import alert from "../../assets/image/alert-circle.png";
const Heritage = () => {
  return (
    <div className="py-16 sm:py-24">
      <h1 className="text-primary font-bold">Invest in heritage</h1>
      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="mx-auto max-w-2xl  lg:max-w-none  ">
          <div className="mt-6  grid lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
          <div>
              <Image
                src={winbottle}
                alt="Picture of the author"
                className="mb-3"
              />
              <h4 className="w-3/4     font-semibold  text-base	leading-6">
                Brunello di Montalcino "Piaggione" | 2019
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
              <h4 className="w-3/4     font-semibold  text-base	leading-6">
                Brunello di Montalcino "Piaggione" | 2019
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
            <Image
              src={backbg}
              alt="Picture of the author"
              width={200}
              // height={150}
              className="mb-3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heritage;
