import React from "react";
import { Fragment } from "react";
import Appactivity from "@/components/charts/page";
import { Dialog, Transition } from "@headlessui/react";
import DisclosureModal from "../disclosure/page";
import DisclosureModals from "../disclosure/disclosure1/page";
import Image from "next/image";
import scan from "@/assets/icon/scan.svg";
import scans from "@/assets/icon/scans.svg";
import tempscan from "@/assets/icon/tempscan.svg";
export default function CollectionPopup2({
  open = false,
  setOpen,
}: {
  open: any;
  setOpen: any;
}) {
  return (
    <>
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
                <Dialog.Panel className="relative w-[1244px] lg:h-auto md:h-[600px] sm:h-full transform overflow-hidden bg-white text-left shadow-xl transition-all">
                  <div className="px-20 py-7">
                    {/* column one */}
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
                    {/* column two */}
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
                    <div className="bg-zinc-100 px-6 py-6 gap-2">
                      <div className=" grid grid-cols-1 md:grid-cols-5 gap-9">
                        <div className="col-span-2">
                          <div className="flex justify-between items-center">
                            <h4 className=" flex gap-1">
                              <span className="text-gray-500 text-lg font-normal tracking-tight">
                                Our
                              </span>
                              <span className="text-black text-lg font-semibold tracking-tight">
                                Proof of authenticity
                              </span>
                            </h4>
                            <Image src={scan} alt="scan" />
                          </div>
                          <div className="w-14 h-6 justify-center items-center gap-3 inline-flex">
                            <div className="w-[13px] h-[13px] relative">
                              <div className="w-[13px] h-[13px] left-0 top-0 absolute bg-green-600 bg-opacity-20 rounded-full" />
                              <div className="w-[7px] h-[7px] left-[3px] top-[3px] absolute bg-green-600 rounded-full" />
                            </div>
                            <div className="text-black text-base font-medium tracking-tight">
                              Live
                            </div>
                          </div>
                          <div className=" pt-4">
                            <span className="text-neutral-800 text-sm font-normal tracking-tight">
                              We use NFC tags to secure wine and keep track of
                              information about a given bottle.
                            </span>
                            <span className="text-neutral-800 text-sm font-normal underline tracking-tight">
                              Read more
                            </span>
                          </div>
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
                                <svg
                                  width="20"
                                  height="21"
                                  viewBox="0 0 20 21"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g id="check-circle">
                                    <path
                                      id="Vector"
                                      d="M18.3327 9.73333V10.5C18.3317 12.297 17.7498 14.0456 16.6738 15.4849C15.5978 16.9241 14.0854 17.9771 12.3621 18.4866C10.6389 18.9961 8.79707 18.9349 7.11141 18.3122C5.42575 17.6894 3.98656 16.5384 3.00848 15.0309C2.0304 13.5234 1.56584 11.7401 1.68408 9.94693C1.80232 8.1538 2.49702 6.44694 3.66458 5.08089C4.83214 3.71485 6.41 2.76282 8.16284 2.36679C9.91568 1.97076 11.7496 2.15195 13.391 2.88333"
                                      stroke="#198754"
                                      stroke-width="2"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                    />
                                    <path
                                      id="Vector_2"
                                      d="M18.3333 3.83333L10 12.175L7.5 9.675"
                                      stroke="#198754"
                                      stroke-width="2"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                    />
                                  </g>
                                </svg>
                                <a href="#">
                                  <span className=" text-right text-gray-600 text-base font-medium tracking-tight">
                                    Integrity...
                                  </span>
                                </a>
                              </div>
                            </div>
                            <div className=" flex justify-center pt-7 pb-3">
                              <button className="flex items-center gap-3 opacity-80 text-black text-base font-medium underline tracking-tight">
                                See all records
                                <span>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    className="w-4 h-4"
                                  >
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                                    />
                                  </svg>
                                </span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* column three */}
                    <div className="mt-8 bg-gray-500 px-4 py-2 border-b border-black border-opacity-10 gap-2">
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
                    <div className="bg-zinc-100 px-6 py-6 border-b-2  border-black border-opacity-10 gap-2 ">
                      <div className=" grid grid-cols-1 md:grid-cols-5 gap-9">
                        <div className="col-span-2">
                          <div className="flex justify-between items-center">
                            <h4 className=" flex gap-1">
                              <span className="text-gray-500 text-lg font-normal tracking-tight">
                                Our
                              </span>
                              <span className="text-black text-lg font-semibold tracking-tight">
                                Proof of ownership
                              </span>
                            </h4>
                            <Image src={scans} alt="scan" />
                          </div>
                          <div className="w-14 h-6 justify-center items-center gap-3 inline-flex">
                            <div className="w-[13px] h-[13px] relative">
                              <div className="w-[13px] h-[13px] left-0 top-0 absolute bg-green-600 bg-opacity-20 rounded-full" />
                              <div className="w-[7px] h-[7px] left-[3px] top-[3px] absolute bg-green-600 rounded-full" />
                            </div>
                            <div className="text-black text-base font-medium tracking-tight">
                              Live
                            </div>
                          </div>
                          <div className=" pt-4">
                            <span className="text-neutral-800 text-sm font-normal tracking-tight">
                              We use RFID technology to secure our products in
                              storage. Read more
                            </span>
                          </div>
                        </div>
                        <div className=" col-span-3">
                          <div className="py-2.5 bg-white rounded gap-4">
                            <div className=" grid grid-cols-2 py-3 gap-2 items-center">
                              <div className="text-xs text-end">
                                <span className=" opacity-60 text-right text-black text-xs font-normal uppercase tracking-tight">
                                  LAst audit
                                </span>
                              </div>
                              <div className="flex space-x-2 border-s ps-2 border-bordergray">
                                <a href="#">
                                  <span className=" text-zinc-700 text-base font-medium tracking-tight">
                                    30.06.2023
                                  </span>
                                </a>
                              </div>
                            </div>
                            <div className=" grid grid-cols-2 py-3 gap-2 items-center">
                              <div className="text-xs text-end">
                                <span className=" opacity-60 text-right text-black text-xs font-normal uppercase tracking-tight">
                                  Date of last check
                                </span>
                              </div>
                              <div className="flex space-x-2 border-s ps-2 border-bordergray">
                                <a href="#">
                                  <span className=" text-right text-gray-600 text-base font-medium tracking-tight">
                                    19.10.2023, 12:45 PM
                                  </span>
                                </a>
                              </div>
                            </div>
                            <div className=" grid grid-cols-2 py-3 gap-2">
                              <div className="text-xs text-end">
                                <span className=" opacity-60 text-right text-black text-xs font-normal uppercase tracking-tight">
                                  Last Check Status
                                </span>
                              </div>
                              <div className="flex  ">
                                <div>
                                  <div className="border-s ps-2 border-bordergray flex gap-2">
                                    <svg
                                      width="20"
                                      height="21"
                                      viewBox="0 0 20 21"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <g id="check-circle">
                                        <path
                                          id="Vector"
                                          d="M18.3327 9.73333V10.5C18.3317 12.297 17.7498 14.0456 16.6738 15.4849C15.5978 16.9241 14.0854 17.9771 12.3621 18.4866C10.6389 18.9961 8.79707 18.9349 7.11141 18.3122C5.42575 17.6894 3.98656 16.5384 3.00848 15.0309C2.0304 13.5234 1.56584 11.7401 1.68408 9.94693C1.80232 8.1538 2.49702 6.44694 3.66458 5.08089C4.83214 3.71485 6.41 2.76282 8.16284 2.36679C9.91568 1.97076 11.7496 2.15195 13.391 2.88333"
                                          stroke="#198754"
                                          stroke-width="2"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                        />
                                        <path
                                          id="Vector_2"
                                          d="M18.3333 3.83333L10 12.175L7.5 9.675"
                                          stroke="#198754"
                                          stroke-width="2"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                        />
                                      </g>
                                    </svg>
                                    <a href="#">
                                      <span className=" text-right text-gray-600 text-base font-medium tracking-tight">
                                        Product in our warehouse
                                      </span>
                                    </a>
                                  </div>
                                  <div className=" flex pt-4 ps-4">
                                    <button className="flex items-center gap-3 opacity-80 text-black text-base font-medium underline tracking-tight">
                                      See all records
                                      <span>
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          stroke-width="1.5"
                                          stroke="currentColor"
                                          className="w-4 h-4"
                                        >
                                          <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                                          />
                                        </svg>
                                      </span>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-zinc-100 px-6 py-6  border-black border-opacity-10 gap-2 ">
                      <div className=" grid grid-cols-1 md:grid-cols-5 gap-9">
                        <div className="col-span-2">
                          <div className="flex justify-between items-center">
                            <h4 className=" flex gap-1">
                              <span className="text-gray-500 text-lg font-normal tracking-tight">
                                Our
                              </span>
                              <span className="text-black text-lg font-semibold tracking-tight">
                                Proof of storage conditions
                              </span>
                            </h4>
                            <Image src={tempscan} alt="tempscan" />
                          </div>
                          <div className="w-14 h-6 justify-center items-center gap-3 inline-flex">
                            <div className="w-[13px] h-[13px] relative">
                              <div className="w-[13px] h-[13px] left-0 top-0 absolute bg-green-600 bg-opacity-20 rounded-full" />
                              <div className="w-[7px] h-[7px] left-[3px] top-[3px] absolute bg-green-600 rounded-full" />
                            </div>
                            <div className="text-black text-base font-medium tracking-tight">
                              Live
                            </div>
                          </div>
                          <div className=" pt-4">
                            <span className="text-neutral-800 text-sm font-normal tracking-tight">
                              We are monitoring conditions in our cellars. Live.
                              Read more
                            </span>
                          </div>
                        </div>
                        <div className=" col-span-3">
                          <div className="py-2.5 bg-white rounded gap-4">
                            <div className=" grid grid-cols-2 py-3 gap-2 items-center">
                              <div className="text-xs text-end">
                                <span className=" opacity-60 text-right text-black text-xs font-normal uppercase tracking-tight">
                                  Date of last check
                                </span>
                              </div>
                              <div className="flex space-x-2 border-s ps-2 border-bordergray">
                                <a href="#">
                                  <span className=" text-right text-gray-600 text-base font-medium tracking-tight">
                                    19.10.2023, 12:45 PM
                                  </span>
                                </a>
                              </div>
                            </div>
                            <div className="text-center text-black text-xs font-medium tracking-tight pt-5 pb-2">
                              History of storage conditions
                            </div>
                            <div className="flex justify-center mx-auto w-96 px-8 py-6 bg-white rounded border border-gray-400">
                              <div>
                                <Appactivity />
                              </div>
                            </div>
                            <div className=" flex justify-evenly bg-white py-5 w-[451px] text-bgsecondary mx-auto">
                              <span className="text-right text-black text-xs font-normal tracking-tight">
                                Recommended temperature: 12°C
                              </span>
                              <span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke-width="1.5"
                                  stroke="currentColor"
                                  className="w-5 h-5"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                                  />
                                </svg>
                              </span>
                              <span className="text-right text-black text-xs font-normal tracking-tight">
                                Recommended humidity: 70%
                              </span>
                              <span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke-width="1.5"
                                  stroke="currentColor"
                                  className="w-5 h-5"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                                  />
                                </svg>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* column four */}

                    <DisclosureModals />
                    {/* column five */}
                    <DisclosureModal />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
