import AboutCertificates from "@/components/AboutMe/AboutCertificates";
import AboutMe from "@/components/AboutMe/AboutMe";
import AboutMeSecond from "@/components/AboutMe/AboutMeSecond";
import CardCertificate from "@/components/CardCertificate/CardCertificate";
import CardSocial from "@/components/CardSocial/CardSocial";
import Footer from "@/components/Footer/Footer";
import ImagesGrid from "@/components/ImagesGrid/ImagesGrid";
import TechStack from "@/components/TechStack/TechStack";

export default function Home() {
  return (
    <main className="max-w-2xl  text-white px-2">
      <AboutMe />
      <ImagesGrid />
      <AboutMeSecond />
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

      <AboutCertificates />

      <section className="my-8 flex flex-col gap-4 ">
        <CardCertificate
          academy={"Henry - Bootcamp"}
          about={"Desarrollo Full Stack"}
          time={"800"}
          month={"Mayo - Agosto 2023"}
          link={
            "https://certificates.soyhenry.com/new-cert?id=35a905e847fd2d71fe8554b60bd10c9b2bfc810c78f7fa58314c53aeb1108ec1"
          }
          img={"/images/henry-logo.jpg"}
        />
        <CardCertificate
          academy={"Coder House"}
          about={"JavaScript"}
          time={"39"}
          month={"Octubre 2022"}
          link={
            "https://www.coderhouse.com/certificados/636fa8ab9dfea6000e093180"
          }
          img={"/images/coderhouse-logo.png"}
        />
        <CardCertificate
          academy={"Coder House"}
          about={"Desarrollo Web"}
          time={"43"}
          month={"Julio 2022"}
          link={
            "https://www.coderhouse.com/certificados/62dc19572ac4fc001af17834"
          }
          img={"/images/coderhouse-logo.png"}
        />
      </section>
      <TechStack />
      <Footer />
    </main>
  );
}
