"use client"

import { useMobileMenu } from "@lib/context/mobile-menu-context"
import useToggleState from "@lib/hooks/use-toggle-state"
import Hamburger from "@modules/common/components/hamburger"
import MobileMenu from "@modules/mobile-menu/templates"
import Link from "next/link"
import Image from "next/image";
import {useEffect, useState} from "react";

const Nav = () => {
  const { toggle } = useMobileMenu()
  const {
    state: searchModalState,
    close: searchModalClose,
    open: searchModalOpen,
  } = useToggleState()
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 0;
      setIsScrolled(scrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menuClass = isScrolled ? "bg-white border-b border-gray-200 shadow-md transition-all duration-500 ease-out" : "transition-all duration-200 ease-in";

  return (
    <div className="sticky top-0 inset-x-0 z-50 group">
      <header role="banner" className="relative h-18 mx-auto">
        <nav role="navigation" className={`${menuClass} bg-white py-4 px-2 md:px-36 txt-xsmall-plus flex items-center justify-between w-full h-full text-small-regular`}>
          <div className="flex-1 basis-0 h-full flex items-center gap-3">
            <div className="block small:hidden">
              <Hamburger setOpen={toggle} />
            </div>
            <Link href="/">
              <Image
                src="/images/logo.svg"
                className="rounded-soft h-full object-cover"
                height={50}
                width={50}
                alt="La Roulotte des Animaux Accueil"
              />
            </Link>
            <p className="font-baguet text-lg leading-5">La Roulotte<br /> des Animaux</p>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Nav
