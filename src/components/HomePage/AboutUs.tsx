"use client"

import Link from "next/link"
import {
  ShieldCheck,
  UserCheck,
  Film,
  Headset,
  ArrowRight,
} from "lucide-react"
import type { ReactNode } from "react"

type Feature = {
  icon: ReactNode
  title: string
  description: string
}

const features: Feature[] = [
  {
    icon: <ShieldCheck className="size-6 text-[#D4982B]" />,
    title: "$1,000,000 Host Liability Protection",
    description:
      "Comprehensive property and stage damage coverage backed by top-tier creative insurance underwriters for every booking.",
  },
  {
    icon: <UserCheck className="size-6 text-[#D4982B]" />,
    title: "Identity & Professional Verification",
    description:
      "Every studio host and booking creator undergoes rigorous ID and portfolio verification to ensure professional workspace safety.",
  },
  {
    icon: <Film className="size-6 text-[#D4982B]" />,
    title: "Production Equipment Safeguard",
    description:
      "High-value cinema lenses, vintage microphones, and lighting grids are protected with itemized check-in/out protocols.",
  },
  {
    icon: <Headset className="size-6 text-[#D4982B]" />,
    title: "24/7 Dedicated Production Concierge",
    description:
      "Direct on-call dispatch assistance for technical access, power hookups, acoustic calibrations, and emergency maintenance.",
  },
]

export default function AboutUs() {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
      <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16 items-start">
        {/* Left content column */}
        <div className="flex flex-col gap-6 lg:max-w-135">
          <span className="inline-block rounded-full bg-[#FFF8E7] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-[#CFA22A]">
            Trust, Safety & Peace of Mind
          </span>
          <h2 className="text-[2rem] font-extrabold leading-[1.05] tracking-tight text-[#1A1816] sm:text-[2.75rem]">
            Built on Uncompromising Protection for Both Hosts & Creators
          </h2>
          <p className="text-base leading-relaxed text-[#6B655D] sm:text-lg">
            We understand creative production is unpredictable. StudioSpace
            provides enterprise-grade safety umbrellas, verified host
            guarantees, and around-the-clock technical support so you can focus
            entirely on craft.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link
              href="/host"
              className="flex items-center justify-center gap-2 rounded-xl bg-[#1A1816] px-6 py-3 text-xs font-bold text-white shadow-lg shadow-black/10 transition hover:bg-[#252220]"
            >
              Become a Verified Host <ArrowRight className="size-3.5" />
            </Link>
            <Link
              href="/studios"
              className="flex items-center justify-center gap-2 rounded-xl border border-[#E5E2DC] bg-white px-6 py-3 text-xs font-bold text-[#1A1816] shadow-sm transition hover:bg-[#F7F5F0] hover:border-[#D4D0C8]"
            >
              Browse Protected Spaces <ArrowRight className="size-3.5" />
            </Link>
          </div>
        </div>

        {/* Right feature grid */}
        <div className="grid gap-5 lg:grid-cols-2 lg:gap-6 lg:w-130">
          {features.map(({ icon, title, description }) => (
            <div
              key={title}
              className="relative rounded-2xl border border-[#EAECE6] bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition hover:border-[#D4D0C8] hover:shadow-[0_8px_24px_rgba(0,0,0,0.05)]"
            >
              <div className="flex size-10 items-center justify-center rounded-xl bg-[#FFF8E7] p-2 text-[#D4982B] shadow-sm">
                {icon}
              </div>
              <h3 className="mt-4 text-lg font-extrabold leading-snug text-[#1A1816]">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#6B655D]">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
