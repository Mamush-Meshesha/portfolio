import type { Metadata } from "next";
import { Bricolage_Grotesque, Oswald } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import localFont from "next/font/local";
import GrainEffect from "@/components/visualEffect/gain-effect";
import { Cursor } from "@/components/cursor/cursor";

const MainFont = Bricolage_Grotesque({ subsets: ["latin"] });
const OswaldFont = Oswald({ subsets: ["latin"], variable: "--font-oswald" });


export const metadata: Metadata = {
  title: "Mamush Meshesha",
  description: "Mamush portfoilio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          MainFont.className,
          OswaldFont.variable,
         
        )}
      >
        <GrainEffect />
        <Cursor />
        {children}
      </body>
    </html>
  );
}
