import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import { Provider } from "@/components/Provider";
import { constructMetadata } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata  = constructMetadata()

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <NavBar />
      <main className='flex grainy-light flex-col min-h-[calc(100vh-3.5rem-1px)]'>
        <div className='flex-1 flex flex-col h-full'>
          <Provider>
           {children}
          </Provider>
        </div>
        <Footer />
      </main>
      <Toaster />
      </body>
    </html>
  );
}
