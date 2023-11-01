"use client";
import Available from "@/components/available/page";
import Banner from "@/components/banner/page";
import Critics from "@/components/critics/page";
import Heritage from "@/components/heritage/page";
import Listing from "@/components/winelisting/page";
import { useEffect } from "react";
import {getHomePage} from '../services/Home'
export default function Home() {

  console.log("Process Env ", process.env.baseUrl);
  useEffect(() => {
   getHomePage().then(res=>{
    console.log("Response From APi ", res?.data);
    
   })
  }, [])
  
  
  return (
    <>
      <div className="container mx-auto max-w-2xl px-4 py-16 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <Banner />
        <Heritage />
        <Available />
        <Critics/>
        <Listing />
      </div>
    </>
  );
}
