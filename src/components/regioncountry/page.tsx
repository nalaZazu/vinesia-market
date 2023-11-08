import Image from "next/image";
import React from "react";

const RegionCountry = ({
  regionparagraph,
  regionparagraphs,
  image
}: {
  regionparagraph: String;
  regionparagraphs: String;
  image:any;
}) => {
  return (
    <>
      <div className=" grid md:grid-cols-5 gap-7 grid-cols-1 md:max-w-5xl mx-auto pt-8 pb-16 ">
        <div className="col-span-2 text-secondary text-base font-medium tracking-tight">
          <p>{regionparagraph}</p>
          <p>{regionparagraphs}</p>
        </div>
        <div className="col-span-3">
          <Image src={image} alt="image-region" />
        </div>
      </div>
    </>
  );
};

export default RegionCountry;
