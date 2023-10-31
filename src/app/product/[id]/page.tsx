"use client";
import Link from "next/link";
// import orange from "../style.module.css"
import React, { useEffect, useState } from "react";
import css from "styled-jsx/css";
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
  // this is className base strcture of style base module
  // const {brown} = orange
  return (
   <div></div>
  );
}

export default Product;
