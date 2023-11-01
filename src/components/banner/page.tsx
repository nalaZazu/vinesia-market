import React from "react";
import Image from "next/image";
import alert from "../../assets/image/alert-circle.png";
import tooltip from "../../assets/image/Tooltips.png";
import tooltip1 from "../../assets/image/Tooltips (1).png";
import group1 from "../../assets/image/group1.png";

const Banner = () => {
  return (
    <>
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16   lg:max-w-7xl lg:grid-cols-2  ">
        {/* // px-4   sm:px-6  */}
        <div>
          <h2 className="font-semibold text-primary leading-10 text-4xl">
            Marketplace
          </h2>
          <div className="mt-4 text-primary text-2xl">
            <h2>appreciating your wine, guarding its emotions</h2>
            <h2>
              something about technology, advantage of wine investments, unique
              buying and reselling experience
            </h2>
          </div>
          <button className="py-2.5 px-4 mt-3 bg-bgsecondary text-white rounded-lg text-center">
            Start Exploring
          </button>
          <div className="mt-16">
            <ul className="flex justify-between font-normal text-xs">
              <li className="font-extrabold">Peace of Mind pledge</li>
              <li className="flex">
                Proof of Authenticity
                <li className="ml-1">
                  <Image
                    src={alert}
                    alt="Picture of the author"
                    width={15}
                    height={15}
                    quality={75}
                  />
                </li>
              </li>
              <li className="flex relative">
                Proof of Ownership
                <li className="ml-1">
                  <Image
                    src={alert}
                    alt="Picture of the author"
                    width={15}
                    height={15}
                    quality={75}
                  />
                </li>
                <div className="relative">
                  <div className="absolute   inline-block w-40 px-4 py-3 mb-10 -ml-32 text-white !bg-[#959596] rounded-lg z-10 top-[-110px] left-[29px]">
                    <span className="inline-block text-xs text-center font-normal leading-tight text-[#141619]">
                      A quick explanation of the technology used here and how it
                      differs from the "old word". RFID explanation.
                    </span>
                    <span
                      className="absolute bottom-0 right-0 w-2 h-2 -mb-1 transform rotate-45 bg-[#959596] z-0"
                      style={{ left: "52%" }}
                    ></span>
                  </div>
                </div>
              </li>
              <li className="flex relative">
                Proof of Storage conditions
                <li className="ml-1">
                  <Image
                    src={alert}
                    alt="Picture of the author"
                    width={15}
                    height={15}
                    quality={75}
                  />
                </li>
                <div className="relative">
                  <div className="absolute   inline-block w-40 px-4 py-3  mt-2 -ml-32 text-white !bg-[#959596] rounded-lg z-10 top-[14px] left-[68px]">
                    <span className="inline-block text-xs text-center font-normal leading-tight text-[#141619]">
                      Rating comes from world recognized critics like by either
                      Robert Parker, Jeb Dunnuck or Suckling.
                    </span>
                    <span
                      className="absolute  w-2 h-2 -mb-1 transform rotate-45 !bg-[#959596] z-30"
                      style={{ left: "31%", top: "-4%" }}
                    ></span>
                  </div>
                </div>
              </li>

              <li></li>
            </ul>
          </div>
        </div>

        {/* next section  */}
        <div className="grid justify-end">
          {/* // grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8 */}

          <Image src={group1} alt="Picture of the author" />
        </div>
      </div>
    </>
  );
};

export default Banner;
