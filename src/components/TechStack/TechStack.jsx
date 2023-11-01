import { Playfair_Display } from "next/font/google";
import { FaReact } from "react-icons/fa";
import Image from "next/image";
const playFair = Playfair_Display({ subsets: ["latin"] });
const LOGOS = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next",
  "Vite",
  "Tailwind",
  "Redux",
  "Node",
  "Express",
  "PostgreSQL",
  "Jest",
];
const TechStack = () => {
  return (
    <section>
      <h2
        className={` ${playFair.className} text-xl  tracking-tighter text-neutral-300 `}
      >
        Tecnologias
      </h2>
      <a className="border  border-neutral-700 mx-1  bg-neutral-800 rounded p-2  inline-flex items-center leading-4  text-neutral-100 no-underline">
        <FaReact className="mr-1 text-xl" />
        React
      </a>
      <article className="flex flex-wrap gap-4 my-8">
        {LOGOS.map((logo, index) => (
          <Image src={`/sliderImages/${logo}-logo.svg`} alt="" width={36} height={36} key={index}/>
        ))}
      </article>
    </section>
  );
};

export default TechStack;
