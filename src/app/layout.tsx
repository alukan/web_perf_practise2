import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from './Header';
import Footer from './Footer';
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Crispy Kitchen - Bootstrap 5 HTML Template",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* <Header /> */}
      <body className={inter.className}>{children}</body>
      {/* <Footer/> */}
    </>
  );
}
