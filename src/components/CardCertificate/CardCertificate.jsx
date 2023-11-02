"use client"
import { PiArrowUpRight } from "react-icons/pi";
import { Playfair_Display } from "next/font/google";
import { motion } from "framer-motion";
import Image from "next/image";
const playFair = Playfair_Display({ subsets: ["latin"] });

const CardCertificate = ({ academy, time, month, about, link, img }) => {
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
        <div className="flex items-center gap-7">
          <Image
            src={img}
            alt=""
            className="border border-neutral-700 rounded-full h-16 w-16 object-cover"
            width={200}
            height={200}
          />
          <div>
            <h2
              className={` ${playFair.className} font-thin text-xl tracking-tighter `}
            >
              {academy}
            </h2>
            <p className="font-thin">{about}</p>
            <p className="text-neutral-400 text-sm">
              {time} Horas - {month}
            </p>
          </div>
        </div>
        <PiArrowUpRight className="text-xl" />
      </a>
    </motion.div>
  );
};
export default CardCertificate;
