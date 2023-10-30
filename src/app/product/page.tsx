"use client";
import Link from "next/link";
// import orange from "../style.module.css"
import React, { useEffect, useState } from "react";
// client componet fetching 
function Product() {
  const [show, setShow] = useState([]);

  const axiosCall = async () => {
    const data = await fetch("https://fakestoreapi.com/products");
    const reposne = data.json();
    setShow(await reposne);
    console.log(show);
  };
  useEffect(() => {
    axiosCall();
  }, []);
  // this is class base strcture of style base module
  // const {brown} = orange
  return (
    <div>
  
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          {/* <h1 id={orange.orange}>product page with style </h1>
          <h1 className={brown}>product page with style </h1>
          <h1 >product page with style </h1>
          <h1 >product page with style </h1> */}
          <Link href={"/"}>Back to </Link>
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            product list
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {show?.map((item: any) => (
              <div key={item.id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{item.price}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    {item.category}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
