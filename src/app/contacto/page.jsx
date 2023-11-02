import AboutContact from "@/components/AboutMe/AboutContact";
import CardSocial from "@/components/CardSocial/CardSocial";
import Footer from "@/components/Footer/Footer";
import FormContact from "@/components/FormContact/FormContact";


export default function Contacto() {
  return (
    <main className="max-w-2xl  text-white px-2">
      <AboutContact />
      <section className="grid grid-cols-1 my-8 gap-4 sm:grid-cols-2">
        <CardSocial
          name="@lucasgastoncorrea"
          social={"Linkedin"}
          img={"/images/photo-of-me.jpeg"}
          link={"https://www.linkedin.com/in/lucasgastoncorrea/"}
        />
        <CardSocial
          name="@lucasgrav"
          social={"GitHub"}
          img={"/images/logo-github.png"}
          link={"https://github.com/lucasgrav"}
        />
      </section>
      <FormContact />
      
      <Footer />
    </main>
  );
}
