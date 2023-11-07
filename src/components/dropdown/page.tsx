import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { log } from "console";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const DropDown = ({ option }: any) => {
  const [show, setShow] = useState("");
console.log("Option , ",option);

  return (
    <>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className=" w-full   gap-x-1.5  bg-white px-3 py-2  shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50    text-zinc-800 text-xxs font-normal  tracking-wide   p-2 rounded-lg border border-neutral-400 justify-center items-center gap-1 inline-flex">
            {option?.name}
            <ChevronDownIcon
              className="-mr-1 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute left-0 z-10 mt-2 w-40 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              {option?.list?.map((item: any) => {
                const { id, name, provice } = item;
                console.log("province", provice);

                return (
                  <Menu.Item key={id}>
                    <p
                      className="p-2 cursor-pointer hover:bg-secondary-dark   text-secondary text-xxs font-normal  tracking-wide flex gap-3"
                      onClick={() => setShow(name)}
                    >
                      <input type="checkbox" />
                      {name}
                    </p>
                    {/* {provice?.map((show: any) => {
                        console.log("show ", show);
                        
                      return (
                        
                        <p 
                          className="p-2 cursor-pointer hover:bg-secondary-dark   text-secondary text-xxs font-normal  tracking-wide flex gap-3">
                          <input type="checkbox" />
                          {show?.proviceName}
                        </p>
                       
                      );
                    })} */}
                  </Menu.Item>
                );
              })}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
};

export default DropDown;
