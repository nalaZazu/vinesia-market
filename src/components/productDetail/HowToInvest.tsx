import React from "react";

export default function HowToInvest() {
  return (
    <div>
      <section className="bg-themegray shadow-lg px-4 lg:px-0 md:px-4">
        <div className="max-w-[847px] justify-between items-center grid grid-col-1 gap-16  md:grid-cols-5 lg:grid-cols-5 mx-auto py-4 lg:py-6 md:py-4">
          <div className=" pb-4 lg:pb-0 md:pb-4 md:col-span-3 col-span-1">
            <h3 className=" text-lg font-semibold">How to invest in wine</h3>
            <p className="font-normal text-sm">
              See our video to gather new informations
            </p>
            <p className=" font-normal text-sm">
              See our video to gather new informations See our video to gather
              new informations See our video to gather new informations See our
              video to gather new informations See our video to gather new
              informations See our video to gather new informations
            </p>
          </div>
          <div className="flex lg:justify-center md:col-span-2 col-span-1">
            <iframe
              className=" rounded-md w-full h-44"
              src="https://www.youtube.com/embed/7gquYRxLMFI?si=S7E_iDRbr-b1dZef"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
