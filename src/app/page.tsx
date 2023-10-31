"use client";
import Available from "@/components/available/page";
import Heritage from "@/components/heritage/page";

export default function Home() {
  return (
    <>
      <div className="container mx-auto">
        <Heritage />
        <Available />
      </div>
    </>
  );
}
