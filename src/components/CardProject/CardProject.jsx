"use client";
import { Playfair_Display } from "next/font/google";
import { PiArrowUpRight } from "react-icons/pi";
import { TfiWorld } from "react-icons/tfi";
import Image from "next/image";
import { motion } from "framer-motion";

const playFair = Playfair_Display({ subsets: ["latin"] });
const CardProject = ({
  name,
  description,
  img,
  front,
  back,
  deploy,
  repo,
  video,
}) => {
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
        duration: 0.2,
        delay: 0.1,
      }}
    >
      <article className="border-b pb-4 border-neutral-500 mt-4">
        <a href={deploy || video} target="_blank">
          <header className="flex flex-col mb-2">
            <div className="flex items-center justify-between">
              <h2
                className={` ${playFair.className} font-semibold text-2xl tracking-tighter `}
              >
                {name}
              </h2>
              <TfiWorld className="mt-2 text-xl" />
            </div>

            <p className="font-thin mt-2">{description}</p>
          </header>

          <Image
            src={`/projectsImages/${img}`}
            alt=""
            height={300}
            width={300}
            className="rounded-lg mb-4 w-auto h-auto"
          />
        </a>

        <p className="font-thin mb-2">
          <span className="font-normal">Front:</span> {front}
        </p>
        <p className="font-thin">
          {back && (
            <>
              <span className="font-normal">Back: </span>
              {back}
            </>
          )}
        </p>

        <div className="flex gap-2 mt-7">
          {video && (
            <a
              href={video}
              target="_blank"
              className="flex items-center gap-1 text-neutral-300 hover:text-neutral-200 cursor-pointer"
            >
              <PiArrowUpRight className="text-xl" />
              <p>video</p>
            </a>
          )}

          {repo && (
            <a
              href={repo}
              target="_blank"
              className="flex items-center gap-1 text-neutral-300 hover:text-neutral-200 cursor-pointer"
            >
              <PiArrowUpRight className="text-xl" />
              <p>repositorio</p>
            </a>
          )}

          {deploy && (
            <a
              href={deploy}
              target="_blank"
              className="flex items-center gap-1 text-neutral-300 hover:text-neutral-200 cursor-pointer"
            >
              <PiArrowUpRight className="text-xl" />
              <p>deploy</p>
            </a>
          )}
        </div>
      </article>
    </motion.div>
  );
};

export default CardProject;
