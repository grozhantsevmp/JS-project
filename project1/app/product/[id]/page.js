import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { formatPrice, getAllProducts, getProductById } from "@/data/products";
import styles from "./page.module.css";

export function generateStaticParams() {
  return getAllProducts().map((product) => ({ id: product.id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const product = getProductById(id);
  return { title: product ? `${product.name} — Витрина` : "Товар не найден" };
}

export default async function ProductPage({ params }) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  return (
    <main className="container">
      <Link href="/" className={styles.back}>
        ← Назад к каталогу
      </Link>

      <article className={styles.product}>
        <div className={styles.imageWrap}>
          <Image
            src={product.image}
            alt={product.name}
            width={400}
            height={400}
            className={styles.image}
            priority
          />
        </div>

        <div className={styles.info}>
          <p className={styles.category}>{product.category}</p>
          <h1 className={styles.name}>{product.name}</h1>
          <p className={styles.price}>{formatPrice(product.price)}</p>
          <p className={styles.description}>{product.description}</p>

          <h2 className={styles.specsTitle}>Характеристики</h2>
          <dl className={styles.specs}>
            {product.specs.map((spec) => (
              <div key={spec.name} className={styles.specRow}>
                <dt>{spec.name}</dt>
                <dd>{spec.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </article>
    </main>
  );
}
