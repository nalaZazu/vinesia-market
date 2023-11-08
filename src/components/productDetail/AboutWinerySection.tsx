import Image from "next/image";
import React from "react";
import kranu from "@/assets/icon/kranu.png";
import zut from "@/assets/icon/zut.png";
export default function AboutWinerySection() {
  return (
    <div>
      <section className="pt-10 px-4 lg:px-0 md:px-4">
        <div className="container mx-auto">
          <h2 className=" capitalize text-4xl font-medium text-zinc-700 tracking-tight">
            <span className=" text-3xl font-normal text-neutral-400  tracking-tight">
              About
            </span>{" "}
            Winery Château Le Pin
          </h2>
          <div className="container grid mx-auto lg:grid-cols-2 md:grid-cols-2 max-w-screen-xl items-center py-6 px-0 lg:px-16 md:px-4 pb-4 lg:pb-0 md:pb-4">
            <div>
              <p>
                <span className=" font-semibold">France,</span> Region,
                Appellation
              </p>
              <p className="font-normal text-sm">
                Château Le Pin is a mini chateau in the Pomerol appellation on
                the right bank of the Bordeaux region. It is considered a cult
                estate and is highly sought-after by wine collectors. Its tiny
                production, averaging just 600-700 cases a year, commands even
                higher prices than Château Petrus, making it one of the most
                expensive wines in Bordeaux! Madame Laubie and her family had
                owned this small vineyard since 1924, but sold it in 1979 to the
                Belgian Mr. Jacques Thienpont. At that time, the vineyard
                covered just one hectare. Today, the vineyard covers 2.7
                hectares. The name derives from the two pine trees that grow on
                the estate, near the winery.
              </p>
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
      <section className="pt-10">
        <div className="container mx-auto">
          <div className="container grid mx-auto lg:grid-cols-2 md:grid-cols-2 gap-5 max-w-screen-xl items-center py-6 px-4 lg:px-16 md:px-4">
            <div className="flex pb-4 lg:pb-0 md:pb-4">
              <Image
                src={zut}
                alt="Picture of the author"
                className="w-full h-72"
              />
            </div>
            <div>
              <p>France, Region, Appellation</p>
              <p className="font-normal text-sm">
                Château Le Pin is a mini chateau in the Pomerol appellation on
                the right bank of the Bordeaux region. It is considered a cult
                estate and is highly sought-after by wine collectors. Its tiny
                production, averaging just 600-700 cases a year, commands even
                higher prices than Château Petrus, making it one of the most
                expensive wines in Bordeaux! Madame Laubie and her family had
                owned this small vineyard since 1924, but sold it in 1979 to the
                Belgian Mr. Jacques Thienpont. At that time, the vineyard
                covered just one hectare. Today, the vineyard covers 2.7
                hectares. The name derives from the two pine trees that grow on
                the estate, near the winery.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
