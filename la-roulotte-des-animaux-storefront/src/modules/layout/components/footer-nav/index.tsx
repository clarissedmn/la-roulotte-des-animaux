"use client"

import Image from "next/image";
import React from "react";
import Link from "next/link";

const FooterNav = () => {

  return (
      <div className="absolute bottom-0 p-6 md:p-8 flex gap-96 items-end w-full justify-between">
        <div className="h-full flex items-center gap-3">
          <Link href="/">
              <Image
                  src="/images/logo_mono.svg"
                  className="rounded-soft h-full object-cover"
                  height={60}
                  width={60}
                  alt="La Roulotte des Animaux Accueil"
              />
          </Link>
          <p className="font-baguet text-lg leading-5">La Roulotte<br /> des Animaux</p>
        </div>
        <div className="pr-8 xl:pr-36">
        <ul className="flex pb-7 gap-3 items-center ">
          <li className="bg-grey-90 p-2 rounded-full transform transition-transform hover:translate-y-1 active:translate-y-2">
            <a href="https://www.facebook.com/LaRoulottedesAnimaux/" target="_blank" aria-label="Page Facebook de la Roulotte des Animaux (nouvelle fenêtre)">
                <Image
                    src="/images/facebook.svg"
                    className="rounded-soft"
                    height={20}
                    width={20}
                    alt=""
                />
            </a>
          </li>
          <li className="bg-grey-90 p-2 rounded-full transform transition-transform hover:translate-y-1 active:translate-y-2">
            <a href="https://www.instagram.com/laroulottedesanimaux/" target="_blank" aria-label="Page Instagram de la Roulotte des Animaux (nouvelle fenêtre)">
                <Image
                    src="/images/instagram.svg"
                    className="rounded-soft"
                    height={20}
                    width={20}
                    alt=""
                />
            </a>
          </li>
        </ul>
        <h5 className="font-vietnam font-semibold pb-3">Contact</h5>
        <div className="flex gap-3">
            <Image
                src="/images/enveloppe.svg"
                className="rounded-soft"
                height={20}
                width={20}
                alt=""
            />
            <a href="mailto:laroulottedesanimaux@gmail.com" className="font-vietnam hover:underline">laroulottedesanimaux@gmail.com</a>
            </div>
            <div  className="flex gap-3">
                <Image
                    src="/images/phone.svg"
                    className="rounded-soft"
                    height={20}
                    width={20}
                    alt=""
                />
              <p className="font-vietnam hover:underline">07 62 60 03 51</p>
            </div>
        </div>
      </div>
  )
}

export default FooterNav
