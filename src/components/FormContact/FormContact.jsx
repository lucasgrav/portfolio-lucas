"use client";
import { Playfair_Display } from "next/font/google";
import { useForm, ValidationError } from "@formspree/react";
const playFair = Playfair_Display({ subsets: ["latin"] });
import { motion } from "framer-motion";

const FormContact = () => {
  const [state, handleSubmit] = useForm(`${process.env.NEXT_PUBLIC_FORM_KEY}`);
  if (state.succeeded) {
    return (
      <div className="flex  justify-center items-center h-[353px] mt-4 border-b  border-neutral-500">
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
            duration: 0.3,
            delay: 0.3,
          }}
          className={` ${playFair.className} font-semibold text-xl tracking-tighter mb-1`}
        >
          ¡Gracias por contactarte conmigo, en breve te respondere!
        </motion.div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 w-[100%] items-start mt-4 border-b pb-16 border-neutral-500"
    >
      <label
        htmlFor="email"
        className={` ${playFair.className} font-semibold text-xl tracking-tighter mb-1`}
      >
        email
      </label>
      <input
        id="email"
        type="email"
        name="email"
        className="rounded-lg bg-[#111010] border p-2 font-thin border-neutral-500"
        placeholder="escribe tu email"
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <label
        htmlFor="email"
        className={` ${playFair.className} font-semibold text-xl tracking-tighter mb-1`}
      >
        mensaje
      </label>
      <textarea
        id="message"
        name="message"
        className="rounded-lg  bg-[#111010] font-thin border p-2 border-neutral-500 w-full h-[100px]"
        placeholder="escribe tu mensaje"
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button
        type="submit"
        disabled={state.submitting}
        className={` ${playFair.className} font-semibold  tracking-tighterp p-2 border rounded-lg border-neutral-500 mt-2 hover:border-neutral-200 transition-all`}
      >
        enviar
      </button>
    </form>
  );
};

export default FormContact;
