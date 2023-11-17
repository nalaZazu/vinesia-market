"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import RegionCountry from "@/components/regioncountry/page";
import resoImage from "@/assets/image/reso-image.png";
import ExploreCountry from "@/components/explorecountry/page";

import DropDownBadge from "@/common/dropdownbadge/page";
import { useQuery } from "@tanstack/react-query";
import { getFilters } from "@/services/Common";
import { getProductSearch } from "@/services/ProductSerach";
import Link from "next/link";
import ProductCard from "@/components/cards/ProductCard";
const Rao = ({ params }: { params: any }) => {
  console.log("paramRes", params);
  const pathname = usePathname();
  const [products, setProducts] = useState<any>([]);
  const [selectedFilters, setSelectedFilters] = useState<any>([]);
  const {
    isLoading: filtersLoading,
    error: filtersError,
    data: filtersData,
  } = useQuery({
    queryKey: ["getAllFilters"],
    queryFn: getFilters,
  });
  const filtersList = filtersData?.data;
  useEffect(() => {
    let postData = {
      filters: selectedFilters,
      // "sort": "string",
      first: 0,
    };
    console.log("postData", postData);

    getProductSearch(postData).then((res) => {
      setProducts(res?.data);
    });
  }, [selectedFilters]);
  const { reso } = params;
  const regionparagraph = `Reso’s deep engagement with informal art and abstract expressionism led him to continuously seek new avenues for expanding his artistic expression. It wasn’t until 2011 that he ventured into the abstract series, marking a pivotal moment in his artistic journey.`;
  const regionparagraphs = `In Reso’s artworks, one senses a powerful dynamism and speed, a direct reflection of his energetic approach. This approach draws parallels to K.O. Goetz’s experimental painting technique, blending quick, impulsive squeegee gestures with moments of contemplation and reflection, creating a dance-like choreography on the canvas.`;

  const explorParagraph = ` Reso acts with intuition and physicality, much like the renowned
  painter Jackson Pollock, positioning the canvas flat on the floor
  and working with sweeping movements, even extending beyond the
  canvas. An intriguing element in Reso’s works is the use of torn
  paper strips, applied to the canvas to reveal alternating and
  interacting forms and patterns. This interplay of positive and
  negative shapes creates a captivating depth and sophistication in
  his pieces.`;
  const explorParagraphs = ` Reso’s unique handling of color, form, and movement imbues his
  artworks with an extraordinary energy and vitality.`;

  const explor1 = ` Each abstract painting becomes a dance on canvas, a fascinating world of colors and shapes captured through his expressive gestures and dynamic working style, captivating the viewer. His experimentation, combined with control and spontaneity, along with the refined use of paper strips, results in an engaging interplay of forms, colors, and textures.`;
  const explor2 = ` Ultimately, Reso’s abstract paintings invite viewers to immerse themselves in a realm of imagination, offering diverse ways to interpret and experience his captivating creations.`;
  return (
    <>
      <div className="container mx-auto  pt-3 md:pt-5  px-4 flex gap-4">
        <p className="text-xxs font-normal text-breadcrumb tracking-wide">
          Vinesia Marketplace
        </p>
        <p className="text-xxs font-normal text-breadcrumb tracking-wide">
          / Home Page
        </p>
        <p className="text-xxs font-normal text-breadcrumb tracking-wide">
          / Wine & art collections
        </p>
        <p className="text-bgtertiary text-xxs font-normal  tracking-wide capitalize">
          / {reso}
        </p>
      </div>
      <div className="container mx-auto pt-3 md:pt-5 lg:pt-10 pb-7 px-4 ">
        <h1 className="text-primary text-xxl font-semibold  tracking-tight ">
          Meet the artist: <span className="capitalize">{reso}</span>
        </h1>
        <RegionCountry
          regionparagraph={regionparagraph}
          regionparagraphs={regionparagraphs}
          image={resoImage}
        />

        <ExploreCountry
          explorParagraph={explorParagraph}
          explorParagraphs={explorParagraphs}
          explor1={explor1}
          explor2={explor2}
        />

        {/* dropdown  */}
        <DropDownBadge
          filtersList={filtersList}
          selectedFilters={selectedFilters}
          setSelectedFilters={setSelectedFilters}
        />

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products?.data &&
            products?.data?.map((item: any, index: any) => {
              return (
                <Link href={`/product/${index + 1}`} key={item?.id}>
                  <div>{item && <ProductCard item={item} />}</div>
                </Link>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Rao;
