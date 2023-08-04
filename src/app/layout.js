import GlobalProvider from "@/context/GlobalContext";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Stephane's place",
  description:
    "I'm a professional with 25 years in the field of IT and Telecom.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <body className={inter.className + " " + "bg-white/50 text-black/80 dark:bg-black dark:text-white/80"}> */}
      <body
        className={
          inter.className +
          " " +
          " dark:text-white/80 bg-gradient-to-b from-blue-900 to-blue-600"
        }
      >
        {children}
        {/* <Navbar /> */}
      </body>
    </html>
  );
}
