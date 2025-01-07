import type { Metadata } from "next";

import "./globals.css";

import Header from "./components/header";
import Footer from "./components/footer";

export const metadata: Metadata = {
  title: "Purfa Design",
  description: "Architecture and Interior Consulting Company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
