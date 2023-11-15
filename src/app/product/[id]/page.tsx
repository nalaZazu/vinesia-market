"use client";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import redwine from "@/assets/icon/redwine.svg";
import BreadCrumb from "@/common/BreadCrumb";
import PeaceOfMind from "@/components/productDetail/PeaceOfMind";
import ReleaseDateSection from "@/components/productDetail/ReleaseDateSection";
import { getProductDetail } from "@/services/ProductDetail";
import PTSSkelton from "@/components/productDetail/PTSSkelton";
import { getHomePage } from "@/services/Home";
import AllEditions from "@/components/productDetail/AllEditions";
import HowToInvest from "@/components/productDetail/HowToInvest";
import CriticsDetailCards from "@/components/productDetail/CriticsDetailCards";
import AboutArtWork from "@/components/productDetail/AboutArtWork";
import AboutWinerySection from "@/components/productDetail/AboutWinerySection";
import YouMayAlso from "@/components/productDetail/YouMayAlso";
import OverviweTopSection from "@/components/productDetail/overviewTopSection";
import Collection from "@/components/productDetail/Collection";
import { useSelector } from "react-redux";
import WineryVideo from "@/components/productDetail/WineryVideo";
import AboutWineries from "@/components/productDetail/AboutWineries";
import UpperFooter from "@/components/upperfooter/page";
export default function Product() {
  const { id } = useParams();
  const [data, setData] = useState<any>({});
  const [products, setProducts] = useState([]);

  const [show, setShow] = useState([]);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const [isOpen, setIsOpen] = useState(false);
 
  useEffect(() => {
   
    if (id) {
      getProductDetail(id)
        .then((res) => {
          console.log("Res from Product Detail ", res?.data?.wine);
          setData(res?.data);
        })
        .catch((err) => {
          console.log("Err from Product Detail", err);
        });
    }
    getHomePage().then((res) => {
      console.log("Response From APi Home Api", res?.data);
      setProducts(res?.data?.products);
      console.log("id-page", setProducts(res?.data?.products));
    });
  }, [id]);
  const isAuthenticted = useSelector<any>(
    (state) => state?.account?.isAuthenticated
  );
  /**
   *Api -Data variable
   */
  const { wine } = data;
  const { releaseDetails } = data;
  const { ratings } = data;
  return (
    <div className=" overflow-hidden">
      <BreadCrumb />

      <div className="container mx-auto pt-3 md:pt-5 lg:pt-10 pb-7 px-4">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-primary">
          {wine?.name}
        </h1>
        <p className="text-xs md:text-sm lg:text-base">
          <p> {wine?.description} </p>
        </p>
      </div>

      {/* hero section start*/}
      {wine ? (
        <OverviweTopSection
          wine={wine}
          release={releaseDetails}
          rating={ratings}
        />
      ) : (
        <PTSSkelton />
      )}
      {/* hero section end*/}

      {isAuthenticted ? <Collection /> : <></>}

      {/* our peace of mind pledge section start */}

      <PeaceOfMind />
      {/* our peace of mind pledge section end */}
      {/* Release details section start */}
      {releaseDetails ? <ReleaseDateSection release={releaseDetails} /> : null}
      {/* Release details section end */}
      {/* All editions start */}

      <AllEditions products={products} />
      {/* All editions end */}
      {/* How to invest in wine start */}
      <HowToInvest />
      {/* How to invest in wine end */}
      {/* About Chateau La Mission Haut Brion Cru Classe | 2009 start */}
      <section className=" pt-12 px-4 lg:px-6 md:px-4">
        <div className=" container mx-auto">
          <h2 className=" capitalize text-4xl font-medium text-zinc-700 tracking-tight">
            <span className=" text-3xl font-normal text-neutral-400  tracking-tight">
              About
            </span>{" "}
            Chateau La Mission Haut Brion Cru Classe | 2009
          </h2>
        </div>

        <div className="max-w-[1100px] gap-7 items-center grid grid-col-1  md:grid-cols-5 lg:grid-cols-5 mx-auto py-8">
          <div className="pb-4 lg:pb-0 md:pb-4 md:col-span-2 col-span-1 ">
            <div className="flex gap-3">
              <Image
                src={redwine}
                alt="Picture of the author"
                className="w-6"
              />
              <span className=" font-medium text-base text-black">
                Red, 14% Alc
              </span>
            </div>
            <p className="w-full font-normal text-base">
              An evocative nose, floral and exotic with black cherry, lychee and
              passion fruit aromas, delicate and nuanced. Svelte on the palate
              with sculpted and refined tannins – it’s confident, with sinew,
              muscle and plump fruit, but not showy. The 2019 Le Pin is a rich,
              expansive wine that soars from the glass with aromas of raspberry
              preserve, plums, wild berries, rose petals and licorice, framed by
              a deftly judged patina of creamy new oak. Full-bodied, supple and
              velvety, it’s broad and enveloping, with a fleshy core of fruit
              that’s framed by lively acids and powdery tannins, concluding with
              a long, aromatic finish. Le Pin’s vines are rooted in clay, which
              no doubt helps to explain how this wine can perform so well
              in warm, dry vintages.
            </p>
          </div>
          <div className="flex justify-end md:col-span-3 col-span-1">
            <iframe
              className=" rounded-md w-full h-72"
              src="https://www.youtube.com/embed/7gquYRxLMFI?si=S7E_iDRbr-b1dZef"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
        </div>
      </section>

      {isAuthenticted ? <></> : <CriticsDetailCards />}

      {/* About Chateau La Mission Haut Brion Cru Classe | 2009 end */}

      {isAuthenticted ? (
        <>
          <WineryVideo />
          <AboutWineries />
          {/* <AboutWinerySection /> */}
        </>
      ) : (
        <></>
      )}

      {/* About artwork start */}
      <AboutArtWork />
      {/* About artwork end */}
      {/* About Winery Château Le Pin start */}
      {isAuthenticted ? <></> : <AboutWinerySection />}

      {/* You may also like start */}
      <YouMayAlso products={products} />

      {/* Be the first to know start */}
      <UpperFooter />
      {/* Be the first to know end */}
    </div>
  );
}
