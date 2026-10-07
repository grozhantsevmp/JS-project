import { Inter } from "next/font/google";
import Link from "next/link";
import { platforms } from "@/data/games";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
});

export const metadata = {
  title: "GameBase",
  description: "Каталог видеоигр по платформам на Next.js",
};

export default function RootLayout({ children }) {
  const year = new Date().getFullYear();

  return (
    <html lang="ru" className={inter.variable}>
      <body>
        <header className="nav">
          <div className="container">
            <Link href="/" className="logo">
              GameBase
            </Link>
            <ul className="navLinks">
              {platforms.map((platform) => (
                <li key={platform.id}>
                  <Link href={`/platform/${platform.id}`}>{platform.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </header>
        {children}
        <footer className="footer">
          <div className="container">
            <div className="footerColumns">
              <div>
                <h3 className="footerTitle">Платформы</h3>
                <ul className="footerLinks">
                  {platforms.map((platform) => (
                    <li key={platform.id}>
                      <Link href={`/platform/${platform.id}`}>
                        {platform.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="footerTitle">Каталог</h3>
                <ul className="footerLinks">
                  <li>
                    <Link href="/?sort=rating">Лучшие по оценке</Link>
                  </li>
                  <li>
                    <Link href="/?sort=year">Новинки</Link>
                  </li>
                  <li>
                    <Link href="/?sort=title">От A до Я</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="footerTitle">О проекте</h3>
                <ul className="footerLinks">
                  <li>Учебный проект на Next.js</li>
                  <li>Оценки по данным Metacritic</li>
                </ul>
              </div>
            </div>

            <div className="footerBottom">
              <p>© {year} GameBase. Все права защищены.</p>
              <p>
                Названия игр, обложки и логотипы принадлежат их
                правообладателям.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
