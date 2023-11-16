"use client";
import Available from "@/components/available/page";
import Banner from "@/components/banner/page";
import Critics from "@/components/critics/page";
import Heritage from "@/components/heritage/page";
import Listing from "@/components/winelisting/page";
import { useEffect, useState } from "react";
import { getHomePage } from "../services/Home";
import Popup from "@/components/popup/page";
import ExploreRegion from "@/components/exploreRegion/page";
import UpperFooter from "@/components/upperfooter/page";
import { getProductSearch } from "@/services/ProductSerach";
export default function Home() {
  const [criticsSelection, setCriticsSelection] = useState([]);
  const [products, setProducts] = useState([]);
  const [drops, setDrops] = useState([]);
  useEffect(() => {
    getHomePage().then((res) => {
      console.log("Response From APi Home Api", res?.data);
      setProducts(res?.data?.products);
      setCriticsSelection(res?.data?.selection);
      setDrops(res?.data?.drops);
    });
  }, []);

  return (
    <>
      <div className="container mx-auto px-4  sm:px-6  lg:px-8">
        {/* py-16 sm:py-24 */}
        <Banner />
        <Heritage data={products} />
        <Available data={drops} />
        <Critics data={criticsSelection} />
        {products && <Listing data={products} />}
        <ExploreRegion />
        <Popup open={false} setOpen={false} />
      </div>
      <UpperFooter/>
    </>
  );
}
