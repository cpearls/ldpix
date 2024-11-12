"use client"

import Contact from "@/components/contact";
import SectionDivider from "@/components/section-divider";
import Showcase from "@/components/showcase";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">

    <Showcase />
      <SectionDivider />
      <Contact />
    </main>
  );
}
