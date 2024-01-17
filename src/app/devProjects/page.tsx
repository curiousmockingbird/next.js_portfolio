'use client'
import React, { useEffect, useState } from 'react';
import { Transition } from '@headlessui/react';
import MyTransition from '@/app/components/Transition'
import Header from '../components/Header';

export default function DevProjects() {
  const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

  return (
    <main className='flex flex-col h-screen'>
          <Header/>
          <div className='grid lg:grid-cols-2 mx-auto w-full lg:w-4/5' style={{ height: '75vh' }}>
          <Transition
          show={isMounted}
          enter="transition-opacity duration-700"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          >
          <MyTransition 
          redirectTo='/devProjects'
          sectionName='www.haroldesigner.art'
          description='Graphic Design Portfolio showcasing ill'
          />            
          </Transition>
          </div>
          {/* <div className='flex flex-col items-center justify-center' style={{ height: '25vh' }}><Image src="/hm.svg" alt="Your SVG" width={200} height={200} /></div> */}
    </main>
  )
}
