import Link from "next/link";

export default function NotFound() {
  return (
    <main className="container" style={{ textAlign: "center", paddingTop: 120 }}>
      <h1 style={{ fontSize: "3rem", letterSpacing: "-0.03em" }}>
        Страница не найдена.
      </h1>
      <p style={{ margin: "12px 0 24px", color: "var(--muted)" }}>
        Возможно, игру убрали из каталога или в адресе опечатка.
      </p>
      <Link href="/" className="back">
        На главную ›
      </Link>
    </main>
  );
}
