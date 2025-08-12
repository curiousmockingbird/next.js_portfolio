'use client';

import React, { useEffect, useState } from 'react';
import { useMediaQuery, useTheme } from '@mui/material';
import { Transition } from '@headlessui/react';
import Image from 'next/image';
import Box from '@mui/system/Box';
import Button from '@mui/joy/Button';
import Toggle from '@/app/components/Toggle';

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
    variant="outlined"
    color="primary"
    onClick={() => {
      window.open('https://www.linkedin.com/in/haroldmesa93/', '_blank');
      logButtonClick('LinkedIn');
    }}
  >
    My LinkedIn
  </Button>
);

const GithubButton = () => (
  <Button
    variant="outlined"
    color="success"
    onClick={() => {
      window.open('https://github.com/curiousmockingbird', '_blank');
      logButtonClick('Github');
    }}
  >
    Github account
  </Button>
);

const RotatingImage: React.FC = () => {
  const images = ['/profile_pic.jpg', '/curious_mockingbird_pic.jpg'];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
      }, 500);
      setTimeout(() => setFade(true), 600);
    }, 5000);
    return () => clearInterval(interval);
  });

  return (
    <div className="flex justify-center items-center h-full relative">
      <Image
        className={`rounded-full transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}
        src={images[currentImageIndex]}
        width={300}
        height={300}
        alt="Profile"
        priority
      />
    </div>
  );
};

const AboutText = () => (
  <>
    <p className="mb-4">
      I am Harold Mesa, full-stack developer specializing in JavaScript, with a
      passion for crafting intuitive, high-performance web applications. With a strong
      foundation in JavaScript, React, and Node.js, I bring ideas to life through scalable,
      responsive, and accessible web experiences. My expertise extends to the MEARN stack,
      serverless architecture, WordPress, and Git, allowing me to build dynamic and adaptable
      solutions for a variety of needs.
    </p>
    <p className="mb-4">
      Currently, I work as a contractor with Wisconsin&apos;s leading grassroots immigrant rights organization,{' '}
      <span className="font-bold underline">
        <a href="https://vdlf.org">Voces de la Frontera</a>
      </span>
      , where I build and maintain digital solutions that empower communities and drive social change.
    </p>
  </>
);

const DesktopLayout = ({ isMounted }: { isMounted: boolean }) => (
  <main className='h-full' id="0">
    <div className="mx-32">
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
        <Box
          className="flex items-center justify-evenly"
          sx={{ height: '20vh' }}
        >
          {['next-js.svg', 'javascript.svg', 'react.svg', 'wordpress.svg'].map(
            (icon) => (
              <div key={icon} className="flex justify-center">
                <Image src={`/${icon}`} width={60} height={60} alt={icon} />
              </div>
            )
          )}
          <LinkedInButton />
          <GithubButton />
        </Box>
      </Transition>
    </div>
  </main>
);

const TabletLayout = ({ isMounted }: { isMounted: boolean }) => (
  <div className="mx-16 mt-8">
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
      <Box className="flex items-center justify-evenly my-8">
        {['next-js.svg', 'javascript.svg', 'react.svg', 'wordpress.svg'].map(
          (icon) => (
            <div key={icon} className="flex justify-center">
              <Image src={`/${icon}`} width={60} height={60} alt={icon} />
            </div>
          )
        )}
        <LinkedInButton />
        <GithubButton />
      </Box>
    </Transition>
  </div>
);

const MobileLayout = ({ isMounted }: { isMounted: boolean }) => (
  <div className="mx-4 mt-8">
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
              className="rounded-full"
              src="/profile_pic.jpg"
              width={200}
              height={200}
              alt="My Pic"
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
        <Box className="flex flex-wrap items-center justify-evenly">
          {['next-js.svg', 'javascript.svg', 'react.svg', 'wordpress.svg'].map(
            (icon) => (
              <div key={icon} className="flex justify-center m-2">
                <Image src={`/${icon}`} width={60} height={60} alt={icon} />
              </div>
            )
          )}
          <LinkedInButton />
          <GithubButton />
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
            <AboutText />
          </section>
        </Transition>
      </div>
    </Box>
  </div>
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

