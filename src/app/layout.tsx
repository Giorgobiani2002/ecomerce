'use client';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/__molecules/Header';
import Footer from '@/components/__molecules/Footer';
import { disableNavAndFooter } from '@/commons/services/disableNavAndFooter';
import { usePathname } from 'next/navigation';
import Navbar from '@/components/__atoms/NavBar';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const path = usePathname();
  return (
    <html lang="en">
      <body className="w-full flex flex-col items-center  ">
        {!disableNavAndFooter.includes(path) && <Header />}
        

        <></>
        {children}
        {!disableNavAndFooter.includes(path) && <Footer />}
        
      </body>
    </html>
  );
}
