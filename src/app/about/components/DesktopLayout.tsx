"use client";

import { Transition } from "@headlessui/react";
import Image from "next/image";
import Box from "@mui/system/Box";
import Modal from "./Modal";
import StatsModal from "./StatsModal";
import Toggle from "./../../components/Toggle";
import RotatingImage from "./RotatingImage";

const DesktopLayout = ({ isMounted }: { isMounted: boolean }) => (
  <Box sx={{ height: "100vh" }} id="0">
    <div className="mx-32">
      <Box className="flex justify-center items-center" id="1">
        <Toggle />
      </Box>
      <Box className="grid lg:grid-cols-2 gap-8">
        <div>
          <Transition
            show={isMounted}
            enter="transition-opacity duration-700 delay-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
          >
            <section className="p-8 rounded-lg">
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

      <Transition
        id="3"
        show={isMounted}
        enter="transition-opacity duration-700 delay-700"
        enterFrom="opacity-0"
        enterTo="opacity-100"
      >
        <Box
          className="flex items-center justify-evenly"
          sx={{ height: "20vh" }}
        >
          {["next-js.svg", "javascript.svg", "react.svg", "wordpress.svg"].map(
            (icon) => (
              <div key={icon} className="flex justify-center">
                <Image src={`/${icon}`} width={60} height={60} alt={icon} />
              </div>
            )
          )}
          <Modal width={650} />
          <StatsModal width={450} />
        </Box>
      </Transition>
    </div>
  </Box>
);

export default DesktopLayout;
