import Image from "next/image";
import Link from "next/link";
import { formatPrice } from "@/data/products";
import styles from "./ProductCard.module.css";

export default function ProductCard({ product }) {
  return (
    <Link href={`/product/${product.id}`} className={styles.card}>
      <div className={styles.imageWrap}>
        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={400}
          className={styles.image}
        />
      </div>
      <div className={styles.body}>
        <h2 className={styles.name}>{product.name}</h2>
        <p className={styles.price}>{formatPrice(product.price)}</p>
      </div>
    </Link>
  );
}
