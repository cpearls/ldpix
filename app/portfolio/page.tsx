"use client"

import Contact from "@/components/contact";
import Projects from "@/components/projects";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
        <section
      //   ref={ref}
        id="home"
        className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
      >
        <div className="flex items-center justify-center">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "tween",
                duration: 0.2,
              }}
            >
            </motion.div>
  
            <motion.span
              className="absolute bottom-0 right-0 text-4xl"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 125,
                delay: 0.1,
                duration: 0.7,
              }}
            >
              {/* 👋 */}
            </motion.span>
          </div>
        </div>
  
        <motion.h1
          className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="font-bold">Portfolio</span>{" "} <br />
        </motion.h1>
        {/* <motion.h2
          className="mb-10 mt-4 px-4 text-xl font-medium !leading-[1.5] sm:text-2xl"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="font-bold">Some of my recent work:
          </span>{" "} <br />
        </motion.h2> */}
  
        {/* <motion.h3
          className="mb-10 mt-4 px-4 text-xl font-medium !leading-[1.5] sm:text-xl"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
User interface and experience designs for DueDEX desktop web, mobile web, and mobile app for iOS and Android.
</motion.h3> */}
      </section>
      {/* <SectionDivider /> */}
      <Projects />
      <Contact />
    </main>
  );
}
