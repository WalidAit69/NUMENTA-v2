import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./style.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ModalProvider } from "@/components/modalProvide";
import { ToasterProvider } from "@/components/ToasterProvider";
import { CrispProvider } from "@/components/crisp/CrispProvider";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Midjourney",
  description: "Ai Platform",
  
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link rel="shortcut icon" href="/logo.svg" type="image/x-icon" />
        </head>
        <CrispProvider/>
        <body>
          <ModalProvider />
          <ToasterProvider/>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
