import { Playfair_Display } from "next/font/google";
import { FaReact} from "react-icons/fa";
import {GrNode} from "react-icons/gr";
const playFair = Playfair_Display({ subsets: ["latin"] });
const AboutMe = () => {
  return (
    <section>
      <div className="flex items-center  mb-8 gap-2">
        <img src="/images/logo-lucascorrea.svg" alt="" width={20} />
        <h1
          className={` ${playFair.className} font-semibold text-2xl tracking-tighter mb-1`}
        >
          Lucas Correa
        </h1>
      </div>

      <p className="text-neutral-300">
        Soy un <span className="font-semibold">desarrollador Full Stack</span>{" "}
        con experiencia en{" "}
        <span>
          <a className="border  border-neutral-700 mx-1  bg-neutral-800 rounded p-1 text-sm inline-flex items-center leading-4  text-neutral-100 no-underline">
            <FaReact className="mr-1"/>
            React
          </a>
        </span>{" "}
        y{" "}
        <span>
          <a className="border  border-neutral-700 mx-1 bg-neutral-800 rounded p-1 text-sm inline-flex items-center leading-4  text-neutral-100 no-underline">
          <GrNode className="mr-1 "/>
            Node.js
          </a>
        </span>
        . Mi enfoque principal es crear aplicaciones web modernas y eficientes
        que brinden una experiencia excepcional al usuario.
      </p>
    </section>
  );
};

export default AboutMe;
