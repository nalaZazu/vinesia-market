import { productlist } from "@/constants/winelist";
import Image from "next/image";
import alert from "../../assets/image/alert-circle.png";
import React from "react";
const Listing = () => {
  return (
    <>
     
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {productlist &&
              productlist.map((item) => {
                const {
                  bottle1,
                  id,
                  imageAlt,
                  imageSrc,
                  price,
                  name,
                  remain,
                  subtitle,
                } = item;
                return (
                  <div key={id}>
                    <Image
                      src={imageSrc}
                      alt={imageAlt}
                      width={250}
                      height={250}
                      className="mb-3"
                    />
                    <h4 className="font-semibold  text-base	leading-6">
                      {name}
                    </h4>
                    <p className="flex text-xs   items-center font-medium">
                      {subtitle}
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
                      <p className="font-medium text-xs leading-3">Owner</p>
                      <span className=" mt-2 inline-flex items-center rounded-md bg-[#842029] px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-[#842029] ">
                        Vinesia
                      </span>
                    </span>

                    <hr className="my-4 text-[#C6C7C8] font-bold" />
                    <span>
                      <h3 className="font-medium text-xs  leading-3">
                        BUY NOW
                      </h3>
                      <h3 className="font-medium text-lg leading-7">{price}</h3>
                    </span>
                    <span className="flex ">
                      <p>{bottle1}</p>
                      <p className="text-[#959596] ml-3">{remain} </p>
                    </span>
                  </div>
                );
              })}
          </div>
          <div className="grid justify-center mt-8">
            <button className="py-2.5 px-4 bg-bgsecondary text-white rounded-lg text-center">
              Explore
            </button>
          </div>
       
    </>
  );
};

export default Listing;
