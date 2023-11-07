"use client";
import React from "react";
import Link from "next/link";
import logo from "../../assets/img/Logo1.png";
import arrowTray from "../../assets/icon/log-in.svg";
import Image from "next/image";
import { menuBar } from "@/constants/navigate";
import { useRouter } from "next/navigation";
import SidePannel from "./sidepannel/page";
const Header = () => {
  return (
    <div>
      <nav className="p-4">
        <div className="container mx-auto grid grid-cols-12 justify-between items-center">
          {/* topbar start */}
          <div className="md:flex  hidden items-center space-x-4 lg:space-x-8 md:col-span-5">
            <a href="#">
              <span className=" hidden md:block">Vinesia Story</span>
            </a>
            <a href="#">
              <span className=" hidden md:block">Vinesia Marketplace</span>
            </a>
          </div>

          <div className=" text-2xl lg:text-4xl font-bold col-span-2 md:text-center">
            <Image
              src={logo}
              className="md:mx-auto"
              alt="Picture of the author"
              width={80}
              height={80}
            />
          </div>

          <div className="flex items-center space-x-4 lg:space-x-8 md:col-span-5 col-span-10 ms-auto">
            <div className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
              <input
                type="text"
                className="bg-white px-0 focus:outline-none hover:cursor-pointer w-12"
                name=""
                placeholder="Search"
              />
            </div>
            <Image
              src={arrowTray}
              alt="Picture of the author"
              width={20}
              height={20}
            />
            <button>Sign Up / Login</button>
            <div className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>

              <span className="">Cart</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Navbar */}
      <nav className="bg-themegray py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <ul className="hidden lg:flex space-x-6">
            {menuBar?.map((item: any) => {
              const { id, name, href } = item;
              return (
                <li key={id}>
                  <Link href={href}>{name}</Link>
                </li>
              );
            })}
          </ul>
          {/* Mobile Navbar (Hidden on Desktop)  */}
          <div className="lg:hidden">
            <div className="block lg:hidden">
              <SidePannel />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
