import { Geist } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "cyrillic"],
});

export const metadata = {
  title: "Витрина",
  description: "Витрина интернет-магазина на Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru" className={geistSans.variable}>
      <body>
        <header className="header">
          <div className="container">
            <Link href="/" className="logo">
              Витрина
            </Link>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
