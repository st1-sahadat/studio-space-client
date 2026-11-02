"use client"

import Link from "next/link"
import { ArrowRight, Search, CalendarDays, Zap, Sparkles } from "lucide-react"
import { TStep } from "../Type/type"


const steps: TStep[] = [
  {
    label: "01",
    title: "Discover Spaces",
    description:
      "Filter verified cyc walls, podcast lounges, soundstages, and mixing suites by location, gear inventory, and creator reviews.",
    icon: Search,
    iconBg: "bg-[#FDE8C8] text-[#D4982B]",
  },
  {
    label: "02",
    title: "Select Shoot Hours",
    description:
      "Inspect live calendar availability, choose precise hourly blocks, and review transparent breakdown rates with zero surprise fees.",
    icon: CalendarDays,
    iconBg: "bg-[#DDF3F8] text-[#2A9BC6]",
  },
  {
    label: "03",
    title: "Book Instantly",
    description:
      "Lock in your reservation with double-booking collision prevention, instant host confirmation, and downloadable invoice vouchers.",
    icon: Zap,
    iconBg: "bg-[#DDF6EE] text-[#2BA877]",
  },
  {
    label: "04",
    title: "Create & Produce",
    description:
      "Arrive at the stage with verified access codes, plug into ready-calibrated equipment grids, and bring your vision to life.",
    icon: Sparkles,
    iconBg: "bg-[#F5EAFD] text-[#A56FD4]",
  },
]

export default function StudioSpaceWork() {
  return (
    <section className="px-4 py-12 sm:px-6 sm:py-16 lg:py-24">
      <div className="text-center">
        <span className="inline-block rounded-full bg-[#FFF8E7] px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.15em] text-[#CFA22A]">
          Frictionless Booking
        </span>
        <h2 className="mt-5 text-[2.25rem] font-extrabold leading-tight tracking-tight text-[#1A1816] sm:text-5xl lg:text-[3.5rem]">
          How StudioSpace Works
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[#6B655D] sm:text-lg">
          Four simple steps from pre-production concept to rolling camera in world-class creative facilities.
        </p>
      </div>

      <div className="mt-10 flex flex-wrap items-stretch justify-center gap-4 sm:mt-14 lg:gap-4">
        {steps.map(({ label, title, description, icon: Icon, iconBg }, index) => (
          <div key={title} className="flex w-full items-center gap-3 sm:w-auto lg:gap-4">
            <Link
              href="/spaces"
              className="group relative flex min-h-65 w-full flex-col rounded-2xl border border-[#EAECE6] bg-white/80 px-5 py-6 shadow-[0_2px_24px_rgba(0,0,0,0.03)] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] sm:w-65 sm:px-6 sm:py-7 lg:w-67.5 lg:px-7 lg:py-8"
              aria-label={title}
            >
              <div className="flex items-center justify-between">
                <div className={`flex size-11 items-center justify-center rounded-2xl shadow-sm ${iconBg}`}>
                  <Icon className="size-5" strokeWidth={2} />
                </div>
                <span className="text-2xl font-extrabold leading-none text-[#E8E4DC] transition-colors group-hover:text-[#D4D0C8]">
                  {label}
                </span>
              </div>

              <h3 className="mt-5 text-xl font-extrabold leading-snug text-[#1A1816] tracking-tight">
                {title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-[#6B655D]">
                {description}
              </p>
            </Link>

            {index < steps.length - 1 && (
              <span aria-hidden="true" className="hidden shrink-0 text-[#D4D0C8] lg:block">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h13M12 6l6 6-6 6" />
                </svg>
              </span>
            )}
          </div>
        ))}
      </div>

      <div className="mt-16 flex justify-center">
        <Link
          href="/spaces"
          className="inline-flex items-center gap-2.5 rounded-full bg-linear-to-r from-[#F5A623] to-[#E08C00] px-8 py-4 text-sm font-extrabold text-white shadow-[0_8px_30px_rgba(245,166,35,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(245,166,35,0.45)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F5A623]/50"
        >
          Start Exploring Workspaces
          <ArrowRight className="size-4" />
        </Link>
      </div>
    </section>
  )
}
