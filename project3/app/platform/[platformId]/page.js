import Link from "next/link";
import { notFound } from "next/navigation";
import GameCard from "@/components/GameCard";
import PlatformIcon from "@/components/PlatformIcon";
import { getAverageRating, getPlatform, platforms } from "@/data/games";
import styles from "./page.module.css";

export function generateStaticParams() {
  return platforms.map((platform) => ({ platformId: platform.id }));
}

export async function generateMetadata({ params }) {
  const { platformId } = await params;
  const platform = getPlatform(platformId);
  return { title: platform ? `${platform.name} — GameBase` : "Не найдено" };
}

export default async function PlatformPage({ params }) {
  const { platformId } = await params;
  const platform = getPlatform(platformId);

  if (!platform) notFound();

  const games = [...platform.games].sort((a, b) => b.rating - a.rating);
  const stats = [
    { value: platform.games.length, label: "игр в каталоге" },
    { value: getAverageRating(platform.games), label: "средняя оценка" },
    { value: platform.year, label: "год выхода" },
    { value: platform.manufacturer, label: "производитель" },
  ];

  return (
    <main className="container">
      <Link href="/" className="back">
        ‹ Все платформы
      </Link>

      <section className={styles.hero}>
        <PlatformIcon platform={platform} size="lg" />
        <h1 className={styles.name}>{platform.name}</h1>
        <p className={styles.description}>{platform.description}</p>
      </section>

      <dl className={styles.stats}>
        {stats.map((stat) => (
          <div key={stat.label} className={styles.stat}>
            <dd className={styles.statValue}>{stat.value}</dd>
            <dt className={styles.statLabel}>{stat.label}</dt>
          </div>
        ))}
      </dl>

      <h2 className="sectionTitle">Игры</h2>
      <div className="grid">
        {games.map((game) => (
          <GameCard key={game.id} game={game} platformId={platform.id} />
        ))}
      </div>
    </main>
  );
}
