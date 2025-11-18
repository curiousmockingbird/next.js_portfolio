'use client';

import Image from 'next/image';
import React from 'react';

type Skill = {
  label: string;
  src?: string;
  href?: string;
};

const skills: Skill[] = [
  { label: 'Next.js', src: '/Next.js.svg', href: 'https://nextjs.org' },
  { label: 'React', src: '/react.svg', href: 'https://react.dev' },
  { label: 'JavaScript', src: '/javascript.png', href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  { label: 'TypeScript', src: '/typescript.svg', href: 'https://www.typescriptlang.org' },
  { label: 'Node.js', src: '/node.svg', href: 'https://nodejs.org' },
  { label: 'Tailwind CSS', src: '/tailwind.svg', href: 'https://tailwindcss.com' },
  { label: 'WordPress', src: '/wordpress.svg', href: 'https://wordpress.org' },
  { label: 'Vercel', src: '/vercel.svg', href: 'https://vercel.com' },
  { label: 'Vue.js', src: '/vue-js.jpeg', href: 'https://vuejs.org' },
  { label: 'SendGrid', src: '/sendgrid.svg', href: 'https://sendgrid.com' },
  { label: 'Apps Script', src: '/apps_script.svg', href: 'https://workspace.google.com/products/apps-script/' },
  { label: 'TanStack Query', src: '/tan_stack.png', href: 'https://tanstack.com/query/latest' },
];

const SkillBadge = ({ skill }: { skill: Skill }) => {
  const content = skill.src ? (
    <Image className="block" src={skill.src} width={56} height={56} alt={skill.label} />
  ) : (
    <div className="w-14 h-14 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200 grid place-items-center text-sm font-medium">
      {skill.label.split(' ').map((w) => w[0]).join('').slice(0, 3)}
    </div>
  );

  const iconBox = (
    <div className="w-full h-16 flex items-center justify-center">
      {content}
    </div>
  );

  const wrapped = skill.href ? (
    <a
      href={skill.href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-teal-500 rounded-md"
      aria-label={skill.label}
    >
      {iconBox}
      {/* <span className="mt-2 text-xs text-neutral-600 dark:text-neutral-300">{skill.label}</span> */}
    </a>
  ) : (
    <div className="flex flex-col items-center w-full" aria-label={skill.label}>
      {iconBox}
      <span className="mt-2 text-xs text-neutral-600 dark:text-neutral-300">{skill.label}</span>
    </div>
  );

  return (
    <li className="m-1 shrink-0">
      {wrapped}
    </li>
  );
};

export default function ScrollingSkills() {
  return (
    <div className="w-full relative overflow-hidden py-2" aria-label="Technology stack">
      <ul className="marquee" role="list">
        {skills.map((skill) => (
          <SkillBadge key={`a-${skill.label}`} skill={skill} />
        ))}
        {skills.map((skill) => (
          <SkillBadge key={`b-${skill.label}`} skill={skill} />
        ))}
      </ul>
      <style jsx>{`
        .marquee {
          display: flex;
          align-items: center;
          gap: 1.5rem; /* matches Tailwind gap-6 */
          width: max-content; /* shrink to content for smooth loop */
          animation: scroll var(--scroll-duration, 30s) linear infinite;
        }

        /* Soft fade on edges for a nicer effect */
        div[aria-label='Technology stack'] {
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
                  mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }

        /* Pause scrolling on hover */
        div[aria-label='Technology stack']:hover .marquee {
          animation-play-state: paused;
        }

        @keyframes scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }

        @media (prefers-reduced-motion: reduce) {
          .marquee { animation: none; }
        }
      `}</style>
    </div>
  );
}

