import Link from "next/link";
import GameCard from "@/components/GameCard";
import PlatformIcon from "@/components/PlatformIcon";
import { getAllGames, getAverageRating, platforms, sorts } from "@/data/games";
import styles from "./page.module.css";

export default async function Home({ searchParams }) {
  const { sort } = await searchParams;
  const sortKey = sorts[sort] ? sort : "rating";
  const games = getAllGames().sort(sorts[sortKey].compare);

  return (
    <main>
      <section className={`container ${styles.hero}`}>
        <h1 className={styles.headline}>
          Лучшие игры.
          <br />
          <span className={styles.gradient}>На любой платформе.</span>
        </h1>
        <p className={styles.lead}>
          {games.length} игр с высшими оценками критиков на {platforms.length}{" "}
          платформах.
        </p>
      </section>

      <section className="container">
        <h2 className="sectionTitle">Платформы</h2>
        <div className={styles.platforms}>
          {platforms.map((platform) => (
            <Link
              key={platform.id}
              href={`/platform/${platform.id}`}
              className={styles.platform}
            >
              <PlatformIcon platform={platform} />
              <div className={styles.platformText}>
                <span className={styles.platformName}>{platform.name}</span>
                <span className={styles.platformMeta}>
                  {platform.games.length} игры · ср. оценка{" "}
                  {getAverageRating(platform.games)}
                </span>
              </div>
              <span className={styles.chevron}>›</span>
            </Link>
          ))}
        </div>

        <div className={styles.allHeader}>
          <h2 className="sectionTitle">Все игры</h2>
          <nav className={styles.segmented}>
            {Object.entries(sorts).map(([key, { label }]) => (
              <Link
                key={key}
                href={`/?sort=${key}`}
                scroll={false}
                className={key === sortKey ? styles.segmentActive : styles.segment}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="grid">
          {games.map((game) => (
            <GameCard
              key={`${game.platformId}-${game.id}`}
              game={game}
              platformId={game.platformId}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
