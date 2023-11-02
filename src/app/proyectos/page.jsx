import AboutProjects from "@/components/AboutMe/AboutProjects";
import CardProject from "@/components/CardProject/CardProject";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <main className="max-w-2xl  text-white px-2">
      <AboutProjects />
      <section className="my-8">
        <CardProject
          name="Pig Commander"
          description="Aplicacion web de finanzas | 8 desarrolladores"
          img="pigcommander.png"
          front="React, Next.js, Redux Toolkit, TailwindCSS, ChartJS y Tremor."
          back="Node, Express, PostgreSQL, Sequelize, Swagger, Passport, JWT, Nodemailer, MercadoPago API y
          Cloudinary."
          video="https://www.youtube.com/watch?v=3msHJjapx7o"
          repo="https://github.com/stars/lucasgrav/lists/pf-henry-js"
        />
        <CardProject
          name="Simple Store"
          description="Ecommerce ficticio"
          img="simplestore.png"
          front="React, Vite, Tailwind, Redux, Framer-Motion, Fake-Store API, Formspree, Vitest, y Testing-Library"
          deploy="https://simple-store-lucascorrea.vercel.app/"
          repo="https://github.com/lucasgrav/simple-store-app"
        />
        <CardProject
          name="Tic Tac Toe"
          description="Juego"
          img="tictactoe.png"
          front="React, Vite, y CSS Modules"
          deploy="https://tictactoe-lucascorrea.vercel.app/"
          video="https://www.linkedin.com/posts/lucasgastoncorrea_frontend-react-javascript-activity-7106784654556344320-aNtd?utm_source=share&utm_medium=member_desktop"
          repo="https://github.com/lucasgrav/tic-tac-toe"
        />
        <CardProject
          name="City Weather"
          description="Aplicacion web del clima"
          img="cityweather.png"
          front="React, Vite, CSS Modules, y Open Weather API"
          deploy="https://cityweather-lucascorrea.vercel.app/"
          video="https://www.linkedin.com/posts/lucasgastoncorrea_frontend-front-react-activity-7103383409804128257-_EUk?utm_source=share&utm_medium=member_desktop"
          repo="https://github.com/lucasgrav/weather-app"
        />
      </section>
      <Footer />
    </main>
  );
}
