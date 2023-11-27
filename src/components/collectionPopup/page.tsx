import React from "react";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import collection from "@/assets/icon/big1.png";
import signature from "@/assets/icon/signature.png";
import bottle1 from "@/assets/icon/bottle1.svg";
import Image from "next/image";

export default function CollectionPopup({
  open = false,
  setOpen,
  handleNext,
}: {
  open: any;
  setOpen: any;
  handleNext?: any;
}) {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        // initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-end p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative w-[1244px] lg:h-[997px] md:h-[600px] sm:h-full transform overflow-hidden bg-white text-left shadow-xl transition-all">
                <div className="px-20 py-7">
                  <div className=" container mx-auto flex justify-between ">
                    <h1 className="text-zinc-700 text-2xl font-medium tracking-tight">
                      Chateau La Mission Haut Brion Cru Classe | 2009
                    </h1>
                    <button onClick={setOpen}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>

                  <div className="pb-8 pt-16 grid grid-cols-1 md:grid-cols-3 gap-7">
                    <div className=" col-span-2">
                      <div className="flex-col justify-center items-start gap-2.5 flex">
                        <div className=" opacity-60 text-neutral-900 text-lg font-semibold  tracking-tight">
                          About this wine
                        </div>
                        <div className=" w-1/4 justify-start items-start gap-1 inline-flex">
                          <div className="w-6 h-6 relative" />
                          <div className="w-full flex-col justify-start items-start inline-flex">
                            <div className=" text-black text-base font-medium  tracking-tight">
                              Red, 14% Alc
                            </div>
                          </div>
                        </div>
                        <div className="w-full ">
                          <span className="text-black text-base font-semibold  underline tracking-tight">
                            France
                          </span>
                          <span className="text-black text-base font-normal  tracking-tight">
                            , Region, Appellation
                          </span>
                        </div>
                      </div>
                      <div className="text-black text-base font-normal tracking-tight flex-wrap py-5">
                        An evocative nose, floral and exotic with black cherry,
                        lychee and passion fruit aromas, delicate and nuanced.
                        Svelte on the palate with sculpted and refined tannins –
                        it’s confident, with sinew, muscle and plump fruit, but
                        not showy. The 2019 Le Pin is a rich, expansive wine
                        that soars from the glass with aromas of raspberry
                        preserve, plums, wild berries, rose petals and licorice,
                        framed by a deftly judged patina of creamy new oak.
                        Full-bodied, supple and velvety, it’s broad and
                        enveloping, with a fleshy core of fruit that’s framed by
                        lively acids and powdery tannins, concluding with a
                        long, aromatic finish. Le Pin’s vines are rooted in
                        clay, which no doubt helps to explain how this wine can
                        perform so well in warm, dry vintages.
                      </div>
                      <div className=" h-7 pt-4 justify-start items-center gap-1 inline-flex">
                        <div className="text-zinc-700 text-base font-medium  tracking-tight">
                          Winery:
                        </div>
                        <div className="text-black text-sm font-semibold underline tracking-wide">
                          Château Le Pin
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="relative col-span-1">
                        <Image
                          src={collection}
                          alt="Picture of the author"
                          className=" w-80 relative z-0 rounded-sm shadow border border-gray-500 "
                        />
                        <div className=" w-12 h-6 flex absolute top-2 z-50 left-0 items-center justify-center bg-white rounded-tr rounded-br border-r border-t border-b border-gray-500 ">
                          <p className="text-gray-500 text-xs font-medium">1</p>
                          <Image
                            src={bottle1}
                            alt="Picture of the author"
                            className="w-4 h-4"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="container mt-8  items-center grid  md:grid-cols-2 lg:grid-cols-3 mx-auto py-1 border-2 border-bordergray px-4 lg:px-6 md:px-4">
                    {[1, 2, 3].map((d, i) => {
                      return (
                        <div
                          key={i}
                          className={`py-2 px-4${i < 2 ? " border-e-2" : ""}`}
                          //  className=" border-e-2  py-2 px-4"
                        >
                          <div className=" flex justify-between items-center">
                            <div>
                              <h3 className=" opacity-60 text-zinc-700 text-base font-medium tracking-tight">
                                A. Critic name{" "}
                                <span className=" text-black text-lg font-bold tracking-wide">
                                  100/
                                </span>
                                <span className=" text-black text-xxs font-normal tracking-wide">
                                  100
                                </span>
                              </h3>
                            </div>
                            <div>
                              <Image
                                src={signature}
                                alt="Picture of the author"
                                className=" w-16 h-12"
                              />
                            </div>
                          </div>
                          <hr />
                          <p className="opacity-60 text-center text-black text-base font-normal tracking-tight">
                            This is the best wine for romantic dinner and long
                            term investment. Buy it as soon as you can, cause it
                            wont last long. Buy it as soon as you can.
                          </p>
                        </div>
                      );
                    })}
                  </div>
                  <div className=" flex justify-between pt-16">
                    <button className=" px-10 py-2.5 rounded-lg border border-gray-500 justify-center items-center gap-2 inline-flex">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-5 h-5 px-1 py-1"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 19.5L8.25 12l7.5-7.5"
                          />
                        </svg>
                      </span>
                      <span className="text-gray-500 text-base font-medium tracking-tight">
                        Back
                      </span>
                    </button>
                    <button
                      onClick={handleNext}
                      className=" px-10 py-2.5 bg-gray-500 rounded-lg justify-center items-center gap-2 inline-flex"
                    >
                      <span className="text-white text-base font-medium tracking-tight">
                        Next wine
                      </span>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-5 h-5 px-1 py-1 text-white"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.25 4.5l7.5 7.5-7.5 7.5"
                          />
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
