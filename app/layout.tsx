import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

import { MainLayout } from "@/src";
import { ReduxPorvider } from "@/src/redux/ReduxPorvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "User Data CRUD",
  description: "Generated by Danfelogar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative flex overflow-x-hidden`}>
        <ReduxPorvider>
          <MainLayout>{children}</MainLayout>
        </ReduxPorvider>
      </body>
    </html>
  );
}
