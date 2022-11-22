import Image from 'next/image'

import { Button } from '../components/Button'
import { HeroBackground } from '../components/HeroBackground'
import blurCyanImage from '../images/blur-cyan.png'

export function Hero() {
  return (
    <div className="overflow-hidden bg-slate-900 dark:-mb-32 dark:mt-[-4.5rem] dark:pb-32 dark:pt-[4.5rem] dark:lg:mt-[-4.75rem] dark:lg:pt-[4.75rem]">
      <div className="py-16 sm:px-2 lg:relative lg:py-20 lg:px-0">
        <div className="grid items-center max-w-2xl grid-cols-1 px-4 mx-auto gap-y-16 gap-x-8 lg:max-w-8xl lg:grid-cols-2 lg:px-8 xl:gap-x-16 xl:px-12">
          <div className="relative z-10 md:text-center lg:text-left">
            <div className="relative">
              <h1 className="inline text-5xl tracking-tight text-blue-80 dark:text-black-00 font-display">
                Welcome to Flora
              </h1>
              <p className="mt-3 text-2xl tracking-tight text-blue-80 dark:text-black-30">
                The atomic blocks that create our Millennium Falcon™ Star Wars Lego Set
              </p>
              <div className="flex gap-4 mt-8 md:justify-center lg:justify-start">
                <Button href="/">Get started</Button>
                <Button href="/" variant="secondary">
                  View on GitHub
                </Button>
              </div>
            </div>
          </div>
          <div className="relative lg:static xl:pl-10">
            <div className="absolute inset-x-[-50vw] -top-32 -bottom-48 [mask-image:linear-gradient(transparent,white,white)] dark:[mask-image:linear-gradient(transparent,white,transparent)] lg:left-[calc(50%+14rem)] lg:right-0 lg:-top-32 lg:-bottom-32 lg:[mask-image:none] lg:dark:[mask-image:linear-gradient(white,white,transparent)]">
              <HeroBackground className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 lg:translate-y-[-60%]" />
            </div>
            <div className="relative">
              <Image
                className="absolute -top-64 -right-64"
                src={blurCyanImage}
                alt=""
                width={530}
                height={530}
                unoptimized
                priority
              />
             <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 1372 890">
                <g clip-path="url(#a)">
                <path fill="#fff" d="M0 0h1372v890H0z"/>
                <path fill="#001E2B" d="M-548 0h1920v1080H-548z"/>
                <g clip-path="url(#b)">
                <path stroke="#38F973" stroke-miterlimit="10" d="M670.957 390.451v304.74c0 29.283 23.738 52.995 52.989 52.995h49.904c56.417 0 102.15 45.738 102.15 102.16 0 56.423-45.733 102.161-102.15 102.161h-203.9c-56.617 0-102.522 45.91-102.522 102.533 0 56.62 45.905 102.53 102.522 102.53h664.63c29.28 0 52.99-23.74 52.99-52.99V596.144c0-21.569-13.05-40.967-33.02-49.109L748.541 341.342c-6.456-2.628-13.369-3.942-20.31-3.914l-4.628.029c-29.136.2-52.646 23.883-52.646 52.994Z"/>
                <path fill="#38F973" d="M520.217 440.875c28.319 0 51.275-22.959 51.275-51.281 0-28.321-22.956-51.28-51.275-51.28-28.318 0-51.275 22.959-51.275 51.28 0 28.322 22.957 51.281 51.275 51.281Z"/>
                </g>
                <g clip-path="url(#c)">
                <path stroke="#38F973" stroke-miterlimit="10" d="M1030.04 634.549v-304.74c0-29.283-23.74-52.995-52.986-52.995H927.15c-56.417 0-102.15-45.738-102.15-102.16 0-56.423 45.733-102.1613 102.15-102.1613l203.9.0001c56.62 0 102.52-45.9095 102.52-102.5322s-45.9-102.5326-102.52-102.5326H466.417c-29.279 0-52.989 23.741-52.989 52.9948V428.856c0 21.569 13.055 40.967 33.022 49.109l506.009 205.693c6.456 2.628 13.369 3.942 20.31 3.914l4.628-.029c29.133-.2 52.643-23.883 52.643-52.994Z"/>
                </g>
                </g>
                <defs>
                    <clipPath id="a">
                        <path fill="#fff" d="M0 0h1372v890H0z"/>
                    </clipPath>
                    <clipPath id="b">
                        <path fill="#fff" d="M466 336h823v823H466z"/>
                    </clipPath>
                    <clipPath id="c">
                        <path fill="#fff" d="M1235 689H412v-823h823z"/>
                    </clipPath>
                </defs>
                </svg>
             </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
