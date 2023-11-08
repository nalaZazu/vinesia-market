"use client";
import React from "react";
import Image from "next/image";
import DropDown from "@/components/dropdown/page";
import {
  artCollect,
  bottleSize,
  casing,
  color,
  other,
  ratingCritics,
  regions,
  winary,
} from "@/constants/invesdropdown";
import Recomend from "@/components/dropdown/recomend/page";
import { productlist } from "@/constants/winelist";
import { usePathname } from "next/navigation";
import RegionCountry from "@/components/regioncountry/page";
import resoImage from "@/assets/image/reso-image.png";
const Rao = () => {
  const pathname = usePathname();
  const regionparagraph = `Reso’s deep engagement with informal art and abstract expressionism led him to continuously seek new avenues for expanding his artistic expression. It wasn’t until 2011 that he ventured into the abstract series, marking a pivotal moment in his artistic journey.`;
  const regionparagraphs = `In Reso’s artworks, one senses a powerful dynamism and speed, a direct reflection of his energetic approach. This approach draws parallels to K.O. Goetz’s experimental painting technique, blending quick, impulsive squeegee gestures with moments of contemplation and reflection, creating a dance-like choreography on the canvas.`;
  return (
    <>
      <div className="container mx-auto  pt-3 md:pt-5  px-4 flex gap-4">
        <p className="text-xxs font-normal text-breadcrumb tracking-wide">
          Vinesia Marketplace
        </p>
        <p className="text-xxs font-normal text-breadcrumb tracking-wide">
          / Home Page
        </p>
        <p className="text-xxs font-normal text-breadcrumb tracking-wide">
          / Wine & art collections
        </p>
        <p className="text-bgtertiary text-xxs font-normal  tracking-wide">
          / {pathname.split("/")}
        </p>
      </div>
      <div className="container mx-auto pt-3 md:pt-5 lg:pt-10 pb-7 px-4 ">
        <h1 className="text-primary text-xxl font-semibold  tracking-tight">
          Meet the artist: Reso
        </h1>
        <RegionCountry
          regionparagraph={regionparagraph}
          regionparagraphs={regionparagraphs}
          image={resoImage}
        />

        {/* card */}
        <div className=" grid md:grid-cols-5 gap-7 grid-cols-1 md:max-w-[62rem] mx-auto pt-8 pb-16 ">
          <div className="col-span-3">
            <Image src={resoImage} alt="image-region" />
          </div>
          <div className="col-span-2 text-secondary text-base font-medium tracking-tight">
            <p>
              Reso acts with intuition and physicality, much like the renowned
              painter Jackson Pollock, positioning the canvas flat on the floor
              and working with sweeping movements, even extending beyond the
              canvas. An intriguing element in Reso’s works is the use of torn
              paper strips, applied to the canvas to reveal alternating and
              interacting forms and patterns. This interplay of positive and
              negative shapes creates a captivating depth and sophistication in
              his pieces.{" "}
            </p>
            <p>
              Reso’s unique handling of color, form, and movement imbues his
              artworks with an extraordinary energy and vitality.
            </p>
          </div>
        </div>
        {/* second -part */}
        <div className=" grid md:grid-cols-5 gap-7 grid-cols-1 md:max-w-[62rem] mx-auto pt-8 pb-16 ">
          
          <div className="col-span-2 text-secondary text-base font-medium tracking-tight">
            <p>
            Each abstract painting becomes a dance on canvas, a fascinating world of colors and shapes captured through his expressive gestures and dynamic working style, captivating the viewer. His experimentation, combined with control and spontaneity, along with the refined use of paper strips, results in an engaging interplay of forms, colors, and textures.
            </p>
            <p>
            Ultimately, Reso’s abstract paintings invite viewers to immerse themselves in a realm of imagination, offering diverse ways to interpret and experience his captivating creations.
            </p>
          </div>
          <div className="col-span-3">
            <Image src={resoImage} alt="image-region" />
          </div>
        </div>

        {/* dropdown  */}
        <div className="flex justify-between md:pt-7 md:pb-7 flex-wrap">
          <div className="flex gap-2 flex-wrap">
            <div>
              <DropDown option={bottleSize} />
            </div>
            <div>
              <DropDown />
            </div>
            <div>
              <DropDown option={casing} />
            </div>
            <div>
              <DropDown option={ratingCritics} />
            </div>
            <div>
              <DropDown option={regions} />
            </div>
            <div>
              <DropDown option={winary} />
            </div>
            <div>
              <DropDown />
            </div>
            <div>
              <DropDown option={color} />
            </div>
            <div>
              <DropDown />
            </div>
            <div>
              <DropDown option={artCollect} />
            </div>
            <div>
              <DropDown option={other} />
            </div>
          </div>
          <div className="flex items-center gap-2 pe-2 flex-wrap">
            <p className="text-primary text-xs font-normal  tracking-wide">
              Sort by
            </p>
            <Recomend />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {productlist?.map((item) => {
            const {
              bottle1,
              id,
              imageAlt,
              imageSrc,
              name,
              price,
              remain,
              subtitle,
            } = item;
            return (
              <div key={id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md ">
                  <Image
                    src={imageSrc}
                    alt={imageAlt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className=" text-left">
                  <h4 className=" text-base font-semibold">{name}</h4>
                  <p className=" text-xxs ">{subtitle}</p>
                  <p className=" text-xxs font-semibold">OWNER</p>
                  <span className="justify-center items-center gap-0.5 inline-flex  mb-2  text-white text-xxs">
                    <p className="   bg-bgbutton w-12 text-center   p-0.5 rounded-sm">
                      Vinesia
                    </p>
                    <p className="  bg-[#6c757e] font-medium tracking-wide p-0.5 rounded-sm">
                      Private investors
                    </p>
                  </span>

                  <hr />
                  <button className="text-xxs uppercase ">buy now</button>
                  <h3 className=" font-semibold text-lg ">€{price}</h3>
                  <p className=" flex gap-3">
                    <span className=" text-xxs font-medium">{bottle1}</span>
                    <span className=" text-xxs">{remain} remaining</span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Rao;
