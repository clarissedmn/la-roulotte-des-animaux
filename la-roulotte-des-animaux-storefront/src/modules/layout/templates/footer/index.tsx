import FooterNav from "@modules/layout/components/footer-nav"
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="relative" role="contentinfo">
      <Image className="-z-10" src="/images/footer.svg" alt="" height={800} width={800}/>
      <FooterNav />
    </footer>
  )
}

export default Footer
