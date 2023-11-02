"use client";
import Image from "next/image";
import { motion } from "framer-motion";
const ImagesGrid = () => {
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
      <div className="my-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
        <div className="">
          <Image
            src="/images/photo-of-nerdearla.jpeg"
            alt=""
            className="rounded-lg"
            width={500}
            height={500}
          />
        </div>

        <div>
          <Image
            src="/images/photo-with-midu.jpeg"
            alt=""
            className="rounded-lg"
            width={500}
            height={500}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default ImagesGrid;
