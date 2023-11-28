import React, { useState } from "react";
import Slider from "react-slick";

import ReactSlider from "react-slider";

const PriceSlider = ({
  range,
  onChange,
}: {
  range: any;
  onChange: Function;
}) => {
  const Thumb = (props: any, state: any) => (
    <div
      {...props}
      style={{
        ...props.style,

        // display: "flex",
        // justifyContent: "center",
        // alignItems: "center",
      }}
      className="relative shadow-md bg-gray-200 h-5 w-5 rounded-full mt-[6px]"
    >
      <span className="absolute -top-8 bg-gray-200 rounded-md p-1 min-w-[20px] min-w text-black text-xxs">
        {state.valueNow}
      </span>
    </div>
  );

  return (
    <div>
      <ReactSlider
        // value={range}
        className="horizontal-slider w-full mt-10"
        thumbClassName="bg-primary w-5 h-5 rounded-full top-2 text-xs mx-auto"
        trackClassName="example-track"
        defaultValue={range}
        ariaLabel={["Leftmost thumb", "Rightmost thumb"]}
        // renderThumb={(props: any, state: any) => (
        //   <div {...props}>{state.valueNow}</div>
        // )}
        onChange={(e) => onChange(e)}
        pearling
        min={range[0]}
        max={range[1]}
        minDistance={10}
        renderThumb={Thumb}
      />
    </div>
  );
};

export default PriceSlider;
