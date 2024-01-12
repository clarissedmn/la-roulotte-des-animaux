import { Heading } from "@medusajs/ui"
import type { HeroContentProps } from '../../../../app/(main)/page';
import React from "react";

const Presentation = ({ items }: { items: HeroContentProps }) => {
  const { title, description, image } = items.items[0];
  return (
      <div className="flex items-center flex-wrap flex-col-reverse justify-center xl:flex-row xl:flex-nowrap gap-3 xl:gap-24 p-8 xl:p-36">
          <img className="rounded-3xl h-80 md:h-auto" alt="" src={image.fields.file.url}/>
          <div className="">
            <Heading
                level="h1"
                className="font-baguet text-3xl text-ui-fg-base pb-5 md:text-5xl"
            >
              {title}
            </Heading>
            <div className="font-vietnam text-lg md:text-xl [&_p]:pb-10 [&_a]:text-blue-700 hover:[&_a]:underline leading-7">{description}</div>
          </div>
      </div>
  )
}

export default Presentation
