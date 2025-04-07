import type { Metadata } from "next";
import {Inter, Calistoga} from 'next/font/google'
import "./globals.css";
import { twMerge } from "tailwind-merge";
import Head from "next/head";

const inter = Inter({ subsets: ['latin'], variable: "--font-sans" });
const calistoga = Calistoga({ subsets: ['latin'], variable: "--font-sarif", weight: ["400"] });



export const metadata: Metadata = {
  title: "Turja Talukder",
  description: "Created with Love by Turja Talukder",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <body className={twMerge(inter.variable, calistoga.variable, "bg-gray-900 text-white antialiased font-sans")}>
      {children}
    </body>
  </html>
  );
}
