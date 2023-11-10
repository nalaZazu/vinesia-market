import { Fragment, useState } from "react";
import { Menu, Transition, Popover } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { log } from "console";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const DropDown = ({ data }: any) => {
  const [show, setShow] = useState("");
  console.log("data , ", data);
  const [open, setOpen] = useState(true);

  return (
    <>
      {data?.options?.length > 0 && (
        <Menu>
          <Popover className="relative">
            {({ open }) => (
              <>
                <Popover.Button className=" w-full relative  gap-x-1.5  bg-white px-3 py-2  shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50    text-zinc-800 text-xxs font-normal  tracking-wide   p-2 rounded-lg border border-neutral-400 justify-center items-center gap-1 inline-flex">
                  <span>{data?.name}</span>
                  <ChevronDownIcon
                    className={`
                  ml-2 h-5 w-5 transition duration-150 ease-in-out text-zinc-400 `}
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
                  <Popover.Panel className="absolute z-10 mt-2 w-[200px] origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5">
                      <div className="relative gap-8 bg-white p-4">
                        <div className="py-1">
                          {data?.options?.map((item: any, itemId: any) => {
                            console.log("item", item);

                            return (
                              <Menu.Item key={itemId}>
                                <p
                                  className="p-2 cursor-pointer hover:bg-secondary-dark   text-secondary text-xxs font-normal  tracking-wide flex gap-3"
                                  // onClick={() => setShow(name)}
                                >
                                  <input type="checkbox" />
                                  {item}
                                </p>
                              </Menu.Item>
                            );
                          })}
                        </div>
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
          </Popover>
        </Menu>
      )}
    </>
  );
};

export default DropDown;
