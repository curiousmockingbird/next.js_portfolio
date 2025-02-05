"use client";

import { Transition } from "@headlessui/react";
import Image from "next/image";
import Box from "@mui/system/Box";
import Modal from "./Modal";
import Toggle from "./../../components/Toggle";
import StatsModal from "./StatsModal";
import RotatingImage from "./RotatingImage";


const TabletLayout = ({ isMounted }: { isMounted: boolean }) => (
  <div className="mx-16 mt-8">
    <Toggle />

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
          <section className="p-6 rounded-lg">
          <p className="mb-4">
                I am a full-stack developer specializing in JavaScript, with a
                deep passion for crafting intuitive, high-performance web
                applications. Currently, I work with Wisconsin&apos;s leading
                grassroots immigrant rights organization,{" "}
                <span className="font-bold underline">
                  <a href="https://vdlf.org">Voces de la Frontera</a>
                </span>
                , where I build and maintain digital solutions that empower
                communities and drive social change.
              </p>
              <p className="mb-4">
                With a strong foundation in JavaScript, React, and Node.js, I
                bring ideas to life through scalable, responsive, and accessible
                web experiences. My expertise extends to HTML, CSS, WordPress,
                and serverless architectures, allowing me to build dynamic and
                adaptable solutions for a variety of needs.
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
        <RotatingImage />

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
            <Image src={`/${icon}`} width={60} height={60} alt={icon} />
          </div>
        ))}
        <Modal width={500} />
          <StatsModal width={450} />
      </Box>
    </Transition>
  </div>
);

export default TabletLayout;
