'use client'
import PixelCard from "@/components/ui/PixelCard";
import { AnimatePresence, motion } from "framer-motion";
import dynamic from "next/dynamic";
import Image from "next/image";
import React from "react";


const Approach = () => {
  return (
    <section className="w-full lg:pt-30 sm:pt-20 pt-15">
      <h1 className="heading">
        My <span className="text-purple">approach</span>
      </h1>
      {/* remove bg-white dark:bg-black */}
      <div className="my-20 flex flex-wrap items-center justify-center w-full gap-8">
        {/* add des prop */}

      <figure className="relative isolate">
  <Icon className="absolute h-10 w-10 -top-3 -left-3 dark:text-white text-black opacity-30" />
              <Icon className="absolute h-10 w-10 -bottom-3 -left-3 dark:text-white text-black opacity-30" />
              <Icon className="absolute h-10 w-10 -top-3 -right-3 dark:text-white text-black opacity-30" />
              <Icon className="absolute h-10 w-10 -bottom-3 -right-3 dark:text-white text-black opacity-30" />

      <PixelCard
              colors="#0ea5e9,#7dd3fc,#e0f2fe,#38bdf8">

        <Card
          title="Planning & Strategy"
          icon={<AceternityIcon order="Phase 1" />}
          des="We'll collaborate to map out your website's goals, target audience,
          and key functionalities. We'll discuss things like site structure,
          navigation, and content requirements."
          >
        </Card>
          </PixelCard>
          </figure>

          <figure className="relative isolate">
 <Icon className="absolute h-10 w-10 -top-3 -left-3 dark:text-white text-black opacity-30" />
              <Icon className="absolute h-10 w-10 -bottom-3 -left-3 dark:text-white text-black opacity-30" />
              <Icon className="absolute h-10 w-10 -top-3 -right-3 dark:text-white text-black opacity-30" />
              <Icon className="absolute h-10 w-10 -bottom-3 -right-3 dark:text-white text-black opacity-30" />

      <PixelCard
colors="#16a34a,#22c55e,#4ade80,#14532d">

        <Card
          title="Development & Progress Update World Wide"
          icon={<AceternityIcon order="Phase 2" />}
          approachImg="/globe.png"
          des="Once we agree on the plan, I cue my lofi playlist and dive into
          coding. From initial sketches to polished code, I keep you updated
          every step of the way."
          >
          <div className="absolute inset-0 mask-[radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
        </Card>
          </PixelCard>
            </figure>


            <figure className="relative isolate">
               <Icon className="absolute h-10 w-10 -top-3 -left-3 dark:text-white text-black opacity-30" />
              <Icon className="absolute h-10 w-10 -bottom-3 -left-3 dark:text-white text-black opacity-30" />
              <Icon className="absolute h-10 w-10 -top-3 -right-3 dark:text-white text-black opacity-30" />
              <Icon className="absolute h-10 w-10 -bottom-3 -right-3 dark:text-white text-black opacity-30" />

          <PixelCard colors="#665d99,#a78bfa,#d8b4fe,#c4b5fd">

        <Card
          title="Development & Launch"
          icon={<AceternityIcon order="Phase 3" />}

          des="This is where the magic happens! Based on the approved design,
          I'll translate everything into functional code, building your website
          from the ground up."
          >

        </Card>
            </PixelCard>
          </figure>
      </div>
    </section>
  );
};

export default Approach;

const Card = ({
  title,
  icon,
  children,
  // add this one for the desc
  approachImg,
  des,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
approachImg?:string;
  des: string;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      // change h-[30rem] to h-[35rem], add rounded-3xl
      className="border border-black/20  group/canvas-card flex items-center justify-center
       dark:border-white/20  max-w-sm w-full mx-auto p-4 relative h-120 xl:h-140 rounded-3xl "

    >

     <AnimatePresence>
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: hovered ? 1 : 0 }}
    className="h-full w-full absolute inset-0"
  >
    {children}
  </motion.div>
</AnimatePresence>

      <div className="relative z-20 px-10">
        <div
          // add this for making it center
          // absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]
          className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]
        group-hover/canvas-card:opacity-0 transition duration-200 min-w-40 mx-auto flex items-center justify-center"
        >
          {icon}
        </div>
        <h2
          // change text-3xl, add text-center
          className="dark:text-white text-center text-3xl opacity-0 group-hover/canvas-card:opacity-100
         relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white
         group-hover/canvas-card:-translate-y-2 transition duration-200"
        >
          {title}
        </h2>
        {/* add this one for the description */}
        <p
          className="text-sm opacity-0 group-hover/canvas-card:opacity-100
         relative z-10 mt-4 group-hover/canvas-card:text-white text-center
         group-hover/canvas-card:-translate-y-2 transition duration-200"
          style={{ color: "#E4ECFF" }}
        >
          {des}
        </p>
      </div>
      <figure className="absolute z-10 pointer-events-none flex items-start justify-start py-4 w-full h-full inset-0 m-auto">
       {approachImg &&
        <Image src={approachImg} fill alt="approach img" className="hovering object-contain mt-auto h-auto! object-center"/>
       }

      </figure>
        <Image src="/spotLight.png" fill alt="spotlight" className="object-contain  h-auto! object-center"/>
    </div>
  );
};
// add order prop for the Phase number change
const AceternityIcon = ({ order }: { order: string }) => {
  return (
    <div>
      {/* this btn is from https://ui.aceternity.com/components/tailwindcss-buttons border magic */}
      {/* change rounded-lg, text-purple px-5 py-2 */}
      {/* remove focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 cuz we don't need to focus */}
      {/* remove text-sm font-medium h-12 , add font-bold text-2xl */}
      <button className="relative inline-flex overflow-hidden rounded-full p-[1px] ">
        <span
          className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite]
         bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
        />
        <span
          className="inline-flex h-full w-full cursor-pointer items-center
        justify-center rounded-full bg-slate-950 px-5 py-2 text-purple backdrop-blur-3xl font-bold text-2xl"
        >
          {order}
        </span>
      </button>
    </div>
    // remove the svg and add the button

  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
