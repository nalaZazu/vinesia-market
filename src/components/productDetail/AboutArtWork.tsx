import Image from 'next/image'
import React from 'react'
import group from "@/assets/icon/Group.png";

export default function AboutArtWork() {
  return (
    <div>
         <section className="pt-10 px-4 lg:px-0 md:px-4">
        <div className="container mx-auto">
          <h2 className=" capitalize text-4xl font-medium text-zinc-700 tracking-tight">
            <span className=" text-3xl font-normal text-neutral-400  tracking-tight">
              About
            </span>{" "}
            artwork
          </h2>
          <div className="gap-5 container grid mx-auto lg:grid-cols-2 md:grid-cols-2 max-w-screen-xl items-center py-6 px-0 lg:px-16 md:px-0">
            <div className="pb-4 lg:pb-0 md:pb-4">
              <p className="text-sm text-bordergray">Original Art</p>
              <p className="text-base font-normal">
                Stop Breathing, White_2Stripes_black_blue
              </p>
              <p className="text-xs text-bordergray">
                WP Nr.1 Screen print on paper 31x 41 cm 2022
              </p>
              <p className="text-xs font-medium">Artist Famous and Known</p>
              <p className="font-normal text-base">
                Reso’s deep connection with New York City has been a profound
                source of inspiration throughout his life. The vibrant
                subcultural graffiti movement in the 70s and 80s, which painted
                the cityscape with mesmerizing letterings on subway cars, left
                an indelible mark on his artistic journey. New York’s contrasts
                and diverse experiences shaped Reso’s creativity, leading him to
                explore typography and the power of letters to evoke emotions in
                viewers. His art, born in secrecy and yet attracting extreme
                attention, later evolved into a multidimensional experience,
                where letters overlapped, and functionality gave way to artistic
                expression. Through his international presence, Reso’s name and
                influence became synonymous with the graffiti movement, but he
                sought artistic liberation beyond its confines, embracing a new
                chapter of his creative exploration. Reso turned away from the
                legibility of characters and lettering and instead focused on
                the viewer’s emotional access to his work. His signs are encoded
                in a unique and personal way, making the individual layers no
                longer easy to separate, and the letters lose their classic
                distinguishing features when merged through the overlay of
                letter forms and colors. Reso consciously breaks with
                traditional reading habits and offers viewers a completely new
                image of typography. He no longer arranges the letters
                classically from left to right and one behind the other, but
                allows them to merge into constructs of form in order to provide
                viewers with new visual experiences.
              </p>
            </div>
            <div className="flex lg:justify-end ">
              <Image
                src={group}
                alt="Picture of the author"
                className=" w-full md:w-full lg:w-10/12"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
