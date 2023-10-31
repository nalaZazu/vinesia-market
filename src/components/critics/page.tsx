import Image from "next/image";
import React from "react";
import img1 from "../../assets/image/image1.png";
import img2 from "../../assets/image/image 23.png";
import arrow from "../../assets/icon/arrow.svg";
const Critics = () => {
  return (
    <>
      <div className=" flex py-24">
        <div className="flex w-3/5">
          <div className="flex-1 ">
            <Image src={img1} alt="image" />
          </div>
          <div className="shrink-0  w-3/5 ml-5">
            <h1 className="font-semibold text-3xl leading-10 text-primary">
              Wine & art collections
            </h1>
            <p>
              Collections are carefully curated around specific themes,
              featuring exceptional wines from prestigious wineries worldwide.
              Each collection is a celebration of the finest vintages,
              thoughtfully selected by our team of experts. Some of our
              collections also include captivating artwork from the renowned
              artist Reso, adding an artistic touch to the wine collections you
              invest in.
            </p>
            <div className="flex">
              <button className="py-2.5 px-4 mt-3 bg-bgsecondary text-white rounded-lg  ">
                Start Exploring
              </button>
              <button className="py-2.5 px-4 mt-3 ml-2  text-bgsecondary rounded-lg  font-medium text-base flex">
                Meet the artist
                <Image src={arrow} alt="arrow" />
              </button>
            </div>
          </div>
        </div>
        <div className=" w-2/5">
          <Image className="mx-auto" src={img2} alt="image" />
        </div>
      </div>
    </>
  );
};

export default Critics;
