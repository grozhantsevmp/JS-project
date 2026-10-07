import ProductCard from "@/components/ProductCard";
import { getAllProducts } from "@/data/products";
import styles from "./page.module.css";

export default function Home() {
  const products = getAllProducts();

  return (
    <main className="container">
      <h1 className={styles.title}>Каталог товаров</h1>
      <div className={styles.grid}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
