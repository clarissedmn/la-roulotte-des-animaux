"use client"

import Image from "next/image";
import React from "react";
import Link from "next/link";

const FooterNav = () => {

  return (
      <div className="absolute bottom-0 p-6 md:p-8">
        <div className="flex-1 basis-0 h-full flex items-center gap-3">
          <Link href="/">
              <Image
                  src="/images/logo_mono.svg"
                  className="rounded-soft h-full object-cover"
                  height={60}
                  width={60}
                  alt=""
              />
          </Link>
          <p className="font-baguet text-lg leading-5">La Roulotte<br /> des Animaux</p>
        </div>
        {/*<ul className="flex pb-6 gap-3 items-center">*/}
        {/*  <li className="bg-grey-90 p-2 rounded-full">*/}
        {/*    <a href="https://www.facebook.com/LaRoulottedesAnimaux/" target="_blank" aria-label="Page Facebook de la Roulotte des Animaux (nouvelle fenêtre)">*/}
        {/*        <Image*/}
        {/*            src="/images/facebook.svg"*/}
        {/*            className="rounded-soft"*/}
        {/*            height={20}*/}
        {/*            width={20}*/}
        {/*            alt=""*/}
        {/*        />*/}
        {/*    </a>*/}
        {/*  </li>*/}
        {/*  <li className="bg-grey-90 p-2 rounded-full">*/}
        {/*    <a href="https://www.instagram.com/laroulottedesanimaux/" target="_blank" aria-label="Page Instagram de la Roulotte des Animaux (nouvelle fenêtre)">*/}
        {/*        <Image*/}
        {/*            src="/images/instagram.svg"*/}
        {/*            className="rounded-soft"*/}
        {/*            height={20}*/}
        {/*            width={20}*/}
        {/*            alt=""*/}
        {/*        />*/}
        {/*    </a>*/}
        {/*  </li>*/}
        {/*</ul>*/}
        {/*<a href="mailto:laroulottedesanimaux@gmail.com" className="font-vietnam">laroulottedesanimaux@gmail.com</a>*/}
        {/*<p className="font-vietnam">07 62 60 03 51</p>*/}
      </div>
  )
}

export default FooterNav
