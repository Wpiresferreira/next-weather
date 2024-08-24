import type { Metadata } from "next";
import { Laila } from "next/font/google";
import "./globals.css";

const laila = Laila({ subsets: ["latin"] ,  weight: "500"});

export const metadata: Metadata = {
  title: "Weather",
  description: "App created by Wagner Ferreira",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={laila.className}>{children}</body>
    </html>
  );
}
