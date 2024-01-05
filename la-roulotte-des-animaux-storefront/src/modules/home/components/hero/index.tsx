import { Button, Heading } from "@medusajs/ui"
import InteractiveLink from "@modules/common/components/interactive-link"
import { Github } from "@medusajs/icons"

const Hero = () => {
  return (
      <div className="flex flex-col justify-center items-center text-center small:p-32 gap-6">
          <Heading
            level="h1"
            className="text-3xl leading-10 text-ui-fg-base font-normal"
          >
            La Roulotte des Animaux !
          </Heading>
          <img
              src="../../../../assets/logo.svg"
              className="rounded-soft h-full object-cover"
          />
      </div>
  )
}

export default Hero
