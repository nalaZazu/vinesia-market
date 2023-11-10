import React from "react";
import { Fragment } from "react";
import Image from "next/image";
import Vector from "@/assets/icon/Vector.svg";

import { Dialog, Transition } from "@headlessui/react";

export default function CollectionPopup2({
  open = false,
  setOpen,
}: {
  open: any;
  setOpen: any;
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
                  <div className=" container mx-auto flex justify-between">
                    <div>
                      <h1 className="text-zinc-700 text-2xl font-medium tracking-tight">
                        1# Chateau La Mission Haut Brion Cru Classe | 2009
                      </h1>
                      <p>With Art of Lola Designer Fun</p>
                    </div>
                    <button onClick={setOpen}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-10 h-10"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="bg-white py-10">
                    <div className=" grid grid-cols-2 py-3 gap-2 items-center">
                      <div className="text-xs text-end">
                        <span className=" opacity-60 text-black font-normal">
                          Wine asset ID
                        </span>
                      </div>
                      <div className="flex space-x-2 border-s ps-2 border-bordergray">
                        <a href="#">
                          <span className=" font-medium text-base text-spacegray">
                            1234_1234_1345678
                          </span>
                        </a>
                      </div>
                    </div>
                    <div className=" grid grid-cols-2 py-3 gap-2 items-center">
                      <div className="text-xs text-end">
                        <span className=" opacity-60 text-black font-normal">
                          Owner
                        </span>
                      </div>
                      <div className="flex space-x-2 border-s ps-2 border-bordergray">
                        <a href="#">
                          <span className=" font-medium text-base text-spacegray">
                            @owner_with_very_long_wa...
                          </span>
                        </a>
                      </div>
                    </div>
                    <div className=" grid grid-cols-2 py-3 gap-2 items-center">
                      <div className="text-xs text-end">
                        <span className=" opacity-60 text-black font-normal">
                          RELEASE DATE
                        </span>
                      </div>
                      <div className="flex space-x-2 border-s ps-2 border-bordergray">
                        <a href="#">
                          <span className=" font-medium text-base text-spacegray">
                            12.09.2023
                          </span>
                        </a>
                      </div>
                    </div>
                    <div className=" grid grid-cols-2 py-3 gap-2 items-center">
                      <div className="text-xs text-end">
                        <span className=" opacity-60 text-black font-normal">
                          Link to Contract
                        </span>
                      </div>
                      <div className="flex space-x-2 border-s ps-2 border-bordergray">
                        <a href="#">
                          <span className=" font-medium text-base text-spacegray">
                            link to the document
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-black text-lg font-semibold tracking-tight">
                      How we secure your wine?
                    </h4>
                    <p className="text-black text-lg font-normal tracking-tight">
                      Your wine asset is connected with additional security
                      data:
                    </p>
                  </div>
                  <div className="mt-5 bg-gray-500 px-4 py-2 border-b border-black border-opacity-10 gap-2">
                    <div className="items-center gap-2.5 flex">
                      <h6 className="text-right text-white text-base font-normal tracking-tight">
                        NFC ID
                      </h6>
                      <p className="text-white text-base font-medium underline tracking-tight">
                        123456
                      </p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-5 text-white"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="bg-zinc-100 px-6 py-6 border-b border-black border-opacity-10 gap-2">
                    <div className=" grid grid-cols-1 md:grid-cols-5 gap-9">
                      <div className=" flex justify-between col-span-2">
                        <h4>
                          <span className="text-gray-500 text-lg font-normal tracking-tight">
                            Our
                          </span>
                          <span className="text-black text-lg font-semibold tracking-tight">
                            Proof of authenticity
                          </span>
                        </h4>
                        <Image
                          src={Vector}
                          alt="Picture of the author"
                          width={80}
                        />
                      </div>
                      <div className=" col-span-3">
                        <div className="py-2.5 bg-white rounded gap-4">
                          <div className=" grid grid-cols-2 py-3 gap-2 items-center">
                            <div className="text-xs text-end">
                              <span className=" opacity-60 text-right text-black text-xs font-normal uppercase tracking-tight">
                                STICKER APPLIED on:
                              </span>
                            </div>
                            <div className="flex space-x-2 border-s ps-2 border-bordergray">
                              <a href="#">
                                <span className=" text-zinc-700 text-base font-medium tracking-tight">
                                  23.08.2023, 12:36 PM
                                </span>
                              </a>
                            </div>
                          </div>
                          <div className=" grid grid-cols-2 py-3 gap-2 items-center">
                            <div className="text-xs text-end">
                              <span className=" opacity-60 text-right text-black text-xs font-normal uppercase tracking-tight">
                                seal STATUS
                              </span>
                            </div>
                            <div className="flex space-x-2 border-s ps-2 border-bordergray">
                              <a href="#">
                                <span className=" text-right text-gray-600 text-base font-medium tracking-tight">
                                  Integrity...
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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
