import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Navbar2 from "@/components/Navbar2";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cake-Inbox",
  description: "Cake Selling Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <ClerkProvider
    // publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
    <html lang="en">
      <body className={inter.className}>
        <div className="">
          <header className="">
            <Navbar />
          </header>
          <Navbar2 />
          <main>{children}</main>
        </div>
      </body>
    </html>
    // </ClerkProvider>
  );
}
