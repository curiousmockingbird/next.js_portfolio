"use client";
import * as React from "react";
import { Transition } from "@headlessui/react";

type CTA = { label: string; href: string };
type Section =
  | { type: "hero"; eyebrow?: string; heading: string; subheading?: string; cta?: CTA }
  | { type: "bullets"; heading?: string; items: { title: string; text: string }[] }
  | { type: "cta"; heading: string; cta: CTA };

export function SectionRenderer({ sections }: { sections: Section[] }) {
  const [isMounted, setIsMounted] = React.useState(false);
  React.useEffect(() => setIsMounted(true), []);

  const delays = ["", "delay-150", "delay-300", "delay-500"]; // mirrors HomeClient staggered feel

  return (
    <main className="h-full min-h-0 flex flex-col justify-center gap-y-4 md:gap-y-6 lg:gap-y-3 py-4 md:py-6 lg:py-3 overflow-hidden">
      {sections.map((s, i) => {
        const delayClass = delays[Math.min(i, delays.length - 1)];
        switch (s.type) {
          case "hero":
            return (
              <Transition
                key={`hero-${i}`}
                show={isMounted}
                enter={`transition-opacity transform duration-700 ${delayClass}`}
                enterFrom="opacity-0 translate-y-2"
                enterTo="opacity-100 translate-y-0"
              >
                <Hero {...s} />
              </Transition>
            );
          case "bullets":
            return (
              <Transition
                key={`bullets-${i}`}
                show={isMounted}
                enter={`transition-opacity transform duration-700 ${delayClass}`}
                enterFrom="opacity-0 translate-y-2"
                enterTo="opacity-100 translate-y-0"
              >
                <Bullets {...s} />
              </Transition>
            );
          // case "cta":
          //   return (
          //     <Transition
          //       key={`cta-${i}`}
          //       show={isMounted}
          //       enter={`transition-opacity transform duration-700 ${delayClass}`}
          //       enterFrom="opacity-0 translate-y-2"
          //       enterTo="opacity-100 translate-y-0"
          //     >
          //       <CallToAction {...s} />
          //     </Transition>
          //   );
          default:
            return null;
        }
      })}
    </main>
  );
}

function Hero({ eyebrow, heading, subheading, cta }: { eyebrow?: string; heading: string; subheading?: string; cta?: CTA }) {
  return (
    <section className="container mx-auto max-w-5xl px-4 text-center py-4 md:py-6 lg:py-2 lg:overflow-hidden">
      {eyebrow && (
        <p className="mb-2 text-sm font-medium uppercase tracking-wide text-[var(--accent-color)]">{eyebrow}</p>
      )}
      <h1 className="mb-2 text-4xl md:text-5xl lg:text-5xl font-bold leading-tight whitespace-pre-line">{heading}</h1>
      {subheading && (
        <p className="mx-auto mb-3 lg:mb-2 max-w-3xl text-base md:text-lg opacity-80 whitespace-pre-line">{subheading}</p>
      )}
      {cta && (
        <a
          href={cta.href}
          className="inline-flex items-center rounded-lg bg-[var(--accent-color)] px-5 py-3 font-medium text-white hover:opacity-90 transition"
        >
          {cta.label}
        </a>
      )}
    </section>
  );
}

function Bullets({ heading, items }: { heading?: string; items: { title: string; text: string }[] }) {
  return (
    <section className="container mx-auto max-w-5xl px-4 py-4 md:py-6 lg:py-2 lg:overflow-hidden">
      {heading && <h2 className="mb-4 md:mb-5 lg:mb-3 text-center text-2xl md:text-3xl font-semibold">{heading}</h2>}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-3">
        {items.map((it, idx) => (
          <div key={idx} className="rounded-lg border border-white/10 bg-white/5 p-4 lg:p-3">
            <h3 className="mb-1 text-lg font-semibold leading-snug">{it.title}</h3>
            <p className="text-sm lg:text-[13px] opacity-80 leading-snug">{it.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// function CallToAction({ heading, cta }: { heading: string; cta: CTA }) {
//   return (
//     <section className="container mx-auto max-w-5xl px-4 text-center py-8 md:py-10 lg:py-10">
//       <h2 className="mb-3 text-2xl md:text-3xl font-semibold">{heading}</h2>
//       <a
//         href={cta.href}
//         className="inline-flex items-center rounded-lg border border-white/15 bg-white/5 px-5 py-3 font-medium hover:bg-white/10 transition"
//       >
//         {cta.label}
//       </a>
//     </section>
//   );
// }
