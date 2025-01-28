"use client";

import { Transition } from "@headlessui/react";
import Image from "next/image";
import Box from "@mui/system/Box";
import Modal from "./Modal";
import StatsModal from "./StatsModal";

const DesktopLayout = ({ isMounted }: { isMounted: boolean }) => (
  <Box sx={{ height: "100vh" }} id="0">
    <div className="mx-32">
      <Box className="flex justify-center items-center" sx={{ height: "20vh" }} id="1">
        <div>
          <Transition
            show={isMounted}
            enter="transition-opacity duration-700 delay-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
          >
            <h1 className="text-4xl font-bold text-center">Hola, I am Harold Mesa</h1>
            <p className="text-center mb-4 tracking-widest">Full-stack developer</p>
            <p className="text-xl text-center">
              Equipped with a comprehensive skill set in both frontend and backend development, I build full-fledged applications from the ground up.
            </p>
          </Transition>
        </div>
      </Box>
      <Box className="grid lg:grid-cols-2 gap-8 mt-10">
  <div>
    <Transition
      show={isMounted}
      enter="transition-opacity duration-700 delay-500"
      enterFrom="opacity-0"
      enterTo="opacity-100"
    >
      <section className="bg-indigo-500 p-8 rounded-lg">
        <p className="mb-4">
          I am a full-stack developer specializing in JavaScript, working with Wisconsin&apos;s leading grassroots immigrant rights organization, <span className="font-bold underline"><a href="https://vdlf.org">Voces de la Frontera</a></span>, and <span className="font-bold underline"><a href="https://slingshotcontent.com/">Slingshot Content</a></span>, a consultancy and marketing agency. My technical proficiency covers a range from core JavaScript and frameworks like React and Node.js, to responsive web design with HTML and CSS.
        </p>
        <p className="mb-4">
          My approach combines problem-solving skills with a keen attention to detail and creativity, enabling me to tackle complex challenges effectively. I prioritize collaboration and clear communication, which enhances my ability to work within diverse teams. Committed to continuous learning, I keep up-to-date with the latest web development trends and best practices.
        </p>
      </section>
    </Transition>
  </div>
  <div className="flex justify-center">
          <Transition
            show={isMounted}
            enter="transition-opacity duration-700 delay-700"
            enterFrom="opacity-0"
            enterTo="opacity-100"
          >
            <div className="circularImage">
              <Image src="/profile_pic.jpg" width={400} height={400} alt="My Pic" />
            </div>
          </Transition>
        </div>
</Box>

      <Transition
        id="3"
        show={isMounted}
        enter="transition-opacity duration-700 delay-700"
        enterFrom="opacity-0"
        enterTo="opacity-100"
      >
        <Box className="flex items-center justify-evenly" sx={{ height: "20vh" }}>
          {["next-js.svg", "javascript.svg", "react.svg", "wordpress.svg"].map((icon) => (
            <div key={icon} className="flex justify-center">
              <Image src={`/${icon}`} width={90} height={90} alt={icon} />
            </div>
          ))}
          <Modal width={650} />
          <StatsModal width={450} />
        </Box>
      </Transition>
    </div>
  </Box>
);

export default DesktopLayout;
