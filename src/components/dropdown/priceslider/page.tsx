import React, { useState } from "react";
import Slider from "react-slick";

import ReactSlider from 'react-slider'


const PriceSlider = () => {
  return (
    <div>   
      <ReactSlider
        // value={values}
        className="horizontal-slider"
        thumbClassName="bg-primary w-5 h-5 rounded-full top-1 text-xs mx-auto"
        trackClassName="example-track"
        defaultValue={[0,  100]}
        ariaLabel={["Leftmost thumb","Rightmost thumb"]}
        renderThumb={(props:any, state:any) => <div {...props}>{state.valueNow}</div>}
        pearling
        minDistance={10}
      />  
    </div>
  );
};

export default PriceSlider;
