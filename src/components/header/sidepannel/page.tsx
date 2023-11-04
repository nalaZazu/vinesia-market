"use client";
import { menuBar } from "@/constants/navigate";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../assets/img/Logo1.png";
import xmark from "../../../assets/icon/x-mark.svg";
import React, { useState } from "react";

const SidePannel = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<any>(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <>
    
      <div className="flex">
        <button
          onClick={toggleSidebar}
          data-drawer-target="default-sidebar"
          data-drawer-toggle="default-sidebar"
          aria-controls="default-sidebar"
          type="button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
        {isSidebarOpen && (
          <div
            id="default-sidebar"
            className="fixed top-0 left-0 z-40 w-40 h-screen 
            transition-transform -translate-x-full sm:translate-x-0 bg-themegray dark:bg-secondary"
            aria-label="Sidebar"
          >
            <ul className="space-y-4  font-medium">
              <li className="flex gap-20 space-x-2 mt-5 ml-3">
                <Image
                  src={logo}
                  alt="Picture of the author"
                  width={40}
                  height={40}
                />
                <Image
                  src={xmark}
                  alt="Picture of the author"
                  width={10}
                  height={10}
                  onClick={toggleSidebar}
                />
              </li>
              <hr className="my-4  mx-2 text-[#C6C7C8] font-bold" />
              {menuBar?.map((item: any) => {
                const { id, name, href , icon } = item;
                return (
                  <li key={id}>
                    <Link href={href} className="ml-3  flex gap-2 text-xxs">
                        <Image src={icon} alt="icon" width={10} height={10}/>
                      {name}
                    
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default SidePannel;
