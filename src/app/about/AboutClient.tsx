'use client';

import React, { useEffect, useState } from 'react';
import { useMediaQuery, useTheme } from '@mui/material';
import { Transition } from '@headlessui/react';
import Image from 'next/image';
import Box from '@mui/system/Box';
import Button from '@mui/joy/Button';
import Toggle from '@/app/components/Toggle';
import type { IconType } from 'react-icons';
import {
  SiNextdotjs,
  SiReact,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiTailwindcss,
  SiWordpress,
  SiVercel,
  SiVuedotjs,
  SiSendgrid,
  SiReactquery,
  SiGoogle,
} from 'react-icons/si';

const logButtonClick = async (buttonName: string) => {
  try {
    await fetch('/api/logs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ buttonName }),
    });
  } catch (error) {
    console.error('Error logging button click:', error);
  }
};

const LinkedInButton = () => (
  <Button
    component="a"
    href="https://www.linkedin.com/in/haroldmesa93/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Open Harold's LinkedIn profile"
    variant="solid"
    color="primary"
    onClick={() => logButtonClick('LinkedIn')}
    sx={{ minWidth: 140 }}
  >
    LinkedIn
  </Button>
);

const GithubButton = () => (
  <Button
    component="a"
    href="https://github.com/curiousmockingbird"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Open Harold's GitHub profile"
    variant="soft"
    color="neutral"
    onClick={() => logButtonClick('Github')}
    sx={{ minWidth: 140 }}
  >
    GitHub
  </Button>
);

const RotatingImage: React.FC = () => {
  const images = ['/profile_pic.jpg', '/home.jpg', '/curious_mockingbird_pic.jpg'];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const reduceMotion =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotion) return; // Respect reduced motion preference

    const interval = setInterval(() => {
      setFade(false);
      const id1 = setTimeout(() => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
      }, 500);
      const id2 = setTimeout(() => setFade(true), 600);
      return () => {
        clearTimeout(id1);
        clearTimeout(id2);
      };
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="flex justify-center items-center h-full relative">
      <Image
        className={`rounded-full ring-2 ring-neutral-200 dark:ring-neutral-700 shadow-sm transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}
        src={images[currentImageIndex]}
        width={300}
        height={300}
        alt="Harold Mesa profile photo"
        priority
      />
    </div>
  );
};

const AboutText = () => (
  <>
    <p className="mb-4 leading-relaxed">
      Full-stack JavaScript developer with a strong design foundation and a
      record of shipping accessible, fast, production apps. I’ve delivered tech
      solutions across small startups, consulting agencies, and statewide
      nonprofits. I work across React/Next.js, TypeScript, Node/Express, and
      modern deployments (Vercel, WP Engine), pairing clean UX with reliable
      engineering.
    </p>
    {/* <p className="mb-4">
      Currently, I work as a contractor with Wisconsin&apos;s leading grassroots
      immigrant rights organization,{" "}
      <span className="font-bold underline">
        <a href="https://vdlf.org">Voces de la Frontera</a>
      </span>
      , where I build and maintain digital solutions that empower communities
      and drive social change.
    </p> */}
  </>
);

type Skill = {
  label: string;
  src?: string; // if absent, render text fallback
  href?: string;
};

const skills: Skill[] = [
  { label: 'Next.js', src: '/next-js.svg', href: 'https://nextjs.org' },
  { label: 'React', src: '/react.svg', href: 'https://react.dev' },
  { label: 'JavaScript', src: '/javascript.svg', href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  { label: 'TypeScript' },
  { label: 'Node.js', src: '/node.png', href: 'https://nodejs.org' },
  { label: 'Tailwind CSS', src: '/tailwind.svg', href: 'https://tailwindcss.com' },
  { label: 'WordPress', src: '/wordpress.svg', href: 'https://wordpress.org' },
  { label: 'Vercel', src: '/vercel.svg', href: 'https://vercel.com' },
  { label: 'Vue.js', src: '/vue-js.svg', href: 'https://vuejs.org' },
  { label: 'SendGrid', src: '/sendgrid.svg', href: 'https://sendgrid.com' },
  { label: 'Apps Script', src: '/apps_script.svg', href: 'https://workspace.google.com/products/apps-script/' },
  { label: 'TanStack Query', src: '/tan_stack.png', href: 'https://tanstack.com/query/latest' },
  { label: 'EveryAction', src: '/everyaction.png', href: 'https://www.ngpvan.com/product/everyaction/' },
  // Add more here as assets are added to /public (e.g., Prisma, Postgres, Stripe, NextAuth)
];

const normalize = (s: string) => s.trim().toLowerCase();

const iconRegistry: Record<string, IconType> = {
  'next.js': SiNextdotjs,
  react: SiReact,
  javascript: SiJavascript,
  typescript: SiTypescript,
  'node.js': SiNodedotjs,
  'tailwind css': SiTailwindcss,
  wordpress: SiWordpress,
  vercel: SiVercel,
  'vue.js': SiVuedotjs,
  sendgrid: SiSendgrid,
  'react query': SiReactquery,
  'tanstack query': SiReactquery,
  'apps script': SiGoogle,
  'google apps script': SiGoogle,
};

const SkillBadge = ({ skill }: { skill: Skill }) => {
  const Icon = iconRegistry[normalize(skill.label)];
  const content = Icon ? (
    <div className="w-14 h-14 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200 grid place-items-center">
      <Icon size={28} aria-hidden="true" />
    </div>
  ) : skill.src ? (
    <Image src={skill.src} width={56} height={56} alt={skill.label} />
  ) : (
    <div className="w-14 h-14 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200 grid place-items-center text-sm font-medium">
      {skill.label.split(' ').map((w) => w[0]).join('').slice(0, 3)}
    </div>
  );

  const wrapped = skill.href ? (
    <a
      href={skill.href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-teal-500 rounded-md"
      aria-label={skill.label}
    >
      {content}
      <span className="mt-2 text-xs text-neutral-600 dark:text-neutral-300">{skill.label}</span>
    </a>
  ) : (
    <div className="flex flex-col items-center" aria-label={skill.label}>
      {content}
      <span className="mt-2 text-xs text-neutral-600 dark:text-neutral-300">{skill.label}</span>
    </div>
  );

  return (
    <li className="m-1">
      {wrapped}
    </li>
  );
};

const DesktopLayout = ({ isMounted }: { isMounted: boolean }) => (
  <main className='h-full' id="0">
    <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
      <Box className="flex justify-center items-center" id="1">
        <Toggle />
      </Box>
      <Box className="grid lg:grid-cols-2 gap-8">
        <div>
          <Transition
            show={isMounted}
            enter="transition-opacity duration-700 delay-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
          >
            <section className="p-8 rounded-lg">
              <h1 className="text-2xl font-semibold mb-3">About Me</h1>
              <AboutText />
            </section>
          </Transition>
        </div>
        <div className="flex justify-center">
          <Transition
            show={isMounted}
            enter="transition-opacity duration-700 delay-700"
            enterFrom="opacity-0"
            enterTo="opacity-100"
          >
            <RotatingImage />
          </Transition>
        </div>
      </Box>

      <Transition
        id="3"
        show={isMounted}
        enter="transition-opacity duration-700 delay-700"
        enterFrom="opacity-0"
        enterTo="opacity-100"
      >
        <Box className="flex flex-col items-center justify-center gap-4 w-full">
          <ul className="w-full grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-6" aria-label="Technology stack">
            {skills.map((skill) => (
              <SkillBadge key={skill.label} skill={skill} />
            ))}
          </ul>
          <div className="flex items-center justify-center gap-3 flex-wrap w-full">
            <LinkedInButton />
            <GithubButton />
          </div>
        </Box>
      </Transition>
    </div>
  </main>
);

const TabletLayout = ({ isMounted }: { isMounted: boolean }) => (
  <main className="max-w-screen-xl mx-auto px-6 lg:px-12 mt-8">
    <Toggle />

    <Box className="grid md:grid-cols-2 gap-6 mt-8 items-center">
      <div>
        <Transition
          show={isMounted}
          enter="transition-opacity duration-700 delay-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
        >
          <section className="p-6 rounded-lg">
            <h1 className="text-xl font-semibold mb-2">About Me</h1>
            <AboutText />
          </section>
        </Transition>
      </div>

      <div className="flex justify-center">
        <Transition
          show={isMounted}
          enter="transition-opacity duration-700 delay-700"
          enterFrom="opacity-0"
          enterTo="opacity-100"
        >
          <RotatingImage />
        </Transition>
      </div>
    </Box>

    <Transition
      id="3"
      show={isMounted}
      enter="transition-opacity duration-700 delay-700"
      enterFrom="opacity-0"
      enterTo="opacity-100"
    >
      <Box className="flex flex-col items-center justify-center gap-4 my-8 w-full">
        <ul className="w-full grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-6" aria-label="Technology stack">
          {skills.map((skill) => (
            <SkillBadge key={skill.label} skill={skill} />
          ))}
        </ul>
        <div className="flex items-center justify-center gap-3 flex-wrap w-full">
          <LinkedInButton />
          <GithubButton />
        </div>
      </Box>
    </Transition>
  </main>
);

const MobileLayout = ({ isMounted }: { isMounted: boolean }) => (
  <main className="max-w-screen-md mx-auto px-4 mt-8">
    <Toggle />

    <Box>
      <div className="flex items-center justify-center mt-2">
        <Transition
          show={isMounted}
          enter="transition-opacity duration-700 delay-700"
          enterFrom="opacity-0"
          enterTo="opacity-100"
        >
          <div>
            <Image
              className="rounded-full ring-2 ring-neutral-200 dark:ring-neutral-700 shadow-sm"
              src="/profile_pic.jpg"
              width={200}
              height={200}
              alt="Harold Mesa profile photo"
              priority
            />
          </div>
        </Transition>
      </div>
      <Transition
        id="3"
        show={isMounted}
        enter="transition-opacity duration-700 delay-700"
        enterFrom="opacity-0"
        enterTo="opacity-100"
      >
        <Box className="flex flex-col items-center justify-center gap-4 w-full">
          <ul className="w-full grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4" aria-label="Technology stack">
            {skills.map((skill) => (
              <SkillBadge key={skill.label} skill={skill} />
            ))}
          </ul>
          <div className="flex items-center justify-center gap-3 w-full">
            <LinkedInButton />
            <GithubButton />
          </div>
        </Box>
      </Transition>
    </Box>

    <Box className="grid grid-cols-1 gap-4 mt-4">
      <div>
        <Transition
          show={isMounted}
          enter="transition-opacity duration-700 delay-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
        >
          <section className="p-4 rounded-lg">
            <h1 className="text-lg font-semibold mb-2">About Me</h1>
            <AboutText />
          </section>
        </Transition>
      </div>
    </Box>
  </main>
);

export default function AboutClient() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'lg'));
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      {isMobile && <MobileLayout isMounted={isMounted} />}
      {isTablet && <TabletLayout isMounted={isMounted} />}
      {!isMobile && !isTablet && <DesktopLayout isMounted={isMounted} />}
    </>
  );
}
