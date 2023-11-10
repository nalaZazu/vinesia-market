import Image from "next/image";
import React from "react";
import kranu from "@/assets/icon/kranu.png";

export default function AboutWineries() {
  return (
    <div>
      <section className="py-24 px-4 lg:px-0 md:px-4">
        <div className="container mx-auto ">
          <h2 className=" capitalize text-4xl font-medium text-zinc-700 tracking-tight">
            <span className=" text-3xl font-normal text-neutral-400  tracking-tight">
              About
            </span>
            <span> Wineries</span>
          </h2>
          <div className="container grid mx-auto grid-cols-2 md:grid-cols-2 max-w-screen-xl items-center py-6 px-0 lg:px-16 md:px-4 pb-4 lg:pb-0 md:pb-4">
            <div className=" space-y-7">
              {[1, 2, 3].map((d, i) => {
                return (
                  <div key={i}>
                    <div className="pb-2">
                      <p className="text-black text-sm font-bold underline tracking-tight">
                        Château Le Pin
                      </p>
                      <p className="text-black text-sm font-normal tracking-tight">
                        The vineyard is planted almost exclusively with Merlot,
                        with just a touch of Cabernet Franc.
                      </p>
                    </div>
                    <div>
                      <span className="text-black text-base font-semibold underline tracking-tight">
                        France
                      </span>
                      <span className="text-black text-base font-normal tracking-tight">
                        , Region, Appellation
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex justify-end">
              <Image
                src={kranu}
                alt="Picture of the author"
                className="w-full h-72"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
