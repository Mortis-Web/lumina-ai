"use client";

import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";
import Image from "next/image";
import { PinContainer } from "./ui/Pin";

const RecentProjects = () => {
  return (
    <div className="lg:pt-30 sm:pt-20 pt-15">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="grid max-w-7xl mx-auto grid-cols-1 md:grid-cols-2 p-4 xs:p-8  gap-8 mt-10">
        {projects.map((item) => (
          <div
            className="lg:min-h-[35rem] min-h-[28rem]  flex items-center justify-center  w-full"
            key={item.id}
          >
            <PinContainer
              title="/ui.aceternity.com"
              href="https://twitter.com/mannupaaji"
            >
              <div className="relative flex items-center justify-center sm:w-full w-[80vw] overflow-hidden h-full max-h-60 lg:max-h-80 mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <Image fill   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
 src="/bg.png" alt="bgimg"
                             loading="lazy"
                decoding="async"/>
                </div>
                <Image fill

                                loading="lazy"
                decoding="async"
                  src={item.img}
                  alt="cover"
                  className="z-10 absolute bottom-0"
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-[1rem] lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 flex-wrap gap-2 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <Image
                                      loading="lazy"
                decoding="async"
                      width={40}
                      height={40} src={icon} alt="icon5" className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
