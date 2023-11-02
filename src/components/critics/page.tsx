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
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2 items-center">
        <div className=" flex">
          <ul className=" text-secondary text-lg font-semibold  tracking-tight ">
            <li className=" mt-4 grid grid-cols-6 gap-2">
              <span className=" text-xxl font-semibold  tracking-tight  text-primary">
                1
              </span>
              <span className=" col-span-4 pe-3">
                Chateau La Mission Haut Brion Cru Classe 2009
              </span>
              <button>
                <Image src={arrowleft} alt="arrow" />
              </button>
            </li>
            <li className=" mt-4 grid grid-cols-6 gap-2">
              <span className=" text-xxl font-semibold  tracking-tight  text-primary">
                2
              </span>
              <span className="col-span-4 pe-3">
                Chateau La Mission Haut Brion Cru Classe 2009
              </span>
            </li>
            <li className=" mt-4 grid grid-cols-6 gap-2">
              <span className=" text-xxl font-semibold  tracking-tight  text-primary">
                3
              </span>
              <span className="col-span-4 pe-3">
                Chateau La Mission Haut Brion Cru Classe 2009
              </span>
            </li>
            <li className=" mt-4 grid grid-cols-6 gap-2">
              <span className=" text-xxl font-semibold  tracking-tight  text-primary">
                4
              </span>
              <span className="col-span-4 pe-3">
                Chateau La Mission Haut Brion Cru Classe 2009
              </span>
            </li>
          </ul>
        </div>

        <div className="col-span-2 ">
          {/* imageand text */}
          <div className="flex">
            <div>
              <Image src={wine} alt="image" className="mr-2" />
            </div>
            <ul className=" md:w-2/3 px-4  text-base font-medium   tracking-tight">
              <li>
                “This wine blushes in the glass like a tender, rosy dawn,
                inviting the drinker to embrace its delicate hue. The play of
                soft pinks and hints of coral dances under the light, hinting at
                the allure within.
              </li>
              <li>
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
              <div className="text-center">
                <button className="py-2.5 px-4 mt-3 border border-bgsecondary  text-bgsecondary rounded-lg   text-base font-medium   tracking-tight">
                  Invest now
                </button>
              </div>
            </ul>
          </div>
        </div>
        {/* text portion */}
        <div className=" ">
          <h2 className="  flex text-secondary text-sm font-normal  tracking-tight">
            Score
            <Image
              src={alert}
              alt="Picture of the author"
              width={15}
              height={15}
              quality={75}
              style={{ objectFit: "contain" }}
              className="ml-2"
            />
          </h2>
          <div className="flex flex-col ">
            <span className="font-semibold  text-secondary text-xxl  tracking-tight">
              5/5
            </span>
            <span className="text-base font-medium mt-5   text-secondary  tracking-tigh">
              by Robert Parker
            </span>
          </div>
          <span>
            <Image src={signature} alt="signature" />
          </span>
        </div>
      </div>

      <div className="grid lg:grid-cols-4">
        <div className="flex-1 md:py-16 py-4">
          <Image src={img1} alt="image" />
        </div>
        <div className="col-span-3">
          <div className="grid md:grid-cols-2">
            <div className=" pl-5 md:py-16 py-4">
              <h1 className="text-primary text-xxl font-semibold tracking-tight">
                Wine & art collections
              </h1>
              <p className="w-[400px] text-base font-medium   tracking-tight">
                Collections are carefully curated around specific themes,
                featuring exceptional wines from prestigious wineries worldwide.
                Each collection is a celebration of the finest vintages,
                thoughtfully selected by our team of experts. Some of our
                collections also include captivating artwork from the renowned
                artist Reso, adding an artistic touch to the wine collections
                you invest in.
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
            <div className="md:py-16 py-4">
              <Image
                className="mx-auto max-w-[100%] h-auto"
                
                src={img2}
                alt="image"
                style={{ objectFit: "contain" }}
                quality={75}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Critics;
