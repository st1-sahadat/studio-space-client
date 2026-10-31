// components/category-section.tsx
// Requires: npx shadcn@latest add card button
// Icons: npm i lucide-react

import Link from "next/link"
import { ArrowRight, Camera, Clapperboard, Mic, Music, Palette } from "lucide-react"
import type { LucideIcon } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

type Category = {
  title: string
  description: string
  spaces: number
  href: string
  icon: LucideIcon
  // Full class names so Tailwind can detect them (no dynamic string building)
  tile: string
  hoverBorder: string
  hoverArrow: string
}

const categories: Category[] = [
  {
    title: "Photo Studios",
    description: "Cyclorama walls, natural daylight lofts, and profoto lighting setups.",
    spaces: 24,
    href: "/spaces/photo-studios",
    icon: Camera,
    tile: "bg-sky-100 text-sky-600",
    hoverBorder: "hover:border-sky-300",
    hoverArrow: "group-hover:bg-sky-600 group-hover:text-white",
  },
  {
    title: "Sound Stages",
    description: "Acoustic blackboxes, green screens, camlock power, and drive-in access.",
    spaces: 16,
    href: "/spaces/sound-stages",
    icon: Clapperboard,
    tile: "bg-violet-100 text-violet-600",
    hoverBorder: "hover:border-violet-300",
    hoverArrow: "group-hover:bg-violet-600 group-hover:text-white",
  },
  {
    title: "Podcast Rooms",
    description: "Turnkey audio and video recording with multi-cam 4K switchers and Shure mics.",
    spaces: 19,
    href: "/spaces/podcast-rooms",
    icon: Mic,
    tile: "bg-emerald-100 text-emerald-600",
    hoverBorder: "hover:border-emerald-300",
    hoverArrow: "group-hover:bg-emerald-600 group-hover:text-white",
  },
  {
    title: "Music Suites",
    description: "Dolby Atmos monitoring, analog consoles, vocal booths, and live rooms.",
    spaces: 14,
    href: "/spaces/music-suites",
    icon: Music,
    tile: "bg-amber-100 text-amber-600",
    hoverBorder: "hover:border-amber-300",
    hoverArrow: "group-hover:bg-amber-600 group-hover:text-white",
  },
  {
    title: "Art Workshops",
    description: "Ceramic kilns, pottery wheels, printmaking presses, and raw maker space.",
    spaces: 11,
    href: "/spaces/art-workshops",
    icon: Palette,
    tile: "bg-rose-100 text-rose-600",
    hoverBorder: "hover:border-rose-300",
    hoverArrow: "group-hover:bg-rose-600 group-hover:text-white",
  },
]

export function CategorySection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-16">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
        <div className="max-w-xl">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Find a space for your craft
          </h2>
          <p className="mt-2 text-muted-foreground">
            Pick a discipline to see studios, rooms, and workshops ready to book.
          </p>
        </div>
        <Link href="/spaces" className={cn(buttonVariants({ variant: "outline" }), "rounded-full")}>
          Browse all spaces
          <ArrowRight className="ml-1 size-4" />
        </Link>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {categories.map(({ title, description, spaces, href, icon: Icon, tile, hoverBorder, hoverArrow }) => (
          <Link
            key={title}
            href={href}
            className="group rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <Card
              className={cn(
                "h-full rounded-2xl border shadow-none transition-all duration-200",
                "group-hover:-translate-y-1 group-hover:shadow-lg motion-reduce:transform-none",
                hoverBorder
              )}
            >
              <CardHeader className="gap-4">
                <div className={cn("flex size-12 items-center justify-center rounded-xl", tile)}>
                  <Icon className="size-6" />
                </div>
                <CardTitle className="text-lg">{title}</CardTitle>
                <CardDescription className="leading-relaxed">{description}</CardDescription>
              </CardHeader>

              <CardContent className="flex-1" />

              <CardFooter className="justify-between border-t pt-4">
                <span className="text-sm font-medium text-muted-foreground">{spaces}+ spaces</span>
                <span
                  className={cn(
                    "flex size-8 items-center justify-center rounded-full bg-muted text-foreground transition-colors",
                    hoverArrow
                  )}
                >
                  <ArrowRight className="size-4" />
                </span>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  )
}
