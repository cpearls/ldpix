"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { showcaseData } from "@/lib/data";
import ShowcaseProject from "./showcase-project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
//   const { ref } = useSectionInView("ShowcaseProject", 0.5);

  return (
    <section
    // ref={ref} 
    id="showcase" className="scroll-mt-35 mb-28">
      <SectionHeading>Here is some of my most selected work:</SectionHeading>
      <div 
              className="group mb-3 sm:mb-8 last:mb-0 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 mt-20 max-w-7xl"
            //   className="grid grid-cols-2 gap-8"
              >
        {showcaseData.map((project, index) => (
          <React.Fragment key={index}>
            <ShowcaseProject {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
