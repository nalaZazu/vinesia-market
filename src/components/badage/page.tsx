import Image from "next/image";
import React, { useEffect, useState } from "react";
import xDelete from "@/assets/icon/X-delete.svg";
import { useSelector } from "react-redux";
import { usePathname, useRouter } from "next/navigation";
const Badges = ({
  data,
  setSelectedFilters,
}: {
  data: any;
  setSelectedFilters: any;
}) => {
  const [selectedData, setSelectedData] = useState(data || []);
  useEffect(() => {
    if (data) {
      setSelectedData(data);
    }
  }, [data]);

  
  const handleRemoved = (item: any) => {
    let index = data?.findIndex((d: any) => d == item);
    if (index == -1) {
      setSelectedFilters([...data, item]);
    } else {
      let tempArr = [...data];
      tempArr.splice(index, 1);
      setSelectedFilters(tempArr);
    }
  };
  const handleClear = () => {
    setSelectedFilters([]);
  };
  return (
    <React.Fragment>
      <div className="pt-4  md:pt-0 pb-8 flex gap-2 flex-wrap">
        {selectedData &&
          selectedData?.map((item: any, i: any) => {
            return (
              <div key={i}>
                <span className=" px-3 py-2 bg-gray-50 rounded-[100px] border border-neutral-200 justify-center items-center gap-1 inline-flex">
                  <p className="text-primary text-xxs font-normal tracking-wide capitalize">
                    {item}
                  </p>
                  <Image
                    src={xDelete}
                    alt="x-delete"
                    onClick={() => handleRemoved(item)}
                    className=" cursor-pointer"
                  />
                </span>
              </div>
            );
          })}
        {selectedData && selectedData.length > 0 && (
          <button
            className="text-center text-zinc-800 text-xxs font-medium  tracking-wide"
            onClick={handleClear}
          >
            Clear filters
          </button>
        )}
      </div>
    </React.Fragment>
  );
};

export default Badges;
