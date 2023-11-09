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
          <div className="max-w-[1100px] items-center grid grid-col-1  md:grid-cols-5 lg:grid-cols-5 mx-auto py-8">
            <div className=" col-span-3">
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
            <div className="col-span-2">
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
          <div className="gap-10 max-w-[1100px] items-center grid grid-col-1  md:grid-cols-5 lg:grid-cols-5 mx-auto py-8">
            <div className=" col-span-3">
              <Image
                src={zut}
                alt="Picture of the author"
                className="w-full h-72"
              />
            </div>
            <div className="col-span-2">
              <p className="font-normal text-sm tracking-tight">
                The vineyard is planted almost exclusively with Merlot, with
                just a touch of Cabernet Franc, and the average age of thevines
                is almost 40 years. In 2003, no Le Pin was produced due to the
                heatwave. The wines are extremely lush, concentrated and
                sometimes “”exotic””, and are drinkable very early on. All
                grapes are hand-picked and aged in new oak for 14 to 18 months.
                A new high-tech winery was inaugurated in 2011. They even
                produce a second wine called “”Trilogie”” in even smaller
                quantities. The price of this second wine easily exceeds that of
                most other Pomerols produced, averaging €400 a bottle. Although
                Le Pin doesn’t have a long history, they have produced some
                exceptional wines, especially over the last two decades.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
