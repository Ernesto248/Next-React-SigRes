import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "../components/NavBar";
import { GlobalProvider } from "@/context/GlobalContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sig-Res",
  description: "Sistema de gestion de residencias",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalProvider>
          <NavBar />
          {children}
        </GlobalProvider>
      </body>
    </html>
  );
}
