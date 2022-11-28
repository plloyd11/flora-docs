import Image from 'next/image'
import heroImage from '../images/hero.svg'
import heroShape from '../images/hero-shape.svg'

import { Button } from '../components/Button'

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-black-80 dark:-mb-32 dark:mt-[-4.5rem] dark:pb-32 dark:pt-[4.5rem] dark:lg:mt-[-4.75rem] dark:lg:pt-[4.75rem]">
      <div className="sm:px-2 lg:relative lg:px-0">
        <div className="grid items-center max-w-2xl grid-cols-1 px-4 mx-auto gap-y-16 gap-x-8 lg:max-w-8xl lg:grid-cols-2 lg:px-8 xl:gap-x-16 xl:px-12">
          <div className="relative z-10 md:text-center lg:text-left">
            <div className="relative">
              <h1 className="inline text-5xl tracking-tight font-display text-black-00">
                Welcome to Flora
              </h1>
              <p className="mt-3 text-2xl tracking-tight text-black-30">
                The atomic blocks that create our Millennium Falcon™ Star Wars
                Lego Set
              </p>
              <div className="flex gap-4 mt-8 md:justify-center lg:justify-start">
                <Button href="/">Get started</Button>
                <Button href="/" variant="secondary">
                  View on GitHub
                </Button>
              </div>
            </div>
          </div>
          <div className="lg:static xl:pl-10">
            <Image
              className="relative z-50"
              src={heroImage}
              alt=""
              width={700}
              height={930}
              unoptimized
              priority
            />
            <div className="absolute inset-x-[-50vw] -top-32 -bottom-48 z-10 lg:left-[calc(50%+14rem)] lg:right-0 lg:-top-32 lg:-bottom-32">
              <Image
                className="absolute top-12 -right-32"
                src={heroShape}
                alt=""
                width={930}
                height={1030}
                unoptimized
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
