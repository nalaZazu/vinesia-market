"use client";
import Available from "@/components/available/page";
import Banner from "@/components/banner/page";
import Critics from "@/components/critics/page";
import Heritage from "@/components/heritage/page";
import Listing from "@/components/winelisting/page";
<<<<<<< HEAD
import { useEffect } from "react";
import { getHomePage } from "../services/Home";
import ExploreRegion from "@/components/exploreRegion/page";
export default function Home() {
  console.log("Process Env ", process.env.baseUrl);
  useEffect(() => {
    getHomePage().then((res) => {
      console.log("Response From APi ", res?.data);
=======
import { useEffect, useState } from "react";
import { getHomePage } from "../services/Home";
export default function Home() {
  const [data, setData] = useState({});
  const [criticsSelection, setCriticsSelection] = useState([]);
  const [products, setProducts] = useState([]);
  const [drops, setDrops] = useState([])
  console.log("Process Env ", process.env.baseUrl);
  useEffect(() => {
    getHomePage().then((res) => {
      console.log("Response From APi Home Api", res?.data);
      setProducts(res?.data?.products);
      setCriticsSelection(res?.data?.selection);
      setDrops(res?.data?.drops)
>>>>>>> b003d639dfaaeef7eac383468cb2cb05ab887b8d
    });
  }, []);

  return (
    <>
      <div className="container mx-auto max-w-2xl px-4  sm:px-6 lg:max-w-7xl lg:px-8">
        {/* py-16 sm:py-24 */}
        <Banner />
<<<<<<< HEAD
        <Heritage />
        <Available />
        <Critics />
        <Listing />
        {/* <ExploreRegion /> */}
=======
        <Heritage  data={products} />
        <Available data={drops} />
        <Critics data={criticsSelection}  />
        {products && <Listing data={products} />}
>>>>>>> b003d639dfaaeef7eac383468cb2cb05ab887b8d
      </div>
    </>
  );
}
