import Image from "next/image";
import React from "react";
import { CaradRegion } from "@/constants/cardregion";
import Link from "next/link";
const Card = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2 lg:grid-cols-5  pt-7 pb-7">
        {CaradRegion?.map((reg: any) => {
          const { id, name, image, href } = reg;
          return (
            <div
              className="min-w-sm rounded overflow-hidden shadow-lg"
              key={id}
            >
              <Link href={`${href}`}>
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
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Card;
