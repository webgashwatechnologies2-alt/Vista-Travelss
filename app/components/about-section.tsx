"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Compass, Globe, ShieldCheck } from "lucide-react";

type AboutSectionProps = {
  onPlanTrip: () => void;
};

const highlights = [
  {
    icon: Compass,
    title: "Curated journeys",
    detail: "Trips shaped around what you love",
  },
  {
    icon: ShieldCheck,
    title: "Helpful planning",
    detail: "Stay, transport and details together",
  },
  {
    icon: Globe,
    title: "Local discovery",
    detail: "Explore places across India",
  },
];

export default function AboutSection({ onPlanTrip }: AboutSectionProps) {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative isolate overflow-hidden bg-[#073b32] py-20 text-white sm:py-24 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-36 -top-40 h-[34rem] w-[34rem] rounded-full border border-white/[0.07]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-24 h-[24rem] w-[24rem] rounded-full border border-white/[0.07]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-40 h-[30rem] w-[30rem] rounded-full bg-emerald-400/[0.08] blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20 lg:px-8 2xl:max-w-[1540px]">
        <div className="relative mx-auto w-full max-w-xl lg:mx-0">
          <div
            aria-hidden="true"
            className="absolute -inset-3 rotate-3 rounded-[2rem] border border-amber-200/20 sm:-inset-4"
          />
          <div className="relative h-[390px] overflow-hidden rounded-[1.6rem] shadow-[0_32px_90px_rgba(0,0,0,0.3)] sm:h-[520px]">
            <Image
              src="/images/sptfamily.webp"
              alt="Travellers enjoying a group photo in the Himalayan mountains"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover transition-transform duration-700 hover:scale-[1.03]"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-[#041d19]/85 via-[#041d19]/10 to-[#041d19]/15"
            />
            <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/25 bg-[#062c25]/50 px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-white backdrop-blur-md sm:left-7 sm:top-7">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
              Travel, with intention
            </div>
            <div className="absolute bottom-7 left-6 right-6 text-white sm:bottom-10 sm:left-9">
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-200">
                The Vista feeling
              </span>
              <p className="mt-3 max-w-sm text-3xl font-medium leading-tight sm:text-4xl">
                Find the places that stay with you.
              </p>
            </div>
          </div>
          <div className="absolute -bottom-6 right-2 flex max-w-[270px] items-center gap-3 rounded-2xl border border-white/70 bg-[#fbfaf6] p-4 text-slate-900 shadow-[0_18px_50px_rgba(0,0,0,0.24)] sm:-right-5 sm:p-5">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-emerald-900 text-amber-200">
              <Compass aria-hidden="true" className="h-5 w-5" />
            </span>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-emerald-900">
                Your journey, your way
              </p>
              <p className="mt-1 text-xs leading-relaxed text-slate-600">
                Thoughtful details, from start to finish
              </p>
            </div>
          </div>
        </div>

        <div className="pt-2 lg:pt-0">
          <div className="flex items-center gap-3">
            <span aria-hidden="true" className="h-px w-9 bg-amber-300" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-200">
              A little about us
            </span>
          </div>
          <h2
            id="about-heading"
            className="mt-6 max-w-xl text-4xl font-medium leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-[3.75rem]"
          >
            India, experienced{" "}
            <span className="font-normal italic text-emerald-200">your way.</span>
          </h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-emerald-50/75">
            We believe the best trips feel personal. Vista Travelss brings together
            carefully curated journeys, stays and local experiences across Himachal
            Pradesh and destinations throughout India.
          </p>
          <p className="mt-4 max-w-xl text-base leading-8 text-emerald-50/75">
            Tell us what inspires you, and we&apos;ll help shape the details around
            your dates, interests and travel style—from a mountain escape to a
            journey across the country.
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-3">
            {highlights.map(({ icon: Icon, title, detail }) => (
              <li
                key={title}
                className="rounded-2xl border border-white/10 bg-white/[0.07] p-4 backdrop-blur-sm transition-colors hover:border-amber-200/30 hover:bg-white/[0.1]"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-200/10">
                  <Icon
                    aria-hidden="true"
                    className="h-[18px] w-[18px] text-amber-200"
                  />
                </span>
                <h3 className="mt-3 text-sm font-bold text-white">{title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-emerald-50/65">
                  {detail}
                </p>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-5 border-t border-white/15 pt-7">
            <button
              type="button"
              onClick={onPlanTrip}
              className="inline-flex items-center gap-2 rounded-full bg-amber-200 px-6 py-3.5 text-sm font-bold text-emerald-950 shadow-lg shadow-black/10 transition-all hover:-translate-y-0.5 hover:bg-amber-100 hover:shadow-xl"
            >
              Plan your journey{" "}
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </button>
            <Link
              href="/contact/"
              className="inline-flex items-center gap-2 text-sm font-bold text-white underline decoration-white/35 underline-offset-4 transition-colors hover:text-amber-200"
            >
              Hotel &amp; cab enquiries{" "}
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
