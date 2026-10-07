import Link from "next/link";

export default function NotFound() {
  return (
    <main className="container">
      <h1>Товар не найден</h1>
      <p style={{ margin: "12px 0 20px" }}>
        Такого товара нет в нашей витрине.
      </p>
      <Link href="/" style={{ color: "var(--accent)" }}>
        ← Вернуться в каталог
      </Link>
    </main>
  );
}
