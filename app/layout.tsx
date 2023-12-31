import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Sidebar from "./components/Sidebar";
import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="grid grid-cols-4 gap-4">
            <div className="col-span-1 bg-gray-200 p-4">
              <Sidebar />
            </div>
            <div className="col-span-3 bg-white p-4">{children}</div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
