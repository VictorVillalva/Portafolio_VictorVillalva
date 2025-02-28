import type { Metadata } from "next";
import { inter } from "@/public/ui/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portafolio personal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
