import { Playfair_Display } from "next/font/google";
import Image from "next/image";
const playFair = Playfair_Display({ subsets: ["latin"] });
const AboutProjects = () => {
  return (
    <section>
      <div className="flex items-center  mb-8 gap-2">
        <Image
          src="/images/logo-lucascorrea.svg"
          alt=""
          width={20}
          height={20}
        />
        <h1
          className={` ${playFair.className} font-semibold text-2xl tracking-tighter mb-1`}
        >
          proyectos
        </h1>
      </div>

      <p className="text-neutral-300">
        Esta sección muestra mis{" "}
        <span className="font-semibold">proyectos web</span> personales hasta la
        fecha. Explora mi <span className="font-semibold">creatividad</span> y{" "}
        <span className="font-semibold">habilidades</span> en el{" "}
        <span className="font-semibold">desarrollo web</span> a través de estos
        trabajos.
      </p>
    </section>
  );
};
export default AboutProjects;
