import React from "react";
import { Fragment } from "react";
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
                  <div className="bg-white py-1">
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
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
