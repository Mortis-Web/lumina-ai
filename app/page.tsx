"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
// import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { LenisProvider } from "@/app/providers/LenisProvider";
import Navbar from "@/components/Navbar";

const Home = () => {
  return (
    <LenisProvider>
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto ">
        {/* <FloatingNav navItems={navItems} /> */}
      <div className="w-full">
        {/* <Navbar/> */}
        <Hero />
        {/* <Grid /> */}
        {/* <RecentProjects /> */}
        {/* <Clients /> */}
        {/* <Experience /> */}
        {/* <Approach /> */}
        {/* <Footer /> */}
      </div>
    </main>
    </LenisProvider>
  );
};

export default Home;
