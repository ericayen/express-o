import type { Metadata } from "next";
import { Inter } from "next/font/google";
import MainNav from "./ui/nav";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Express-o",
  description: "Coffee app for aspiring coffee lovers, to help you learn about the wonderful world of coffee",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <MainNav />
        <div className="flex-grow md:overflow-y-auto">{children}</div>
      </body>
    </html>
  );
}
