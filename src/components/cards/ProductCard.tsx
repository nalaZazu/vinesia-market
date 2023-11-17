import Image from "next/image";
import React from "react";
import winbottle from "../../assets/image/Frame1.png";
import { InfoIcon } from "@/assets/icon/Icons";

export default function ProductCard({ item }: { item: any }) {
  return (
    <>
      <div>
        <Image
          src={winbottle}
          alt="Picture of the author"
          className="mb-3 w-full"
        />
        <h4 className=" text-black text-base font-semibold  tracking-tight	">
          {item?.name} | {item?.vintage}
        </h4>
        <p className="flex  items-center text-black text-xxs font-medium  py-1 tracking-wide">
          {item?.packageSize} bottles collection{" "}
          <span className=" ms-1">
            <InfoIcon />
          </span>
        </p>
        <span>
          <p className="font-semibold  text-black text-xxs tracking-wide">
            {item?.owners?.map((ow: any, i: any) => {
              return (
                <span
                  className={
                    i > 0
                      ? "border-s-2 border-black px-1 uppercase"
                      : "px-1 uppercase"
                  }
                  key={i}
                >
                  {" "}
                  {ow}{" "}
                </span>
              );
            })}
          </p>
          <span className="inline-flex items-center rounded bg-[#842029] px-2 py-1   font-medium text-white ring-1 ring-inset ring-[#842029]  text-xxs  tracking-wide">
            Vinesia
          </span>
        </span>
        <hr className="my-4 text-[#C6C7C8] font-bold" />
        <span>
          <h3 className="  text-black text-xxs font-semibold   tracking-wide">
            BUY NOW
          </h3>
          <h3 className="font-semibold text-lg  text-black tracking-tight">
            €{item?.buyNowPrice}
          </h3>
        </span>
        <span className="flex  text-black text-xxs font-medium  tracking-wide">
          <p> {item?.total} bottles</p>
          <p className=" pl-1 text-[#959596]  text-xxs font-medium  tracking-wide">
            {item?.available} remaining
          </p>
        </span>
      </div>
    </>
  );
}
