import Image from "next/image";
import React from "react";
import winbottle from "../../assets/image/Frame1.png";
import alert from "../../assets/image/alert-circle.png";
// interface Category {
//   id: Number,
//   bottle1,
//   imageAlt,
//   imageSrc,
//   price,
//   name,
//   remain,
//   subtitle,
// }
export default function ProductCard() {
  return (
    <div>
      <div>
        <Image src={winbottle} alt="Picture of the author" className="mb-3" />
        <h4 className=" text-black text-base font-semibold  tracking-tight	">
          Brunello di Montalcino {`"Piaggione"`} | 2019
        </h4>
        <p className="flex  items-center text-black text-xxs font-medium   tracking-wide">
          6 bottles collection{" "}
          <span className="ml-2">
            <Image
              src={alert}
              alt="Picture of the author"
              width={15}
              height={15}
              quality={75}
              style={{ objectFit: "contain" }}
            />
          </span>
        </p>
        <span>
          <p className="font-semibold   text-black text-xxs  tracking-wide">
            Owner
          </p>
          <span className="inline-flex items-center rounded bg-[#842029] px-2 py-1   font-medium text-white ring-1 ring-inset ring-[#842029]      text-xxs  tracking-wide">
            Vinesia
          </span>
        </span>
        <hr className="my-4 text-[#C6C7C8] font-bold" />
        <span>
          <h3 className="  text-black text-xxs font-semibold   tracking-wide">
            BUY NOW
          </h3>
          <h3 className="font-semibold text-lg  text-black tracking-tight">
            €3,600
          </h3>
        </span>
        <span className="flex  text-black text-xxs font-medium  tracking-wide">
          <p>50 bottles</p>
          <p className=" pl-1 text-[#959596]  text-xxs font-medium  tracking-wide">
            50 remaining{" "}
          </p>
        </span>
      </div>
    </div>
  );
}
