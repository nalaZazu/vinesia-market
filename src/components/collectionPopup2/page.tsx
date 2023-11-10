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
                          <svg
                            width="56"
                            height="56"
                            viewBox="0 0 56 56"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g id="Icons/NFC">
                              <path
                                id="Vector"
                                d="M45.6682 2.41992H12.6632C10.3824 2.41992 8.5332 4.27492 8.5332 6.54992V51.7816C8.5332 54.0624 10.3882 55.9116 12.6632 55.9116H45.6624C47.9432 55.9116 49.7924 54.0566 49.7924 51.7816V6.54992C49.7924 4.26909 47.9374 2.41992 45.6624 2.41992H45.6682ZM48.0774 51.7816C48.0774 53.1058 46.9982 54.1908 45.6682 54.1908H12.6632C11.339 54.1908 10.254 53.1116 10.254 51.7816V6.54992C10.254 5.22575 11.3332 4.14076 12.6632 4.14076H45.6624C46.9924 4.14076 48.0715 5.21992 48.0715 6.54992V51.7816H48.0774ZM33.984 51.3383C33.984 51.8166 33.599 52.2016 33.1207 52.2016H25.2165C24.7382 52.2016 24.3532 51.8166 24.3532 51.3383C24.3532 50.8599 24.7382 50.4749 25.2165 50.4749H33.1207C33.599 50.4749 33.984 50.8599 33.984 51.3383ZM24.3532 6.99325C24.3532 6.51492 24.7382 6.12992 25.2165 6.12992H33.1207C33.599 6.12992 33.984 6.51492 33.984 6.99325C33.984 7.47159 33.599 7.85659 33.1207 7.85659H25.2165C24.7382 7.85659 24.3532 7.47159 24.3532 6.99325ZM43.4574 35.1741V42.5883C43.4574 43.0666 43.0724 43.4516 42.594 43.4516H35.1799C34.7015 43.4516 34.3165 43.0666 34.3165 42.5883C34.3165 42.1099 34.7015 41.7249 35.1799 41.7249H41.7307V35.1741C41.7307 34.6958 42.1157 34.3108 42.594 34.3108C43.0724 34.3108 43.4574 34.6958 43.4574 35.1741ZM14.8799 23.1574V15.7433C14.8799 15.2649 15.2649 14.8799 15.7432 14.8799H23.1574C23.6357 14.8799 24.0207 15.2649 24.0207 15.7433C24.0207 16.2216 23.6357 16.6066 23.1574 16.6066H16.6065V23.1574C16.6065 23.6358 16.2215 24.0208 15.7432 24.0208C15.2649 24.0208 14.8799 23.6358 14.8799 23.1574ZM24.0207 42.5941C24.0207 43.0724 23.6357 43.4574 23.1574 43.4574H15.7432C15.2649 43.4574 14.8799 43.0724 14.8799 42.5941V35.1799C14.8799 34.7016 15.2649 34.3166 15.7432 34.3166C16.2215 34.3166 16.6065 34.7016 16.6065 35.1799V41.7308H23.1574C23.6357 41.7308 24.0207 42.1157 24.0207 42.5941ZM43.4515 15.7433V23.1574C43.4515 23.6358 43.0665 24.0208 42.5882 24.0208C42.1099 24.0208 41.7249 23.6358 41.7249 23.1574V16.6066H35.174C34.6957 16.6066 34.3107 16.2216 34.3107 15.7433C34.3107 15.2649 34.6957 14.8799 35.174 14.8799H42.5882C43.0665 14.8799 43.4515 15.2649 43.4515 15.7433ZM27.4449 20.8883C27.4449 20.1941 26.879 19.6341 26.1907 19.6341H20.789C20.0949 19.6341 19.5349 20.1999 19.5349 20.8883V26.2899C19.5349 26.9841 20.1007 27.5441 20.789 27.5441H26.1907C26.8849 27.5441 27.4449 26.9783 27.4449 26.2899V20.8883ZM25.7182 25.8174H21.2557V21.3549H25.7182V25.8174ZM19.529 37.4491C19.529 38.1432 20.0949 38.7033 20.7832 38.7033H26.1849C26.879 38.7033 27.439 38.1374 27.439 37.4491V32.0474C27.439 31.3533 26.8732 30.7933 26.1849 30.7933H20.7832C20.089 30.7933 19.529 31.3591 19.529 32.0474V37.4491ZM21.2557 32.5199H25.7182V36.9824H21.2557V32.5199ZM36.8774 26.8674V21.3549H35.0457C34.5674 21.3549 34.1824 20.9699 34.1824 20.4916C34.1824 20.0133 34.5674 19.6283 35.0457 19.6283H37.3499C38.044 19.6283 38.604 20.1941 38.604 20.8824V26.8616C38.604 27.3399 38.219 27.7249 37.7407 27.7249C37.2624 27.7249 36.8774 27.3399 36.8774 26.8616V26.8674ZM31.9482 38.7033H37.3499C38.044 38.7033 38.604 38.1374 38.604 37.4491V32.0474C38.604 31.3533 38.0382 30.7933 37.3499 30.7933H31.9482C31.254 30.7933 30.694 31.3591 30.694 32.0474V37.4491C30.694 38.1432 31.2599 38.7033 31.9482 38.7033ZM32.4207 32.5141H36.8832V36.9766H32.4207V32.5141ZM29.8657 28.6524C29.1715 28.6524 28.6115 28.0866 28.6115 27.3983V24.8374C28.6115 24.3591 28.9965 23.9741 29.4749 23.9741H32.5607C33.039 23.9741 33.424 24.3591 33.424 24.8374C33.424 25.3158 33.039 25.7008 32.5607 25.7008H30.3382V26.9316H32.5374C33.0157 26.9316 33.4007 27.3166 33.4007 27.7949C33.4007 28.2733 33.0157 28.6583 32.5374 28.6583H29.8657V28.6524ZM33.424 20.8824V22.2591C33.424 22.7374 33.039 23.1224 32.5607 23.1224C32.0824 23.1224 31.6974 22.7374 31.6974 22.2591V21.3491H29.4749C28.9965 21.3491 28.6115 20.9641 28.6115 20.4858C28.6115 20.0074 28.9965 19.6224 29.4749 19.6224H32.1699C32.864 19.6224 33.424 20.1883 33.424 20.8766V20.8824ZM34.1882 24.2074V22.5683C34.1882 22.0899 34.5732 21.7049 35.0515 21.7049C35.5299 21.7049 35.9149 22.0899 35.9149 22.5683V24.2074C35.9149 24.6858 35.5299 25.0708 35.0515 25.0708C34.5732 25.0708 34.1882 24.6858 34.1882 24.2074ZM34.0015 28.7924V26.1208C34.0015 25.6424 34.3865 25.2574 34.8649 25.2574C35.3432 25.2574 35.7282 25.6424 35.7282 26.1208V28.3199H37.9274C38.4057 28.3199 38.7907 28.7049 38.7907 29.1833C38.7907 29.6616 38.4057 30.0466 37.9274 30.0466H35.2557C34.5615 30.0466 34.0015 29.4808 34.0015 28.7924ZM28.9965 29.2533C29.4749 29.2533 29.8599 29.6383 29.8599 30.1166V37.8341C29.8599 38.3124 29.4749 38.6974 28.9965 38.6974C28.5182 38.6974 28.1332 38.3124 28.1332 37.8341V30.1166C28.1332 29.6383 28.5182 29.2533 28.9965 29.2533ZM33.1499 28.8624C33.6282 28.8624 34.0132 29.2474 34.0132 29.7258C34.0132 30.2041 33.6282 30.5891 33.1499 30.5891H31.9599C31.4815 30.5891 31.0965 30.2041 31.0965 29.7258C31.0965 29.2474 31.4815 28.8624 31.9599 28.8624H33.1499ZM25.094 30.0291C24.6157 30.0291 24.2307 29.6441 24.2307 29.1658C24.2307 28.6874 24.6157 28.3024 25.094 28.3024H26.284C26.7624 28.3024 27.1474 28.6874 27.1474 29.1658C27.1474 29.6441 26.7624 30.0291 26.284 30.0291H25.094ZM20.3924 30.0291C19.914 30.0291 19.529 29.6441 19.529 29.1658C19.529 28.6874 19.914 28.3024 20.3924 28.3024H23.0524C23.5307 28.3024 23.9157 28.6874 23.9157 29.1658C23.9157 29.6441 23.5307 30.0291 23.0524 30.0291H20.3924ZM24.9424 34.7483C24.9424 35.2266 24.5574 35.6116 24.079 35.6116H22.889C22.4107 35.6116 22.0257 35.2266 22.0257 34.7483C22.0257 34.2699 22.4107 33.8849 22.889 33.8849H24.079C24.5574 33.8849 24.9424 34.2699 24.9424 34.7483ZM36.1015 34.7483C36.1015 35.2266 35.7165 35.6116 35.2382 35.6116H34.0482C33.5699 35.6116 33.1849 35.2266 33.1849 34.7483C33.1849 34.2699 33.5699 33.8849 34.0482 33.8849H35.2382C35.7165 33.8849 36.1015 34.2699 36.1015 34.7483ZM22.0257 23.5891C22.0257 23.1108 22.4107 22.7258 22.889 22.7258H24.079C24.5574 22.7258 24.9424 23.1108 24.9424 23.5891C24.9424 24.0674 24.5574 24.4524 24.079 24.4524H22.889C22.4107 24.4524 22.0257 24.0674 22.0257 23.5891Z"
                                fill="#565E64"
                              />
                            </g>
                          </svg>
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
                          <svg
                            width="56"
                            height="56"
                            viewBox="0 0 56 56"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g id="Icons/technology">
                              <path
                                id="Vector"
                                d="M36.3502 40.8361H23.3013C20.8593 40.8361 18.874 38.8481 18.874 36.4027V23.3361C18.874 20.8907 20.8593 18.9027 23.3013 18.9027H36.3502C38.7922 18.9027 40.7775 20.8907 40.7775 23.3361V36.4027C40.7775 38.8481 38.7922 40.8361 36.3502 40.8361ZM23.3013 20.3027C21.6329 20.3027 20.2721 21.6654 20.2721 23.3361V36.4027C20.2721 38.0734 21.6329 39.4361 23.3013 39.4361H36.3502C38.0186 39.4361 39.3794 38.0734 39.3794 36.4027V23.3361C39.3794 21.6654 38.0186 20.3027 36.3502 20.3027H23.3013ZM36.3502 37.1027H23.3013C22.9191 37.1027 22.6022 36.7854 22.6022 36.4027V23.3361C22.6022 22.9534 22.9191 22.6361 23.3013 22.6361H36.3502C36.7324 22.6361 37.0493 22.9534 37.0493 23.3361V36.4027C37.0493 36.7854 36.7324 37.1027 36.3502 37.1027ZM24.0003 35.7027H35.6512V24.0361H24.0003V35.7027ZM29.8257 33.3694C27.8964 33.3694 26.3305 31.8014 26.3305 29.8694C26.3305 27.9374 27.8964 26.3694 29.8257 26.3694C31.7551 26.3694 33.321 27.9374 33.321 29.8694C33.321 31.8014 31.7551 33.3694 29.8257 33.3694ZM29.8257 27.7694C28.67 27.7694 27.7286 28.7121 27.7286 29.8694C27.7286 31.0267 28.67 31.9694 29.8257 31.9694C30.9815 31.9694 31.9229 31.0267 31.9229 29.8694C31.9229 28.7121 30.9815 27.7694 29.8257 27.7694ZM40.1996 9.27072C40.4699 9.00006 40.4699 8.55206 40.1996 8.28139C37.4221 5.50006 33.7404 3.96939 29.8257 3.96939C25.9111 3.96939 22.2294 5.50006 19.4519 8.28139C19.1816 8.55206 19.1816 9.00006 19.4519 9.27072C19.7222 9.54139 20.1696 9.54139 20.4399 9.27072C22.9564 6.75072 26.2839 5.36939 29.8257 5.36939C33.3676 5.36939 36.6951 6.75072 39.2116 9.27072C39.3515 9.41072 39.5285 9.47606 39.7056 9.47606C39.8827 9.47606 40.0598 9.41072 40.1996 9.27072ZM37.5712 11.9027C37.8415 11.6321 37.8415 11.1841 37.5712 10.9134C35.4927 8.84139 32.7431 7.70272 29.8257 7.70272C26.9084 7.70272 24.1588 8.84139 22.0803 10.9134C21.81 11.1841 21.81 11.6321 22.0803 11.9027C22.3506 12.1734 22.798 12.1734 23.0683 11.9027C24.8858 10.0921 27.2812 9.10272 29.8257 9.10272C32.3703 9.10272 34.775 10.1014 36.5832 11.9027C36.723 12.0427 36.9001 12.1081 37.0772 12.1081C37.2543 12.1081 37.4314 12.0427 37.5712 11.9027ZM25.706 14.5441C26.8059 13.4427 28.2692 12.8361 29.8257 12.8361C31.3823 12.8361 32.8456 13.4427 33.9455 14.5441C34.2158 14.8147 34.6632 14.8147 34.9335 14.5441C35.2038 14.2734 35.2038 13.8254 34.9335 13.5547C33.5727 12.1921 31.7551 11.4361 29.8257 11.4361C27.8964 11.4361 26.0788 12.1921 24.718 13.5547C24.4477 13.8254 24.4477 14.2734 24.718 14.5441C24.8578 14.6841 25.0349 14.7494 25.212 14.7494C25.3891 14.7494 25.5662 14.6841 25.706 14.5441ZM40.1996 51.4574C40.4699 51.1867 40.4699 50.7387 40.1996 50.4681C39.9293 50.1974 39.4819 50.1974 39.2116 50.4681C36.6951 52.9881 33.3676 54.3694 29.8257 54.3694C26.2839 54.3694 22.9564 52.9881 20.4399 50.4681C20.1696 50.1974 19.7222 50.1974 19.4519 50.4681C19.1816 50.7387 19.1816 51.1867 19.4519 51.4574C22.2294 54.2387 25.9111 55.7694 29.8257 55.7694C33.7404 55.7694 37.4221 54.2387 40.1996 51.4574ZM37.5712 48.8254C37.8415 48.5547 37.8415 48.1067 37.5712 47.8361C37.3009 47.5654 36.8535 47.5654 36.5832 47.8361C34.7657 49.6467 32.3703 50.6361 29.8257 50.6361C27.2812 50.6361 24.8765 49.6374 23.0683 47.8361C22.798 47.5654 22.3506 47.5654 22.0803 47.8361C21.81 48.1067 21.81 48.5547 22.0803 48.8254C24.1588 50.8974 26.9084 52.0361 29.8257 52.0361C32.7431 52.0361 35.4927 50.8974 37.5712 48.8254ZM34.9335 46.1841C35.2038 45.9134 35.2038 45.4654 34.9335 45.1947C34.6632 44.9241 34.2158 44.9241 33.9455 45.1947C32.8456 46.2961 31.3823 46.9027 29.8257 46.9027C28.2692 46.9027 26.8059 46.2961 25.706 45.1947C25.4357 44.9241 24.9883 44.9241 24.718 45.1947C24.4477 45.4654 24.4477 45.9134 24.718 46.1841C26.0788 47.5467 27.8964 48.3027 29.8257 48.3027C31.7551 48.3027 33.5727 47.5467 34.9335 46.1841ZM51.3844 40.2574C54.162 37.4761 55.6906 33.7894 55.6906 29.8694C55.6906 25.9494 54.162 22.2627 51.3844 19.4814C51.1141 19.2107 50.6667 19.2107 50.3964 19.4814C50.1261 19.7521 50.1261 20.2001 50.3964 20.4707C52.913 22.9907 54.2925 26.3227 54.2925 29.8694C54.2925 33.4161 52.913 36.7481 50.3964 39.2681C50.1261 39.5387 50.1261 39.9867 50.3964 40.2574C50.5362 40.3974 50.7133 40.4627 50.8904 40.4627C51.0675 40.4627 51.2446 40.3974 51.3844 40.2574ZM48.756 37.6254C50.8252 35.5441 51.9623 32.7907 51.9623 29.8694C51.9623 26.9481 50.8252 24.1947 48.756 22.1134C48.4857 21.8427 48.0383 21.8427 47.768 22.1134C47.4977 22.3841 47.4977 22.8321 47.768 23.1027C49.5762 24.9227 50.5642 27.3214 50.5642 29.8694C50.5642 32.4174 49.5669 34.8161 47.768 36.6361C47.4977 36.9067 47.4977 37.3547 47.768 37.6254C47.9078 37.7654 48.0849 37.8307 48.262 37.8307C48.4391 37.8307 48.6162 37.7654 48.756 37.6254ZM46.1182 34.9841C47.4791 33.6214 48.234 31.8014 48.234 29.8694C48.234 27.9374 47.4791 26.1174 46.1182 24.7547C45.8479 24.4841 45.4006 24.4841 45.1303 24.7547C44.86 25.0254 44.86 25.4734 45.1303 25.7441C46.2301 26.8454 46.8359 28.3107 46.8359 29.8694C46.8359 31.4281 46.2301 32.8934 45.1303 33.9947C44.86 34.2654 44.86 34.7134 45.1303 34.9841C45.2701 35.1241 45.4472 35.1894 45.6243 35.1894C45.8013 35.1894 45.9784 35.1241 46.1182 34.9841ZM9.25507 40.2574C9.52537 39.9867 9.52537 39.5387 9.25507 39.2681C6.73849 36.7481 5.35904 33.4161 5.35904 29.8694C5.35904 26.3227 6.73849 22.9907 9.25507 20.4707C9.52537 20.2001 9.52537 19.7521 9.25507 19.4814C8.98477 19.2107 8.53738 19.2107 8.26708 19.4814C5.48952 22.2627 3.96094 25.9494 3.96094 29.8694C3.96094 33.7894 5.48952 37.4761 8.26708 40.2574C8.40689 40.3974 8.58398 40.4627 8.76107 40.4627C8.93817 40.4627 9.11526 40.3974 9.25507 40.2574ZM11.8835 37.6254C12.1538 37.3547 12.1538 36.9067 11.8835 36.6361C10.0753 34.8161 9.0873 32.4174 9.0873 29.8694C9.0873 27.3214 10.0846 24.9134 11.8835 23.1027C12.1538 22.8321 12.1538 22.3841 11.8835 22.1134C11.6132 21.8427 11.1658 21.8427 10.8955 22.1134C8.82632 24.1947 7.6892 26.9481 7.6892 29.8694C7.6892 32.7907 8.82632 35.5441 10.8955 37.6254C11.0353 37.7654 11.2124 37.8307 11.3895 37.8307C11.5666 37.8307 11.7437 37.7654 11.8835 37.6254ZM14.5212 34.9841C14.7915 34.7134 14.7915 34.2654 14.5212 33.9947C13.4214 32.8934 12.8156 31.4281 12.8156 29.8694C12.8156 28.3107 13.4214 26.8454 14.5212 25.7441C14.7915 25.4734 14.7915 25.0254 14.5212 24.7547C14.2509 24.4841 13.8035 24.4841 13.5332 24.7547C12.1724 26.1174 11.4175 27.9374 11.4175 29.8694C11.4175 31.8014 12.1724 33.6214 13.5332 34.9841C13.6731 35.1241 13.8502 35.1894 14.0272 35.1894C14.2043 35.1894 14.3814 35.1241 14.5212 34.9841Z"
                                fill="black"
                              />
                            </g>
                          </svg>
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
                          <svg
                            width="56"
                            height="56"
                            viewBox="0 0 56 56"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clip-path="url(#clip0_1986_64775)">
                              <g clip-path="url(#clip1_1986_64775)">
                                <path
                                  d="M22.266 24.2C20.499 24.2 19.066 25.633 19.066 27.4C19.066 29.167 20.499 30.6 22.266 30.6C24.0331 30.6 25.466 29.167 25.466 27.4C25.466 25.633 24.0331 24.2 22.266 24.2ZM22.266 29C21.3847 29 20.666 28.2829 20.666 27.4C20.666 26.5171 21.3847 25.8 22.266 25.8C23.1473 25.8 23.866 26.5171 23.866 27.4C23.866 28.2829 23.1473 29 22.266 29ZM15.866 21C15.866 19.233 14.4315 17.8 12.666 17.8C10.8974 17.8 9.46602 19.233 9.46602 21C9.46602 22.767 10.8974 24.2 12.666 24.2C14.4318 24.2 15.866 22.767 15.866 21ZM11.066 21C11.066 20.1171 11.7847 19.4 12.666 19.4C13.5473 19.4 14.266 20.1171 14.266 21C14.266 21.8829 13.5473 22.6 12.666 22.6C11.7847 22.6 11.066 21.8829 11.066 21ZM17.466 5C17.466 5 4.66602 13 4.66602 24.2C4.66602 31.2688 10.3972 37 17.466 37C24.5348 37 30.266 31.2688 30.266 24.2C30.266 13 17.466 5 17.466 5ZM17.466 35.4C11.291 35.4 6.26602 30.375 6.26602 24.2C6.26602 15.6406 14.7223 8.89856 17.4676 6.936C20.2129 8.89376 28.666 15.6173 28.666 24.2C28.666 30.375 23.6411 35.4 17.466 35.4ZM22.8318 19.9658L13.2318 29.5658L12.1006 28.4346L21.7006 18.8346L22.8318 19.9658Z"
                                  fill="black"
                                  stroke="black"
                                  stroke-width="0.2"
                                />
                              </g>
                              <g clip-path="url(#clip2_1986_64775)">
                                <path
                                  d="M49.7143 34.987H46.2857C46.1715 34.987 46.1017 35.0794 46.0646 35.1455C46.022 35.2214 45.988 35.323 45.9611 35.438C45.9069 35.67 45.875 35.9856 45.875 36.3342C45.875 36.6828 45.9069 36.9984 45.9611 37.2304C45.988 37.3454 46.022 37.447 46.0646 37.5229C46.1017 37.589 46.1715 37.6814 46.2857 37.6814H49.7143C49.8285 37.6814 49.8983 37.589 49.9354 37.5229C49.978 37.447 50.012 37.3454 50.0389 37.2304C50.0931 36.9984 50.125 36.6828 50.125 36.3342C50.125 35.9856 50.0931 35.67 50.0389 35.438C50.012 35.323 49.978 35.2214 49.9354 35.1455C49.8983 35.0794 49.8285 34.987 49.7143 34.987Z"
                                  fill="black"
                                  stroke="black"
                                  stroke-width="0.25"
                                />
                                <path
                                  d="M49.7143 32.5417H46.2857C46.1295 32.5417 46.0265 32.6694 45.9696 32.7909C45.9087 32.9213 45.875 33.0931 45.875 33.2778C45.875 33.4624 45.9087 33.6342 45.9696 33.7646C46.0265 33.8862 46.1295 34.0139 46.2857 34.0139H49.7143C49.8705 34.0139 49.9735 33.8862 50.0304 33.7646C50.0913 33.6342 50.125 33.4624 50.125 33.2778C50.125 33.0931 50.0913 32.9213 50.0304 32.7909C49.9735 32.6694 49.8705 32.5417 49.7143 32.5417Z"
                                  fill="black"
                                  stroke="black"
                                  stroke-width="0.25"
                                />
                                <path
                                  d="M49.7143 30.0964H46.2857C46.1295 30.0964 46.0265 30.224 45.9696 30.3456C45.9087 30.476 45.875 30.6478 45.875 30.8325C45.875 31.0171 45.9087 31.1889 45.9696 31.3193C46.0265 31.4409 46.1295 31.5686 46.2857 31.5686H49.7143C49.8705 31.5686 49.9735 31.4409 50.0304 31.3193C50.0913 31.1889 50.125 31.0171 50.125 30.8325C50.125 30.6478 50.0913 30.476 50.0304 30.3456C49.9735 30.224 49.8705 30.0964 49.7143 30.0964Z"
                                  fill="black"
                                  stroke="black"
                                  stroke-width="0.25"
                                />
                                <path
                                  d="M49.7143 27.6536H46.2857C46.1295 27.6536 46.0265 27.7813 45.9696 27.9029C45.9087 28.0333 45.875 28.2051 45.875 28.3898C45.875 28.5744 45.9087 28.7462 45.9696 28.8766C46.0265 28.9982 46.1295 29.1259 46.2857 29.1259H49.7143C49.8705 29.1259 49.9735 28.9982 50.0304 28.8766C50.0913 28.7462 50.125 28.5744 50.125 28.3898C50.125 28.2051 50.0913 28.0333 50.0304 27.9029C49.9735 27.7813 49.8705 27.6536 49.7143 27.6536Z"
                                  fill="black"
                                  stroke="black"
                                  stroke-width="0.25"
                                />
                                <path
                                  d="M46.2857 26.6806H49.7143C49.8705 26.6806 49.9735 26.5529 50.0304 26.4313C50.0913 26.3009 50.125 26.1291 50.125 25.9444C50.125 25.7598 50.0913 25.588 50.0304 25.4576C49.9735 25.336 49.8705 25.2083 49.7143 25.2083H46.2857C46.1295 25.2083 46.0265 25.336 45.9696 25.4576C45.9087 25.588 45.875 25.7598 45.875 25.9444C45.875 26.1291 45.9087 26.3009 45.9696 26.4313C46.0265 26.5529 46.1295 26.6806 46.2857 26.6806Z"
                                  fill="black"
                                  stroke="black"
                                  stroke-width="0.25"
                                />
                                <path
                                  d="M44.791 44.2933C44.791 42.1757 43.169 40.4367 41.0987 40.2192V24.4175C41.0987 24.1766 40.9065 23.987 40.666 23.987C40.4255 23.987 40.2333 24.1766 40.2333 24.4175V40.2192C38.163 40.4367 36.541 42.1757 36.541 44.2933C36.541 46.551 38.3947 48.3906 40.666 48.3906C42.9373 48.3906 44.791 46.551 44.791 44.2933ZM40.666 47.5294C38.8696 47.5294 37.4064 46.0751 37.4064 44.2933C37.4064 42.5115 38.8696 41.0572 40.666 41.0572C42.4624 41.0572 43.9256 42.5115 43.9256 44.2933C43.9256 46.0751 42.4624 47.5294 40.666 47.5294Z"
                                  fill="black"
                                  stroke="black"
                                  stroke-width="0.25"
                                />
                                <path
                                  d="M46.551 40.8548L46.5507 40.8542C46.0128 39.9218 45.262 39.1267 44.3674 38.5388V25.3333C44.3674 23.2425 42.6821 21.5417 40.6061 21.5417C38.53 21.5417 36.8447 23.2425 36.8447 25.3333V38.62C34.9828 39.8997 33.875 41.9976 33.875 44.2778C33.875 48.0553 36.9179 51.125 40.6667 51.125C44.4155 51.125 47.4583 48.0553 47.4583 44.2778C47.4583 43.0766 47.1436 41.8941 46.551 40.8548ZM37.5035 39.2132L37.5044 39.2127C37.6243 39.1349 37.7008 38.9979 37.7008 38.8511V25.3333C37.7008 23.7147 39.0033 22.4028 40.6061 22.4028C42.2088 22.4028 43.5114 23.7147 43.5114 25.3333V38.7717C43.5114 38.924 43.5876 39.063 43.717 39.1413C45.522 40.2369 46.6023 42.1519 46.6023 44.2778C46.6023 47.5769 43.936 50.2639 40.6667 50.2639C37.3973 50.2639 34.7311 47.5769 34.7311 44.2778C34.7311 42.2119 35.764 40.3207 37.5035 39.2132Z"
                                  fill="black"
                                  stroke="black"
                                  stroke-width="0.25"
                                />
                              </g>
                            </g>
                            <defs>
                              <clipPath id="clip0_1986_64775">
                                <rect width="56" height="56" fill="white" />
                              </clipPath>
                              <clipPath id="clip1_1986_64775">
                                <rect
                                  width="32"
                                  height="32"
                                  fill="white"
                                  transform="translate(2 5)"
                                />
                              </clipPath>
                              <clipPath id="clip2_1986_64775">
                                <rect
                                  width="32"
                                  height="32"
                                  fill="white"
                                  transform="translate(26 19)"
                                />
                              </clipPath>
                            </defs>
                          </svg>
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
