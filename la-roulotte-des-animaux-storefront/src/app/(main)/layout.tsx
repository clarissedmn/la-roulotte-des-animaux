import Footer from "@modules/layout/templates/footer"
import Nav from "@modules/layout/templates/nav"
import Image from "next/image";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
        <Nav />
          <div>
            <div>
              <Image className="absolute" src="/images/header.svg" alt="" height={800} width={800}/>
            </div>
            {children}
          </div>
        <Footer />
    </>
  )
}
