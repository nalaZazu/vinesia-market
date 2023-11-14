import Image from "next/image";
import React from "react";
import xDelete from "@/assets/icon/X-delete.svg";
import { useDispatch, useSelector } from "react-redux";
import { handleSelected } from "@/redux/dropdownselected";

const Badges = () => {
  const datadropdown = useSelector<any>((state) => state?.dropdown?.dropdownData);
  console.log("datadropdown", datadropdown);

  const dispatch = useDispatch();
  const handleRemoved = (item: any) => {
    console.log("itemdata", item.name);
    dispatch(handleSelected(item));
  };
  return (
    <>
      <div className="pt-4 md:pt-0 pb-8 flex gap-2 flex-wrap">
        {datadropdown && datadropdown?.map((item: any, i: any) => {
          return (
            <div key={i}>
              <span className=" px-3 py-2 bg-gray-50 rounded-[100px] border border-neutral-200 justify-center items-center gap-1 inline-flex">
                <p className="text-primary text-xxs font-normal tracking-wide">
                  {item}
                </p>
                <Image
                  src={xDelete}
                  alt="x-delete"
                  onClick={() => handleRemoved(item)}
                />
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Badges;
