import { PiArrowUpRight } from "react-icons/pi";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";
const playFair = Playfair_Display({ subsets: ["latin"] });
const Footer = () => {
  return (
    <footer className="my-8 flex justify-between select-none">
      <div className="flex flex-col sm:flex-row gap-4">
        <a className="flex items-center gap-1 text-neutral-300 hover:text-neutral-200 cursor-pointer">
          <PiArrowUpRight className="text-xl" />
          <p>contactame</p>
        </a>
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
        />
      </div>
    </footer>
  );
};
export default Footer;
