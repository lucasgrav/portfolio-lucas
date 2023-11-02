import { Playfair_Display } from "next/font/google";
import { FaReact } from "react-icons/fa";
import { DiHtml5, DiCss3, DiJsBadge } from "react-icons/di";
import {
  SiNextdotjs,
  SiVite,
  SiTailwindcss,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiJest,
  SiTestinglibrary,
  SiVitest,
} from "react-icons/si";

const playFair = Playfair_Display({ subsets: ["latin"] });
const LOGOS = [
  { name: "HTML", logo: <DiHtml5 className="mr-2 text-xl" /> },
  { name: "CSS", logo: <DiCss3 className="mr-2 text-xl" /> },
  { name: "JavaScript", logo: <DiJsBadge className="mr-2 " /> },
  { name: "React", logo: <FaReact className="mr-2" /> },
  { name: "Next.js", logo: <SiNextdotjs className="mr-2" /> },
  { name: "Vite", logo: <SiVite className="mr-2" /> },
  { name: "Tailwind", logo: <SiTailwindcss className="mr-2" /> },
  { name: "Redux", logo: <SiRedux className="mr-2" /> },
  { name: "Node", logo: <SiNodedotjs className="mr-2" /> },
  { name: "Express", logo: <SiExpress className="mr-2" /> },
  { name: "PostgreSQL", logo: <SiPostgresql className="mr-2" /> },
  { name: "Jest", logo: <SiJest className="mr-2" /> },
  { name: "Vitest", logo: <SiVitest className="mr-2" /> },
  { name: "Testing Library", logo: <SiTestinglibrary className="mr-2" /> },
];

const TechStack = () => {
  return (
    <section className="select-none  border-b-[1px] border-neutral-600 pb-4">
      <h2
        className={` ${playFair.className} text-xl  tracking-tighter text-neutral-300 border-b-[1px] border-neutral-600 mb-4 `}
      >
        tecnologias
      </h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {LOGOS.map((logo, index) => (
          <a
            key={index}
            className=" mx-1  font-thin rounded p-2  inline-flex items-center leading-4  text-neutral-100 no-underline"
          >
            {logo.logo}
            <p className="truncate">{logo.name}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
