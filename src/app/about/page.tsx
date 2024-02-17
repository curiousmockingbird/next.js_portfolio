'use client'
import React, { useEffect, useState } from 'react';
import { Transition } from '@headlessui/react';
import Image from 'next/image';
import './style.css'

export default function About() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <div className=" mx-6 lg:mx-36 my-8 lg:my-12">
            <Transition
                show={isMounted}
                enter="transition-opacity duration-700"
                enterFrom="opacity-0"
                enterTo="opacity-100"
            >
                <h1 className="text-4xl font-bold text-center mb-6">About Us</h1>
            </Transition>

            <Transition
                show={isMounted}
                enter="transition-opacity duration-700 delay-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
            >
                <p className="text-xl text-center mb-8">
                    Equipped with a comprehensive skill set in both frontend and backend development,<br /> I build full-fledged applications from the ground up.
                </p>
            </Transition>

            <div className="grid grid-cols lg:grid-cols-2 gap-4">
                <div className='bg-indigo-500  p-8 rounded-lg'>
                    <div>
                    <Transition
                        show={isMounted}
                        enter="transition-opacity duration-700 delay-500"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                    >
                        <section>
                            <h2 className="text-3xl text-white mb-4">Our Mission</h2>
                            <p className='mb-4'>
                                With a passion for building scalable web applications and engaging user experiences, I have honed my skills in React and full-stack development. My journey in the tech industry has equipped me with a solid foundation in both frontend and backend technologies, allowing me to deliver comprehensive solutions that meet and exceed project requirements.
                            </p>
                        </section>
                    </Transition>

                    <Transition
                        show={isMounted}
                        enter="transition-opacity duration-700 delay-700"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                    >
                        <section>
                            <h2 className="text-3xl text-white mb-4">Our Values</h2>
                            <p className='mb-4'>
                                Starting from a deep interest in web technologies, I have grown into a proficient full-stack developer, embracing the challenges and innovations in the field. My projects range from single-page applications using React to complex full-stack applications, integrating modern backend technologies.
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
        </div>
    );
};


