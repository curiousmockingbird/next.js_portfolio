"use client";

import { Transition } from "@headlessui/react";
import Image from "next/image";
import Box from "@mui/system/Box";
import Modal from "./Modal";

const TabletLayout = ({ isMounted }: { isMounted: boolean }) => (
  <div className="mx-16 mt-8">
    {/* Header Section */}
    <Box className="flex justify-center items-center">
      <div className="mx-32">
        <Transition
          show={isMounted}
          enter="transition-opacity duration-700 delay-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
        >
          <h1 className="text-4xl font-bold text-center mb-2">Hi, {"I'm"} Harold Mesa</h1>
          <p className="text-center mb-4 tracking-widest">Full-stack developer</p>
          <p className="text-xl text-center">
            Equipped with a comprehensive skill set in both frontend and backend development, I build full-fledged applications from the ground up.
          </p>
        </Transition>
      </div>
    </Box>

    {/* Two-Column Grid Section */}
    <Box className="grid md:grid-cols-2 gap-6 mt-8 items-center">
      {/* Left Column: Text Content */}
      <div>
        <Transition
          show={isMounted}
          enter="transition-opacity duration-700 delay-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
        >
          <section className="bg-indigo-500 p-6 rounded-lg">
            <p className="mb-4">
              I am a full-stack developer specializing in JavaScript, working with Wisconsin&apos;s leading grassroots immigrant rights organization,{" "}
              <span className="font-bold underline">
                <a href="https://vdlf.org">Voces de la Frontera</a>
              </span>
              , and{" "}
              <span className="font-bold underline">
                <a href="https://slingshotcontent.com/">Slingshot Content</a>
              </span>
              , a consultancy and marketing agency. My technical proficiency covers a range from core JavaScript and frameworks like React and Node.js, to responsive web design with HTML and CSS.
            </p>
            <p className="mb-4">
              My approach combines problem-solving skills with a keen attention to detail and creativity, enabling me to tackle complex challenges effectively. I prioritize collaboration and clear communication, which enhances my ability to work within diverse teams. Committed to continuous learning, I keep up-to-date with the latest web development trends and best practices.
            </p>
          </section>
        </Transition>
      </div>

      {/* Right Column: Profile Image */}
      <div className="flex justify-center">
        <Transition
          show={isMounted}
          enter="transition-opacity duration-700 delay-700"
          enterFrom="opacity-0"
          enterTo="opacity-100"
        >
          <div>
            <Image className="rounded-full" src="/profile_pic.jpg" width={400} height={400} alt="My Pic" />
          </div>
        </Transition>
      </div>
    </Box>

    {/* Technologies Section */}
    <Transition
      id="3"
      show={isMounted}
      enter="transition-opacity duration-700 delay-700"
      enterFrom="opacity-0"
      enterTo="opacity-100"
    >
      <Box className="flex items-center justify-evenly my-8">
        {["next-js.svg", "javascript.svg", "react.svg", "wordpress.svg"].map((icon) => (
          <div key={icon} className="flex justify-center">
            <Image src={`/${icon}`} width={90} height={90} alt={icon} />
          </div>
        ))}
        <Modal width={500} />
      </Box>
    </Transition>
  </div>
);

export default TabletLayout;
