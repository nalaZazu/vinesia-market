"use client";
import { Fragment, useEffect, useState } from "react";
import { Menu, Transition, Popover } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useDispatch } from "react-redux";
import { handleSelected } from "@/redux/dropdownselected";
import PriceRange from "@/components/dropdown/priceslider/page";
const DropDown = ({
  data,
  selectedFilters,
  setSelectedFilters,
}: {
  data: any;
  selectedFilters: any;
  setSelectedFilters: any;
}) => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState<any>([]);
  const [tempSelected, setTempSelected] = useState<any>([]);

  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (e: any) => {
    let index = tempSelected?.findIndex((d: any) => d == e);
    if (index == -1) {
      setTempSelected([...tempSelected, e]);
    } else {
      let tempArr = [...tempSelected];
      tempArr.splice(index, 1);
      setTempSelected(tempArr);
    }
  };
  const filteredOptions = data?.options?.filter((item: any) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const handleApply = (close: any) => {
    setSelectedFilters(tempSelected);
    dispatch(handleSelected(tempSelected));
    close();
  };
  const handleClear = (close: any) => {
    setSearchTerm("");
    // setSelectedFilters([]);
    close();
  };

  useEffect(() => {
    if (selectedFilters) {
      setTempSelected(selectedFilters);
    }
  }, [selectedFilters]);

  useEffect(() => {
    console.log("Data From Dropdown ", data);
  }, [data]);

  return (
    <>
      {data?.options?.length > 0 && (
        <Menu>
          <Popover className="relative">
            {({ open, close }) => (
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
                  <Popover.Panel className="absolute z-10 mt-2  w-52 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5">
                      <div className="relative gap-8 bg-white p-4">
                        {data?.type && data?.type?.toLowerCase() == "range" ? (
                          <PriceRange
                            range={data?.options}
                            onChange={(e: any) =>
                              // handleChange(`${e[0]}-${e[1]}`)
                              handleChange(`-`)
                            }
                          />
                        ) : (
                          <div>
                            <form>
                              <label
                                htmlFor="default-search"
                                className="text-zinc-800 text-xs font-normal  tracking-wide"
                              >
                                Search
                              </label>
                              <div className="relative">
                                <input
                                  value={searchTerm}
                                  onChange={(e) =>
                                    setSearchTerm(e.target.value)
                                  }
                                  type="search"
                                  id="default-search"
                                  autoComplete="off"
                                  className="block w-full p-2 pl-4    border border-gray-300 rounded-lg bg-gray-50 text-neutral-400   text-sm font-normal   leading-tight  focus:ring-gry-300 focus:border-gray-300"
                                />
                              </div>
                            </form>

                            <div className="py-1">
                              {filteredOptions?.map(
                                (item: any, itemId: any) => {
                                  return (
                                    <Menu.Item key={itemId}>
                                      <p className="p-2 cursor-pointer hover:bg-secondary-dark   text-secondary text-xxs font-normal  tracking-wide flex gap-3">
                                        <input
                                          id={`${item}-${itemId}`}
                                          name="checkbox"
                                          onChange={(e) =>
                                            handleChange(item?.toLowerCase())
                                          }
                                          type="checkbox"
                                          checked={tempSelected?.includes(
                                            item?.toLowerCase()
                                          )}
                                        />
                                        <label htmlFor={`${item}-${itemId}`}>
                                          {item}
                                        </label>
                                      </p>
                                    </Menu.Item>
                                  );
                                }
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                      <div className=" pt-4 pb-4  border-t-2 justify-center items-center gap-3 inline-flex cursor-pointer pl-1">
                        <button
                          className="text-center text-zinc-400 text-xs font-normal  tracking-wide    px-8 py-3 rounded-full border border-zinc-400 "
                          onClick={() => handleClear(close)}
                        >
                          Clear
                        </button>

                        <button
                          className="text-center text-white text-xs font-normal tracking-wide   px-8 py-3 bg-zinc-800 rounded-full"
                          onClick={() => handleApply(close)}
                        >
                          Apply
                        </button>
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
