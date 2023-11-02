import { Playfair_Display } from "next/font/google";
import Image from "next/image";
const playFair = Playfair_Display({ subsets: ["latin"] });
const AboutContact = () => {
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
          contacto
        </h1>
      </div>

      <p className="text-neutral-300">
        Si estás interesado en colaborar en{" "}
        <span className="font-semibold">nuevos proyectos</span> o te ha
        impresionado mi trabajo, no dudes en ponerte en{" "}
        <span className="font-semibold">contacto</span>. Estoy abierto a
        explorar emocionantes oportunidades y aportar mi experiencia en futuros
        desafíos. Tu retroalimentación y propuestas son siempre bienvenidas.{" "}
        <span className="font-semibold">¡Espero saber pronto de ti!</span>
      </p>
    </section>
  );
};
export default AboutContact;
