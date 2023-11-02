"use client";
import { PiArrowUpRight } from "react-icons/pi";
import Image from "next/image";
import { motion } from "framer-motion";
const CardSocial = ({ name, social, img, link }) => {
  let linkedinLogo = img === "/images/photo-of-me.jpeg";
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 25,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.1,
        delay: 0.1,
      }}
    >
      <a
        href={link}
        target="_blank"
        className="border border-neutral-700 bg-neutral-800 rounded flex items-center justify-between px-3 py-4 w-full"
      >
        <div className="flex items-center gap-4">
          {/* LOGO IMAGE */}
          <div className="relative h-16">
            <Image
              src={img}
              alt=""
              className="border border-neutral-700 rounded-full h-16 w-16 "
              width={500}
              height={500}
            />
            <div
              className={` ${
                linkedinLogo ? "" : "hidden"
              } border border-neutral-700 rounded-full bg-white inline-flex p-1 relative h-6 w-6 items-center -top-6 -right-10`}
            >
              <Image
                src="/images/logo-linkedin.png"
                alt=""
                width={15}
                height={11}
              />
            </div>
          </div>

          {/* USER AND SOCIAL */}
          <div className="flex flex-col">
            <p className="font-semibold text-neutral-100"> {name}</p>
            <p className="text-neutral-400">{social}</p>
          </div>
        </div>
        <PiArrowUpRight className="text-xl" />
      </a>
    </motion.div>
  );
};

export default CardSocial;
