import Image from "next/image";
import React from "react";
import img1 from "../../assets/image/image1.png";
import img2 from "../../assets/image/image 23.png";
import arrow from "../../assets/icon/arrow.svg";
import arrowleft from "../../assets/image/arrow slide left.png";
import wine from "../../assets/image/group2.png";
import signature from "../../assets/image/Zrzut ekranu 2023-10-1 o 11.17 1.png";
import alert from "../../assets/image/alert-circle.png";
const Critics = () => {
  return (
    <div className="py-16 sm:py-24">
      {/* critics-section */}
      <h1 className="text-primary font-semibold text-3xl leading-10">
        Critics selection
      </h1>
     
      <div className="grid grid-cols-4 gap-4">
        <div className=" flex">
          <ul className=" text-black text-lg font-semibold  tracking-tight ">
            <li className="grid grid-cols-6 gap-2">
              <span className=" text-xxl font-semibold  tracking-tight  text-primary">1</span>
              <span className="col-span-4 pe-3">
                Chateau La Mission Haut Brion Cru Classe 2009
              </span>
              <button>
                <Image src={arrowleft} alt="arrow" />
              </button>
            </li>
            <li className="mt-6 grid grid-rows-1 grid-flow-col gap-4">
              <span className="row-span-3 text-xxl font-semibold   tracking-tight text-primary">2</span>
              <span className="w-3/5 row-span-2">
                {" "}
                Chateau La Mission Haut Brion Cru Classe 2009
                
              </span>
              
            </li>
            <li className="mt-6 grid grid-rows-1 grid-flow-col gap-4">
              <span className="row-span-3 text-xxl font-semibold  tracking-tight text-primary">3</span>
              <span className="w-3/5 row-span-2">
                {" "}
                Chateau La Mission Haut Brion Cru Classe 2009
              </span>
            </li>
            
            <li className="mt-6 grid grid-rows-1 grid-flow-col gap-4">
              <span className="row-span-3 text-xxl font-semibold  tracking-tight text-primary">4</span>
              <span className="w-3/5 row-span-2">
                {" "}
                Chateau La Mission Haut Brion Cru Classe 2009
              </span>
            </li>


          </ul>
        </div>

        <div className="col-span-2 ">
          {/* imageand text */}
          <div className="flex">
            <div>
              {" "}
              <Image src={wine} alt="image" className="mr-2" />
            </div>
            <ul className=" w-2/3  ">
              <li>
                {" "}
                “This wine blushes in the glass like a tender, rosy dawn,
                inviting the drinker to embrace its delicate hue. The play of
                soft pinks and hints of coral dances under the light, hinting at
                the allure within.
              </li>
              <li>
                {" "}
                Nose: The first inhalation enchants with a floral bouquet
                reminiscent of a blooming garden in spring. Notes of fresh roses
                and lavender harmoniously intertwine, giving this wine a sweet
                and aromatic charm.
              </li>
              <li>
                Taste: The initial sip caresses the palate with the gentle
                embrace of ripe strawberries, teasing the taste buds with their
                luscious juiciness. A subtle citrus outhfeel that enhances the
                overall elegance of this wine.
              </li>
              <div>
                <button className="py-2.5 px-4 mt-3 border border-bgsecondary  text-bgsecondary rounded-lg text-base font-medium">
                  Invest now
                </button>
              </div>
            </ul>
          </div>
        </div>
        {/* text portion */}
        <div className=" ">
          <h2 className="font-normal text-sm flex">
            Vinesia score
            <Image
              src={alert}
              alt="Picture of the author"
              width={15}
              height={15}
              quality={75}
              className="ml-2"
            />
          </h2>
          <div className="flex flex-col ">
            <span className="font-semibold text-4xl">5/5</span>
            <span className="text-base font-medium mt-5">by Robert Parker</span>
          </div>
          <span>
            <Image src={signature} alt="signature" />
          </span>
        </div>
      </div>

      <div className=" flex pt-16">
        <div className="flex w-3/5">
          <div className="flex-1 ">
            <Image src={img1} alt="image" />
          </div>
          <div className="shrink-0  w-3/5 ml-5">
            <h1 className="text-primary font-semibold text-3xl leading-10">
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
    </div>
  );
};

export default Critics;
