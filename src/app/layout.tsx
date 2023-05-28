import Header from "@/components/header/header";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "../components/footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nedim Malicbegovic - Front-end developer",
  description: "Nedim Malicbegovic Front-end Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} text-lg bg-slate-800 text-slate-100 py-8 md:px-[25%] px-[10%] selection:bg-purple-700 selection:text-cyan-200`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
