import React from "react";

export default function HowToInvest() {
  return (
    <div>
      <section className="bg-themegray shadow-lg px-4 lg:px-0 md:px-4">
        <div className="container justify-between items-center grid grid-col-2  md:grid-cols-2 lg:grid-cols-2 mx-auto py-4 lg:py-6 md:py-4">
          <div className=" lg:ps-24 pb-4 lg:pb-0 md:pb-4">
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
          <div className="flex lg:justify-center">
            <iframe
              className=" rounded-md w-full md:w-full lg:w-80 h-56"
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
