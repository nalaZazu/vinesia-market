import React from "react";

export default function BreadCrumb() {
  return (
    <nav className="flex pt-5" aria-label="Breadcrumb">
      <ol className="container mx-auto flex flex-wrap items-center gap-3">
        <li className="inline-flex items-center">
          <a href="#" className="text-xxs font-normal text-breadcrumb">
            Vinesia Marketplace
          </a>
        </li>
        <li className="hidden md:inline-flex lg:block items-center text-xs font-normal">
          /
        </li>
        <li>
          <div className="flex items-center">
            <a href="#" className="  text-xxs font-normal text-breadcrumb">
              Home Page
            </a>
          </div>
        </li>
        <li className="hidden md:inline-flex lg:block items-center text-xs font-normal">
          /
        </li>
        <li aria-current="page">
          <div className="flex items-center">
            <span className="  text-xxs font-normal text-breadcrumb">
              Collections
            </span>
          </div>
        </li>
        <li className="hidden md:inline-flex lg:block items-center text-xs font-normal">
          /
        </li>
        <li aria-current="page">
          <div className="flex items-center">
            <span className="  text-xxs font-normal text-breadcrumb">
              Chateau La Mission and Art
            </span>
          </div>
        </li>
      </ol>
    </nav>
  );
}
