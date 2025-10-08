// import Link from 'next/link'
'use client'
// import Image from 'next/image'
import React, { useEffect, useState } from 'react';
import { Transition } from '@headlessui/react';
import MyTransition from '@/app/components/Transition'
import { MdCode, MdInfo, MdEditNote, MdAlternateEmail } from 'react-icons/md';


const Icon = ({ path, size = 40, className = '' }: { path: string; size?: number; className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path d={path} />
  </svg>
);

const CodeIcon = () => (
  <Icon
    className="text-neutral-700 dark:text-neutral-200"
    path="M9.4 16.6 5.8 13l3.6-3.6L8 8l-5 5 5 5 1.4-1.4zm5.2 0 3.6-3.6-3.6-3.6L16 8l5 5-5 5-1.4-1.4zM14.2 4l-4.4 16 1.93.53L16.13 4.53 14.2 4z"
  />
);
const InfoIcon = () => (
  <Icon
    className="text-neutral-700 dark:text-neutral-200"
    path="M11 17h2v-6h-2v6zm1-14C6.48 3 3 6.48 3 11s3.48 8 8 8 8-3.58 8-8-3.48-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm-1-9h2V6h-2v2z"
  />
);
const EditNoteIcon = () => (
  <Icon
    className="text-neutral-700 dark:text-neutral-200"
    path="M3 5c0-1.1.9-2 2-2h8v2H5v14h14v-8h2v8c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V5zm17.7-.3 1.6 1.6-8.6 8.6H12v-1.7l8.7-8.5z"
  />
);
const AlternateEmailIcon = () => (
  <Icon
    className="text-neutral-700 dark:text-neutral-200"
    path="M12 1C5.93 1 1 5.93 1 12s4.93 11 11 11c4.84 0 8.96-3.06 10.41-7.35l-1.9-.62A8.992 8.992 0 0 1 12 21C7.03 21 3 16.97 3 12S7.03 3 12 3s9 4.03 9 9v1c0 2.21-1.79 4-4 4-1.31 0-2.42-.63-3.13-1.6A4.98 4.98 0 0 1 12 17a5 5 0 0 1 0-10c1.99 0 3.68 1.16 4.47 2.83.3-.51.84-.83 1.45-.83.94 0 1.7.76 1.7 1.7V13c0 3.04-2.46 5.5-5.5 5.5S8.5 16.04 8.5 13 10.96 7.5 14 7.5c1.33 0 2.53.54 3.4 1.41C16.89 6.92 14.61 5.5 12 5.5 8.96 5.5 6.5 7.96 6.5 11S8.96 16.5 12 16.5s6.5-2.46 6.5-5.5V12c0-2.48-2.02-4.5-4.5-4.5S9.5 9.52 9.5 12 11.52 15.5 14 15.5s4.5-2.02 4.5-4.5V9.7c0-.39-.31-.7-.7-.7-.39 0-.7.31-.7.7v1.3c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3v1c0 2.21-1.79 4-4 4z"
  />
);

const logVisitorLocation = () => {
  try {
    const success = navigator.sendBeacon('/api/location');

    if (!success) {
      throw new Error('sendBeacon failed');
    }

    console.log('📍 Visitor location logged successfully');
  } catch (error) {
    console.error('⚠️ Error logging visitor location:', error);
  }
};

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    // Check if the visitor location has already been logged
    const hasLogged = sessionStorage.getItem('hasLoggedVisitorLocation');

    if (!hasLogged) {
      const log = () => {
        logVisitorLocation();
        sessionStorage.setItem('hasLoggedVisitorLocation', 'true'); // Mark as logged
      };

      if ('requestIdleCallback' in window) {
        requestIdleCallback(log);
      } else {
        setTimeout(log, 0);
      }
    }
  }, []);

  return (
    <main className='flex flex-col flex-1 lg:min-h-screen lg:justify-center'>
          <div className='grid grid-rows-auto lg:grid-cols-3 mx-auto w-full lg:w-4/5 flex-grow justify-center lg:content-center'>
          <Transition
          show={isMounted}
          enter="transition-opacity duration-700"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          >
          <div className='flex flex-col items-center py-2'>
          <MdCode size={40} />
          </div>
          <MyTransition 
          redirectTo='/devProjects'
          sectionName='Dev Projects'
          description='Professional projects across the modern full-stack landscape'
          />            
          </Transition>
          
          <Transition
                show={isMounted}
                enter="transition-opacity duration-700 delay-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
            >
          <div className='flex flex-col items-center py-2'>
          <MdInfo size={40} />
          </div>
          <MyTransition 
          redirectTo='/about'
          sectionName='About Me'
          description='Full-stack developer specializing in JavaScript'/>         
          </Transition>

          <Transition
          show={isMounted}
          enter="transition-opacity duration-700 delay-500"
          enterFrom="opacity-0"
          enterTo="opacity-100">
          <div className='flex flex-col items-center py-2'>
          <MdEditNote size={40} />
          </div>
          <MyTransition 
          redirectTo='/blog'
          sectionName='My blog'
          description='Navigating the digital odyssey through my lens'/>
          </Transition>

          {/* <Transition
          show={isMounted}
          enter="transition-opacity duration-700 delay-700"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          >
          <div className='flex flex-col items-center py-2'>
          <MdAlternateEmail size={40} />
          </div>
          <MyTransition 
          redirectTo='/contact'
          sectionName='Contact'
          description=' Have a question or want to work together?'/>
          </Transition>

          <Transition
          show={isMounted}
          enter="transition-opacity duration-700 delay-700"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          >   
          </Transition> */}
          </div>           
    </main>
  )
}
