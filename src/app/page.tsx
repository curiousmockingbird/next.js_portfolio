// import Link from 'next/link'
'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react';
import { Transition } from '@headlessui/react';
import MyTransition from '@/app/components/Transition'
import Header from './components/Header';

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

  return (
    <main className='flex flex-col h-screen'>
          <Header/>
          <div className='grid grid-rows-auto lg:grid-cols-2 mx-auto w-full lg:w-4/5' style={{ height: '75vh' }}>
          <Transition
          show={isMounted}
          enter="transition-opacity duration-700"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          >
          <MyTransition 
          redirectTo='/devProjects'
          sectionName='Dev Projects'
          description='Some Full-Stack Development projects I am proud to show off.'
          />            
          </Transition>
          
          <Transition
                show={isMounted}
                enter="transition-opacity duration-700 delay-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
            >
          <MyTransition 
          redirectTo='/about'
          sectionName='About Me'
          description='Some Full-Stack Development projects I am proud to show off.'/>         
          </Transition>

          <Transition
          show={isMounted}
          enter="transition-opacity duration-700 delay-500"
          enterFrom="opacity-0"
          enterTo="opacity-100">         
          <MyTransition 
          redirectTo=''
          sectionName='My blog'
          description='Some Full-Stack Development projects I am proud to show off.'/>
          </Transition>

          <Transition
          show={isMounted}
          enter="transition-opacity duration-700 delay-700"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          >   
          <MyTransition 
          redirectTo=''
          sectionName='Contact'
          description='Some Full-Stack Development projects I am proud to show off.'/>
          </Transition>
          </div>           
    </main>
  )
}
