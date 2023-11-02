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
      <div className="my-8 columns-2  sm:columns-3">
        <div>
          <Image
            src="/images/photo-of-nerdearla.jpeg"
            alt=""
            className="rounded-lg mb-4 "
            width={500}
            height={500}
          />
        </div>
        <div>
          <Image
            src="/images/photo-with-midu.jpeg"
            alt=""
            className="rounded-lg h-72 object-cover"
            width={500}
            height={500}
          />
        </div>

        <div>
          <Image
            src="/images/obelisco.jpg"
            alt=""
            className="rounded-lg mb-4 h-72 object-cover "
            width={500}
            height={500}
          />
        </div>
     
        <div>
          <Image
            src="/images/photo-of-nerdearla2.jpeg"
            alt=""
            className="rounded-lg "
            width={500}
            height={500}
          />
        </div>
        <div>
          <Image
            src="/images/photo-with-mate.jpeg"
            alt=""
            className="rounded-lg mb-4 h-[414px] object-cover hidden sm:flex "
            width={500}
            height={500}
          />
        </div>
      
      </div>
    </motion.div>
  );
};

export default ImagesGrid;
