// import Link from 'next/link'
'use client'
// import Image from 'next/image'
import React, { useEffect, useState } from 'react';
import MyTransition from '@/app/components/Transition'
// import Header from './components/Header';
import CodeIcon from '@mui/icons-material/Code';
import InfoIcon from '@mui/icons-material/Info';
import EditNoteIcon from '@mui/icons-material/EditNote';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import Toggle from '@/app/components/Toggle';

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
    <main className='flex flex-col flex-1'>
          <Toggle/>
          <div className='grid grid-rows-auto lg:grid-cols-2 mx-auto w-full lg:w-4/5 flex-grow'>
          <div className={`transition duration-700 ${isMounted ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className='flex flex-col items-center py-2'>
              <CodeIcon sx={{ fontSize: 40 }}/>
            </div>
            <MyTransition
              redirectTo='/devProjects'
              sectionName='Dev Projects'
              description='Professional projects across the modern full-stack landscape'
            />
          </div>

          <div className={`transition duration-700 delay-300 ${isMounted ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className='flex flex-col items-center py-2'>
              <InfoIcon sx={{ fontSize: 40 }}/>
            </div>
            <MyTransition
              redirectTo='/about'
              sectionName='About Me'
              description='Full-stack developer specializing in JavaScript'
            />
          </div>

          <div className={`transition duration-700 delay-500 ${isMounted ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className='flex flex-col items-center py-2'>
              <EditNoteIcon sx={{ fontSize: 40 }}/>
            </div>
            <MyTransition
              redirectTo='/blog'
              sectionName='My blog'
              description='Navigating the digital odyssey through my lens'
            />
          </div>

          <div className={`transition duration-700 delay-700 ${isMounted ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className='flex flex-col items-center py-2'>
              <AlternateEmailIcon sx={{ fontSize: 40 }}/>
            </div>
            <MyTransition
              redirectTo='/contact'
              sectionName='Contact'
              description=' Have a question or want to work together?'
            />
          </div>
          </div>           
    </main>
  )
}
