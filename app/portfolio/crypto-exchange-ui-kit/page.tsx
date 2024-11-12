"use client"
import Contact from "@/components/contact";
import SectionDivider from "@/components/section-divider";
import { motion } from "framer-motion";
import Image from "next/image";

import portfolioImg1 from "@/public/ceui/ceui_8.png";
import portfolioImg2 from "@/public/ceui/ceui_1.png";
import portfolioImg3 from "@/public/ceui/ceui_2.png";
import portfolioImg4 from "@/public/ceui/ceui_7.png";
import portfolioImg5 from "@/public/ceui/ceui_6.png";
import portfolioImg6 from "@/public/ceui/ceui_3.png";
import portfolioImg7 from "@/public/ceui/ceui_5.png";
import portfolioImg8 from "@/public/ceui/ceui_4.png";


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
        <span className="font-bold">Crypto Exchange UI Kit</span>{" "} <br />
      </motion.h1>
      <motion.h2
        className="mb-10 mt-4 px-4 text-xl font-medium !leading-[1.5] sm:text-2xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Cryptocurrency Exchange and Trading Platform UI Kit
        </span>{" "} <br />
      </motion.h2>

      <motion.h3
        className="mb-10 mt-4 px-4 text-xl font-medium !leading-[1.5] sm:text-xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
A light color UI user design template for a crypto exchange & spot trading platform supporting bitcoin, ethereum, litecoin, ripple, and other altcoins.
There are around 50 screens for we and 50 more for a mobile app, including:
•  Crypto Trading Dashboard  •  Crypto Trading Terminal  •  Cryptocurrency Exchange  •  Deposits and Withdrawals  •  Trading history  •  Wallets and Balances   •  Trader Settings   •  KYC/User verification  •  Landing Page.</motion.h3>
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
      <section className="bg-gray-100 max-w-[100rem] border border-black/5 rounded-lg overflow-hidden relative hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20 mb-7">
        <Image
          src={portfolioImg1}
          alt="Project I worked on"
          quality={95}
          className=""
        />
      </section>

      <section className="bg-gray-100 max-w-[100rem] border border-black/5 rounded-lg overflow-hidden relative hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20 mb-7">
        <Image
          src={portfolioImg2}
          alt="Project I worked on"
          quality={95}
          className=""
        />
      </section>

      <section className="bg-gray-100 max-w-[100rem] border border-black/5 rounded-lg overflow-hidden relative hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20 mb-7">
        <Image
          src={portfolioImg3}
          alt="Project I worked on"
          quality={95}
          className=""
        />
      </section>

      <section className="bg-gray-100 max-w-[100rem] border border-black/5 rounded-lg overflow-hidden relative hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20 mb-7">
        <Image
          src={portfolioImg4}
          alt="Project I worked on"
          quality={95}
          className=""
        />
      </section>

      <section className="bg-gray-100 max-w-[100rem] border border-black/5 rounded-lg overflow-hidden relative hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20 mb-7">
        <Image
          src={portfolioImg5}
          alt="Project I worked on"
          quality={95}
          className=""
        />
      </section>

      <section className="bg-gray-100 max-w-[100rem] border border-black/5 rounded-lg overflow-hidden relative hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20 mb-7">
        <Image
          src={portfolioImg6}
          alt="Project I worked on"
          quality={95}
          className=""
        />
      </section>

      <section className="bg-gray-100 max-w-[100rem] border border-black/5 rounded-lg overflow-hidden relative hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20 mb-7">
        <Image
          src={portfolioImg7}
          alt="Project I worked on"
          quality={95}
          className=""
        />
      </section>

      <section className="bg-gray-100 max-w-[100rem] border border-black/5 rounded-lg overflow-hidden relative hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20 mb-7">
        <Image
          src={portfolioImg8}
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
