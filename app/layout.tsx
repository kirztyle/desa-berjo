import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Head from "next/head";  // Import next/head
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Curug Nangka - Pesan Tiket Wisata",
  description: "Pesan tiket untuk mengunjungi Curug Nangka, Bogor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Head>
          <link rel="icon" href="/favicon.ico" /> {/* Menambahkan favicon */}
        </Head>
        {children}
      </body>
    </html>
  );
}
