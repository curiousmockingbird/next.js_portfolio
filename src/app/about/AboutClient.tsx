'use client';

import React, { useEffect, useState } from 'react';
import { useMediaQuery, useTheme } from '@mui/material';
import { Transition } from '@headlessui/react';
import Image from 'next/image';
import Box from '@mui/system/Box';
import Button from '@mui/joy/Button';
// import Toggle from '@/app/components/Toggle';
import HomeButton from '@/app/components/HomeButton';
import ScrollingSkills from '@/app/components/ScrollingSkills';

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
      {/* Full-stack JavaScript developer with a strong design foundation and a
      record of shipping accessible, fast, production apps. I’ve delivered tech
      solutions across small startups, consulting agencies, and statewide
      nonprofits. I work across React/Next.js, TypeScript, Node/Express, and
      modern deployments (Vercel, WP Engine), pairing clean UX with reliable
      engineering. */}
      I’m Harold Mesa, a full-stack developer and designer who thrives at turning complex requirements into clean, production-ready web systems. I pair a designer’s eye (4+ years in the graphic/illustration industry) with solid engineering practices—versioned code, clear docs, and performance budgets—to deliver interfaces that are fast, accessible, and maintainable.
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

// ScrollingSkills is now a shared component

const DesktopLayout = ({ isMounted }: { isMounted: boolean }) => (
  <main className='h-full' id="0">
    <div className="max-w-screen-xl mx-auto px-6 lg:px-12 lg:min-h-screen lg:flex lg:flex-col lg:justify-center">

      <Box className="grid lg:grid-cols-2 gap-8">
        <div>
          <Transition
            show={isMounted}
            enter="transition-opacity duration-700 delay-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
          >
            <section className="p-8 rounded-lg">
              <HomeButton inline  />
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
          <ScrollingSkills />
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

    <HomeButton />
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
        <ScrollingSkills />
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

    <Box>
      <div className="flex items-center justify-center mt-2">
        <Transition
          show={isMounted}
          enter="transition-opacity duration-700 delay-700"
          enterFrom="opacity-0"
          enterTo="opacity-100"
        >
          <div>
            <HomeButton  />
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
          <ScrollingSkills />
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
