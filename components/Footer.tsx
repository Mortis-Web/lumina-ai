import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import Image from "next/image";
import MagicButton from "./ui/MagicButton";

const Footer = () => {
  return (
    <footer className="w-full isolate relative lg:pt-30 sm:pt-20 pt-15 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full h-full absolute left-0 md:-bottom-2  0 ">
        <Image
          width={100}
          height={100}
          loading="lazy"
          decoding="async"
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-90 object-cover"
        />
      </div>

      <div className="flex flex-col px-4 items-center">
        <h1 className="heading lg:max-w-[45vw] ">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 text-pretty max-w-100 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="mailto:contact@jsmastery.pro">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex max-w-7xl px-8 mx-auto gap-4 mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Adrian Hajdin
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <Image src={info.img} alt="icons" width={20} height={20} loading="lazy"
                decoding="async"    style={{ width: "auto", height: "auto" }}
/>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
