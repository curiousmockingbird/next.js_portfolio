// ResponsiveNavbar.js
'use client'
import { useMediaQuery, useTheme } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Transition } from '@headlessui/react';
import Image from 'next/image';
import './../style.css'
import Box from '@mui/system/Box';
import Modal from './Modal';

const ResponsivePage = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.down('lg'));
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);
    return (
        <>
            {isMobile ? (
                <div className='mx-4 mt-8'>
                    <Box className='flex justify-center items-center' id='1'>
                        <div>
                            <Transition
                                show={isMounted}
                                enter="transition-opacity duration-700 delay-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                            >

                                <h1 className="text-2xl md:text-4xl font-bold text-center mb-2">Hola, I am {'<HM/>'}</h1>

                                <p className="text-base md:text-xl text-center">
                                    Equipped with a comprehensive skill set in both frontend and backend development, I build full-fledged applications from the ground up.
                                </p>
                            </Transition>
                        </div>
                    </Box>
                    <Box>
                        <div className='flex items-center justify-center mt-2'>
                            <Transition
                                show={isMounted}
                                enter="transition-opacity duration-700 delay-700"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                            >
                                <div className='circularImageMobile'>
                                    <Image src='/profile_pic.jpg' width={200} height={200} alt='My Pic' className='md:w-400 md:h-400' />
                                </div>
                            </Transition>
                        </div>
                        <Transition id='3'
                            show={isMounted}
                            enter="transition-opacity duration-700 delay-700"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                        >
                            <Box className='flex flex-wrap items-center justify-evenly' >
                                <div className='flex justify-center m-2'>
                                    <Image src='/next-js.svg' width={60} height={60} alt='My Pic' />
                                </div>
                                <div className='flex justify-center m-2'>
                                    <Image src='/javascript.svg' width={60} height={60} alt='My Pic' />
                                </div>
                                <div className='flex justify-center m-2'>
                                    <Image src='/react.svg' width={60} height={60} alt='My Pic' />
                                </div>
                                <div className='flex justify-center m-2'>
                                    <Image src='/wordpress.svg' width={60} height={60} alt='My Pic' />
                                </div>
                                <div>
                                    <Modal />
                                </div>
                            </Box>
                        </Transition>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <Transition
                                    show={isMounted}
                                    enter="transition-opacity duration-700 delay-500"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                >
                                    <section className='bg-indigo-500 p-4 m-4 rounded-lg'>
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
                    </Box>
                </div>
            ) : isTablet ? (
                    <div className='mx-16 mt-8'>
                        <Box className='flex justify-center items-center'>
                            <div className='mx-32'>
                                <Transition
                                    show={isMounted}
                                    enter="transition-opacity duration-700 delay-300"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                >
                                    <h1 className="text-4xl font-bold text-center mb-2">Hi, {"I'm"} {'<HM/>'} </h1>
                                    <p className="text-xl text-center">
                                        Equipped with a comprehensive skill set in both frontend and backend development, I build full-fledged applications from the ground up.
                                    </p>
                                </Transition>
                            </div>
                        </Box>
                        <div className='flex items-center justify-center mt-8'>
                                    <Transition
                                        show={isMounted}
                                        enter="transition-opacity duration-700 delay-700"
                                        enterFrom="opacity-0"
                                        enterTo="opacity-100"
                                    >
                                        <div className='circularImage'>
                                            <Image src='/profile_pic.jpg' width={400} height={400} alt='My Pic' />
                                        </div>
                                    </Transition>
                                </div>
                                <Transition id='3'
                            show={isMounted}
                            enter="transition-opacity duration-700 delay-700"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                        >
                            <Box className='flex items-center justify-evenly my-8'>
                                <div className='flex justify-center'>
                                    <Image src='/next-js.svg' width={90} height={90} alt='My Pic' />
                                </div>
                                <div className='flex justify-center'>
                                    <Image src='/javascript.svg' width={90} height={90} alt='My Pic' />
                                </div>
                                <div className='flex justify-center'>
                                    <Image src='/react.svg' width={90} height={90} alt='My Pic' />
                                </div>
                                <div className='flex justify-center'>
                                    <Image src='/wordpress.svg' width={90} height={90} alt='My Pic' />
                                </div>
                                <div>
                                    <Modal />
                                </div>
                            </Box>
                        </Transition>
                        <Box className='flex items-center'>
                            <div className="">
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
                            </div>
                        </Box>
                    </div>
            ) : (
                <Box sx={{ height: '100vh' }} id='0'>
                    <div className='mx-32'>
                        <Box className='flex justify-center items-center' sx={{ height: '20vh' }} id='1'>
                            <div>
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
                        <Box className='flex items-center' sx={{ height: '60vh' }} id='2'>
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
                                            <Image src='/profile_pic.jpg' width={400} height={400} alt='My Pic' />
                                        </div>
                                    </Transition>
                                </div>
                            </div>
                        </Box>
                        <Transition id='3'
                            show={isMounted}
                            enter="transition-opacity duration-700 delay-700"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                        >
                            <Box className='flex items-center justify-evenly' sx={{ height: '20vh' }}>
                                <div className='flex justify-center'>
                                    <Image src='/next-js.svg' width={90} height={90} alt='My Pic' />
                                </div>
                                <div className='flex justify-center'>
                                    <Image src='/javascript.svg' width={90} height={90} alt='My Pic' />
                                </div>
                                <div className='flex justify-center'>
                                    <Image src='/react.svg' width={90} height={90} alt='My Pic' />
                                </div>
                                <div className='flex justify-center'>
                                    <Image src='/wordpress.svg' width={90} height={90} alt='My Pic' />
                                </div>
                                <div>
                                    <Modal />
                                </div>
                            </Box>
                        </Transition>
                    </div>
                </Box>
            )}
        </>
    );
};

export default ResponsivePage;