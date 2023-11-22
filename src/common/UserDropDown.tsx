"use client";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "@/redux/account";
import Image from "next/image";
import arrowTray from "@/assets/icon/log-in.svg";
import { handleAllModals } from "@/redux/modalVisibility";

export default function UserDropDown() {
  const dispatch = useDispatch();
  const isAuthenticted = useSelector<any>(
    (state) => state?.account?.isAuthenticated
  ); 
  const handleModal = () => {
    dispatch(handleAllModals({ loginModal: { isVisible: true } }));
  };
  return (
    <div>
      {isAuthenticted ? (
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex w-full justify-center items-center rounded-md  px-4 py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75   text-base  leading-7">
              User Name
              <ChevronDownIcon
                className="ml-2 -mr-1 h-5 w-5 "
                aria-hidden="true"
              />
            </Menu.Button>
          </div>
          <Transition>
            <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
              <div className="px-1 py-1">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? " text-black" : "text-gray-900"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm `}
                    >
                      Profile
                    </button>
                  )}
                </Menu.Item>
              </div>
              <div className="px-1 py-1">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={() => dispatch(logoutAction())}
                      className={`${
                        active ? " text-black" : "text-gray-900"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    > 
                      Logout
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      ) : (
        <div className="flex gap-2">
          <Image
            src={arrowTray}
            alt="Picture of the author"
            width={20}
            height={20}
          />
          <button onClick={handleModal}>Sign Up / Login</button>
        </div>
      )}
    </div>
  );
}
