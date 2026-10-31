"use client"

import * as React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import Image from "next/image"
import Link from "next/link"

const carouselItem = [
  { href: "/", image: "/Banner/jc-falcon-hCS4SQfJCH4-unsplash.jpg" },
  { href: "/studios", image: "/Banner/kyle-loftus-ZZ-OhZeJScY-unsplash.jpg" },
  { href: "/about", image: "/Banner/yusuf-onuk-AtiHaRKACYA-unsplash.jpg" },
]

export function BannerPage() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)

  React.useEffect(() => {
    if (!api) return

    const onSelect = () => setCurrent(api.selectedScrollSnap())
    api.on("select", onSelect)
    api.on("reInit", onSelect)

    return () => {
      api.off("select", onSelect)
      api.off("reInit", onSelect)
    }
  }, [api])

  return (
    <Carousel className="w-full" opts={{ loop: true }} setApi={setApi}>
      <CarouselContent className="ml-0">
        {/* ...your slides unchanged... */}
         {carouselItem.map((slide, index) => (
          <CarouselItem key={slide.image} className="relative pl-0">
            <section className="relative min-h-107.5 overflow-hidden bg-black sm:min-h-125 lg:min-h-140">
              <Image
                src={slide.image}
                alt={`Production studio banner ${index + 1}`}
                fill
                priority={index === 0}
                sizes="100vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-linear-to-r from-black via-black/80 to-black/20" />
              <div className="absolute inset-0 bg-black/10" />

              <div className="relative z-10 mx-auto flex min-h-107.5 max-w-7xl items-center px-6 py-16 sm:min-h-125 sm:px-12 lg:min-h-140 lg:px-20">
                <div className="max-w-xl text-white">
                  <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-yellow-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
                    Next-gen creative studios
                  </div>
                  <h1 className="text-4xl font-extrabold leading-[0.98] tracking-tight sm:text-5xl lg:text-6xl">
                    Reserve Production
                    <br />
                    Spaces Built for
                    <br />
                    <span className="text-yellow-400">Visionary Creators</span>
                  </h1>
                  <p className="mt-6 max-w-md text-sm leading-6 text-white/70 sm:text-base">
                    Step into pre-rigged cyclorama soundstages, 4K multi-cam podcast
                    lounges, and Dolby Atmos mixing suites across the continent.
                  </p>
                  <div className="mt-7 flex flex-wrap gap-3">
                    <Link
                      href="/studios"
                      className="rounded-md bg-yellow-400 px-5 py-3 text-xs font-bold text-black shadow-lg shadow-yellow-400/20 transition hover:bg-yellow-300"
                    >
                      Explore All Studios <span className="ml-1">→</span>
                    </Link>
                    <Link
                      href="/about"
                      className="rounded-md bg-white/10 px-5 py-3 text-xs font-semibold text-white ring-1 ring-white/20 transition hover:bg-white/20"
                    >
                      Host Your Space
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious className="left-3 border-white/20 bg-black/30 text-white hover:bg-black/60 sm:left-6" />
      <CarouselNext className="right-3 border-white/20 bg-black/30 text-white hover:bg-black/60 sm:right-6" />

      <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 gap-1.5">
        {carouselItem.map((slide, index) => (
          <button
            key={slide.image}
            type="button"
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === current}
            onClick={() => api?.scrollTo(index)}
            className={`h-1.5 rounded-full transition-all ${
              index === current
                ? "w-5 bg-yellow-400"
                : "w-1.5 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </Carousel>
  )
}