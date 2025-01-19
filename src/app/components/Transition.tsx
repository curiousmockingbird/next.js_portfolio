'use client'
import { Transition } from '@headlessui/react'
import { useState } from 'react'
// import { useTimeoutFn } from 'react-use'
// import Link from 'next/link'
import { useRouter } from 'next/navigation';

export default function Example({ redirectTo, sectionName, description }: { redirectTo: string, sectionName: string, description: string }) {
    let [isShowing, setIsShowing] = useState(true)
    const router = useRouter();
    // let [, , resetIsShowing] = useTimeoutFn(() => setIsShowing(true), 500)

    const handleClick = () => {
        // setIsShowing(true);
        setTimeout(() => {
          router.push(redirectTo);
        }, 400); // Assuming the transition takes 300ms
      };

    return (
        <div className="flex flex-col items-center py-2">
            <div>
                <Transition
                    as="div"
                    show={isShowing}
                    enter="transform transition duration-[400ms]"
                    enterFrom="opacity-0 rotate-[-120deg] scale-50"
                    enterTo="opacity-100 rotate-0 scale-100"
                    leave="transform duration-400 transition ease-in-out"
                    leaveFrom="opacity-100 rotate-0 scale-100 "
                    leaveTo="opacity-0 scale-95 "
                >
                        
            <div>
            <button
                onClick={() => {
                    setIsShowing(false)
                    handleClick()
                }}
        className="backface-visibility-hidden flex transform items-center rounded-full px-3 py-2 text-sm font-medium transition hover:scale-105 focus:outline-none active:bg-black/40">
        <div className="group rounded-lg border border-transparent transition-colors">
          <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300  hover:dark:border-neutral-700 ">
          <h2 className={`text-2xl font-semibold`}>
            {sectionName}{' '}-&gt;
          </h2>
                <span className="ml-3"><p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            {description}
          </p>
          </span>
        </div>
        </div>
        
            </button>
            </div>
                </Transition>
            </div>
        </div>
    )
}
