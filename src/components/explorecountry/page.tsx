import Image from "next/image";
import React from "react";
import resoImage from "@/assets/image/reso-image.png";
function ExploreCountry({
  explorParagraph,
  explorParagraphs,
  explor1,
  explor2,
}: {
  explorParagraph: String;
  explorParagraphs: String;
  explor1: String;
  explor2: String;
}) {
  return (
    <>
      <div className=" grid md:grid-cols-5 gap-7 grid-cols-1 md:max-w-[62rem] mx-auto pt-8 pb-16 ">
        <div className="col-span-3">
          <Image src={resoImage} alt="image-region" />
        </div>
        <div className="col-span-2 text-secondary text-base font-medium tracking-tight">
          <p>{explorParagraph}</p>
          <p>{explorParagraphs}</p>
        </div>
      </div>
      {/* second -part */}
      <div className=" grid md:grid-cols-5 gap-7 grid-cols-1 md:max-w-[62rem] mx-auto pt-8 pb-16 ">
        <div className="col-span-2 text-secondary text-base font-medium tracking-tight">
          <p>{explor1}</p>
          <p>{explor2}</p>
        </div>
        <div className="col-span-3">
          <Image src={resoImage} alt="image-region" />
        </div>
      </div>
    </>
  );
}

export default ExploreCountry;
