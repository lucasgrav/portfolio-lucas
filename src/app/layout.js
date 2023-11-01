import { GeistSans } from "geist/font";
import "./globals.css";
import NavBar from "@/components/NavBar/NavBar";

export const metadata = {
  title: "Lucas Correa",
  description: "Portfolio de Lucas Correa",

};



export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-[#111010] flex justify-center ">
      <body
        className={`${GeistSans.className} max-w-2xl mb-40 flex flex-col px-4 mt-8 lg:mx-auto`}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
