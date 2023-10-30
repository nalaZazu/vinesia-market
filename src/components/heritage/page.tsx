import Image from "next/image";
import React from "react";
import winbottle from "../../assets/image/Frame1.png";
import backbg from "../../assets/image/bg.png";
import alert from "../../assets/image/alert-circle.png";
const Heritage = () => {
  return (
    <>
      <h1 className="text-primary font-bold">Invest in heritage</h1>

      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="mx-auto max-w-2xl  lg:max-w-none  ">
          <div className="mt-6   lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            <div>
              <Image
                src={winbottle}
                alt="Picture of the author"
                // width={150}
                // height={150}
                className="mb-3"
              />
              <h3 className="font-bold w-3/4">
                Brunello di Montalcino "Piaggione" | 2019
              </h3>
              <p className="flex text-sm items-center">
                6 bottles collection{" "}
                <span className="ml-2">
                  <Image
                    src={alert}
                    alt="Picture of the author"
                    width={20}
                    height={20}
                  />
                </span>
              </p>
              <span className="border-b-2 border-gray-300">
                <p className="font-normal">Owner</p>
                <span className="inline-flex items-center rounded-md bg-[#842029] px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-[#842029]">
                  Vinesia
                </span>
              </span>
              <span>
                <h3 className="font-bold">BUY NOW</h3>
                <h3 className="font-bold text-lg">€3,600</h3>
              </span>
              <span className="flex ">
                <p>50 bottles</p>
                <p className="text-[#959596] ml-3">50 remaining </p>
              </span>
            </div>

            <div>
              <Image
                src={winbottle}
                alt="Picture of the author"
                // width={150}
                // height={150}
                className="mb-3"
              />
              <h3 className="font-bold w-3/4">
                Brunello di Montalcino "Piaggione" | 2019
              </h3>
              <p className="flex text-sm items-center">
                6 bottles collection{" "}
                <span className="ml-2">
                  <Image
                    src={alert}
                    alt="Picture of the author"
                    width={20}
                    height={20}
                  />
                </span>
              </p>
              <span className="border-b-2 border-gray-300">
                <p className="font-normal">Owner</p>
                <span className="inline-flex items-center rounded-md bg-[#842029] px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-[#842029]">
                  Vinesia
                </span>
              </span>
              <span>
                <h3 className="font-bold">BUY NOW</h3>
                <h3 className="font-bold text-lg">€3,600</h3>
              </span>
              <span className="flex ">
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
    </>
  );
};

export default Heritage;
