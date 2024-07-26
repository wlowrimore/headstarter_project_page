import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Headstarter Products",
  description: "description",
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
