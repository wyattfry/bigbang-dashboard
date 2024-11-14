import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { Navbar } from './_components/Navbar';

export const metadata: Metadata = {
  title: "Big Bang Dashboard",
  description: "A dashboard for monitoring and maintaining Big Bang Packages",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <main className="flex min-h-screen flex-col items-center  bg-gradient-to-b from-[rgb(46,2,109)] to-[#15162c] text-white">
          <Navbar />
          <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
