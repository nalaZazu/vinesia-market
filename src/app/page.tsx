"use client";
import Available from "@/components/available/page";
import Banner from "@/components/banner/page";
import Critics from "@/components/critics/page";
import Heritage from "@/components/heritage/page";
import Listing from "@/components/winelisting/page";

export default function Home() {
  return (
    <>
      <div className="container mx-auto max-w-2xl px-4  sm:px-6 lg:max-w-7xl lg:px-8">
        {/* py-16 sm:py-24 */}
        <Banner />
        <Heritage />
        <Available />
        <Critics/>
        <Listing />
      </div>
    </>
  );
}
