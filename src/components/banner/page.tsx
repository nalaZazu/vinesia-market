import React, { useState } from "react";
import Image from "next/image";
import alert from "../../assets/icon/alert-circle.svg";

import group4 from "../../assets/image/group4.png";
import group3 from "../../assets/image/group3.png";
import group5 from "../../assets/image/group5.png";

const Banner = () => {
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const showTooltip = () => {
    setTooltipVisible(true);
  };

  const hideTooltip = () => {
    setTooltipVisible(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16   lg:max-w-7xl lg:grid-cols-2  mt-16">
        {/* // px-4   sm:px-6  */}
        <div>
          <h1 className="font-semibold text-primary tracking-tight text-xxl ">
            Marketplace
          </h1>
          <div className="mt-4 text-primary text-2xl  tracking-tight  ">
            <h2>appreciating your wine, guarding its emotions</h2>
            <h2>
              something about technology, advantage of wine investments, unique
              buying and reselling experience
            </h2>
          </div>
          <div className="px-4 py-2.5 justify-center items-center gap-2 inline-flex bg-bgsecondary rounded-lg mt-3 ">
            <button className=" text-white text-base font-medium  tracking-tight">
              Start Exploring
            </button>
          </div>

          <div className="mt-16">
            <ul className="flex justify-between font-normal text-xs text-black">
              <li className=" text-xs font-extrabold ">Peace of Mind pledge</li>
              <li className="flex    font-normal">
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
              <li className="flex relative  font-normal">
                Proof of Ownership
                <li
                  className="ml-1"
                  onMouseEnter={showTooltip}
                  onMouseLeave={hideTooltip}
                >
                  <Image
                    src={alert}
                    alt="Picture of the author"
                    width={15}
                    height={15}
                    quality={75}
                    style={{ objectFit: "contain" }}
                  />
                </li>
                <div
                  className={`relative ${tooltipVisible ? "block" : "hidden"}`}
                >
                  <div className="absolute inline-block w-40 px-4 py-3 mb-10 -ml-32 text-white bg-[#959596] rounded-lg z-10 top-[-110px] left-[29px]">
                    <span className="inline-block text-xs text-center font-normal leading-tight text-[#141619]  tracking-wide ">
                      A quick explanation of the technology used here and how it
                      differs from the {`"old word"`}. RFID explanation.
                    </span>
                    <span
                      className="absolute bottom-0 right-0 w-2 h-2 -mb-1 transform rotate-45 bg-[#959596] z-0"
                      style={{ left: "52%" }}
                    ></span>
                  </div>
                </div>
              </li>
              <li className="flex relative   font-normal">
                Proof of Storage conditions
                <li
                  className="ml-1"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <Image
                    src={alert}
                    alt="Picture of the author"
                    width={15}
                    height={15}
                    quality={75}
                    style={{ objectFit: "contain" }}
                  />
                </li>
                <div className={`relative ${isHovered ? "block" : "hidden"}`}>
                  <div className="absolute inline-block w-40 px-4 py-3 mt-2 -ml-32 text-white bg-[#959596] rounded-lg z-10 top-[14px] left-[68px]">
                    <span className="inline-block text-xs text-center font-normal leading-tight text-[#141619]  ">
                      Rating comes from world recognized critics like by either
                      Robert Parker, Jeb Dunnuck or Suckling.
                    </span>
                    <span
                      className="absolute w-2 h-2 -mb-1 transform rotate-45 bg-[#959596] z-30"
                      style={{ left: "31%", top: "-4%" }}
                    ></span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* next section  */}
        <div className="grid justify-center">
          {/* // grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8 */}
          <div>
            <div className="relative">
              <iframe
                width="166"
                height="318"
                src="https://www.youtube.com/embed/iu2C7AeIqac?si=m_dZQecmVZYzo6MU "
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
              <Image
                src={group4}
                alt="Picture of the author"
                style={{ objectFit: "contain" }}
                quality={75}
                className="absolute right-[-21px] bottom-[60px]"
              />
              <Image
                src={group3}
                alt="Picture of the author"
                style={{ objectFit: "contain" }}
                quality={75}
                className="absolute top-[-37px] left-[-94px] "
              />
              <div>

                <div className="w-full h-full bg-[#d9d9d9]"></div>
              </div>

              <Image
                src={group5}
                alt="Picture of the author"
                style={{ objectFit: "contain" }}
                quality={75}
                className="absolute  left-[-117px] bottom-0 "
              />
            </div>

            <div className="mt-2 ps-8">
              <p
                className="text-secondary text-xs font-semibold  tracking-wide 
              w-4/6"
              >
                Chateau La Mission Haut Brion Cru Classe 2009
              </p>
            </div>
          </div>
          <ul className="text-secondary text-xs font-normal tracking-wide flex justify-around">
            <li>France</li>
            <li>Vintage</li>
            <li>Pessac-Leognan</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Banner;
