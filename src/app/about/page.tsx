'use client'
import React, { useEffect, useState } from 'react';
import { Transition } from '@headlessui/react';

export default function About(){
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <div className="container mx-auto px-4 py-10">
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
                    Welcome to our website! We are a team dedicated to providing 
                    the best services and experiences to our users.
                </p>
            </Transition>

            <div className="flex flex-wrap justify-center gap-10">
                <Transition
                    show={isMounted}
                    enter="transition-opacity duration-700 delay-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                >
                    <section className="w-full md:w-1/3">
                        <h2 className="text-3xl text-blue-600 mb-4">Our Mission</h2>
                        <p>
                            Our mission is to empower individuals and organizations
                            through cutting-edge solutions and innovative approaches.
                        </p>
                    </section>
                </Transition>

                <Transition
                    show={isMounted}
                    enter="transition-opacity duration-700 delay-700"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                >
                    <section className="w-full md:w-1/3">
                        <h2 className="text-3xl text-blue-600 mb-4">Our Values</h2>
                        <p>
                            Integrity, innovation, and customer focus are at the heart
                            of everything we do.
                        </p>
                    </section>
                </Transition>
            </div>
        </div>
    );
};
