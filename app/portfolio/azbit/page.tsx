"use client"
import Contact from "@/components/contact";
import SectionDivider from "@/components/section-divider";
import { motion } from "framer-motion";
import Image from "next/image";

import portfolioImg1 from "@/public/azbit/az_home_21.png";
import portfolioImg2 from "@/public/azbit/Azbit-Exchange.png";
import portfolioImg3 from "@/public/azbit/AzBit-Markets-Overview.png";
import portfolioImg4 from "@/public/azbit/AzBit-Affiliate-Center.png";
import portfolioImg5 from "@/public/azbit/azbit_account_security.png";
import portfolioImg6 from "@/public/azbit/Azbit-Account-Overview.png";


export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      {/* <Intro /> */}

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
          {/* </motion.div> */}
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
        <span className="font-bold">AzBit Crypto Exchange</span>{" "} <br />
      </motion.h1>
      <motion.h2
        className="mb-10 mt-4 px-4 text-xl font-medium !leading-[1.5] sm:text-2xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Cryptocurrency exchange & margin trading platform</span>{" "} <br />
      </motion.h2>

      <motion.h3
        className="mb-10 mt-4 px-4 text-xl font-medium !leading-[1.5] sm:text-xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
UI/UX Design for a crypto assets exchange that offers leverage trading for several crypto/fiat markets.
</motion.h3>
    </section>
    <SectionDivider />

    <motion.div
    //   ref={ref}
    //   style={{
    //     scale: scaleProgess,
    //     opacity: opacityProgess,
    //   }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className="bg-gray-100 max-w-[85rem] border border-black/5 rounded-lg overflow-hidden relative hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20 mb-7">
        <Image
          src={portfolioImg1}
          alt="Project I worked on"
          quality={95}
          className=""
        />
      </section>

      <section className="bg-gray-100 max-w-[85rem] border border-black/5 rounded-lg overflow-hidden relative hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20 mb-7">
        <Image
          src={portfolioImg2}
          alt="Project I worked on"
          quality={95}
          className=""
        />
      </section>

      <section className="bg-gray-100 max-w-[85rem] border border-black/5 rounded-lg overflow-hidden relative hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20 mb-7">
        <Image
          src={portfolioImg3}
          alt="Project I worked on"
          quality={95}
          className=""
        />
      </section>

      <section className="bg-gray-100 max-w-[85rem] border border-black/5 rounded-lg overflow-hidden relative hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20 mb-7">
        <Image
          src={portfolioImg4}
          alt="Project I worked on"
          quality={95}
          className=""
        />
      </section>

      <section className="bg-gray-100 max-w-[85rem] border border-black/5 rounded-lg overflow-hidden relative hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20 mb-7">
        <Image
          src={portfolioImg5}
          alt="Project I worked on"
          quality={95}
          className=""
        />
      </section>

      <section className="bg-gray-100 max-w-[85rem] border border-black/5 rounded-lg overflow-hidden relative hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20 mb-7">
        <Image
          src={portfolioImg6}
          alt="Project I worked on"
          quality={95}
          className=""
        />
      </section>

    </motion.div>

    <SectionDivider />

      <Contact />
    </main>
  );
}
