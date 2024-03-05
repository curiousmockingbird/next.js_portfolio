'use client'
import React, { useEffect, useState } from 'react';
import { Transition } from '@headlessui/react';
import Image from 'next/image';
import './style.css'
import Typography from '@mui/joy/Typography';
import ArrowBack from '@mui/icons-material/ArrowBack';
import Link from 'next/link';
import Box from '@mui/system/Box';

export default function About() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (

        <Box sx={{ height: '100vh' }}>
            <Typography
                level="body-xs"
                sx={{
                    position: 'fixed',
                    zIndex: 999,
                    top: '2rem',
                    left: '1rem',
                }}
            >
                <Link href={'/'}> <ArrowBack sx={{ fontSize: 40 }} /> </Link>
            </Typography>
            <div className='mx-32'>
                    <Box className='flex justify-center items-center' sx={{ height: '20vh' }}>
                        <div className=''>
                        <Transition
                            show={isMounted}
                            enter="transition-opacity duration-700 delay-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                        >

                            <h1 className="text-4xl font-bold text-center mb-2">Hola, I am {'<HM/>'} </h1>
                            
                            <p className="text-xl text-center">
                                Equipped with a comprehensive skill set in both frontend and backend development,<br /> I build full-fledged applications from the ground up.
                            </p>
                        </Transition>
                </div>
                    </Box>
                <Box className='flex items-center' sx={{ height: '60vh' }}>
                    <div className="grid lg:grid-cols-2 gap-4">
                        <div className=''>
                            <div>
                                <Transition
                                    show={isMounted}
                                    enter="transition-opacity duration-700 delay-500"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                >
                                    <section className='bg-indigo-500 p-8 rounded-lg'>
                                        {/* <h2 className="text-3xl text-white mb-4">Our Mission</h2> */}
                                        <p className='mb-4'>
                                            As a passionate JavaScript developer, I blend a robust foundation in technical skills with a dynamic set of soft skills to bring innovative web solutions to life. My expertise spans from mastering core JavaScript concepts and leveraging popular frameworks like React and Node.js, to creating responsive and user-centric web applications with HTML and CSS. I thrive on problem-solving, employing a keen attention to detail and a creative approach to overcome complex challenges.
                                        </p>
                                        <p className='mb-4'>
                                            Collaboration and clear communication are at the heart of my work ethic, allowing me to work effectively within diverse teams and projects. Committed to continuous learning, I stay at the forefront of web development trends and best practices, ensuring that I am always ready to adapt and grow in this ever-evolving field. My goal is to not only deliver high-quality code but also to contribute to a positive user experience and the success of the team and projects I am part of.
                                        </p>
                                    </section>
                                </Transition>
                            </div>
                        </div>
                        <div className='flex items-center justify-center '>
                            <Transition
                                show={isMounted}
                                enter="transition-opacity duration-700 delay-700"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                            >
                                <div className='circularImage'>
                                    <Image src='/profile_pic.jpg' width={200} height={200} alt='My Pic' />
                                </div>
                            </Transition>
                        </div>
                    </div>
                </Box>
                <Box sx={{ height: '10vh' }}>
                    <div className='grid grid-cols-4'>
                        <div className='flex justify-center'>
                            <Image src='/next-js.svg' width={100} height={100} alt='My Pic' />
                        </div>
                        <div className='flex justify-center'>
                            <Image src='/javascript.svg' width={100} height={100} alt='My Pic' />
                        </div>
                        <div className='flex justify-center'>
                            <Image src='/react.svg' width={100} height={100} alt='My Pic' />
                        </div>
                        <div className='flex justify-center'>
                            <Image src='/wordpress.svg' width={100} height={100} alt='My Pic' />
                        </div>
                    </div>
                </Box>
            </div>
        </Box>
    );
};


