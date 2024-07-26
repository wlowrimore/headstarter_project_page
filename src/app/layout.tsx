import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Simple Products",
  description:
    "Simple Products is a NextJS mobile responsive and dynamic product page. It features simple animations, and dynamic rendering via conditional statements.  Other features include TailwindCSS and Fake Store API",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-gray-50 min-h-screen">
      <body className={manrope.className}>
        <div className="flex justify-between max-w-7xl mx-auto">
          <div className="w-2xl flex-1">{children}</div>
        </div>
      </body>
    </html>
  );
}
