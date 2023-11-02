"use client";
import { PiArrowUpRight } from "react-icons/pi";
import { Playfair_Display } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
const playFair = Playfair_Display({ subsets: ["latin"] });

const LINKS = ["", "proyectos", "contacto"];

const Footer = () => {
  const pathName = usePathname();

  return (
    <footer className="my-8 flex justify-between select-none">
      
      <div className="flex flex-col items-start sm:flex-row gap-7">

        <div className="flex flex-col">
          {LINKS.map((link, index) => (
            <Link
              href={`/${link}`}
              key={index}
              className={`${
                playFair.className
              } transition-all relative cursor-pointer  ${
                pathName === `/${link}` ? "text-[#ffffff]" : "text-neutral-500"
              } hover:text-neutral-200`}
            >
              {link === "" ? "home" : link}
            </Link>
          ))}
        </div>

        <a className="flex items-center gap-1 text-neutral-300 hover:text-neutral-200 cursor-pointer">
          <PiArrowUpRight className="text-xl" />
          <p>linkedin</p>
        </a>
        <a className="flex items-center gap-1 text-neutral-300 hover:text-neutral-200 cursor-pointer">
          <PiArrowUpRight className="text-xl" />
          <p>github</p>
        </a>
      </div>

      <div className="flex items-center  gap-2">
        <Image
          src="/images/logo-lucascorrea.svg"
          alt=""
          width={30}
          height={30}
          className="w-[30px] h-[30px]"
        />
      </div>
    </footer>
  );
};
export default Footer;
