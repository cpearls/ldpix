// /showcase/[showcaseUrl]/page.tsx
"use client";  // Ensure the component is treated as a client component
import { showcaseData } from "@/lib/data";
import { useParams } from "next/navigation";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Contact from "@/components/contact";
import SectionDivider from "@/components/section-divider";


type ProjectProps = (typeof showcaseData)[number];

export default function ShowcaseDetail() {
  const params = useParams();
  const showcaseUrl = params?.showcaseUrl;

//   console.log("showcaseUrl:", showcaseUrl);
//   console.log("showcaseData:", showcaseData);

  // Find the specific project by showcaseUrl
const project = showcaseData.find((proj) => proj.showcaseUrl === `/${params.showcaseUrl}`);


  // Return a simple fallback message if project is not found
  if (!project) {
    return <div>Project not found. Please check the URL.</div>;
  }

  const { title, description, tags, imageUrl } = project;

  return (
    // <div className="project-detail">
    //   <h1>{title}</h1>
    //   <Image src={imageUrl} alt={title} quality={95} width={800} height={400} />

    //   {/* Render the description HTML */}
    //   <div dangerouslySetInnerHTML={{ __html: description }} />

    //   <div>
    //     {tags.map((tag, index) => (
    //       <span key={index} className="tag">
    //         {tag}
    //       </span>
    //     ))}
    //   </div>
    // </div>


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
  <span className="font-bold">{title}</span>{" "} <br />
</motion.h1>

<section className="bg-gray-100 max-w-[100rem] border border-black/5 rounded-lg overflow-hidden relative hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20 mb-7">
<Image src={imageUrl} alt={title} quality={95} width={800} height={400} />

      </section>

<section>
<motion.h3
        className="mb-10 mt-4 px-4 text-xl font-medium !leading-[1.5] sm:text-xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
      {/* Render the description HTML */}
      <div dangerouslySetInnerHTML={{ __html: description }} />






</motion.h3>
</section>

<section>
    <div className="text-center content-center">
    <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
    </div>
</section>

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
<SectionDivider />
{/* <Projects /> */}
<Contact />
</main>



  );
}