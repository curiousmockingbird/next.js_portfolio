// import Link from 'next/link'
'use client'
// import Image from 'next/image'
import React, { useEffect, useState } from 'react';
import { Transition } from '@headlessui/react';
import MyTransition from '@/app/components/Transition'
// import Header from './components/Header';
import CodeIcon from '@mui/icons-material/Code';
import InfoIcon from '@mui/icons-material/Info';
import EditNoteIcon from '@mui/icons-material/EditNote';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import Toggle from '@/app/components/Toggle';

const logVisitorLocation = async () => {
  try {
    const response = await fetch('/api/location', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
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
      logVisitorLocation();
      sessionStorage.setItem('hasLoggedVisitorLocation', 'true'); // Mark as logged
    }
  }, []);

  return (
    <main className='flex flex-col h-screen'>
          <Toggle/>
          <div className='grid grid-rows-auto lg:grid-cols-2 mx-auto w-full lg:w-4/5' style={{ height: '80vh' }}>
          <Transition
          show={isMounted}
          enter="transition-opacity duration-700"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          >
          <div className='flex flex-col items-center py-2'>
          <CodeIcon sx={{ fontSize: 40 }}/>
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
          <InfoIcon sx={{ fontSize: 40 }}/>
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
          <EditNoteIcon sx={{ fontSize: 40 }}/>
          </div>         
          <MyTransition 
          redirectTo='/blog'
          sectionName='My blog'
          description='Navigating the digital odyssey through my lens'/>
          </Transition>

          <Transition
          show={isMounted}
          enter="transition-opacity duration-700 delay-700"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          >
          <div className='flex flex-col items-center py-2'>
          <AlternateEmailIcon sx={{ fontSize: 40 }}/>
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
          </Transition>
          </div>           
    </main>
  )
}
