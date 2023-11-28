import React from "react";
import ReactSlider from 'react-slider'

const PriceSlider = () => {
  return (
    <div>
      <ReactSlider
        // value={values}
        className="horizontal-slider"
        thumbClassName="bg-primary w-5 h-5 rounded-full top-1 text-xs mx-auto cursor-pointer text-center text-white"
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



// import { useState } from "react";

// const Home = () => {
//   const [priceRange, setPriceRange] = useState({ min: 0, max: 100 });

//   const handlePriceChange = (e: any, type: any) => {
//     const value = parseInt(e.target.value, 10);
//     setPriceRange((prevRange) => ({ ...prevRange, [type]: value }));
//   };

//   const handleSubmit = (e: any) => {
//     e.preventDefault();
//     // Handle form submission with the selected price range
//     console.log("Selected Price Range:", priceRange);
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Min Price:
//           <input
//             type="number"
//             value={priceRange.min}
//             onChange={(e) => handlePriceChange(e, "min")}
//           />
//         </label>
//         <br />
//         <label>
//           Max Price:
//           <input
//             type="number"
//             value={priceRange.max}
//             onChange={(e) => handlePriceChange(e, "max")}
//           />
//         </label>
//         <br />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default Home;
