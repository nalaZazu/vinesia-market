import React from "react";

export default function CriticsDetailCards() {
  return (
    <div>
      <div className="container mt-8  items-center grid  md:grid-cols-2 lg:grid-cols-3 mx-auto py-1 border-2 border-bordergray px-4 lg:px-6 md:px-4">
        {[1, 2, 3].map((d, i) => {
          return (
            <div key={i} className=" border-e-2  py-2 px-4">
              <h3 className=" text-base">
                A. Critic name{" "}
                <span className=" text-xs font-semibold text-black">100/</span>
                <span className=" text-xxs text-black">100</span>
              </h3>
              <hr />
              <p className="text-center text-base">
                This is the best wine for romantic dinner and long term
                investment. Buy it as soon as you can, cause it wont last long.
                Buy it as soon as you can.
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
