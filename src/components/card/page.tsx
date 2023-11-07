import Image from "next/image";
import React from "react";
import { CaradRegion } from "@/constants/cardregion";
const Card = () => {
  return (
    <>
      <div className="grid grid-cols-5 gap-x-4 gap-y-4 sm:grid-cols-2 lg:grid-cols-5  pt-7 pb-7">
        {CaradRegion?.map((reg: any) => {
          const { id, name, image } = reg;
          return (
            <div
              className="max-w-sm rounded overflow-hidden shadow-lg"
              key={id}
            >
              <Image
                className="w-full h-3/4"
                src={image}
                alt="Sunset in the mountains"
             
              />
              <div className=" px-4 py-2.5 bg-white rounded-bl-lg rounded-br-lg justify-start items-center gap-2.5 inline-flex">
                <div className="text-[#26262A] text-sm font-normal   tracking-tight">
                  {name}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Card;
