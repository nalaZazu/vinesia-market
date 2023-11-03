import React from "react";

export default function BreadCrumb() {
  return (
    <nav className="flex pt-5" aria-label="Breadcrumb">
      <ol className="container mx-auto flex flex-wrap items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
          <a
            href="#"
            className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
          >
            Vinesia Marketplace
          </a>
        </li>
        <li className="hidden md:inline-flex items-center">/</li>{" "}
        <li>
          <div className="flex items-center">
            <span className="hidden md:inline-flex text-sm font-medium text-gray-700 md:ml-2 dark:text-gray-400 dark:hover:text-white">
              /
            </span>{" "}
            <a
              href="#"
              className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white"
            >
              Home Page
            </a>
          </div>
        </li>
        <li className="hidden md:inline-flex items-center">/</li>{" "}
        <li aria-current="page">
          <div className="flex items-center">
            <span className="hidden md:inline-flex text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
              /
            </span>{" "}
            <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
              Collections
            </span>
          </div>
        </li>
        <li className="hidden md:inline-flex items-center">/</li>{" "}
        <li aria-current="page">
          <div className="flex items-center">
            <span className="hidden md:inline-flex text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
              /
            </span>{" "}
            <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
              Chateau La Mission and Art
            </span>
          </div>
        </li>
      </ol>
    </nav>
  );
}
