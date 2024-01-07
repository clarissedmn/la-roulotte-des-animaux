import { Heading } from "@medusajs/ui"
import Image from 'next/image'
import type { HeroContentProps } from '../../../../app/(main)/page';
import React from "react";

const Hero = ({ items }: { items: HeroContentProps }) => {
    const { title, description, image } = items.items[0];
  return (
      <div className="flex items-center flex-wrap justify-center xl:flex-nowrap gap-3 pt-20 pb-10">
          <div className="p-8 xl:p-36 z-10">
            <Heading
                level="h1"
                className="font-baguet text-3xl text-ui-fg-base pb-5 md:text-5xl"
            >
              {title}
            </Heading>
            <div className="font-vietnam text-lg md:text-xl [&_a]:text-blue-700 hover:[&_a]:underline leading-7">{description}</div>
              <button className="bg-green-50 text-white py-4 px-6 my-10 rounded-3xl group transform transition-transform hover:translate-y-1 active:translate-y-2">
                Nous contacter →
              </button>
          </div>
          <Image className="absolute left-0 pt-60 pl-10" src="/images/bubble.svg" alt="" height={120} width={120}/>
          <img className=" rounded-3xl h-80 md:h-auto xl:rounded-l-3xl xl:rounded-r-none" src={image.fields.file.url}/>
      </div>
  )
}

export default Hero
