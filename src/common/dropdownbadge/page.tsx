import React from "react";
import DropDownButton from "../DropDownButton";
import Badges from "@/components/badage/page";
import DropDown from "@/components/dropdown/page";

const DropDownBadge = ({
  filtersList,
  setSelectedFilters,
  selectedFilters,
}: {
  filtersList: any;
  setSelectedFilters: any;
  selectedFilters: any;
}) => {
  return (
    <>
      <div className="flex justify-between md:pt-5 md:pb-14 flex-wrap gap-2">
        <div className="flex gap-2 flex-wrap">
          {filtersList?.map((list: any, i: any) => {
            return (
              <div key={i}>
                <DropDown
                  data={list}
                  selectedFilters={selectedFilters}
                  setSelectedFilters={setSelectedFilters}
                />
              </div>
            );
          })}
        </div>
        <div className="flex items-center gap-2 pe-2 flex-wrap pt-2 md:pt-0">
          <p className="text-primary text-xs font-normal  tracking-wide">
            Sort by
          </p>
          <div className="w-44">
            <DropDownButton />
          </div>
        </div>
      </div>
      {/* badge */}
      <div className="pt-4">
        {
          <Badges
            data={selectedFilters}
            setSelectedFilters={setSelectedFilters}
          />
        }
      </div>
    </>
  );
};

export default DropDownBadge;
