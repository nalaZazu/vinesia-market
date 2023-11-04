import React, { useState } from "react";
import Image from "next/image";
import alert from "../../assets/icon/alert-circle.svg";
import group4 from "../../assets/image/group4.png";
import bold from "../../assets/icon/bold.svg";
import message from "../../assets/icon/message.svg";
import drop from "../../assets/icon/drop.svg";

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
      <div className=" container mx-auto grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 items-center mt-10 md:mt-10 lg:mt-16">
        {/* // px-4   sm:px-6  */}
        <div>
          <h1 className="font-semibold text-primary tracking-tight text-xxl ">
            Marketplace
          </h1>
          <div className="mt-4 text-zinc-700 text-2xl  tracking-tight font-semibold leading-9 max-w-2xl">
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

          <div className="lg:mt-16 mt-5 my-10">
            <ul className="flex gap-5 font-normal text-xs text-black">
              <li className=" text-xs font-extrabold ">Peace of Mind pledge</li>
              <li className="flex  gap-2  font-normal">
                Proof of Authenticity
                <li>
                  <Image
                    src={alert}
                    alt="Picture of the author"
                    width={15}
                    height={15}
                    quality={75}
                  />
                </li>
              </li>
              <li className="flex relative font-normal gap-2">
                Proof of Ownership
                <li onMouseEnter={showTooltip} onMouseLeave={hideTooltip}>
                <li onMouseEnter={showTooltip} onMouseLeave={hideTooltip}>
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
              <li className="flex relative gap-2  font-normal">
                Proof of Storage conditions
                <li
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
        <div className="grid justify-center mt-10 md:mt-10 lg:mt-16">
          {/* // grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8 */}
          <div>
            <div className="relative flex justify-center">
              <iframe
                className=" h-80 w-40 "
                src="https://www.youtube.com/embed/iu2C7AeIqac?si=m_dZQecmVZYzo6MU "
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
              <div>
                <div className="w-24 h-24 rounded-full bg-[#d9d9d9] absolute right-1/2 left-60 top-24 bottom-1/2">
                  <p className="text-secondaary text-xs font-normal  absolute
                    right-1/2  -left-12 top-1/3 bottom-1/2 ">
                    Humidity
                  </p>
                  <p className="text-secondaary text-xs font-normal  absolute    -left-12 top-24 bottom-1/2 ">
                    History of temperatures
                  </p>

                  <Image
                    src={drop}
                    className="w-6 h-6 absolute left-24 top-7 "
                    alt="bold-image"
                  />
                  <p className="text-secondaary text-xs font-normal  absolute     left-20 top-16 ">
                  Hygrometrics
                  </p>
                </div>
              </div>

              <div>

                {/* <div className="w-full h-full rounded-full bg-[#d9d9d9] absolute left-0 -top-14">hhehe</div> */}
              </div>

              <div className="w-24 h-24 rounded-full bg-[#d9d9d9] absolute -bottom-8 -left-12">
                <Image
                  src={message}
                  className="w-6 h-6 absolute inset-7 "
                  alt="bold-image"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="w-full flex justify-end">
              <p className="text-secondary text-xs font-semibold  tracking-wide  w-4/6">
                Chateau La Mission Haut Brion Cru Classe 2009
              </p>
            </div>
          </div>
          <div className="pt-5">
            <ul className="text-secondary text-xs font-normal tracking-wide  flex gap-4">
              <li>France</li>
              <li>Vintage</li>
              <li>Pessac-Leognan</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
