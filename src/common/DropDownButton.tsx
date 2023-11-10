import React, { useState } from "react";

const DropDownButton = () => {
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className="">
        <p className="text-neutral-900 text-sm font-normal tracking-tight">
          Sort by
        </p>
        <div>
          <button
            onClick={toggleDropdown}
            type="button"
            className="tracking-tight text-sm w-48 py-2 px-4 text-left items-center flex justify-between text-gray-400 shadow-none  border focus:ring-0 focus:outline-none focus:ring-gray-100 font-medium rounded-lg "
          >
            Recommended
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-4 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>

          {isOpen && (
            <div className="origin-top-right absolute mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
              {/* Dropdown content here */}
              <ul className="py-2">
                <li className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                  Item 1
                </li>
                <li className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                  Item 2
                </li>
                <li className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                  Item 3
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DropDownButton;
