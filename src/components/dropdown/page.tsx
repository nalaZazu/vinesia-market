import { Fragment, useState } from "react";
import { Menu, Transition, Popover } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { log } from "console";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const DropDown = ({ option }: any) => {
  const [show, setShow] = useState("");
  console.log("Option , ", option);
  const [open, setOpen] = useState(true);

  const solutions = [
    {
      name: "Insights",
      description: "Measure actions your users take",
      href: "##",
      icon: null,
    },
    {
      name: "Automations",
      description: "Create your own targeted content",
      href: "##",
      icon: null,
    },
    {
      name: "Reports",
      description: "Keep track of your growth",
      href: "##",
      icon: null,
    },
  ];

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
                  </Menu.Item>
                );
              })}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>

      {/* <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={`
                ${open ? "text-white" : "text-white/90"}
                group inline-flex items-center rounded-md bg-orange-700 px-3 py-2 text-base font-medium hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75`}
            >
              <span>Solutions</span>
              <ChevronDownIcon
                className={`${open ? "text-orange-300" : "text-orange-300/70"}
                  ml-2 h-5 w-5 transition duration-150 ease-in-out group-hover:text-orange-300/80`}
                aria-hidden="true"
              />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5">
                  <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2">
                    {solutions.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500/50"
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12">
                          <item.icon aria-hidden="true" />
                        </div>
                        <div className="ml-4">
                          <p className="text-sm font-medium text-gray-900">
                            {item.name}
                          </p>
                          <p className="text-sm text-gray-500">
                            {item.description}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                  <div className="bg-gray-50 p-4">
                    <a
                      href="##"
                      className="flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500/50"
                    >
                      <span className="flex items-center">
                        <span className="text-sm font-medium text-gray-900">
                          Documentation
                        </span>
                      </span>
                      <span className="block text-sm text-gray-500">
                        Start integrating products and tools
                      </span>
                    </a>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover> */}
    </>
  );
};

export default DropDown;
